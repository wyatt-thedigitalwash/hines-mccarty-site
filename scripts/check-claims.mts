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
import { measuredPages } from "../src/lib/measured.ts";
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
  // PRIORS FIRST, because they are a different axis from place and this
  // function can only return one.
  //
  // A sentence can be about a shop AND about a record: "taken from a shop, two
  // or more prior theft convictions make the same $500 a third degree felony
  // under 812.014(3)(c)" is true, and the shop rule below used to force it onto
  // the general value ladder, where $500 is a first degree misdemeanor, so the
  // gate failed correct copy. Value and place decide the ordinary tier; a prior
  // conviction escalates on top of whatever that tier was. Reading a
  // recidivist sentence as a value claim is a category error.
  //
  // Returning "prior" usually means the amount rules ABSTAIN, since the
  // recidivist rows are keyed to a record rather than to a dollar range. That
  // is the honest outcome: this checker cannot adjudicate a prior-conviction
  // claim, so it should stay quiet rather than answer with the wrong ladder.
  if (/\bpriors?\b|\bprior (theft )?convictions?\b|previously convicted/i.test(sentence))
    return "prior";
  // An explicit NOT-a-dwelling statement puts the sentence on the general
  // ladder deliberately. "Taken from a shop, $500 is..." is scoped, not vague.
  if (/\b(from a shop|from a store|not taken from a dwelling|except where taken from a dwelling|away from a dwelling)\b/i.test(sentence))
    return null;
  if (/\bdwelling|curtilage|\bhome\b|\bhouse\b/i.test(sentence)) return "dwelling";
  if (/\bfirearm|motor vehicle|stop sign|controlled substance|will, codicil|item list\b/i.test(sentence))
    return "item";
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
    // "in excess of" was missing while its synonym "exceeding" was present, so
    // a sentence quoting F.S. 812.014(6) verbatim ("a value in excess of
    // $3,000") read as a POINT claim about $3,000 and was answered from the
    // general ladder, where $3,000 is a third degree felony. The copy was
    // right and the list was short. Note the statute uses this idiom for a
    // STRICT threshold, which is the same thing GradingRow.minExclusive
    // records, so the two now agree about what the words mean.
    const isBoundary =
      /\b(less than|more than|under|over|at least|exceeding|in excess of|greater than|up to|between|below|above|from)\s*$/i.test(before) ||
      /^\s*(or more|or less|and up|or higher)/i.test(after);
    if (!isBoundary) out.push(n);
  }
  return out;
}

function sentences(text: string): string[] {
  // A sentence may end inside a closing quote or bracket. The lookbehind used
  // to require [.!?] immediately before the whitespace, so a note ending
  // `... but less than $50,000."` did not split there: the character before
  // the space is the quote mark. The row's degree then ran on into the next
  // sentence, which discussed $10,000 and $50,000 as figures rather than as
  // range bounds, and the checker reported that the row called $50,000 a
  // second degree felony. The row was right and the split was wrong.
  return text
    .split(/(?<=[.!?]["'”’)\]]?)\s+/)
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
  const scope = scopeOf(s);

  // THE CLAUSE A DEGREE BELONGS TO.
  //
  // The rules below ask whether a degree stated in this text is supported by an
  // amount or a citation stated in it. That question assumes the sentence makes
  // ONE assertion. Two correct pages failed because theirs made two.
  //
  //   "What lifts this above a third degree felony, and why $5,000 is not the
  //    top of the ladder"          <- a heading, and it says $5,000 is NOT it
  //   "The chart carries entries at 775.21(10)(a), (10)(b), and (10)(g);
  //    921.0023(2) supplies the level for an unlisted second degree felony"
  //
  // The first was read as calling $5,000 a third degree felony. The second was
  // read as attributing a second degree felony to 775.21(10)(a). Both are the
  // opposite of what the text says, and in both the degree and the thing it was
  // matched against sit in DIFFERENT independent clauses.
  //
  // So the degree's own clause is the unit, and the split is deliberately
  // narrow: a semicolon, or ", and why", which introduces a separate
  // explanatory assertion. It is NOT split on a bare comma or a bare "and". A
  // real error reads "theft of $1,000 is a third degree felony", one clause,
  // and splitting more aggressively would start pulling amounts away from the
  // degrees they really do modify, which is how a gate goes quiet while still
  // appearing to run.
  //
  // THE TWO RULES SPLIT DIFFERENTLY, AND THE DIFFERENCE IS THE WHOLE POINT.
  //
  // For the AMOUNT rule the split is ", and why" only, never a semicolon, and
  // there is NO fallback: if the degree's clause carries no amount, no amount
  // is being called that degree and the rule has nothing to say. A semicolon
  // is excluded here precisely because "the value was $1,000; that makes it a
  // third degree felony" is a real error shape, and splitting it would take the
  // amount away from the degree it genuinely modifies and let the error
  // through. ", and why" is safe because it introduces a separate explanatory
  // assertion rather than continuing the one before it.
  //
  // For the CITATION rule the split is a semicolon or ", and why", and the
  // fallback is to the whole sentence when the degree's clause names no
  // subsection. Narrowing there only happens when the narrower unit still has
  // citations to check against, so it can remove a false positive but not a
  // true one.
  const CITE_RE = /\b(\d{3}\.\d{2,4}(?:\([0-9a-z]{1,3}\))+)/i;
  const degreeRe =
    degrees.size === 1
      ? DEGREE_WORDS.find(([, d]) => d === [...degrees][0])?.[0]
      : undefined;
  const clauseHoldingDegree = (splitter: RegExp): string | undefined =>
    degreeRe ? s.split(splitter).find((c) => degreeRe.test(c)) : undefined;

  const amountSpace = /,\s+and\s+why\s+/i.test(s)
    ? (clauseHoldingDegree(/,\s+and\s+why\s+/i) ?? s)
    : s;
  const amounts = pointAmounts(amountSpace);

  const citeClause = /;|,\s+and\s+why\s+/i.test(s)
    ? clauseHoldingDegree(/;\s*|,\s+and\s+why\s+/i)
    : undefined;
  const claimSpace = citeClause && CITE_RE.test(citeClause) ? citeClause : s;

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
    // Scoped to the degree's own clause, for the reason set out above: a
    // semicolon can join a sentence that names subsections to one that states
    // a degree belonging to a different provision entirely.
    for (const m of claimSpace.matchAll(/\b(\d{3}\.\d{2,4}(?:\([0-9a-z]{1,3}\))+)/gi)) {
      // The citation must belong to THIS statute's own section.
      //
      // F.S. 921.0022 is the offense severity ranking chart, and its rows are
      // keyed by the cites of OTHER statutes: it carries a row for
      // 316.193(2)(b) describing "Felony DUI, 3rd conviction". Without this
      // guard, any sentence citing a subsection anywhere on a page that also
      // mentions 921.0022 was checked against the CHART's entry for it, so a
      // true sentence about the first degree misdemeanor at 316.193(3)(c)1.
      // was reported as attributing that degree to 316.193(2)(b). The chart
      // ranks a provision; it does not grade it, and comparing the two is a
      // category error. Grading claims belong to the section's own table.
      if (m[1].split("(")[0] !== statute) continue;
      // EVERY row for the cite, not the first. A subsection routinely carries
      // more than one tier: F.S. 316.1939(1) makes a first refusal a second
      // degree misdemeanor and a second or subsequent refusal a first degree
      // misdemeanor, and the audited table holds both under the same cite.
      // `.find` returned only the first, so a correct sentence about the
      // recidivist tier was reported as attributing the wrong degree, and the
      // failure message listed one degree as though it were the only one the
      // subsection produces. Recidivist tiers are common, so this would have
      // fired on any page that described one.
      for (const row of t.rows.filter((r) => r.cite.replace(/\.$/, "") === `${m[1]}`)) {
      // A row that assigns NO degree cannot contradict a degree claim. Pages
      // cite definitional subsections for definitional reasons: the identity
      // theft page cites 817.568(1)(e) to say that a corporation counts as a
      // person for the count prong, in a sentence whose degree comes from a
      // paragraph it describes rather than numbers. Counting that citation as
      // a failed match reported an error against correct copy.
        if (row.degree !== "no degree assigned") cited.push(row);
      }
    }
    const claimed = [...degrees][0];
    // A "punishable by life" row satisfies a claim of its base degree. The
    // statute's own words grade F.S. 817.568(7) "a felony of the second degree
    // punishable as provided in s. 775.082"; the PBL designation comes from
    // the 921.0022 chart, not from the subsection. A page quoting the
    // subsection is not misstating the degree, and the identity theft page
    // separately sets out the discrepancy between the two readings and refers
    // it to counsel, which is the honest treatment of a live conflict.
    const satisfies = (rowDegree: Degree) =>
      rowDegree === claimed || rowDegree === `${claimed} punishable by life`;
    if (cited.length && !cited.some((r) => satisfies(r.degree))) {
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

/**
 * Each rendered field is its own text, so it ends before the next one starts.
 *
 * The audit joins fields and splits on sentence punctuation. A field with no
 * terminal punctuation therefore ran into the field after it, and the two were
 * audited as one sentence. That is CORRECT inside a penalty row, where the
 * degree and its note are one claim, and `pageCopy` now emits each row as a
 * single entry to keep exactly that. It is wrong everywhere else: a
 * related-guide label merged into a section heading, which then borrowed a
 * citation from the prose that followed, and the checker reported a
 * subsection-to-degree error on a page whose sentences were all correct.
 *
 * A gate that fails correct copy gets switched off, so the boundary is now
 * explicit rather than accidental.
 */
const copyOf = (c: Parameters<typeof pageCopy>[0]) =>
  pageCopy(c).map((s) => (/[.!?]["'”’)]?\s*$/.test(s) ? s : `${s}.`));

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

  // TWO-CLAUSE TEXT. Both of these are real text from batch C that this gate
  // reported as errors, and in each the gate's reading was the OPPOSITE of what
  // the text says. They are kept as tests so the clause rule cannot be widened
  // back out without someone seeing these fail.
  const twoClause: [string, string][] = [
    [
      "815.06",
      "What lifts this above a third degree felony, and why $5,000 is not the top of the ladder",
    ],
    [
      "775.21",
      "The chart carries entries at Statute 775.21(10)(a), (10)(b), and (10)(g); Statute 921.0023(2) supplies the level for an unlisted second degree felony, which is level 4.",
    ],
  ];
  for (const [statute, sentence] of twoClause) {
    if (!STATUTES[statute]) continue;
    const problems = auditSentence(sentence, statute);
    if (problems.length) {
      fail(
        `fires on two-clause text whose clauses say different things: ` +
          `${problems.map((p) => p.kind + " -> " + p.detail).join(" | ")}\n        "${sentence}"`,
      );
    } else {
      console.log(`  ok    reads ${statute} two-clause text by clause, not by sentence`);
    }
  }

  // AND THE NARROWING MUST NOT REACH A ONE-CLAUSE ERROR. The clause rule falls
  // back to the whole sentence when the degree's clause has nothing to check
  // against, so a semicolon in a sentence whose degree really does belong to
  // the cited subsection still has to fail.
  // 812.014(2)(g) is a second degree felony. Calling it a third degree felony
  // is wrong, and putting a semicolon in front of the mistake must not excuse
  // it. The cite is deliberately one the rule can actually match: an earlier
  // draft of this test used 812.014(2)(a), whose rows are cited (2)(a)1. and
  // (2)(a)3.b., which the citation regex does not reach, so the test passed
  // and failed for reasons that had nothing to do with what it claimed to
  // measure. A self-test that cannot fail for its stated reason is worse than
  // no self-test, because it reads as coverage.
  const stillCaught =
    "Statute 812.014(2)(g) is the tier for a firearm; it is a third degree felony.";
  if (!auditSentence(stillCaught, "812.014").length) {
    fail(
      `stopped catching a real wrong-degree claim once a semicolon was in the ` +
        `sentence. The clause rule has been widened too far.\n        "${stillCaught}"`,
    );
  } else {
    console.log("  ok    a semicolon does not buy a wrong degree its way past the check");
  }
}

// ================================================================
// PART 2. The real pages.
// ================================================================
console.log("\nLegal claims on written pages");
{
  const written = charges.filter((c) => c.lead || c.statute || c.sections?.length);
  // D29 NOTE, printed rather than assumed: guide and tool surfaces are in the
  // measured registry, and this gate runs its citation-keyed rules over them
  // below. The value-ladder (amount-to-degree) rules stay charge-only, because
  // they key on a page's PRIMARY statute block and only charge pages have one.
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
  // Guide and tool surfaces: citation-keyed rules only, no primary statute.
  // Written guides are zero today, so this loop is expected to be empty; it
  // exists NOW so content cannot arrive before its gate (GUIDES-CONCEPT
  // Phase 0's whole point).
  for (const m of measuredPages) {
    if (m.kind === "charge" || !m.written) continue;
    const text = m.copy.join("\n");
    for (const key of Object.keys(STATUTES)) {
      if (!text.includes(key)) continue;
      for (const s of sentences(text)) {
        for (const p of auditSentence(s, key, { primary: false })) {
          any = true;
          fail(`${m.href} [${p.kind}] ${p.detail}\n        "${p.sentence.slice(0, 150)}"`);
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
