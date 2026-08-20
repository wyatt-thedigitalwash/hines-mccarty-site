/**
 * check:provenance. GUIDES-CONCEPT.md F.3, gates G2 through G4, built in
 * Phase 0 under D29 so the gate exists before any guide content does.
 *
 * Three rules, all POSITIVE requirements rather than flag-driven, which is the
 * difference from check:unverified and the reason this is a separate gate:
 * guides have no briefs, so nothing else can arm a check for them.
 *
 *   G2  Every rule, statute, or USC citation in a guide's (or tool's) copy has
 *       a record at least as specific as the citation: a PAGE-SOURCES.md line,
 *       or a whole-section audited statute table.
 *   G3  Every quoted span longer than 12 words is located verbatim in the
 *       compelled corpus (PAGE-SOURCES blockquote lines plus audited table
 *       quote fields); a span presented as a complete sentence that stops
 *       mid-sentence in the record FAILS; a span ending at a true sentence
 *       boundary whose NEXT recorded sentence begins with a limiter WARNS,
 *       naming the sentence. This is trap 5 (the fourteen-page Rule 3.134
 *       failure) expressed as a rule, and it is a warning rather than a
 *       failure at the limiter step because a guide may legitimately stop
 *       before a limiter it discusses separately (D21: a gate that cannot be
 *       satisfied gets routed around).
 *   G4  A counting or closed-set sentence ("two tracks", "only", "every",
 *       "all", "none", "no other", "always", "never", "both") that cites a
 *       provision fires unless that provision is recorded as read whole.
 *       Read-whole evidence is a whole-section audited statute table or a
 *       READ-WHOLE marker line on a PAGE-SOURCES record (added with the
 *       Phase 1 records, 2026-08-20). The markers in force are printed on
 *       every run (D22: no silent defaults).
 *
 * Charge pages are NOT audited here: their citations are covered by
 * check:unverified's flag system plus the brief pipeline that guides lack.
 * Printed below rather than assumed.
 */
import { readFileSync } from "node:fs";
import { STATUTES } from "../src/lib/statutes.ts";
import { measuredPages } from "../src/lib/measured.ts";
import { refs, covers } from "./citations.mts";

let failed = false;
const fail = (m: string) => { console.error(`  FAIL  ${m}`); failed = true; };
const warn = (m: string) => { console.warn(`  WARN  ${m}`); };

const SOURCES = "docs/research/PAGE-SOURCES.md";
const sourcesText = readFileSync(SOURCES, "utf8");
const sourceLines = sourcesText.split("\n");

/** Lines that record a NON-fetch never clear anything (same rule as check:unverified). */
const NEGATIVE_LINE =
  /\b(not\s+(?:fetched|read|retrieved|recorded|verified)|never\s+(?:fetched|read)|unfetched|no\s+fetch|failed\s+to\s+fetch|could\s+not\s+(?:be\s+)?fetch)/i;

// ---------------------------------------------------------------- records
const recordedRefs = (() => {
  const out = new Set<string>();
  for (const line of sourceLines) {
    if (NEGATIVE_LINE.test(line)) continue;
    for (const r of refs(line)) out.add(r);
  }
  return out;
})();

/** Base citation keys (e.g. "fs 921.0024", "usc 18 3161") of whole-section audited tables. */
const wholeSectionKeys = (() => {
  const out = new Set<string>();
  for (const t of Object.values(STATUTES)) {
    if (t.completeness !== "whole-section") continue;
    for (const r of refs(t.cite)) out.add(r);
  }
  return out;
})();

/**
 * READ-WHOLE markers on PAGE-SOURCES records. The machine-readable read-whole
 * evidence GUIDES-CONCEPT F.3 G4 required, added with the Phase 1 records
 * (2026-08-20). A marker line is the auditor's claim that the provision was
 * read start to finish; it lives OUTSIDE the blockquote so it never joins the
 * compelled duplication corpus.
 */
const readWholeMarked = (() => {
  const out = new Set<string>();
  for (const line of sourceLines) {
    const m = line.match(/^READ-WHOLE:\s*(.+)$/);
    if (!m) continue;
    for (const r of refs(m[1])) out.add(r);
  }
  return out;
})();

/** Row-level refs from whole-section tables, the stronger per-subsection record. */
const tableRefs = (() => {
  const out = new Set<string>();
  for (const t of Object.values(STATUTES)) {
    if (t.completeness !== "whole-section") continue;
    for (const r of t.rows) for (const ref of refs(r.cite)) out.add(ref);
  }
  return out;
})();

/** G2: cleared by a record at least as specific as the citation. */
function g2Cleared(cited: string, recorded: Set<string> = recordedRefs): boolean {
  if ([...recorded].some((r) => covers(cited, r))) return true;
  if ([...tableRefs].some((r) => covers(cited, r))) return true;
  // A whole-section table clears every subsection of its own section: the
  // auditor's finding is that the section was read start to finish.
  if ([...wholeSectionKeys].some((k) => covers(k, cited) || covers(cited, k))) return true;
  // Same reasoning for a READ-WHOLE marker on a PAGE-SOURCES record.
  if ([...readWholeMarked].some((k) => covers(k, cited) || covers(cited, k))) return true;
  return false;
}

// ---------------------------------------------------------------- corpus
/** The compelled corpus G3 locates spans in: blockquote lines + table quotes. */
const buildCorpus = (): string[] => {
  const out: string[] = [];
  for (const line of sourceLines) {
    const m = line.match(/^\s*>\s?(.*)$/);
    if (m && m[1].trim()) out.push(m[1].trim());
  }
  for (const t of Object.values(STATUTES))
    for (const r of t.rows) if (r.quote) out.push(r.quote);
  return out;
};

const normSpan = (s: string) => s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").trim();

const LIMITERS =
  /^(unless|except|provided that|but|however|this (?:subsection|section|paragraph) does not|notwithstanding)/i;

type SpanVerdict =
  | { kind: "pass" }
  | { kind: "not-found" }
  | { kind: "mid-sentence"; continuation: string }
  | { kind: "limiter"; sentence: string };

/**
 * G3 core, pure so the self-tests can run it against a synthetic corpus.
 * `presentedComplete` = the page showed the span ending with a period.
 */
export function checkSpan(
  span: string,
  presentedComplete: boolean,
  corpus: string[],
): SpanVerdict {
  const needle = normSpan(span).replace(/[.]$/, "");
  const hit = corpus.map(normSpan).find((c) => c.includes(needle));
  if (!hit) return { kind: "not-found" };
  const after = hit.slice(hit.indexOf(needle) + needle.length).trimStart();
  if (!after) return { kind: "pass" };
  const continues = !/^[.;]/.test(after);
  if (presentedComplete && continues)
    return { kind: "mid-sentence", continuation: after.slice(0, 90) };
  // Sentence boundary: look at the next sentence in the record.
  const next = after.replace(/^[.;]\s*/, "");
  if (next && LIMITERS.test(next))
    return { kind: "limiter", sentence: next.split(/(?<=[.;])\s/)[0].slice(0, 120) };
  return { kind: "pass" };
}

// ---------------------------------------------------------------- G4 core
const COUNTING =
  /\b(only|every|all|none|no other|always|never|both)\b|\b(one|two|three|four|five|six|seven|eight|nine|ten)\s+(ways?|tracks?|limbs?|routes?|steps?|conditions?|requirements?|elements?|exceptions?|prongs?|categories|paths?)\b/i;

export function g4Hits(
  text: string,
  wholeKeys: Set<string>,
): { sentence: string; cited: string }[] {
  const out: { sentence: string; cited: string }[] = [];
  for (const sentence of text.split(/(?<=[.!?])\s+/)) {
    if (!COUNTING.test(sentence)) continue;
    for (const cited of refs(sentence)) {
      const wholeCovered = [...wholeKeys].some(
        (k) => covers(k, cited) || covers(cited, k),
      );
      if (!wholeCovered) out.push({ sentence: sentence.slice(0, 140), cited });
    }
  }
  return out;
}

// ---------------------------------------------------------------- self-tests
// House convention: a gate is preceded by a self-test that plants the
// violation and asserts it fires. check-claims.mts: "a self-test that cannot
// fail for its stated reason is worse than no self-test."
console.log("Provenance-gate self-tests");
{
  let ok = true;
  const t = (name: string, cond: boolean) => {
    if (cond) console.log(`  ok    ${name}`);
    else { fail(`SELF-TEST: ${name}`); ok = false; }
  };

  // G2: a planted citation with no record anywhere must fail.
  t("G2 fires on a citation with no record (Rule 9.999(z))",
    !g2Cleared("rule 9.999(z)"));
  // G2: a real recorded citation must pass (Rule 3.130(a) is blockquoted).
  t("G2 passes a recorded citation (Rule 3.130(a))",
    g2Cleared("rule 3.130(a)"));
  // G2: a whole-section table clears its own subsections.
  t("G2 passes a subsection of a whole-section audited table (F.S. 943.0584(2)(hh))",
    g2Cleared("fs 943.0584(2)(hh)"));

  const syntheticCorpus = [
    "the court shall order the automatic release on the 33rd day unless the state files formal charges by that date.",
    "The person has the right to counsel. Unless waived in writing, counsel attends every stage.",
    "A complete recorded sentence with nothing after it",
  ];
  // G3: quote not in the record fails.
  t("G3 fails a quote absent from the record",
    checkSpan("words that appear in no record at all anywhere", true, syntheticCorpus).kind === "not-found");
  // G3: the trap-5 shape, cut at exactly the condition and presented complete.
  t("G3 fails the pre-fix Rule 3.134 shape (stops before 'unless', presented as a sentence)",
    checkSpan("the court shall order the automatic release on the 33rd day.", true, syntheticCorpus).kind === "mid-sentence");
  // G3: the full sentence passes.
  t("G3 passes the post-fix sentence quoted whole",
    checkSpan("the court shall order the automatic release on the 33rd day unless the state files formal charges by that date.", true, syntheticCorpus).kind === "pass");
  // G3: sentence boundary followed by a limiter warns, and names it.
  const lim = checkSpan("The person has the right to counsel.", true, syntheticCorpus);
  t("G3 WARNS when the record's next sentence begins with a limiter",
    lim.kind === "limiter" && /^Unless waived/.test((lim as { sentence: string }).sentence));

  // G4: a counting claim citing a provision not recorded whole must fire.
  // ">= 1" not "=== 1": "Rule 9.876" parses as both a rule citation and an
  // F.S.-shaped number, so the planted sentence yields two hits. Both fire on
  // the same violation, which is the property under test.
  t("G4 fires on 'the rule names two tracks' against an unrecorded provision",
    g4Hits("Rule 9.876 names two tracks for release.", wholeSectionKeys).length >= 1);
  // G4: the same claim against a whole-section table stays quiet.
  t("G4 stays quiet on a counting claim over a whole-section table (F.S. 943.0584)",
    g4Hits("F.S. 943.0584 bars all of the listed offenses.", wholeSectionKeys).length === 0);

  // READ-WHOLE marker: a real marked record clears G2 and G4; text NOT under
  // a marker still fires. Rule 32 exists only as a marked record, never as a
  // statute table, so it exercises the marker path and nothing else.
  t("READ-WHOLE marker parsed from PAGE-SOURCES (Fed. R. Crim. P. Rule 32)",
    readWholeMarked.has("rule 32"));
  t("G2 passes a citation cleared only by a READ-WHOLE marker (Rule 32(k))",
    g2Cleared("rule 32(k)"));
  t("G4 stays quiet on a counting claim over a marker-cleared provision (Rule 32)",
    g4Hits("Rule 32 sets two deadlines for the presentence report.",
      new Set([...wholeSectionKeys, ...readWholeMarked])).length === 0);
  // "two tracks", not "two forms": the counting-noun list does not include
  // "forms", so the first fixture never armed the check it was testing.
  t("G4 still fires when only the marker set is widened and the cite is unmarked (Rule 47)",
    g4Hits("Rule 47 names two tracks for motions.",
      new Set([...wholeSectionKeys, ...readWholeMarked])).length >= 1);

  if (!ok) {
    console.log("\nProvenance check FAILED (self-tests).");
    process.exit(1);
  }
}

// ---------------------------------------------------------------- real run
const corpus = buildCorpus();
const surfaces = measuredPages.filter(
  (m) => m.kind !== "charge" && m.written,
);

console.log("\nG2: citation provenance on guide and tool surfaces");
{
  let cites = 0;
  for (const m of surfaces) {
    for (const cited of refs(m.copy.join("\n"))) {
      cites++;
      if (!g2Cleared(cited))
        fail(
          `${m.href} cites ${cited.toUpperCase()} with no PAGE-SOURCES record and no ` +
            `whole-section table covering it. Positive requirement (G2): guides have no ` +
            `briefs, so nothing else arms a check for them. Fetch it and record it first.`,
        );
    }
  }
  console.log(
    `  ..    ${cites} citation(s) across ${surfaces.length} written guide/tool surface(s). ` +
      (cites === 0
        ? "Zero is EXPECTED in Phase 0: no guide content exists yet. The gate is armed, which is the point."
        : ""),
  );
}

console.log("\nG3: quoted spans located in the record, truncation checked");
{
  let spans = 0;
  for (const m of surfaces) {
    if (m.kind !== "guide") continue;
    const candidates: { where: string; text: string }[] = [];
    for (const s of m.guide.sections ?? []) {
      if (s.statute) candidates.push({ where: `${s.id} statute`, text: s.statute.body });
      for (const chunk of [...(s.prose ?? []), ...(s.bullets ?? [])]) {
        for (const q of chunk.matchAll(/"([^"]{40,})"/g))
          candidates.push({ where: s.id, text: q[1] });
      }
    }
    for (const { where, text } of candidates) {
      if (text.split(/\s+/).length <= 12) continue;
      spans++;
      const v = checkSpan(text, /[.]"?\s*$/.test(text), corpus);
      if (v.kind === "not-found")
        fail(`${m.href} (${where}): quoted span is not in the record: "${text.slice(0, 80)}"`);
      else if (v.kind === "mid-sentence")
        fail(
          `${m.href} (${where}): quote stops mid-sentence and is presented as whole. ` +
            `The record continues: "${v.continuation}"`,
        );
      else if (v.kind === "limiter")
        warn(
          `${m.href} (${where}): the record's next sentence begins with a limiter: ` +
            `"${v.sentence}". Legitimate only if the guide discusses it separately.`,
        );
    }
  }
  console.log(`  ..    ${spans} span(s) checked${spans === 0 ? " (none exist yet; armed)" : ""}`);
}

console.log("\nG4: closed-set and counting claims");
{
  const readWhole = new Set([...wholeSectionKeys, ...readWholeMarked]);
  let hits = 0;
  for (const m of surfaces) {
    for (const h of g4Hits(m.copy.join("\n"), readWhole)) {
      hits++;
      fail(
        `${m.href}: counting/closed-set claim cites ${h.cited.toUpperCase()}, which is not ` +
          `recorded as read whole: "${h.sentence}"`,
      );
    }
  }
  console.log(`  ..    ${hits === 0 ? "no counting claim rests on a partial reading" : `${hits} hit(s)`}`);
}

// D22: what this run did NOT check, printed every time.
console.log(
  `\n  ..    READ-WHOLE markers in force: ${readWholeMarked.size} ` +
    `(${[...readWholeMarked].sort().join(", ")})`,
);
console.log(
  "  ..    NOT CHECKED, by design: charge-page citations (check:unverified owns those, " +
    "flag-driven); quote fidelity against live external sources (each Phase 1 record was " +
    "verified against a second publisher at record time, and that verification is recorded " +
    "on the record, not re-run here).",
);

console.log(failed ? "\nProvenance check FAILED." : "\nProvenance check passed.");
process.exit(failed ? 1 : 0);
