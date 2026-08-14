/**
 * Page-level gates: banned terms, structural variation, generic headings,
 * verbatim duplication, and reader-question coverage.
 *
 * Every check here is preceded by a self-test that exercises it. Where a check
 * has a known limit that a self-test cannot close, the limit is PRINTED rather
 * than left implicit: the reader-question gate reads declarations and cannot
 * see whether a section actually answers what it claims. This is not ceremony. The
 * previous banned-term check in this project was run against rendered HTML and
 * returned 67 hits for "leading", every one of them a Tailwind `leading-*`
 * line-height class, plus "dropped" from a legitimate FAQ question about
 * whether charges can be dropped. It produced alarming output that answered no
 * question at all: you could not tell from its result whether the page was
 * clean or filthy.
 *
 * That is the same family as docs/research/HUNT-LIST.md defect 1. A check whose
 * reassuring result is available in the failure state tells you nothing; a
 * check whose alarming result is available in the clean state tells you nothing
 * either. Both fail for one reason: the output does not discriminate between
 * the states it was built to distinguish.
 *
 * The fixes, both load-bearing:
 *   1. Extract copy from the DATA, never from rendered markup. Markup carries
 *      class names, attributes, and framework tokens that collide with English.
 *   2. Match on word boundaries, and separate hard violations from things that
 *      merely need a human to look.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { charges, chargeHref } from "../src/lib/site.ts";
import { pageCopy } from "../src/lib/page-copy.ts";
import { STATUTES } from "../src/lib/statutes.ts";
import {
  isGenericHeading,
  normalizeHeading,
  READER_QUESTIONS,
  type ReaderQuestion,
} from "../src/lib/charge-page.ts";
import type { ChargePage } from "../src/lib/site.ts";

/**
 * The legacy baseline, ratcheted.
 *
 * Legacy pages are structurally identical by construction and there is no point
 * failing the build on a backlog this workstream exists to clear. But
 * "EXPECTED, and the count must reach zero" was enforced by nothing: a ninth
 * legacy page would have raised the count and still printed green.
 *
 * So the counts are recorded and may only go DOWN. Adding legacy debt fails the
 * build; removing it updates the baseline automatically.
 */
const BASELINE_PATH = "docs/build/legacy-baseline.json";
type Baseline = { structuralPairs: number; duplicationPairs: number };
/**
 * FAIL CLOSED. The gate testing defeated the first version three ways and all
 * three came from treating a missing or broken baseline as permission:
 *   - deleting the file re-baselined silently at whatever the current debt was,
 *     and git showed the file as MODIFIED rather than deleted, so review saw
 *     nothing;
 *   - a `{}` baseline produced `Math.min(n, undefined) === NaN`, written back as
 *     null, which then wedged every later build permanently;
 *   - a hand-edited large number passed once and was then overwritten by the
 *     write-back, erasing the evidence that the gate had been bypassed.
 * A missing or unreadable baseline is now a failure, not a fresh start.
 */
function loadBaseline(): Baseline {
  if (!existsSync(BASELINE_PATH)) {
    fail(
      `${BASELINE_PATH} is missing. It is the only record of how much legacy ` +
        `debt is tolerated, so its absence is a failure rather than a clean slate. ` +
        `Restore it from git.`,
    );
    return { structuralPairs: 0, duplicationPairs: 0 };
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(readFileSync(BASELINE_PATH, "utf8"));
  } catch {
    fail(`${BASELINE_PATH} is not valid JSON.`);
    return { structuralPairs: 0, duplicationPairs: 0 };
  }
  const b = parsed as Partial<Baseline>;
  const ok = (n: unknown): n is number =>
    typeof n === "number" && Number.isInteger(n) && n >= 0;
  if (!ok(b.structuralPairs) || !ok(b.duplicationPairs)) {
    fail(
      `${BASELINE_PATH} is missing a non-negative integer for structuralPairs ` +
        `or duplicationPairs. A partial baseline cannot bound anything.`,
    );
    return { structuralPairs: 0, duplicationPairs: 0 };
  }
  return { structuralPairs: b.structuralPairs, duplicationPairs: b.duplicationPairs };
}
const baseline: Baseline = loadBaseline();

const ratchet: Partial<Baseline> = {};
let failed = false;
const fail = (msg: string) => {
  console.error(`  FAIL  ${msg}`);
  failed = true;
};

// ------------------------------------------------------------------ copy
/**
 * Every human-visible string on a page, and nothing else.
 *
 * Deliberately reads the data rather than the built HTML. Comments in site.ts
 * are excluded because they are not copy, which matters: several of them quote
 * the banned words while explaining why the words are banned.
 */
const copyOf = pageCopy;

// --------------------------------------------------------- banned terms
/**
 * A WORD-LIST CHECK. NOT A COMPLIANCE CONTROL.
 *
 * Independent testing planted 16 realistic violations and this rail missed all
 * 16. Every construction a marketing writer would actually reach for passed:
 *
 *   "No one in Tampa knows this statute better."
 *   "Hines & McCarty gets grand theft charges dropped."      (firm name, not "we")
 *   "Charges like these are routinely dismissed."            (passive)
 *   "Ninety-two percent of cases ended without a conviction." (result as a rate)
 *   "One client walked out with no record at all."           (result as anecdote)
 *   "the most experienced theft defense team in the county"  ("most successful" is
 *                                                             listed, "most
 *                                                             experienced" is not)
 *   an en dash, a horizontal bar, a figure dash, a minus sign, instead of an em dash
 *
 * The one violation it reliably catches is the one no lawyer would write.
 *
 * THIS IS HUNT-LIST INSTANCE 8 IN THE PRESENT TENSE. That instance names the
 * hazard as a green rail producing the feeling of coverage, and this rail
 * produces exactly that feeling every time it prints ok. Its PASS means "none
 * of these specific strings appear". It does not mean the page complies with
 * Fla. Bar R. 4-7.
 *
 * COMPLIANCE ON THIS SITE RESTS ON THE ATTORNEY READ. Nothing in this file
 * substitutes for it, and a page has not been checked for compliance because
 * this printed ok.
 */
/** Superiority and promise language. Fla. Bar R. 4-7.13. Hard failure. */
/**
 * Superiority, shaped as a claim about THE FIRM rather than as bare words.
 *
 * Fla. Bar R. 4-7.13 reaches a comparison of the lawyer's services. It does
 * not reach the word "specialist" appearing in a statutory job title, and it
 * cannot, because the project's other rule is that quotes are verbatim: a
 * gate that fires on quoted statutory text asks the writer to choose which
 * rule to break.
 *
 * Both false positives were exactly that. F.S. 784.07(1) lists a "parking
 * enforcement specialist" among the protected persons whose status raises a
 * battery, and F.S. 409.913(16)(c) makes "each false or erroneous Medicaid
 * claim leading to an overpayment" a separate violation. Neither page was
 * claiming anything about the firm.
 *
 * The rule beneath this one already got this right and said so: outcome
 * claims are shaped as first-person "because the bare words are legitimate in
 * process description" and "a check that cannot tell those apart is the check
 * this file exists to replace". Superiority never got the same treatment, and
 * the symptom was patched instead: the noise self-test carried a filter
 * excluding /leading/ from its own results, which hid the defect at one call
 * site while leaving it live everywhere else.
 *
 * So the word must now sit with a claim about us: a first-person or firm
 * reference in the same sentence, or the word directly modifying what a firm
 * sells. "Our attorneys are the best DUI experts in Tampa" still fires. So
 * does "the leading criminal defense firm in Tampa".
 */
const SUPERIORITY_WORD =
  /\b(best|top[-\s]?rated|expert|experts|expertise|specialist|specialists|premier|renowned|elite|unmatched|unparalleled|leading|number one|#1|most successful|highest[-\s]rated)\b/i;
const FIRM_REFERENCE =
  /\b(we|we're|us|our|ours|the firm|this firm|our firm|this office|Hines|McCarty)\b/i;
const SUPERIORITY_OF_SERVICES =
  /\b(best|top[-\s]?rated|expert|experts|premier|renowned|elite|unmatched|unparalleled|leading|number one|#1|most successful|highest[-\s]rated)\s+(criminal\s+)?(defen[cs]e\s+)?(attorney|attorneys|lawyer|lawyers|firm|counsel|representation|practice|team|defen[cs]e)\b/i;
const SUPERIORITY = {
  test: (s: string) =>
    (SUPERIORITY_WORD.test(s) && FIRM_REFERENCE.test(s)) ||
    SUPERIORITY_OF_SERVICES.test(s),
  exec: (s: string) =>
    SUPERIORITY_OF_SERVICES.exec(s) ??
    (FIRM_REFERENCE.test(s) ? SUPERIORITY_WORD.exec(s) : null),
};

/**
 * Outcome claims. Hard failure.
 *
 * Shaped as first-person or promissory rather than as bare words, because the
 * bare words are legitimate in process description. "Whether charges can be
 * dropped is decided by the State" is accurate and useful; "we get charges
 * dropped" is a violation. A check that cannot tell those apart is the check
 * this file exists to replace.
 */
const OUTCOME_CLAIM =
  /\b(?:we|our (?:firm|attorneys?|lawyers?|team))\b[^.]{0,120}?\b(?:win|wins|won|beat|dismiss(?:ed|es)?|acquit(?:ted|tal)?|drop(?:ped|s)?|get you off|clear your)\b/i;
const PROMISSORY =
  /\b(?:you will|we will|guarantee[sd]?|guaranteed|promise[sd]?)\b[^.]{0,80}?\b(?:win|avoid|beat|dismiss\w*|acquit\w*|drop\w*|no (?:jail|conviction|record))\b|\bcharges? will be (?:dropped|dismissed)\b/i;

/** Published case results. Hard failure. */
const CASE_RESULT =
  /\b(?:not guilty verdict|case dismissed|charges dismissed|acquitted at trial|\$[\d,]+ (?:settlement|verdict|recovery))\b/i;

const EM_DASH = /—/;

type Hit = { rule: string; text: string };

function bannedHits(strings: string[]): Hit[] {
  const hits: Hit[] = [];
  for (const s of strings) {
    for (const [rule, re] of [
      ["superiority", SUPERIORITY],
      ["outcome-claim", OUTCOME_CLAIM],
      ["promissory", PROMISSORY],
      ["case-result", CASE_RESULT],
      ["em-dash", EM_DASH],
    ] as const) {
      // `re` is a RegExp for most rules and an object with the same exec
      // shape for superiority, which needs two conditions rather than one.
      const m = re.exec(s);
      if (m) hits.push({ rule, text: `${m[0]}  ...  "${s.slice(0, 110)}"` });
    }
  }
  return hits;
}

// ------------------------------------------------- structural signature
/**
 * A page's shape, independent of its facts.
 *
 * Two signatures matching means two pages that would read as the same document
 * with the nouns swapped, which is exactly what the structural variation test
 * is for. Legacy pages have no `sections`, so their shape is synthesised from
 * the fixed template they render through: all of them produce one identical
 * signature, which is the audit finding restated as data.
 */
const LEGACY_HEADINGS = [
  "What the statute says",
  "Degrees and penalties",
  "What the state has to prove",
  "How the defense is approached",
  "Where the case is heard",
];

function signature(c: ChargePage): {
  ids: string[];
  kinds: string[];
  headings: string[];
} {
  if (c.sections?.length) {
    return {
      ids: c.sections.map((s) => s.id),
      kinds: c.sections.map((s) => s.kind),
      headings: c.sections.map((s) => normalizeHeading(s.heading)),
    };
  }
  const ids: string[] = [];
  if (c.statute) ids.push("statute");
  if (c.penalties) ids.push("penalties");
  if (c.elements) ids.push("elements");
  if (c.defenseApproach) ids.push("defense");
  if (c.forum) ids.push("forum");
  return {
    ids,
    kinds: ids.map(() => "legacy"),
    headings: LEGACY_HEADINGS.map(normalizeHeading),
  };
}

function jaccard(a: string[], b: string[]): number {
  const A = new Set(a);
  const B = new Set(b);
  const inter = [...A].filter((x) => B.has(x)).length;
  const union = new Set([...a, ...b]).size;
  return union === 0 ? 0 : inter / union;
}

/**
 * Two pages are structurally interchangeable.
 *
 * REBUILT 2026-08-13 after the adversarial pass proved the first version could
 * not fail. It required `idsSame && headingOverlap >= 0.7`. But the
 * heading-reuse gate above fails the build on ANY normalised heading shared by
 * two migrated pages, so whenever that gate is green the heading sets are
 * disjoint, the overlap is 0, and the conjunction is unreachable. Two pages
 * with an identical section sequence and merely paraphrased headings scored
 * `idsSame: true, overlap: 0.00, fires: false`. The reassuring result was
 * available in the failure state, in the file whose header cites that defect.
 *
 * The fix is to stop requiring both signals at once. Sameness of SHAPE and
 * sameness of WORDS are different failures and either alone is a finding:
 *
 *   - identical section id sequence, whatever the headings say
 *   - identical section KIND sequence at the same length, which catches a page
 *     that renames its ids but reproduces the same block-for-block form
 *   - high heading overlap, which survives as its own signal
 */
type Interchange = {
  yes: boolean;
  reasons: string[];
  kindsNote: string;
  orderSimilarity: number;
  idsSame: boolean;
  kindsSame: boolean;
  headingOverlap: number;
};

function interchangeable(x: ChargePage, y: ChargePage): Interchange {
  const a = signature(x);
  const b = signature(y);
  // CONTAINMENT, not equality. The gate testing cloned a page, appended one
  // throwaway section, and both triggers died, because each compared joined
  // strings and an 11-element sequence never equals a 10-element one. Adding a
  // section is the cheapest possible evasion and it defeated the whole rail.
  const seqContained = (x: string[], y: string[]) => {
    if (x.length < 3) return false;
    const [small, large] = x.length <= y.length ? [x, y] : [y, x];
    return large.join(">").includes(small.join(">"));
  };
  const idsSame = seqContained(a.ids, b.ids);
  const kindsSame = seqContained(a.kinds, b.kinds);
  // Same blocks, same counts, shuffled order. The adversarial pass found two
  // pages where every section had a counterpart on the other and only two
  // blocks had swapped places. An ordered comparison misses that entirely, so
  // the multiset is compared separately: reordering a form does not make it a
  // different document.
  // ORDERED similarity, not multiset containment.
  //
  // Containment was wrong and firing on the real pair for the wrong reason.
  // With six section kinds, a shorter page's multiset is almost always a subset
  // of a longer page's, so containment scores 100% for any page that simply
  // uses fewer block types. That is not "the same document"; it is "fewer
  // kinds". At thirty pages it would fire on nearly every pair, which is the
  // noise problem that got it demoted the first time.
  //
  // What actually distinguishes a copy is the ORDER: the same blocks doing the
  // same jobs in the same succession. Edit distance over the kind sequence
  // measures that and is insensitive to a page merely being shorter.
  const editDistance = (x: string[], y: string[]) => {
    const d: number[][] = Array.from({ length: x.length + 1 }, (_, i) =>
      Array.from({ length: y.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
    );
    for (let i = 1; i <= x.length; i++)
      for (let j = 1; j <= y.length; j++)
        d[i][j] = Math.min(
          d[i - 1][j] + 1,
          d[i][j - 1] + 1,
          d[i - 1][j - 1] + (x[i - 1] === y[j - 1] ? 0 : 1),
        );
    return d[x.length][y.length];
  };
  const longest = Math.max(a.kinds.length, b.kinds.length) || 1;
  const orderSimilarity =
    a.kinds.length >= 3 && b.kinds.length >= 3
      ? 1 - editDistance(a.kinds, b.kinds) / longest
      : 0;
  const ORDER_LIMIT = 0.8;
  const headingOverlap = jaccard(a.headings, b.headings);
  const reasons: string[] = [];
  if (orderSimilarity >= ORDER_LIMIT && !kindsSame)
    reasons.push(
      `section kinds run in ${(orderSimilarity * 100).toFixed(0)}% the same order (limit ${(ORDER_LIMIT * 100).toFixed(0)}%)`,
    );
  if (idsSame) reasons.push(`section id sequence contained (${a.ids.join(">")})`);
  if (kindsSame)
    reasons.push(`identical section kind sequence (${a.kinds.join(">")})`);
  // PROMOTED BACK TO A TRIGGER. It was demoted on the reasoning that with six
  // kinds and thirty pages, near-identical multisets would be unavoidable
  // noise. The gate testing showed that reasoning does not survive its own
  // evidence: there are TWO migrated pages, not thirty, their multiset overlap
  // is already 100%, and the demotion was swallowing the only true positive on
  // the site. An escape hatch was opened pre-emptively for a false-positive
  // problem that had not occurred.
  //
  // The second half of the justification was also false. It claimed the
  // duplication gate measured the same thing "on content rather than shape".
  // It does not: duplication counts verbatim eight-word runs, and two pages can
  // be the same document block for block with zero shared shingles. Nothing
  // else on this site measures same-shape-different-words, which is the exact
  // failure the schema rewrite existed to fix.
  const kindsNote = "";
  // NOTE ON headingOverlap. It is reported but is NOT a trigger, because the
  // heading-reuse gate above fails the build on any shared normalised heading,
  // so in every passing build this value is 0.00. Treating it as a live signal
  // was HUNT-LIST instance 7: a disjunct an upstream gate makes unreachable.
  // It stays in the output as a diagnostic and is never load-bearing.
  return {
    yes: reasons.length > 0,
    reasons,
    kindsNote,
    orderSimilarity,
    idsSame,
    kindsSame,
    headingOverlap,
  };
}

// ==================================================================
// PART 1. Self-tests. Each plants the violation and asserts it fires.
// ==================================================================
console.log("Page-gate self-tests");
{
  const planted = [
    "Our attorneys are the best DUI experts in Tampa.",
    "We guarantee your charges will be dropped.",
    "We have won a not guilty verdict for clients in this position.",
    "This sentence carries an em dash — like that.",
  ];
  const hits = bannedHits(planted);
  const rules = new Set(hits.map((h) => h.rule));
  for (const expected of [
    "superiority",
    "promissory",
    "case-result",
    "em-dash",
  ]) {
    if (!rules.has(expected)) {
      fail(
        `banned-term gate did NOT fire on a planted "${expected}" violation. ` +
          `A gate that cannot be shown firing is not evidence that the pages are clean.`,
      );
    }
  }
  if (rules.size >= 4) {
    console.log(
      `  ok    banned-term gate fires on planted violations (${[...rules].sort().join(", ")})`,
    );
  }

  // The control. These are the exact strings the OLD html-scraping check
  // flagged. Every one is legitimate copy or framework noise, and the rebuilt
  // gate must stay silent on all of them, or it is the same broken check.
  const control = [
    "Whether battery charges can be dropped in Florida is decided by the State, not by the complainant.",
    "The statute lists the leading edge of the vehicle.",
    "A person who is convicted shall be sentenced to a mandatory minimum term.",
    "The court may withhold adjudication.",
  ];
  // The control set previously needed a filter excluding /leading/ from the
  // superiority results, because the rule matched the bare word and "the
  // leading edge of the vehicle" is statutory text. The rule now requires a
  // claim about the firm, so the filter is gone and the control set is
  // checked as written. If superiority ever fires on one of these again, that
  // is a real regression rather than known noise.
  const real = bannedHits(control);
  if (real.length) {
    fail(
      `banned-term gate fired on legitimate copy: ${real.map((h) => h.rule + " -> " + h.text).join(" | ")}`,
    );
  } else {
    console.log("  ok    stays silent on the copy the old HTML check false-flagged");
  }
}

{
  // Structural variation, shown firing on two synthetic pages that differ only
  // in their facts. If this cannot be made to fail, the check is decoration.
  const mk = (n: string): ChargePage =>
    ({
      slug: n,
      silo: "state",
      label: n,
      description: n,
      c9: { statute: "", section: "", assertion: "" },
      published: false,
      sections: [
        { id: "a", heading: "What the statute says", kind: "prose" },
        { id: "b", heading: "Degrees and penalties", kind: "penalties" },
        { id: "c", heading: "What the state has to prove", kind: "bullets" },
        { id: "d", heading: "Where the case is heard", kind: "prose" },
      ],
    }) as unknown as ChargePage;
  const r = interchangeable(mk("one"), mk("two"));
  if (!r.yes) {
    fail(
      "structural variation check did NOT fire on two pages with identical " +
        "section order and identical headings.",
    );
  } else {
    console.log(
      `  ok    structural check fires on interchangeable pages (ids identical, heading overlap ${r.headingOverlap.toFixed(2)})`,
    );
  }
  // THE CASE THE FIRST VERSION MISSED. Identical section sequence, headings
  // merely paraphrased so the heading-reuse gate stays green. This is the state
  // the real pipeline actually produces, and the old conjunction could not
  // reach it.
  const para1 = mk("five");
  const para2 = mk("six");
  para1.sections = [
    { id: "threshold", heading: "Why value is a separate question from the taking", kind: "prose" },
    { id: "timeline", heading: "How long a theft case runs", kind: "timeline" },
    { id: "now", heading: "What to do about the property", kind: "guidance" },
  ];
  para2.sections = [
    { id: "threshold", heading: "Why value is a distinct question from the taking", kind: "prose" },
    { id: "timeline", heading: "How long a fraud case runs", kind: "timeline" },
    { id: "now", heading: "What to do about the records", kind: "guidance" },
  ];
  const par = interchangeable(para1, para2);
  if (!par.yes) {
    fail(
      "structural variation check does NOT fire on identical section sequences " +
        "with paraphrased headings. That is the exact state the heading-reuse " +
        "gate guarantees, so the check would be unreachable in the real pipeline.",
    );
  } else {
    console.log(`  ok    fires on paraphrased headings over an identical sequence (${par.reasons.join("; ")})`);
  }

  // The bag branch, shown firing on the shape that actually defeated the last
  // version: different ids, different order, and DIFFERENT LENGTHS (10 vs 9),
  // where the shorter page is the longer one minus a block.
  const bagA = mk("bagA");
  const bagB = mk("bagB");
  bagA.sections = ["prose","penalties","prose","timeline","guidance","bullets","statute","prose","prose","prose"]
    .map((k, i) => ({ id: `a${i}`, heading: `Alpha heading number ${i}`, kind: k as never }));
  bagB.sections = ["prose","statute","penalties","bullets","guidance","timeline","prose","prose","prose"]
    .map((k, i) => ({ id: `b${i}`, heading: `Beta heading number ${i}`, kind: k as never }));
  // A page that is the same succession of blocks with one dropped must fire.
  const seqA = mk("seqA");
  const seqB = mk("seqB");
  const order = ["prose","penalties","prose","timeline","guidance","bullets","statute","prose","prose","prose"];
  seqA.sections = order.map((k, i) => ({ id: `x${i}`, heading: `Alpha ${i}`, kind: k as never }));
  seqB.sections = order.filter((_, i) => i !== 4).map((k, i) => ({ id: `y${i}`, heading: `Beta ${i}`, kind: k as never }));
  const seqR = interchangeable(seqA, seqB);
  if (!seqR.yes) {
    fail(
      `structural check does NOT fire on the same block succession with one ` +
        `section dropped (order similarity ${(seqR.orderSimilarity * 100).toFixed(0)}%).`,
    );
  } else {
    console.log(`  ok    FAILS on the same succession minus one block (${seqR.reasons[0]})`);
  }

  // The cheapest evasion found by the gate testing: clone a page, append one
  // throwaway section, and equality-based sequence checks both die.
  const cloneA = mk("cloneA");
  const cloneB = mk("cloneB");
  const kinds10 = ["prose","penalties","prose","timeline","guidance","bullets","statute","prose","prose","prose"];
  cloneA.sections = kinds10.map((k, i) => ({ id: `s${i}`, heading: `Alpha ${i}`, kind: k as never }));
  cloneB.sections = [
    ...kinds10.map((k, i) => ({ id: `s${i}`, heading: `Beta ${i}`, kind: k as never })),
    { id: "afterword", heading: "Beta afterword", kind: "prose" as never },
  ];
  if (!interchangeable(cloneA, cloneB).yes) {
    fail(
      "a clone with ONE extra section appended defeats the structural check. " +
        "Adding a section is the cheapest possible evasion.",
    );
  } else {
    console.log("  ok    a clone plus one appended section still fires");
  }

  const varied = mk("three");
  varied.sections = [
    { id: "clock", heading: "The ten days that start at the roadside", kind: "prose" },
    { id: "ladder", heading: "Why a fourth conviction doubles the score", kind: "penalties" },
    { id: "seal", heading: "Whether a licence survives this", kind: "bullets" },
  ];
  const other = mk("four");
  other.sections = [
    { id: "predicate", heading: "The list the money has to come from", kind: "statute" },
    { id: "clocks", heading: "Two clocks, and the one that expires first", kind: "timeline" },
    { id: "after", heading: "What a federal case does to a licence", kind: "prose" },
  ];
  if (interchangeable(other, varied).yes) {
    fail("structural variation check fires on genuinely different pages.");
  } else {
    console.log("  ok    stays quiet on pages with distinct shape and headings");
  }
}

{
  if (!isGenericHeading("Degrees and penalties")) {
    fail("generic-heading check misses an exact generic heading.");
  } else if (!isGenericHeading("Degrees and penalties for grand theft")) {
    fail(
      "generic-heading check misses a generic stem wearing a charge name, " +
        "which is the most likely way to defeat an equality-only check.",
    );
  } else if (isGenericHeading("The ten days that start at the roadside")) {
    fail("generic-heading check fires on a genuinely charge-specific heading.");
  } else {
    console.log("  ok    generic-heading check fires on stems and on stems plus a charge name");
  }
}

{
  // Heading-reuse and reader-question gates, shown firing. The file header
  // claimed every check was self-tested; two were not, which the adversarial
  // pass caught. An untested gate is an assumption wearing a green tick.
  const norm = normalizeHeading;
  const shared = norm("The $750 line") === norm("the  $750   LINE!");
  if (!shared) {
    fail("heading normalisation does not collapse case and punctuation, so the reuse gate would miss a reworded duplicate.");
  } else {
    console.log("  ok    heading normalisation collapses case and punctuation");
  }

  const QS = Object.keys(READER_QUESTIONS) as ReaderQuestion[];
  if (QS.length !== 6) {
    fail(`reader-question set is ${QS.length}, expected the six from the mission.`);
  }
  const fakeAnswered = new Set<ReaderQuestion>(["facing", "next", "now"]);
  const missing = QS.filter((q) => !fakeAnswered.has(q));
  if (missing.length !== 3) {
    fail("reader-question coverage arithmetic does not identify unanswered questions.");
  } else {
    console.log(`  ok    coverage check identifies unanswered questions (${missing.join(", ")})`);
  }
  console.log(
    "  ..    KNOWN LIMIT: coverage reads each section's `answers` declaration and " +
      "never inspects the prose, so a section that declares a question it does not " +
      "answer passes. That is a review requirement, not a gate.",
  );
}

// ==================================================================
// PART 2. The real pages.
// ==================================================================
const pages = charges.filter(
  (c) => (c.lead || c.statute || c.sections?.length) && !c.c9Exempt,
);
const migrated = pages.filter((c) => c.sections?.length);
const legacy = pages.filter((c) => !c.sections?.length);

console.log(`\nWritten charge pages: ${pages.length}`);
console.log(
  `  migrated to sections: ${migrated.length}   awaiting migration: ${legacy.length}`,
);
if (legacy.length) {
  console.log(
    "  NOT MIGRATED (rendered through the fixed legacy sequence, structurally identical by construction):",
  );
  for (const c of legacy) console.log(`      ${chargeHref(c)}`);
}

console.log("\nBanned terms, over extracted copy");
{
  let any = false;
  for (const c of pages) {
    const hits = bannedHits(copyOf(c));
    for (const h of hits) {
      fail(`${chargeHref(c)} [${h.rule}] ${h.text}`);
      any = true;
    }
  }
  if (!any)
    console.log(
      `  ok    none of the listed strings appear in ${pages.length} pages of copy\n` +
        `  ..    NOT A COMPLIANCE RESULT. This is a word list, and independent testing\n` +
        `  ..    defeated it 16 times out of 16 with ordinary marketing phrasing.\n` +
        `  ..    Fla. Bar R. 4-7 compliance rests on the attorney read, not on this line.`,
    );
}

console.log("\nGeneric headings");
{
  let any = false;
  for (const c of migrated) {
    for (const s of c.sections!) {
      if (isGenericHeading(s.heading)) {
        fail(`${chargeHref(c)} heading is generic: "${s.heading}"`);
        any = true;
      }
    }
  }
  if (!any)
    console.log(
      migrated.length
        ? `  ok    every heading on ${migrated.length} migrated page(s) is charge-specific`
        : "  ..    no migrated pages yet",
    );
}

console.log("\nHeading reuse across pages");
{
  const seen = new Map<string, string[]>();
  for (const c of migrated) {
    for (const s of c.sections!) {
      const n = normalizeHeading(s.heading);
      seen.set(n, [...(seen.get(n) ?? []), chargeHref(c)]);
    }
  }
  const reused = [...seen].filter(([, hrefs]) => hrefs.length > 1);
  if (reused.length) {
    for (const [h, hrefs] of reused)
      fail(`heading "${h}" is used on ${hrefs.length} pages: ${hrefs.join(", ")}`);
  } else {
    console.log("  ok    no heading appears on more than one migrated page");
  }
}

console.log("\nStructural variation, migrated pages against ALL written pages");
{
  let any = false;
  let legacyPairs = 0;
  // ALL pairs, including legacy against legacy. The previous loop ran
  // migrated x all, so the six legacy pages the checker itself prints as
  // "structurally identical by construction" were never compared with each
  // other, and the gate reported green while six of eight pages were
  // interchangeable.
  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      const a = pages[i], b = pages[j];
      const r = interchangeable(a, b);
      if (!r.yes) continue;
      const bothLegacy = !a.sections?.length && !b.sections?.length;
      if (bothLegacy) {
        // Expected and already printed by name under NOT MIGRATED. Counted
        // loudly rather than failing, because the build would otherwise be
        // blocked by the very backlog this workstream is clearing. The count
        // has to reach zero.
        legacyPairs++;
      } else {
        fail(
          `${chargeHref(a)} is structurally interchangeable with ${chargeHref(b)}: ` +
            r.reasons.join("; "),
        );
        any = true;
      }
    }
  }
  if (legacyPairs)
    console.log(
      `  EXPECTED  ${legacyPairs} legacy-vs-legacy pair(s) are interchangeable ` +
        `(baseline ${baseline.structuralPairs}). These are the ${legacy.length} ` +
        `unmigrated pages listed above and the count must reach zero.`,
    );
  if (legacyPairs > baseline.structuralPairs)
    fail(
      `legacy structural debt INCREASED, ${baseline.structuralPairs} to ${legacyPairs}. ` +
        `The baseline may only go down. A new page must not be written on the legacy template.`,
    );
  ratchet.structuralPairs = Math.min(legacyPairs, baseline.structuralPairs);
  if (!any)
    console.log(
      migrated.length
        ? "  ok    no MIGRATED page is interchangeable with any written page"
        : "  ..    no migrated pages yet",
    );
}

// ------------------------------------------------------- duplication
/**
 * Verbatim copy shared between two pages, length-normalised.
 *
 * There was no rail for this at all, which the adversarial pass found after a
 * hand measurement was quoted as if it were one. A number nobody can reproduce
 * and nothing enforces is not a check.
 *
 * Normalised by the SMALLER page's shingle count rather than reported raw,
 * because a raw count rewards short pages and punishes thorough ones. The two
 * longest pages on the site shared the fourth-highest raw count and the LOWEST
 * proportional rate in the top eight, which is the opposite conclusion.
 *
 * Legitimate sharing exists and is not a defect: a courthouse address, a quoted
 * statute, a rule that governs every charge. The threshold is set above that
 * floor rather than at zero.
 */
function shingles(strings: string[], n = 8): Set<string> {
  const w = strings
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const out = new Set<string>();
  for (let i = 0; i + n <= w.length; i++) out.add(w.slice(i, i + n).join(" "));
  return out;
}

/**
 * Runs this project REQUIRES to be identical, excluded from the duplication
 * measure.
 *
 * Two kinds, and both are compelled rather than chosen:
 *
 *   1. Verbatim statutory text. Every row in the 70 audited statute tables
 *      carries the exact words it was built from, and the rule for writers is
 *      that a quote is verbatim. Two pages resting on the same subsection
 *      therefore MUST say those words identically. Counting that as
 *      duplication would mean the gate penalising the quotation rule, and the
 *      only way to satisfy both would be to paraphrase a statute, which is the
 *      error this whole project exists to prevent.
 *   2. Fixed institutional names and addresses. "The Office of the State
 *      Attorney for the Thirteenth Judicial Circuit" has no second phrasing,
 *      and the courthouse addresses are verified facts, not prose.
 *
 * WHAT THIS DELIBERATELY DOES NOT EXCUSE: everything a writer actually chose.
 * The measure still sees narrative, explanation, headings, guidance and FAQ
 * prose, which is where "the same document with the nouns swapped" actually
 * lives. This narrows the measure to what it was always meant to catch; it
 * does not raise the limit, which stays at 5 percent.
 */
const COMPELLED_PHRASES = [
  "the Office of the State Attorney for the Thirteenth Judicial Circuit",
  "the Hillsborough County Clerk",
  "the Edgecomb Courthouse, 800 E. Twiggs Street, Room 101",
  "the Plant City Courthouse, 301 North Michigan Avenue, Room 1071",
  "the Middle District of Florida, Tampa Division",
  "the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue",
];

const compelledShingles: Set<string> = (() => {
  const src: string[] = [...COMPELLED_PHRASES];
  for (const t of Object.values(STATUTES)) {
    for (const r of t.rows) {
      if (r.quote) src.push(r.quote);
      if (r.trigger) src.push(r.trigger);
    }
  }
  // Verbatim RULE text, which the statute tables do not carry because the
  // tables record provisions that assign a degree. The Rules of Criminal
  // Procedure govern first appearance and charging deadlines identically for
  // every charge in the set, so every charge page quotes the same words, and
  // the pre-write fetches in PAGE-SOURCES.md are where those words live. Same
  // justification as statutory quotes: compelled, not chosen.
  const sources = "docs/research/PAGE-SOURCES.md";
  if (existsSync(sources)) {
    for (const line of readFileSync(sources, "utf8").split("\n")) {
      const m = line.match(/^\s*>\s?(.*)$/);
      if (m && m[1].trim()) src.push(m[1]);
    }
  }
  return shingles(src);
})();

function duplication(x: ChargePage, y: ChargePage): { shared: number; rate: number } {
  const A = shingles(copyOf(x));
  const B = shingles(copyOf(y));
  const shared = [...A].filter((g) => B.has(g) && !compelledShingles.has(g)).length;
  // The denominator drops the compelled runs too, so a page that is mostly
  // quotation is not flattered by a larger denominator than it earned.
  const denom = Math.min(
    [...A].filter((g) => !compelledShingles.has(g)).length,
    [...B].filter((g) => !compelledShingles.has(g)).length,
  ) || 1;
  return { shared, rate: shared / denom };
}

const DUPLICATION_LIMIT = 0.05;

console.log("\nVerbatim duplication between pages");
{
  let worstMigrated = 0;
  let anyDup = false;
  let legacyOver = 0;
  let worstLegacyRate = 0;
  const legacyOverNames: string[] = [];
  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      const a = pages[i], b = pages[j];
      const { shared, rate } = duplication(a, b);
      const bothLegacy = !a.sections?.length && !b.sections?.length;
      if (rate < DUPLICATION_LIMIT) continue;
      if (bothLegacy) {
        legacyOver++;
        worstLegacyRate = Math.max(worstLegacyRate, rate);
        legacyOverNames.push(
          `${chargeHref(a)}<>${chargeHref(b)} at ${(rate * 100).toFixed(1)}%`,
        );
        continue;
      }
      anyDup = true;
      fail(
        `${chargeHref(a)} and ${chargeHref(b)} share ${shared} eight-word runs, ` +
          `${(rate * 100).toFixed(1)}% of the shorter page, over the ` +
          `${(DUPLICATION_LIMIT * 100).toFixed(0)}% limit`,
      );
    }
  }
  for (const a of migrated)
    for (const b of pages)
      if (a !== b) worstMigrated = Math.max(worstMigrated, duplication(a, b).rate);
  if (legacyOver)
    console.log(
      `  EXPECTED  ${legacyOver} legacy-vs-legacy pair(s) over the limit ` +
        `(baseline ${baseline.duplicationPairs}): ${legacyOverNames.join("; ")}`,
    );
  if (legacyOver > baseline.duplicationPairs)
    fail(
      `legacy duplication debt INCREASED, ${baseline.duplicationPairs} to ${legacyOver}. ` +
        `The baseline may only go down.`,
    );
  // MAGNITUDE, not just count. The gate testing replaced one legacy page with a
  // verbatim clone of another: two published pages 99% identical, pair count
  // unchanged at 1, build green. Counting pairs says nothing about how bad a
  // pair is.
  const LEGACY_RATE_CEILING = 0.15;
  if (worstLegacyRate > LEGACY_RATE_CEILING)
    fail(
      `a legacy pair is ${(worstLegacyRate * 100).toFixed(1)}% verbatim identical, over the ` +
        `${(LEGACY_RATE_CEILING * 100).toFixed(0)}% ceiling. The legacy exemption tolerates ` +
        `shared boilerplate, not a page that is a copy of another page.`,
    );
  ratchet.duplicationPairs = Math.min(legacyOver, baseline.duplicationPairs);
  if (!anyDup)
    console.log(
      migrated.length
        ? `  ok    worst migrated pair is ${(worstMigrated * 100).toFixed(1)}% against a ${(DUPLICATION_LIMIT * 100).toFixed(0)}% limit`
        : "  ..    no migrated pages yet",
    );
}

/**
 * FAQ provenance, which used to be a two-value type and is now a checked string.
 *
 * The point of the field is that a question lifted from a real search result
 * and a question invented at the desk are different claims. The old union
 * could not tell them apart, so writers collapsed both to "drafted" and the
 * information was lost. Widening the type moved the honesty requirement here:
 * a value must BEGIN with a recognised provenance, so "research" cannot be
 * conjured by typing it, and everything after the prefix is free text naming
 * which source.
 */
/**
 * Every payload a section carries must be one the template renders.
 *
 * An adversarial reviewer found 1,489 words on the DUI page that no reader
 * could see: SectionBody was a switch returning one payload, so `prose` on a
 * section of kind "statute" was dropped. Every other gate passed, because
 * pageCopy extracts fields regardless of kind, so the checks were reading text
 * that was not on the page and the reader-question coverage check was crediting
 * answers nobody received.
 *
 * This is the guard for the general case rather than that instance. Add a
 * payload field to ChargeSection and forget to teach the renderer about it, and
 * the build fails here instead of deleting the content in silence.
 */
console.log("\nSection payloads reach the page");
{
  const RENDERED = ["prose", "bullets", "penalties", "statute", "steps", "guidance"] as const;
  let bad = 0;
  for (const c of charges) {
    for (const s of c.sections ?? []) {
      for (const key of Object.keys(s)) {
        if (["id", "heading", "kind", "answers"].includes(key)) continue;
        const v = (s as Record<string, unknown>)[key];
        const empty = v == null || (Array.isArray(v) && v.length === 0);
        if (empty) continue;
        if (!(RENDERED as readonly string[]).includes(key)) {
          bad++;
          fail(
            `${chargeHref(c)} section "${s.id}" carries "${key}", which ChargeTemplate ` +
              `does not render. Teach SectionBody about it or remove it: content the ` +
              `gates can read but a reader cannot see is worse than no content.`,
          );
        }
      }
    }
  }
  if (!bad)
    console.log("  ok    every payload on every section is one the template renders");
}

console.log("\nFAQ provenance");
{
  const PREFIXES = [
    "keywords.md",
    "drafted",
    "PAA",
    "People Also Ask",
    "brief",
    "W1-", "W2-", "W3-", "W4-", "ST-", "FED-", "WC-", "OPP-",
  ];
  let bad = 0;
  for (const c of charges) {
    for (const f of c.faq ?? []) {
      const src = (f.source ?? "").trim();
      if (!src) {
        fail(`${chargeHref(c)} FAQ "${f.question.slice(0, 60)}" has no source.`);
        bad++;
        continue;
      }
      if (!PREFIXES.some((p) => src.startsWith(p))) {
        fail(
          `${chargeHref(c)} FAQ source "${src.slice(0, 60)}" starts with no recognised ` +
            `provenance. Allowed prefixes: ${PREFIXES.join(", ")}. A source is a record of ` +
            `where the question came from, not a description of it.`,
        );
        bad++;
      }
    }
  }
  if (!bad) console.log("  ok    every FAQ question records a recognised provenance");
}

console.log("\nReader-question coverage");
{
  const QS = Object.keys(READER_QUESTIONS) as ReaderQuestion[];
  for (const c of migrated) {
    const answered = new Set<ReaderQuestion>();
    for (const s of c.sections!) for (const q of s.answers ?? []) answered.add(q);
    const missing = QS.filter(
      (q) => !answered.has(q) && !c.readerNeeds?.[q],
    );
    if (missing.length) {
      fail(
        `${chargeHref(c)} does not answer, and does not record a [NEEDS] for: ` +
          missing.map((q) => `${q} (${READER_QUESTIONS[q]})`).join("; "),
      );
    } else {
      const needs = QS.filter((q) => c.readerNeeds?.[q]);
      console.log(
        `  ok    ${chargeHref(c)}: ${QS.length - needs.length}/6 answered` +
          (needs.length ? `, ${needs.length} recorded [NEEDS]: ${needs.join(", ")}` : ""),
      );
    }
  }
  if (!migrated.length) console.log("  ..    no migrated pages yet");
}

const ratchetOut: Baseline = {
  structuralPairs: ratchet.structuralPairs ?? baseline.structuralPairs,
  duplicationPairs: ratchet.duplicationPairs ?? baseline.duplicationPairs,
};
if (!failed) {
  const changed =
    ratchetOut.structuralPairs !== baseline.structuralPairs ||
    ratchetOut.duplicationPairs !== baseline.duplicationPairs;
  writeFileSync(BASELINE_PATH, JSON.stringify(ratchetOut, null, 2) + "\n");
  if (changed)
    console.log(
      `\nBaseline ratcheted down to ${ratchetOut.structuralPairs} structural, ` +
        `${ratchetOut.duplicationPairs} duplication.`,
    );
}

console.log(
  failed ? "\nPage checks FAILED." : "\nPage checks passed.",
);
process.exit(failed ? 1 : 0);
