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
  const fs =
    /(?:F\.?\s?S\.?\s*|Florida Statutes?\s*|Statute\s*|s\.\s*)?(\d{3}\.\d{2,4})((?:\s*\(\s*[0-9a-z]{1,3}\s*\))*)/gi;
  for (const m of text.matchAll(fs)) {
    const subs = (m[2] ?? "").replace(/\s+/g, "");
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

function copyOf(c: ChargePage): string {
  return [
    c.title, c.metaTitle, c.metaDescription, c.lead,
    c.counterpart?.note, c.statute?.citation, c.statute?.body,
    ...(c.elements ?? []), ...(c.defenseApproach ?? []), ...(c.forum ?? []),
    ...(c.penalties ?? []).flatMap((p) => [p.degree, p.maximum, p.offenseLevel, p.note]),
    ...(c.faq ?? []).flatMap((f) => [f.question, f.answer]),
    ...(c.sections ?? []).flatMap((s) => [
      s.heading, ...(s.prose ?? []), ...(s.bullets ?? []),
      ...(s.statute ? [s.statute.citation, s.statute.body] : []),
      ...(s.penalties ?? []).flatMap((p) => [p.degree, p.maximum, p.offenseLevel, p.note]),
      ...(s.steps ?? []).flatMap((t) => [t.when, t.what]),
      ...(s.guidance ?? []).flatMap((g) => [g.heading, ...g.items]),
    ]),
  ].filter(Boolean).join("\n");
}

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

const recorded = refs(readFileSync(SOURCES, "utf8"));

console.log(
  `\n${flaggedRefs.size} subsection-level UNVERIFIED flags across ${briefFiles.length} briefs; ` +
    `${recorded.size} references recorded in PAGE-SOURCES.md`,
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
      any = true;
      fail(
        `${chargeHref(c)} cites ${cited.toUpperCase()}, which ${hit[1].join(", ")} ` +
          `flagged UNVERIFIED, and PAGE-SOURCES.md records no fetch of it. ` +
          `Fetch it and record it, or take the claim off the page.`,
      );
    }
  }
  if (!any)
    console.log("  ok    every unverified subsection cited on a page has a recorded fetch");
}

console.log(failed ? "\nUnverified-claim gate FAILED." : "\nUnverified-claim gate passed.");
process.exit(failed ? 1 : 0);
