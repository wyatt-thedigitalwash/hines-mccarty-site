/**
 * The search-map gate, D66. Reads src/lib/search-map.ts, before the build.
 *
 * WHAT IT ENFORCES. Pages compete in search when two of them go after the same
 * search with the same intent. Every page that is meant to be found has one
 * row in the map naming that search, and this gate holds the rows to it:
 *   S1  every href is unique and resolves to a page in a registry
 *   S2  no two rows go after the same search (same subject words, same intent
 *       family); a hire page and a blog post on one charge are fine
 *   S3  only hire and navigate rows may use hire words ("lawyer", "attorney");
 *       a blog post that targets "sexual battery lawyer Tampa" fails here
 *   S4  every row except proof has a primary query or a note saying why not
 *   S5  siblings are declared on both rows and both resolve
 *   S6  every charge page has a row, and its topic appears in its H1 and its
 *       meta title (the data the page renders from). Not the lead: the DUI lead
 *       opens with the 10-day license deadline, which is worth more to the
 *       reader than the word "DUI" in that sentence.
 * check:seo then reads the built HTML for the rest: titles, descriptions,
 * links between siblings, and repeated text between pages.
 */
import { charges, chargeHref, guides, guideHref, injuryPages, injuryHref, silos, tools } from "../src/lib/site.ts";
import {
  HIRE_INTENTS,
  HIRE_WORDS,
  NOT_TARGETED,
  intentFamily,
  searchMap,
  subjectWords,
  type SearchTarget,
} from "../src/lib/search-map.ts";

let failed = false;
const fail = (m: string) => { console.error(`  FAIL  ${m}`); failed = true; };

/** Every rule as a function, so the self-tests run the same code the pages do. */
function audit(rows: SearchTarget[], known: Set<string>): string[] {
  const out: string[] = [];
  const byHref = new Map<string, SearchTarget>();
  // S1
  for (const r of rows) {
    if (byHref.has(r.href)) out.push(`S1 ${r.href} has two rows`);
    byHref.set(r.href, r);
    if (!known.has(r.href)) out.push(`S1 ${r.href} is not a page in any registry`);
    if (NOT_TARGETED[r.href]) out.push(`S1 ${r.href} is both a row and in NOT_TARGETED`);
  }
  // S2
  const seen = new Map<string, string>();
  for (const r of rows) {
    if (!r.primary) continue;
    const key = `${intentFamily(r.intent)}|${subjectWords(r.primary)}`;
    const other = seen.get(key);
    if (other)
      out.push(
        `S2 ${r.href} and ${other} go after the same search ("${r.primary}" vs ` +
          `"${byHref.get(other)!.primary}"). Give one of them a different primary, ` +
          `or merge them.`,
      );
    else seen.set(key, r.href);
  }
  for (const r of rows) {
    // S3
    if (r.primary && !HIRE_INTENTS.includes(r.intent) && HIRE_WORDS.test(r.primary))
      out.push(
        `S3 ${r.href} is a ${r.intent} page but its primary "${r.primary}" is a hire ` +
          `search. That search belongs to the service page; target the question instead.`,
      );
    if ((r.kind === "blog" || r.kind === "insight" || r.kind === "guide") && HIRE_INTENTS.includes(r.intent))
      out.push(`S3 ${r.href} is a ${r.kind} with intent "${r.intent}"; only service pages are hire pages.`);
    if (r.kind === "result" && r.intent !== "proof")
      out.push(`S3 ${r.href} is a case result with intent "${r.intent}"; results are proof.`);
    // S4
    if (!r.primary && r.intent !== "proof" && !r.note)
      out.push(`S4 ${r.href} has no primary query and no note saying why`);
    if (!r.topic.trim()) out.push(`S4 ${r.href} has no topic`);
    // S5
    for (const s of r.siblings ?? []) {
      const sib = byHref.get(s);
      if (!sib) out.push(`S5 ${r.href} names sibling ${s}, which has no row`);
      else if (!(sib.siblings ?? []).includes(r.href))
        out.push(`S5 ${r.href} names ${s} as a sibling, but ${s} does not name it back`);
    }
  }
  return out;
}

// ---------------------------------------------------------------- self-tests
console.log("Search-map self-tests (planted violations must fire)");
{
  const known = new Set(["/a", "/b", "/blog/x"]);
  const base = (o: Partial<SearchTarget>): SearchTarget => ({
    href: "/a", kind: "charge", intent: "hire", primary: "sexual battery lawyer tampa",
    topic: "sexual battery", source: "test", ...o,
  });
  const t = (name: string, rows: SearchTarget[], rule: string | null) => {
    const hits = audit(rows, known);
    const ok = rule === null ? hits.length === 0 : hits.some((h) => h.startsWith(rule));
    if (ok) console.log(`  ok    ${name}`);
    else fail(`SELF-TEST: ${name} (got: ${hits.join("; ") || "nothing"})`);
  };
  t("a hire page and a blog post on the same charge do not compete",
    [base({}), base({ href: "/blog/x", kind: "blog", intent: "answer", primary: "sexual battery florida" })], null);
  t("two hire pages on the same search fire S2, even worded differently",
    [base({}), base({ href: "/b", primary: "Tampa sexual battery attorneys" })], "S2");
  t("a blog post targeting the hire search fires S3",
    [base({}), base({ href: "/blog/x", kind: "blog", intent: "answer", primary: "best sexual battery lawyer" })], "S3");
  t("a blog post marked as a hire page fires S3",
    [base({ href: "/blog/x", kind: "blog", intent: "hire", primary: "how long to file" })], "S3");
  t("a one-sided sibling fires S5",
    [base({ siblings: ["/b"] }), base({ href: "/b", primary: "federal money laundering" })], "S5");
  t("a row for a page that does not exist fires S1", [base({ href: "/nope" })], "S1");
  t("a missing primary with no note fires S4", [base({ primary: null })], "S4");
  t("a case result needs no primary", [base({ kind: "result", intent: "proof", primary: null })], null);
}

// ---------------------------------------------------------------- the map
console.log("\nThe search map");
const known = new Set<string>([
  "/",
  ...silos.map((s) => s.href),
  "/personal-injury",
  ...charges.map(chargeHref),
  ...guides.map(guideHref),
  ...injuryPages.map(injuryHref),
  ...tools.map((t) => t.href),
  "/attorneys/lily-mccarty", "/attorneys/maria-pavlidis", "/attorneys/david-hines", "/attorneys/colton-trina",
]);
const hits = audit(searchMap, known);
for (const h of hits) fail(h);
if (!hits.length)
  console.log(
    `  ok    ${searchMap.length} rows: unique hrefs, no two after the same search, ` +
      `hire words only on hire pages, siblings declared both ways`,
  );

// S6. Charge pages: every one has a row, and the data says what it is about.
console.log("\nS6: every charge page has a row and names its topic");
{
  const rows = new Map(searchMap.map((r) => [r.href, r]));
  let ok = 0;
  for (const c of charges) {
    const href = chargeHref(c);
    const r = rows.get(href);
    if (!r) { fail(`S6 ${href} has no row in the search map`); continue; }
    const topic = r.topic.toLowerCase();
    const missing = [
      ["H1", c.title],
      ["meta title", c.metaTitle],
    ].filter(([, v]) => v && !v.toLowerCase().includes(topic)).map(([k]) => k);
    if (missing.length) fail(`S6 ${href}: topic "${r.topic}" is not in its ${missing.join(", ")}`);
    else ok++;
  }
  if (ok === charges.length) console.log(`  ok    all ${ok} charge pages name their topic in the H1 and meta title`);
}

const noPrimary = searchMap.filter((r) => !r.primary && r.intent !== "proof");
if (noPrimary.length)
  console.log(
    `\n  ..    ${noPrimary.length} row(s) have no primary query because their brief recorded none: ` +
      noPrimary.map((r) => r.href).join(", "),
  );
console.log(
  "\n  ..    KNOWN LIMITS. S2 compares subject words, so two searches that mean the " +
    "same thing in different words (\"DUI\" and \"drunk driving\") are not caught; " +
    "that is what Search Console is for after launch. The map records intent; it " +
    "cannot tell whether the page's content actually serves it.",
);
console.log(failed ? "\nSearch-map check FAILED." : "\nSearch-map check passed.");
process.exit(failed ? 1 : 0);
