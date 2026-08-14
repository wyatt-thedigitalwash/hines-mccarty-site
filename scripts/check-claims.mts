/**
 * Legal claims in page prose, checked against the verified statute tables.
 *
 * ACCEPTANCE TEST, and the only reason to trust this file: it must catch all
 * three errors that actually shipped on the grand theft page and that four
 * adversarial rounds were needed to find. Those are planted below as self-tests.
 * If it cannot catch the errors that already happened, it will not catch the
 * next one.
 *
 * WHAT IT CHECKS.
 *
 *   1. Amount-to-degree. "a $500 theft is a first degree misdemeanor" is an
 *      assertion with a number and a degree in it. src/lib/statutes.ts knows
 *      every degree the statute can produce at $500. If the sentence names one
 *      and the statute produces several, the sentence is incomplete in the way
 *      that has failed this project three times.
 *
 *   2. Exhaustive claims over a partial reading. "only", "nothing else",
 *      "in practice that means" are claims about what a statute does NOT cover.
 *      A negative cannot rest on a partial reading, so they are barred unless
 *      the statute is recorded `whole-section`.
 *
 *   3. Subsection-to-degree. "812.014(3)(a) ... second degree" must match the
 *      row for that subsection.
 *
 * WHAT IT DELIBERATELY DOES NOT CHECK. Prose that makes no numeric or
 * subsection claim. This gate narrows the surface where a legal error can hide;
 * it does not eliminate it, and it is not a substitute for the adversarial pass.
 * Saying so here because the previous gate in this project was reported as
 * stronger than it was.
 */
import { readFileSync } from "node:fs";
import { charges, chargeHref } from "../src/lib/site.ts";
import { pageCopy } from "../src/lib/page-copy.ts";
import { STATUTES, degreesAt, type Degree, type GradingRow } from "../src/lib/statutes.ts";

let failed = false;
const fail = (msg: string) => {
  console.error(`  FAIL  ${msg}`);
  failed = true;
};

const DEGREE_WORDS: [RegExp, Degree][] = [
  [/\bpetit theft of the first degree\b|\bfirst degree misdemeanou?r\b|\bmisdemeanou?r of the first degree\b/i, "first degree misdemeanor"],
  [/\bpetit theft of the second degree\b|\bsecond degree misdemeanou?r\b|\bmisdemeanou?r of the second degree\b/i, "second degree misdemeanor"],
  [/\bthird degree felony\b|\bfelony of the third degree\b|\bgrand theft of the third degree\b/i, "third degree felony"],
  [/\bsecond degree felony\b|\bfelony of the second degree\b|\bgrand theft of the second degree\b/i, "second degree felony"],
  [/\bfirst degree felony\b|\bfelony of the first degree\b|\bgrand theft of the first degree\b/i, "first degree felony"],
];

/** Words that assert what a statute does NOT reach. */
const EXHAUSTIVE =
  /\b(only|nothing else|in practice that means|means only|no other|the only|uniformly|always|never)\b/i;

/** Which scope, if any, a sentence puts itself in. */
function scopeOf(sentence: string): GradingRow["scope"] | null {
  // An explicit NOT-a-dwelling statement puts the sentence on the general
  // ladder deliberately. "Taken from a shop, $500 is..." is scoped, not vague.
  if (/\b(from a shop|from a store|not taken from a dwelling|except where taken from a dwelling|away from a dwelling)\b/i.test(sentence))
    return null;
  if (/\bdwelling|curtilage|\bhome\b|\bhouse\b/i.test(sentence)) return "dwelling";
  if (/\bfirearm|motor vehicle|stop sign|controlled substance|will, codicil|item list\b/i.test(sentence))
    return "item";
  if (/\bprior|previously convicted|priors\b/i.test(sentence)) return "prior";
  return null;
}

/**
 * Amounts that are POINT claims, not range boundaries.
 *
 * "$500 is a first degree misdemeanor" asserts something about $500. "valued at
 * $100 or more but less than $750" describes a range and asserts nothing about
 * $750 itself. The first version conflated them and fired on correct copy that
 * was quoting the statute, which is how a gate earns its way into being
 * ignored.
 */
function pointAmounts(sentence: string): number[] {
  const out: number[] = [];
  for (const m of sentence.matchAll(/\$([\d,]+)/g)) {
    const n = Number(m[1].replace(/,/g, ""));
    if (!Number.isFinite(n) || n <= 0) continue;
    const before = sentence.slice(Math.max(0, m.index! - 30), m.index!);
    const after = sentence.slice(m.index! + m[0].length, m.index! + m[0].length + 12);
    const isBoundary =
      /\b(less than|more than|under|over|at least|exceeding|up to|between|below|above|from)\s*$/i.test(before) ||
      /^\s*(or more|or less|and up|or higher)/i.test(after);
    if (!isBoundary) out.push(n);
  }
  return out;
}

function sentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function degreesIn(sentence: string): Set<Degree> {
  const out = new Set<Degree>();
  for (const [re, d] of DEGREE_WORDS) if (re.test(sentence)) out.add(d);
  return out;
}



type Problem = { kind: string; sentence: string; detail: string };

/**
 * What min and max are counting, per statute. See the _why block in the JSON.
 *
 * Without this the amount rules compare a dollar figure in a sentence against
 * whatever the row's bounds happen to hold, which on a drug statute is grams.
 * There is no default: an undeclared primary statute with bounded rows fails
 * the gate rather than being assumed to be dollars.
 */
const ANNOTATIONS: Record<string, { amountUnit?: string }> = JSON.parse(
  readFileSync(new URL("./statute-table-annotations.json", import.meta.url), "utf8"),
);

function hasBoundedRows(t: { rows: GradingRow[] }): boolean {
  return t.rows.some((r) => r.min !== null || r.max !== null);
}

function auditSentence(
  s: string,
  statute: string,
  opts: { primary?: boolean } = {},
): Problem[] {
  const t = STATUTES[statute];
  if (!t) return [];
  // The amount-to-degree and residual rules ask "is this dollar claim right
  // under THIS statute's ladder". That question only makes sense against the
  // statute the page is actually grading under, its PRIMARY statute(s). Run
  // against every statute a page merely cites and a correct sentence about the
  // theft ladder gets judged by the organized-fraud ladder, which is how the
  // gate started crying wolf the day the table count hit 68. The
  // citation-keyed rules (2 and 3) stay page-wide: they only fire on explicit
  // citations of this statute, so they cannot cross wires.
  const primary = opts.primary ?? true;
  const out: Problem[] = [];
  const degrees = degreesIn(s);
  const amounts = pointAmounts(s);
  const scope = scopeOf(s);

  // 2. Exhaustive claim over a partial reading.
  // The SENTENCE must be about this statute, not merely sit on a page that
  // mentions it once. Otherwise a page citing 812.014 in passing inherits every
  // exhaustive-claim finding belonging to the theft ladder.
  const sentenceCitesStatute = s.includes(statute);
  if (
    sentenceCitesStatute &&
    EXHAUSTIVE.test(s) &&
    degrees.size &&
    t.completeness !== "whole-section"
  ) {
    out.push({
      kind: "exhaustive-over-partial",
      sentence: s,
      detail: `asserts what ${t.cite} does not reach, but the section is recorded "${t.completeness}"${t.unread ? ` (unread: ${t.unread})` : ""}. A negative cannot rest on a partial reading.`,
    });
  }

  // 1. Amount-to-degree, checked against the ladder the sentence is talking
  // about: the general one unless the sentence names a scope. Dollar amounts
  // may only be compared against a ladder declared to be counting dollars.
  const amountsComparable = ANNOTATIONS[statute]?.amountUnit === "usd";
  if (primary && amountsComparable && degrees.size === 1 && amounts.length) {
    const claimed = [...degrees][0];
    for (const amt of amounts) {
      const possible = degreesAt(statute, amt, { scope: scope ?? null });
      if (!possible.size) continue;
      if (!possible.has(claimed)) {
        out.push({
          kind: "wrong-degree",
          sentence: s,
          detail:
            `says $${amt.toLocaleString()}${scope ? ` (${scope} scope)` : ""} is a ${claimed}. ` +
            `${t.cite} produces: ${[...possible].join(", ")}.`,
        });
      }
    }
    // An UNSCOPED point claim where a scope would change the answer is the
    // exact shape of every error that shipped on this page.
    const explicitGeneral =
      /\b(from a shop|from a store|not taken from a dwelling|except where taken from a dwelling)\b/i.test(s);
    if (!scope && !explicitGeneral) {
      for (const amt of amounts) {
        const general = degreesAt(statute, amt, { scope: null });
        for (const alt of ["dwelling", "item"] as const) {
          const other = degreesAt(statute, amt, { scope: alt });
          if (!other.size) continue;
          // Only across the line a reader actually cares about. Felony vs
          // felony at the same amount is an offense-level difference, not a
          // misdescription, and firing on it would make this gate noise.
          const kind = (d: Degree) => (d.includes("misdemeanor") ? "m" : "f");
          const generalKinds = new Set([...general].map(kind));
          const differs = [...other].some((d) => !generalKinds.has(kind(d)));
          if (differs)
            out.push({
              kind: "unscoped-degree",
              sentence: s,
              detail:
                `states a degree at $${amt.toLocaleString()} without saying whether the ${alt} rules apply. ` +
                `${t.cite} gives ${[...general].join(", ")} generally and ${[...other].join(", ")} under the ${alt} rules.`,
            });
        }
      }
    }
  }

  // 4. THE RESIDUAL RULE. This is the one that encodes all three shipped
  // errors. A residual clause applies to what the rest of the section does not
  // reach, so describing it with a dollar figure, or with "only", asserts a
  // floor it does not have. Every error on this page did exactly that.
  for (const row of primary ? t.rows.filter((r) => r.residual) : []) {
    const namesRow =
      s.includes(row.cite) ||
      (degrees.size === 1 && [...degrees][0] === row.degree);
    if (!namesRow) continue;
    // A comparative bounds it just as surely as a number does. "Below it the
    // same conduct is petit theft of the second degree" gives the residual
    // clause a floor by reference, and that was error one.
    // A comparative bounds the clause only when it points at a VALUE. Bare
    // "under" also introduces a citation ("under 812.014(3)(a)") and "up to"
    // also introduces a sentence ("up to 60 days"), and treating those as
    // floors made the gate fire on correct copy. What error one actually did
    // was point back at a threshold by pronoun: "Below it the same conduct is".
    const boundsIt =
      /\$[\d,]+/.test(s) ||
      EXHAUSTIVE.test(s) ||
      /\b(below|beneath|under|above|over)\s+(it|that|this|which|the line|the threshold|the figure)\b/i.test(s);
    if (!boundsIt) continue;
    // Quoting the statute's own residual wording is NOT an exclusion. Error two
    // recited "not specified in subsection (2)" and still asserted a $100 floor,
    // which is precisely the confusion: the residual phrase describes the gap,
    // it does not tell the reader what fills it. Only naming the scoped
    // paragraphs counts.
    const excludesScopes = /dwelling|curtilage/i.test(s);
    if (excludesScopes) continue;
    out.push({
      kind: "residual-given-a-floor",
      sentence: s,
      detail:
        `describes ${row.cite}, a residual clause, with a dollar figure or an ` +
        `exhaustive word, without excluding the scoped paragraphs. ${row.cite} is ` +
        `"${row.quote.slice(0, 60)}...", so its floor is wherever the other paragraphs ` +
        `stop. All three errors that shipped on this page were this sentence.`,
    });
  }

  // 3. Subsection-to-degree. A sentence often cites the conduct subsection
  // alongside the penalty subsection ("a person covered by (1) ... under (3)"),
  // so the claim stands if ANY cited row carries the degree. It fails when the
  // sentence names rows and none of them supports the degree it states, which
  // still catches the original error shape: one citation, wrong degree.
  if (degrees.size === 1) {
    const cited: GradingRow[] = [];
    for (const m of s.matchAll(/\b(\d{3}\.\d{2,4}(?:\([0-9a-z]{1,3}\))+)/gi)) {
      const row = t.rows.find((r) => r.cite.replace(/\.$/, "") === `${m[1]}`);
      if (row) cited.push(row);
    }
    const claimed = [...degrees][0];
    if (cited.length && !cited.some((r) => r.degree === claimed)) {
      out.push({
        kind: "wrong-subsection-degree",
        sentence: s,
        detail:
          `attributes ${claimed} to ${cited.map((r) => r.cite).join(", ")}, which the table records as ` +
          `${[...new Set(cited.map((r) => r.degree))].join(", ")}. ` +
          `Source: "${cited[0].quote.slice(0, 90)}"`,
      });
    }
  }
  return out;
}

const copyOf = pageCopy;

// ================================================================
// PART 1. The three errors that actually shipped.
// ================================================================
console.log("Claim-check self-test: the three errors that shipped on this page");
{
  const historical: [string, string][] = [
    [
      "error 1, ignored (2)(f)",
      "Below it the same conduct is petit theft of the second degree under Statute 812.014(3)(a), a misdemeanor.",
    ],
    [
      "error 2, ignored (2)(e)1.",
      "Only below $100 does Statute 812.014(3)(a) apply, and it reaches theft of any property not specified in subsection (2), which is petit theft of the second degree.",
    ],
    [
      "error 3, ignored (2)(e)1.",
      "In practice that means property valued under $100 and not on the item list, which is petit theft of the second degree.",
    ],
    [
      "the $500 claim, true only away from a dwelling",
      "So a $500 theft is not the lowest tier of anything: it is a first degree misdemeanor.",
    ],
  ];
  for (const [label, sentence] of historical) {
    const problems = auditSentence(sentence, "812.014");
    if (!problems.length) {
      fail(
        `does NOT catch ${label}. If it cannot catch the errors that already ` +
          `shipped, it will not catch the next one.\n        "${sentence}"`,
      );
    } else {
      console.log(`  ok    catches ${label}  [${problems.map((p) => p.kind).join(", ")}]`);
    }
  }

  // And must stay quiet on correct, scoped sentences.
  const correct = [
    "Taken from a dwelling or its unenclosed curtilage, the same $500 is grand theft of the third degree under 812.014(2)(d)1., a felony carrying up to 5 years.",
    "Statute 812.014(2)(f) covers property valued at $100 or more but less than $750, and makes it petit theft of the first degree.",
  ];
  const noise = correct.flatMap((s) => auditSentence(s, "812.014"));
  if (noise.length) {
    fail(
      `fires on correct scoped sentences: ${noise.map((n) => n.kind + " -> " + n.detail).join(" | ")}`,
    );
  } else {
    console.log("  ok    stays quiet on correct, place-scoped sentences");
  }
}

// ================================================================
// PART 2. The real pages.
// ================================================================
console.log("\nLegal claims on written pages");
{
  const written = charges.filter((c) => c.lead || c.statute || c.sections?.length);
  let any = false;
  // Statutes whose amount rules are switched off because their bounds are not
  // dollars. Printed on every run: a rule that is off must say so, or the next
  // reader takes a green run for coverage it does not have.
  const notApplicable = new Set<string>();
  for (const c of written) {
    const text = copyOf(c).join("\n");
    // PRIMARY statutes are the ones the page formally presents in a statute
    // block; the value-ladder rules run only against those. Everything else
    // the page cites still gets the citation-keyed rules.
    const primaryText = [
      c.statute?.citation ?? "",
      ...(c.sections ?? []).map((s) => s.statute?.citation ?? ""),
    ].join("\n");
    for (const key of Object.keys(STATUTES)) {
      if (!text.includes(key)) continue;
      const primary = primaryText.includes(key);
      // A primary statute whose rows carry bounds MUST declare what those
      // bounds count. No default: assuming dollars is how a drug page gets its
      // fine figures checked against a gram ladder, and the check would look
      // like it was working the whole time.
      const unit = ANNOTATIONS[key]?.amountUnit;
      if (primary && hasBoundedRows(STATUTES[key]) && !unit) {
        any = true;
        fail(
          `${chargeHref(c)} rests on ${STATUTES[key].cite}, whose rows carry numeric bounds, ` +
            `but no amountUnit is declared for "${key}" in scripts/statute-table-annotations.json. ` +
            `The amount rules cannot run against an undeclared unit, and running them anyway would ` +
            `compare this page's dollar figures to whatever those bounds actually count.`,
        );
        continue;
      }
      if (primary && unit && unit !== "usd") notApplicable.add(`${key} (${unit})`);
      for (const s of sentences(text)) {
        for (const p of auditSentence(s, key, { primary })) {
          any = true;
          fail(`${chargeHref(c)} [${p.kind}] ${p.detail}\n        "${p.sentence.slice(0, 150)}"`);
        }
      }
    }
  }
  if (!any)
    console.log("  ok    every amount-to-degree and subsection-to-degree claim matches a verified row");
  if (notApplicable.size)
    console.log(
      `  NOTE  amount rules DO NOT run against: ${[...notApplicable].sort().join(", ")}. ` +
        `Those bounds are not dollars, so a dollar claim about them cannot be checked here ` +
        `and needs a human or a reviewer. Subsection-to-degree and residual rules still run.`,
    );
}

console.log(
  `\nStatute tables: ${Object.entries(STATUTES)
    .map(([k, t]) => `${k} (${t.completeness}, ${t.rows.length} rows, fetched ${t.fetched})`)
    .join("; ")}`,
);
console.log(failed ? "\nClaim check FAILED." : "\nClaim check passed.");
process.exit(failed ? 1 : 0);
