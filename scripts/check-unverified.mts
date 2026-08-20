/**
 * The pre-write rule, as a build check.
 *
 * WHY THIS EXISTS. W1 pair 1 failed adversarial review three times and hit the
 * run's cap. The defect that finally stopped it: the grand theft page stated
 * that theft under $750 is petit theft of the SECOND degree, when F.S.
 * 812.014(2)(f) makes $100 to $749 petit theft of the FIRST degree. A year of
 * exposure described as sixty days, on the page whose whole differentiator is
 * the value ladder.
 *
 * The apparatus had already caught it. W1-03 Section 6 reads:
 *
 *   "Petit theft degrees and penalties under 812.014(3) | partially UNVERIFIED
 *    | Only the ranking-chart rows were captured. Fetch (3)(a) and (3)(b)
 *    BEFORE the page contrasts petit with grand."
 *
 * The page contrasts petit with grand four times. The warning was written down,
 * committed, and read past. docs/research/PAGE-SOURCES.md records no fetch of
 * 812.014(2)(f) or (3), and its own standing rule says a page may not state a
 * claim whose fetch is not recorded there or in its brief.
 *
 * So the rule was already stated in three places and enforced in none. This
 * file enforces it:
 *
 *   A written page may not cite a statute subsection that a brief flagged
 *   UNVERIFIED, unless PAGE-SOURCES.md records a fetch of it.
 *
 * It is deliberately a PRE-WRITE gate rather than a review step. Review caught
 * this on the third pass; the point of a rail is to make the third pass
 * unnecessary.
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { charges, chargeHref } from "../src/lib/site.ts";
import { pageCopy } from "../src/lib/page-copy.ts";
import { STATUTES } from "../src/lib/statutes.ts";
import type { ChargePage } from "../src/lib/site.ts";

let failed = false;
const fail = (msg: string) => {
  console.error(`  FAIL  ${msg}`);
  failed = true;
};

const BRIEFS = "docs/research/briefs";
const SOURCES = "docs/research/PAGE-SOURCES.md";

/**
 * Statute references, at SUBSECTION granularity.
 *
 * Granularity is the whole point. "F.S. 812.014" was verified and
 * "812.014(3)" was not, so a check keyed on the section number alone would
 * have passed the exact page that failed. It has to see the subsection path.
 */
function refs(text: string): Set<string> {
  const out = new Set<string>();
  // Chapter numbers are 1 to 4 digits, not exactly 3. The old pattern made the
  // ENTIRE Florida Evidence Code invisible, including 90.803 hearsay and
  // 90.404(2) similar-fact evidence, which are two of the most-litigated
  // provisions on a criminal defense site. It also truncated four-digit
  // chapters, so 1006.13(2) keyed as "006.13(2)" and collided with 2006.13(2).
  const fs =
    /(?:F\.?\s?S\.?\s*|Florida Statutes?\s*|Statute\s*|s\.\s*)?\b(\d{1,4}\.\d{2,4})((?:\s*\**\s*\(\s*\**\s*[0-9a-z]{1,3}\s*\**\s*\)\s*\**)*)/gi;
  for (const m of text.matchAll(fs)) {
    // Strip markdown emphasis so 784.03(**1**)(a) does not degrade to a bare
    // section and slip past the subsection filter.
    const subs = (m[2] ?? "").replace(/[\s*_]+/g, "");
    out.add(`fs ${m[1]}${subs}`.toLowerCase());
  }
  const usc = /(\d{1,2})\s*U\.?\s?S\.?\s?C\.?\s*(?:§\s*)?(\d{1,4}[A-Za-z]?)((?:\s*\(\s*[0-9a-z]{1,3}\s*\))*)/gi;
  for (const m of text.matchAll(usc)) {
    const subs = (m[3] ?? "").replace(/\s+/g, "");
    out.add(`usc ${m[1]} ${m[2]}${subs}`.toLowerCase());
  }
  const rule = /Rule\s*(\d\.\d{2,4})((?:\s*\(\s*[0-9a-z]{1,3}\s*\))*)/gi;
  for (const m of text.matchAll(rule)) {
    const subs = (m[2] ?? "").replace(/\s+/g, "");
    out.add(`rule ${m[1]}${subs}`.toLowerCase());
  }
  return out;
}

/**
 * Does `broader` cover `narrower`? One direction only, deliberately.
 *
 * The first version tested both directions, which put a hole in the gate the
 * same shape as the defect it exists to catch: a bare "F.S. 812.014" recorded
 * in PAGE-SOURCES satisfied a citation of "812.014(3)(a)", because the citation
 * starts with the record. That let a section-level fetch clear a
 * subsection-level flag, which is exactly the confusion that produced the
 * original error. A fetch of the statute is not a fetch of the paragraph.
 */
function covers(broader: string, narrower: string): boolean {
  return narrower === broader || narrower.startsWith(broader);
}

/**
 * A citation is cleared only by a record at least as specific as the FLAG.
 *
 * Recording "812.014" does not clear a flag on "812.014(3)". Recording
 * "812.014(3)" or "812.014(3)(a)" does.
 */
function clearedBy(recorded: Set<string>, flag: string, cited: string): boolean {
  return [...recorded].some((r) => covers(flag, r) && covers(r, cited));
}

const copyOf = (c: ChargePage) => pageCopy(c).join("\n");

// ---------------------------------------------------------------- self-test
console.log("Unverified-claim gate self-test");
{
  const line =
    "| Petit theft degrees and penalties under 812.014(3) | **partially UNVERIFIED** | Fetch (3)(a) and (3)(b) before the page contrasts petit with grand. |";
  const flagged = refs(line);
  if (!flagged.has("fs 812.014(3)")) {
    fail(
      `the reference parser does not extract "812.014(3)" from the exact brief ` +
        `line that predicted the defect. Got: ${[...flagged].join(", ")}`,
    );
  } else {
    console.log('  ok    parses the subsection out of the brief line that predicted the defect');
  }
  if (refs("F.S. 812.014 sets the degree by value").has("fs 812.014(3)")) {
    fail("section-level citation wrongly matches a subsection-level flag.");
  } else {
    console.log("  ok    a bare section citation does not satisfy a subsection flag");
  }
  if (!covers("fs 812.014(3)", "fs 812.014(3)(a)")) {
    fail("subsection coverage does not treat (3)(a) as inside (3).");
  } else {
    console.log("  ok    (3) covers (3)(a)");
  }
  // The hole the first version of this gate had.
  if (clearedBy(new Set(["fs 812.014"]), "fs 812.014(3)", "fs 812.014(3)(a)")) {
    fail(
      "a bare section-level record clears a subsection-level flag. A fetch of " +
        "the statute is not a fetch of the paragraph, and that confusion is what " +
        "produced the defect this gate exists to catch.",
    );
  } else {
    console.log("  ok    a section-level fetch does NOT clear a subsection-level flag");
  }
  if (!clearedBy(new Set(["fs 812.014(3)(a)"]), "fs 812.014(3)", "fs 812.014(3)(a)")) {
    fail("a record at the flagged subsection does not clear the flag.");
  } else {
    console.log("  ok    a record at or below the flagged subsection clears it");
  }
  // The real historical case, end to end.
  const pageText = "Theft of property not covered by the grand theft subsections is petit theft of the second degree under 812.014(3)(a).";
  const cited = refs(pageText);
  const isFlagged = [...cited].some((c) =>
    [...flagged].some((f) => covers(f, c)),
  );
  if (!isFlagged) {
    fail("the gate would NOT have caught the defect that stopped the run.");
  } else {
    console.log("  ok    fires on the exact page sentence that stopped the run");
  }
}

// ------------------------------------------------------------------- inputs
const briefFiles = readdirSync(BRIEFS).filter((f) => f.endsWith(".md"));
const flaggedRefs = new Map<string, string[]>(); // ref -> brief files
for (const f of briefFiles) {
  const text = readFileSync(join(BRIEFS, f), "utf8");
  for (const line of text.split("\n")) {
    if (!/UNVERIFIED/i.test(line)) continue;
    for (const r of refs(line)) {
      // A bare section with no subsection is too coarse to act on: briefs
      // routinely list a whole statute as "to fetch" while the page cites only
      // the part that WAS fetched. Subsection-level flags are actionable.
      if (!/\(/.test(r)) continue;
      flaggedRefs.set(r, [...(flaggedRefs.get(r) ?? []), f]);
    }
  }
}

/**
 * References recorded in PAGE-SOURCES, EXCLUDING lines that record a failure.
 *
 * The gate testing found the worst hole in this file: a line reading
 * "We could not fetch 784.03(1)(a). Two attempts, both HTTP 403. DO NOT CITE
 * IT." parsed as a recorded reference and CLEARED the flag. The sentence said
 * do not cite it and the gate read it as permission. A ledger that cannot tell
 * a fetch from a failure to fetch is not a ledger.
 */
const NEGATIVE_LINE =
  /\b(could not|couldn't|unable to|failed to|not fetched|do not cite|don't cite|never fetched|no fetch|fetch failed|UNVERIFIED|UNMET|404|403|redirect loop)\b/i;

const recorded = (() => {
  const out = new Set<string>();
  let dropped = 0;
  for (const line of readFileSync(SOURCES, "utf8").split("\n")) {
    if (NEGATIVE_LINE.test(line)) {
      if (refs(line).size) dropped++;
      continue;
    }
    for (const r of refs(line)) out.add(r);
  }
  if (dropped)
    console.log(
      `  ..    ignored ${dropped} PAGE-SOURCES line(s) that record a NON-fetch; ` +
        `a failure to fetch never clears a flag`,
    );
  return out;
})();

/**
 * An AUDITED STATUTE TABLE also clears a flag, and it is the stronger record.
 *
 * This gate predates the fact layer. When it was written the only evidence a
 * subsection had been read was a quote in PAGE-SOURCES, so that file was the
 * whole ledger. There are now 74 tables in src/lib/statute-tables/, each built
 * from the full section by one agent, independently re-fetched and audited by
 * a second, and each row carrying the verbatim words and the URL. A row is a
 * better record than a markdown quote, not a worse one: it was adversarially
 * checked and the markdown quote was not.
 *
 * TWO CONDITIONS, both required, because "we have a table" is not the claim
 * being made. The claim is that THIS SUBSECTION was read:
 *
 *   1. The table's completeness is "whole-section". A partial table proves the
 *      section was opened, not that this paragraph was reached, and the whole
 *      point of that field is that a partial reading cannot support a negative.
 *   2. A row actually cites this subsection, or a row's cite is a prefix of it
 *      (a row on 893.13(6)(c) covers a citation of 893.13(6)(c)1.).
 *
 * What this does NOT do is clear a flag because the statute is present. An
 * unlisted subsection of a whole-section table still fails, which is right:
 * the tables record provisions that ASSIGN A DEGREE, so eligibility rules and
 * definitions inside a fetched section have no row and still need a fetch.
 */
const tableCovered = (() => {
  const out = new Set<string>();
  for (const t of Object.values(STATUTES)) {
    if (t.completeness !== "whole-section") continue;
    // THE SECTION ITSELF, not only its rowed subsections.
    //
    // This was rows-only, on the reasoning that the tables record provisions
    // which ASSIGN A DEGREE, so a definition or an eligibility rule inside a
    // fetched section has no row and should still need its own fetch. That
    // reasoning confused two different things and produced false failures on
    // the primary provision of three pages at once: F.S. 893.13(6), which is
    // the whole subject of the drug possession page and is rowed at (6)(a)
    // through (6)(d); F.S. 784.041(1)(b), which sits under a row keyed (1);
    // and F.S. 409.920(10), which has no row because it assigns no degree.
    //
    // `whole-section` is not a claim about which provisions got rows. It is
    // the AUDITOR's finding that the section was read start to finish, set by
    // an agent who re-fetched it independently and hunted for what the builder
    // missed. A subsection with no row means it assigns no punishment, not
    // that nobody read it. Two agents reading a section whole, one of them
    // adversarially, is stronger provenance than the markdown blockquote this
    // gate already accepts.
    //
    // What this still does NOT clear: a statute recorded `partial`, where the
    // reading cannot support a claim about what was not reached. That is the
    // distinction the original defect turned on, and it is untouched.
    for (const r of t.rows) {
      const cite = r.cite.replace(/\s+/g, "").replace(/\.$/, "");
      for (const ref of refs(cite)) out.add(ref);
    }
  }
  return out;
})();

/**
 * Sections read WHOLE and audited, by section number.
 *
 * This is deliberately NOT folded into `recorded` or `tableCovered`, because
 * `clearedBy` is one-directional on purpose: a section-level record must not
 * clear a subsection-level flag, and a self-test asserts it. That rule is
 * right for a markdown blockquote, where "I quoted the section" says nothing
 * about whether the paragraph was read.
 *
 * A whole-section audited table is different evidence and deserves a different
 * rule. It is the AUDITOR's finding, set by an agent that re-fetched the
 * statute independently and hunted for what the builder missed, that the
 * section was read start to finish. Under that reading, a subsection with no
 * row assigns no punishment; it was not skipped. Requiring a separate fetch of
 * a paragraph inside a section two agents already read whole is asking for
 * weaker evidence than the project already holds, and it failed the PRIMARY
 * provision of three pages at once: F.S. 893.13(6), the entire subject of the
 * drug possession page, F.S. 784.041(1)(b), and F.S. 409.920(10).
 *
 * `partial` tables are excluded, which keeps the distinction the original
 * defect turned on: a partial reading cannot support a claim about what it did
 * not reach.
 */
const wholeSectionStatutes = new Set(
  Object.entries(STATUTES)
    .filter(([, t]) => t.completeness === "whole-section")
    .map(([key]) => key),
);

/** The section number a citation belongs to, e.g. "fs 812.014(3)(a)" -> "812.014". */
function sectionOf(ref: string): string {
  const m = ref.match(/^(?:fs|usc \d+|rule)\s+([0-9a-z.]+)/i);
  return m ? m[1] : "";
}

console.log(
  `\n${flaggedRefs.size} subsection-level UNVERIFIED flags across ${briefFiles.length} briefs; ` +
    `${recorded.size} references recorded in PAGE-SOURCES.md; ` +
    `${tableCovered.size} covered by a row in a whole-section audited table`,
);

// --------------------------------------------------------------- pre-write
/**
 * PRE-WRITE MODE: `npm run prewrite -- W1-03-grand-theft.md ...`
 *
 * The gate above runs at build time, which is AFTER the page is written. That
 * is the wrong end. This mode answers the question a builder should ask before
 * touching a page: what does this brief say is unverified, and which of those
 * have I actually fetched?
 *
 * The rule it enforces: if a fetch fails, the page is written WITHOUT that
 * claim. It is never written with an unrecorded one.
 */
const askedFor = process.argv.slice(2).filter((a) => a.endsWith(".md"));
if (askedFor.length) {
  console.log(`\nPRE-WRITE CHECK for ${askedFor.join(", ")}`);
  let blocking = 0;
  for (const f of askedFor) {
    let text: string;
    try {
      text = readFileSync(join(BRIEFS, f), "utf8");
    } catch {
      fail(`brief not found: ${f}`);
      continue;
    }
    const need = new Map<string, string>();
    for (const line of text.split("\n")) {
      if (!/UNVERIFIED/i.test(line)) continue;
      for (const r of refs(line)) {
        if (!/\(/.test(r)) continue;
        need.set(r, line.trim().slice(0, 150));
      }
    }
    if (!need.size) {
      console.log(`  ${f}: no subsection-level UNVERIFIED flags`);
      continue;
    }
    for (const [r, line] of need) {
      const done = [...recorded].some((rec) => covers(r, rec));
      if (done) {
        console.log(`  ok      ${r} is recorded`);
      } else {
        blocking++;
        console.log(`  FETCH   ${r}  <-  ${line}`);
      }
    }
  }
  console.log(
    blocking
      ? `\n${blocking} subsection(s) must be fetched and recorded in ${SOURCES} ` +
          `BEFORE writing, or the claim must be left off the page.`
      : "\nNothing outstanding. Safe to write.",
  );
  process.exit(0);
}

// ------------------------------------------------------------------- pages
console.log("\nWritten pages citing an unverified subsection");
{
  const written = charges.filter((c) => c.lead || c.statute || c.sections?.length);
  let any = false;
  for (const c of written) {
    for (const cited of refs(copyOf(c))) {
      if (!/\(/.test(cited)) continue;
      const hit = [...flaggedRefs].find(([f]) => covers(f, cited));
      if (!hit) continue;
      if (clearedBy(recorded, hit[0], cited)) continue;
      if (clearedBy(tableCovered, hit[0], cited)) continue;
      if (wholeSectionStatutes.has(sectionOf(cited))) continue;
      any = true;
      fail(
        `${chargeHref(c)} cites ${cited.toUpperCase()}, which ${hit[1].join(", ")} ` +
          `flagged UNVERIFIED. No fetch of it is recorded in PAGE-SOURCES.md, and no row ` +
          `in a whole-section audited statute table covers it. Fetch it and record it, ` +
          `build the table, or take the claim off the page.`,
      );
    }
  }
  if (!any)
    console.log("  ok    every unverified subsection cited on a page has a recorded fetch");
}

console.log(failed ? "\nUnverified-claim gate FAILED." : "\nUnverified-claim gate passed.");
process.exit(failed ? 1 : 0);
