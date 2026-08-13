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

function auditSentence(s: string, statute: string): Problem[] {
  const t = STATUTES[statute];
  if (!t) return [];
  const out: Problem[] = [];
  const degrees = degreesIn(s);
  const amounts = pointAmounts(s);
  const scope = scopeOf(s);

  // 2. Exhaustive claim over a partial reading.
  if (EXHAUSTIVE.test(s) && degrees.size && t.completeness !== "whole-section") {
    out.push({
      kind: "exhaustive-over-partial",
      sentence: s,
      detail: `asserts what ${t.cite} does not reach, but the section is recorded "${t.completeness}"${t.unread ? ` (unread: ${t.unread})` : ""}. A negative cannot rest on a partial reading.`,
    });
  }

  // 1. Amount-to-degree, checked against the ladder the sentence is talking
  // about: the general one unless the sentence names a scope.
  if (degrees.size === 1 && amounts.length) {
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
  for (const row of t.rows.filter((r) => r.residual)) {
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

  // 3. Subsection-to-degree.
  for (const m of s.matchAll(/\b(\d{3}\.\d{2,4}(?:\([0-9a-z]{1,3}\))+)/gi)) {
    const cite = m[1];
    const row = t.rows.find((r) => r.cite.replace(/\.$/, "") === `${cite}`);
    if (!row || degrees.size !== 1) continue;
    const claimed = [...degrees][0];
    if (row.degree !== claimed) {
      out.push({
        kind: "wrong-subsection-degree",
        sentence: s,
        detail: `attributes ${claimed} to ${cite}, which the table records as ${row.degree}. Source: "${row.quote.slice(0, 90)}"`,
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
  for (const c of written) {
    const text = copyOf(c).join("\n");
    // Only audit against statutes the page actually leans on.
    for (const key of Object.keys(STATUTES)) {
      if (!text.includes(key)) continue;
      for (const s of sentences(text)) {
        for (const p of auditSentence(s, key)) {
          any = true;
          fail(`${chargeHref(c)} [${p.kind}] ${p.detail}\n        "${p.sentence.slice(0, 150)}"`);
        }
      }
    }
  }
  if (!any)
    console.log("  ok    every amount-to-degree and subsection-to-degree claim matches a verified row");
}

console.log(
  `\nStatute tables: ${Object.entries(STATUTES)
    .map(([k, t]) => `${k} (${t.completeness}, ${t.rows.length} rows, fetched ${t.fetched})`)
    .join("; ")}`,
);
console.log(failed ? "\nClaim check FAILED." : "\nClaim check passed.");
process.exit(failed ? 1 : 0);
