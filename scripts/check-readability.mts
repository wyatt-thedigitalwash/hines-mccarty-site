/**
 * check:readability. DECISIONS.md D41.
 *
 * WHY THIS EXISTS. Every gate in this repository checks whether a page is TRUE
 * or whether it is COMPLIANT. Nothing checked whether a person could read it,
 * and the absence was not neutral: the verification rails actively pushed the
 * copy the other way. A rule that every claim trace to a fetched provision, and
 * a writer trying to make that traceable in the sentence itself, produced pages
 * where the shape "Statute 322.2615(1)(b)3. provides that the driver may
 * request..." repeated hundreds of times. Measured on the DUI page before this
 * gate existed: grade 17.8, average sentence 38 words, 300 subsection numbers in
 * body copy. That page is written for someone arrested last night.
 *
 * The two properties were never in tension. D41 separates them by LAYER: body
 * copy states the fact in plain words, a sources line at the foot of each
 * section names the provisions, and the verified statutory text sits in a
 * collapsed block. Provenance is unchanged; only its presentation moves.
 *
 * WHAT THIS GATE MEASURES is `bodyCopy` from src/lib/page-copy.ts, which
 * excludes the sources line and the statute block by construction. That
 * exclusion is the gate's largest assumption and it is stated here rather than
 * buried: if `bodyCopy` ever started returning the statute blocks, every page
 * would fail, and if it ever started EXCLUDING real prose, this gate would go
 * quiet while the pages got worse. The second failure is the dangerous one, so
 * a self-test below asserts that bodyCopy still returns the fields it claims to.
 *
 * SIX RULES, all from D41:
 *   R1  Flesch-Kincaid grade <= 8.0 per page, <= 9.5 per section
 *   R2  average sentence under 20 words
 *   R3  second person: every section's body addresses the reader as "you"
 *   R4  no run of prose over 300 words before a heading, table, or list
 *   R5  no paragraph over 4 sentences
 *   R6  zero subsection numbers and zero statute-voice constructions in body copy
 *
 * THE BASELINE. D41 is applied one page at a time, so a gate that failed all 28
 * written pages on the day it was built would have been switched off on the same
 * day. Pages not yet converted are recorded in docs/build/readability-baseline.json
 * with the scores they had when the gate was built, and those scores may only
 * improve. A page in neither list FAILS: a new page is written to the standard or
 * it is not written. Same ratchet, and the same fail-closed handling of a missing
 * or corrupt file, as the legacy baseline in check-pages.mts.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { charges, chargeHref } from "../src/lib/site.ts";
import { bodyCopy, type BodyChunk } from "../src/lib/page-copy.ts";
import {
  GRADE_PAGE,
  GRADE_SECTION,
  SENTENCE_WORDS,
  RUN_WORDS,
  PARA_SENTENCES,
  CITATION_PATTERNS,
  STATUTE_VOICE,
  score,
  sentencesOf,
  wordsOf,
} from "../src/lib/readability.ts";

let failed = false;
const fail = (msg: string) => {
  console.error(`  FAIL  ${msg}`);
  failed = true;
};

// ------------------------------------------------------------------ baseline
const BASELINE_PATH = "docs/build/readability-baseline.json";
type Pending = Record<string, { grade: number; asl: number }>;
type Baseline = { converted: string[]; pending: Pending };

function loadBaseline(): Baseline {
  if (!existsSync(BASELINE_PATH)) {
    fail(
      `${BASELINE_PATH} is missing. It records which pages are on the D41 ` +
        `standard and how bad the rest currently are, so its absence is a failure ` +
        `rather than a clean slate. Restore it from git.`,
    );
    return { converted: [], pending: {} };
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(readFileSync(BASELINE_PATH, "utf8"));
  } catch {
    fail(`${BASELINE_PATH} is not valid JSON.`);
    return { converted: [], pending: {} };
  }
  const b = parsed as Partial<Baseline>;
  if (!Array.isArray(b.converted) || typeof b.pending !== "object" || !b.pending) {
    fail(`${BASELINE_PATH} is missing "converted" (array) or "pending" (object).`);
    return { converted: [], pending: {} };
  }
  return { converted: b.converted, pending: b.pending };
}

// ==================================================================
// PART 1. Self-tests. Each plants the violation and asserts it fires.
// ==================================================================
console.log("Readability-gate self-tests (planted violations must fire)");
{
  let bad = 0;
  const t = (name: string, cond: boolean) => {
    if (cond) console.log(`  ok    ${name}`);
    else { fail(`SELF-TEST: ${name}`); bad++; }
  };

  // R1. The real sentence this rule exists to reject, from the pre-D41 page.
  const planted =
    "Statute 322.2615(1)(b)3. provides that the driver may request a formal or " +
    "informal review of the suspension by the department within 10 days after the " +
    "date of issuance of the notice of suspension or may request a review of " +
    "eligibility for a restricted driving privilege under Statute 322.271(7).";
  const rewritten = "You have 10 days. The clock starts on the date on the notice.";
  const p = score([planted]);
  const r = score([rewritten]);
  t(`R1 fires on the pre-D41 sentence (grade ${p.grade.toFixed(1)} > ${GRADE_PAGE})`,
    p.grade > GRADE_PAGE);
  t(`R1 passes the rewrite (grade ${r.grade.toFixed(1)} <= ${GRADE_PAGE})`,
    r.grade <= GRADE_PAGE);

  // R2.
  t(`R2 fires on the planted sentence (${p.asl.toFixed(0)} words > ${SENTENCE_WORDS})`,
    p.asl > SENTENCE_WORDS);
  t(`R2 passes the rewrite (${r.asl.toFixed(0)} words)`, r.asl < SENTENCE_WORDS);

  // R3.
  const secondPerson = (s: string) => /\b(you|your|yours|you're)\b/i.test(s);
  t("R3 fires on copy that never addresses the reader",
    !secondPerson("The driver must request a review within the period allowed."));
  t("R3 passes copy that does", secondPerson("You have 10 days to ask for a review."));

  // R4.
  const run = (n: number) => "word ".repeat(n).trim();
  t(`R4 fires on a ${RUN_WORDS + 1}-word prose run`,
    wordsOf(run(RUN_WORDS + 1)).length > RUN_WORDS);
  t(`R4 passes a ${RUN_WORDS}-word run`, wordsOf(run(RUN_WORDS)).length <= RUN_WORDS);

  // R5.
  const fiveSentences = "One thing. Two things. Three things. Four things. Five things.";
  t("R5 fires on a five-sentence paragraph",
    sentencesOf(fiveSentences).length > PARA_SENTENCES);
  t("R5 passes a four-sentence paragraph",
    sentencesOf("One thing. Two things. Three things. Four things.").length <= PARA_SENTENCES);

  // R6, each pattern shown firing on a real shape from the pre-D41 page.
  const r6 = (s: string) =>
    [...CITATION_PATTERNS, ...STATUTE_VOICE].filter(([, re]) => re.test(s)).map(([n]) => n);
  const cases: [string, string][] = [
    ["statute number", "The ladder in 316.193 sets the range."],
    ["subsection number", "Look at (1)(b)3. for the period."],
    ["named statute", "Statute 322.2615 gives you 10 days."],
    ["rule citation", "Rule 3.130(a) sets first appearance."],
    ["subsection word", "Subparagraph 4. expires at midnight."],
    ["statute-as-subject", "The statute provides you with a review."],
    ["provides that", "You may drive pursuant to a restricted licence."],
    ["third-person reader", "The driver may ask for a hearing."],
  ];
  for (const [rule, sentence] of cases)
    t(`R6 fires "${rule}" on: "${sentence.slice(0, 46)}"`, r6(sentence).includes(rule));

  // R6 CONTROL. Plain copy that names no provision must stay silent, or the rule
  // is an off switch for ordinary writing rather than a check on statute-voice.
  const controls = [
    "You have 10 days. They start from the date on the notice, not from your arrest.",
    "The officer took your license and handed you a piece of paper.",
    "A fourth DUI is a felony no matter how long ago the others were.",
    "You can pay for your own blood test. The officer cannot stop you.",
    "Ask for the hearing. It does not pause the suspension.",
  ];
  const noisy = controls.flatMap((c) => r6(c).map((n) => `${n} on "${c.slice(0, 40)}"`));
  t(`R6 CONTROL: silent on ${controls.length} plain sentences`, noisy.length === 0);
  if (noisy.length) console.error(`        ${noisy.join(" | ")}`);

  // The bodyCopy contract. If this extractor stops returning real prose, this
  // whole gate goes quiet while the pages get worse, which is the failure
  // direction that does not announce itself.
  const probe = charges.find((c) => c.sections?.length);
  if (probe) {
    const chunks = bodyCopy(probe);
    const wheres = new Set(chunks.map((c) => c.where));
    t("bodyCopy returns the lead", wheres.has("lead"));
    t("bodyCopy returns section chunks", chunks.some((c) => c.run));
    t("bodyCopy returns the FAQ", wheres.has("faq"));
    const joined = chunks.map((c) => c.text).join("\n");
    t("bodyCopy EXCLUDES the statute blocks",
      (probe.sections ?? []).every((s) => !s.statute || !joined.includes(s.statute.body)));
    t("bodyCopy EXCLUDES the sources line",
      (probe.sections ?? []).every((s) => (s.sources ?? []).every((x) => !joined.includes(x))));
  }

  if (bad) {
    console.log("\nReadability check FAILED (self-tests).");
    process.exit(1);
  }
}

// ==================================================================
// PART 2. The real pages.
// ==================================================================
const baseline = loadBaseline();
const written = charges.filter((c) => c.sections?.length);
const converted = new Set(baseline.converted);

function auditChunk(chunk: BodyChunk): string[] {
  const hits: string[] = [];
  for (const [name, re] of [...CITATION_PATTERNS, ...STATUTE_VOICE]) {
    const m = re.exec(chunk.text);
    if (m) hits.push(`${name} ("${m[0]}")`);
  }
  return hits;
}

console.log(
  `\nD41 standard: ${converted.size} page(s) converted, ` +
    `${Object.keys(baseline.pending).length} recorded as pending`,
);

const nextPending: Pending = {};

for (const c of written) {
  const href = chargeHref(c);
  const chunks = bodyCopy(c);
  const all = score(chunks.map((k) => k.text));
  const isConverted = converted.has(href);

  if (!isConverted) {
    // A page not on the standard must be RECORDED as not on it, with numbers
    // that may only improve. Silence is not an option in either direction.
    const prev = baseline.pending[href];
    if (!prev) {
      fail(
        `${href} is neither converted (D41) nor recorded in ${BASELINE_PATH}. ` +
          `A page is written to the readability standard or its debt is recorded. ` +
          `Grade ${all.grade.toFixed(1)}, average sentence ${all.asl.toFixed(0)} words.`,
      );
      continue;
    }
    // Rounded to one decimal, so ordinary noise in an untouched page does not
    // fail the build, and a real regression still does.
    const worse =
      Number(all.grade.toFixed(1)) > prev.grade + 0.05 ||
      Number(all.asl.toFixed(1)) > prev.asl + 0.05;
    if (worse) {
      fail(
        `${href} got HARDER to read: grade ${prev.grade.toFixed(1)} to ` +
          `${all.grade.toFixed(1)}, average sentence ${prev.asl.toFixed(1)} to ` +
          `${all.asl.toFixed(1)} words. Pending debt may only go down.`,
      );
    }
    nextPending[href] = {
      grade: Math.min(prev.grade, Number(all.grade.toFixed(1))),
      asl: Math.min(prev.asl, Number(all.asl.toFixed(1))),
    };
    console.log(
      `  PENDING  ${href}  grade ${all.grade.toFixed(1)}, ` +
        `sentence ${all.asl.toFixed(0)}w, ${all.words} words of body copy`,
    );
    continue;
  }

  // ---------------------------------------------------------- the standard
  console.log(`\n  ${href}  (D41)`);
  const problems: string[] = [];

  // R1 page
  if (all.grade > GRADE_PAGE)
    problems.push(`R1 page grade ${all.grade.toFixed(1)} over ${GRADE_PAGE}`);
  // R2
  if (all.asl >= SENTENCE_WORDS)
    problems.push(`R2 average sentence ${all.asl.toFixed(1)} words, limit under ${SENTENCE_WORDS}`);

  for (const s of c.sections ?? []) {
    const mine = chunks.filter((k) => k.where === s.id);
    const sec = score(mine.map((k) => k.text));
    // R1 section
    if (sec.grade > GRADE_SECTION)
      problems.push(`R1 section "${s.id}" grade ${sec.grade.toFixed(1)} over ${GRADE_SECTION}`);
    // R3
    const text = mine.map((k) => k.text).join(" ");
    if (!/\b(you|your|yours|you're)\b/i.test(text))
      problems.push(`R3 section "${s.id}" never addresses the reader as "you"`);
    // R4: the longest uninterrupted run of prose.
    let run = 0, worst = 0;
    for (const k of chunks.filter((x) => x.where === s.id)) {
      if (k.run) { run += wordsOf(k.text).length; worst = Math.max(worst, run); }
      else run = 0;
    }
    if (worst > RUN_WORDS)
      problems.push(`R4 section "${s.id}" runs ${worst} words of prose without a break, limit ${RUN_WORDS}`);
    console.log(
      `    ${s.id.padEnd(18)} grade ${sec.grade.toFixed(1).padStart(4)}  ` +
        `sentence ${sec.asl.toFixed(0).padStart(2)}w  body ${String(sec.words).padStart(4)}w  ` +
        `longest run ${String(worst).padStart(3)}w`,
    );
  }

  for (const k of chunks) {
    // R5. EVERY chunk, not only `run` ones. D41 says "no paragraph over 4
    // sentences", and the first version read that as prose paragraphs alone,
    // which left the loophole the pre-D41 page would have driven straight
    // through: its longest single block of text was an 11-sentence BULLET, and
    // its FAQ answers ran to nine. A list item and an FAQ answer are paragraphs
    // wearing different markup. Section headings are one sentence by
    // construction and cost nothing to include.
    const n = sentencesOf(k.text).length;
    if (n > PARA_SENTENCES)
      problems.push(`R5 "${k.where}" has a ${n}-sentence block: "${k.text.slice(0, 60)}..."`);
    // R6
    const hits = auditChunk(k);
    for (const h of hits)
      problems.push(`R6 "${k.where}" body copy carries a ${h}: "${k.text.slice(0, 60)}..."`);
  }

  console.log(
    `    PAGE  grade ${all.grade.toFixed(1)}, average sentence ${all.asl.toFixed(1)} words, ` +
      `${all.words} words of body copy`,
  );
  if (problems.length) for (const p of problems) fail(`${href} ${p}`);
  else console.log(`    ok    all six D41 rules hold`);
}

// The ratchet is written only on a clean run, same as the legacy baseline: a
// failing run must not be able to record its own numbers as the new floor.
if (!failed) {
  const out: Baseline = { converted: [...converted].sort(), pending: {} };
  for (const k of Object.keys(nextPending).sort()) out.pending[k] = nextPending[k];
  const before = JSON.stringify(baseline.pending);
  writeFileSync(BASELINE_PATH, JSON.stringify(out, null, 2) + "\n");
  if (JSON.stringify(out.pending) !== before)
    console.log(`\nPending readability debt ratcheted down in ${BASELINE_PATH}.`);
}

console.log(
  "\n  ..    KNOWN LIMITS, printed rather than implied. The syllable count is a " +
    "heuristic, so the grade is a proxy and not an authority on what an eighth " +
    "grader can read. Flesch-Kincaid rewards short sentences and short words and " +
    "cannot see whether a sentence means anything, so copy can be chopped into " +
    "fragments to pass this gate; that is a review problem, not one a formula " +
    "catches. R3 checks that the word \"you\" appears somewhere in a section, not " +
    "that the section is written in second person throughout. R6's voice half is " +
    "a word list and is defeatable by ordinary paraphrase. What this gate does " +
    "guarantee is that no subsection number reaches body copy and that the " +
    "measured numbers are real.",
);
console.log(failed ? "\nReadability check FAILED." : "\nReadability check passed.");
process.exit(failed ? 1 : 0);
