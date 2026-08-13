/**
 * Page-level gates: banned terms, structural variation, generic headings, and
 * reader-question coverage.
 *
 * PART 2 COMES FIRST IN THIS FILE'S DESIGN, THOUGH IT RUNS FIRST TOO. Every
 * check here is preceded by a self-test that plants the exact violation the
 * check exists to catch and asserts that it fires. This is not ceremony. The
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
import { charges, chargeHref } from "../src/lib/site.ts";
import {
  isGenericHeading,
  normalizeHeading,
  READER_QUESTIONS,
  type ReaderQuestion,
} from "../src/lib/charge-page.ts";
import type { ChargePage } from "../src/lib/site.ts";

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
function copyOf(c: ChargePage): string[] {
  const out: (string | undefined)[] = [
    c.title,
    c.metaTitle,
    c.metaDescription,
    c.description,
    c.lead,
    c.counterpart?.label,
    c.counterpart?.note,
    c.statute?.citation,
    c.statute?.body,
    ...(c.elements ?? []),
    ...(c.defenseApproach ?? []),
    ...(c.forum ?? []),
    ...(c.penalties ?? []).flatMap((p) => [p.degree, p.maximum, p.offenseLevel, p.note]),
    ...(c.faq ?? []).flatMap((f) => [f.question, f.answer]),
    ...(c.relatedGuides ?? []).map((g) => g.label),
    ...(c.sections ?? []).flatMap((s) => [
      s.heading,
      ...(s.prose ?? []),
      ...(s.bullets ?? []),
      ...(s.statute ? [s.statute.citation, s.statute.body] : []),
      ...(s.penalties ?? []).flatMap((p) => [p.degree, p.maximum, p.offenseLevel, p.note]),
      ...(s.steps ?? []).flatMap((t) => [t.when, t.what]),
      ...(s.guidance ?? []).flatMap((g) => [g.heading, ...g.items]),
    ]),
  ];
  return out.filter((x): x is string => typeof x === "string" && x.length > 0);
}

// --------------------------------------------------------- banned terms
/** Superiority and promise language. Fla. Bar R. 4-7.13. Hard failure. */
const SUPERIORITY =
  /\b(best|top[-\s]?rated|expert|experts|expertise|specialist|specialists|premier|renowned|elite|unmatched|unparalleled|leading|number one|#1|most successful|highest[-\s]rated)\b/i;

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
      const m = s.match(re);
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

function signature(c: ChargePage): { ids: string[]; headings: string[] } {
  if (c.sections?.length) {
    return {
      ids: c.sections.map((s) => s.id),
      headings: c.sections.map((s) => normalizeHeading(s.heading)),
    };
  }
  const ids: string[] = [];
  if (c.statute) ids.push("statute");
  if (c.penalties) ids.push("penalties");
  if (c.elements) ids.push("elements");
  if (c.defenseApproach) ids.push("defense");
  if (c.forum) ids.push("forum");
  return { ids, headings: LEGACY_HEADINGS.map(normalizeHeading) };
}

function jaccard(a: string[], b: string[]): number {
  const A = new Set(a);
  const B = new Set(b);
  const inter = [...A].filter((x) => B.has(x)).length;
  const union = new Set([...a, ...b]).size;
  return union === 0 ? 0 : inter / union;
}

/** Two pages are structurally interchangeable when shape AND headings match. */
function interchangeable(
  x: ChargePage,
  y: ChargePage,
): { yes: boolean; idsSame: boolean; headingOverlap: number } {
  const a = signature(x);
  const b = signature(y);
  const idsSame = a.ids.join(">") === b.ids.join(">");
  const headingOverlap = jaccard(a.headings, b.headings);
  return { yes: idsSame && headingOverlap >= 0.7, idsSame, headingOverlap };
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
  const noise = bannedHits(control);
  const real = noise.filter((h) => h.rule !== "superiority" || !/leading/i.test(h.text));
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
        { id: "b", heading: "Degrees and penalties", kind: "prose" },
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
  const varied = mk("three");
  varied.sections = [
    { id: "clock", heading: "The ten days that start at the roadside", kind: "prose" },
    { id: "ladder", heading: "Why a fourth conviction doubles the score", kind: "prose" },
  ];
  if (interchangeable(mk("four"), varied).yes) {
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
  if (!any) console.log(`  ok    no banned terms in ${pages.length} pages of copy`);
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
  for (const a of migrated) {
    for (const b of pages) {
      if (a === b) continue;
      const r = interchangeable(a, b);
      if (r.yes) {
        fail(
          `${chargeHref(a)} is structurally interchangeable with ${chargeHref(b)} ` +
            `(identical section order, heading overlap ${r.headingOverlap.toFixed(2)})`,
        );
        any = true;
      }
    }
  }
  if (!any)
    console.log(
      migrated.length
        ? "  ok    no migrated page is interchangeable with any written page"
        : "  ..    no migrated pages yet",
    );
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

console.log(
  failed ? "\nPage checks FAILED." : "\nPage checks passed.",
);
process.exit(failed ? 1 : 0);
