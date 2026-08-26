/**
 * check:seal-expunge. The checker says what the statute says, and receives
 * nothing it should not.
 *
 * THE SILENT-WRONG FAILURE THIS GUARDS. A wrong eligibility answer looks
 * exactly like a right one. Nobody reading "you may be eligible to petition"
 * can tell whether the engine applied five conditions or four, or whether the
 * juvenile unless-clause was honoured. So the conditions are proved against
 * the recorded statute, and the engine is proved against a truth table.
 *
 * S1  every condition's text appears VERBATIM in the READ-WHOLE record for
 *     F.S. 943.059 in PAGE-SOURCES.md. This is what stops the engine drifting
 *     from the law: change a condition's wording and the build fails.
 * S2  the engine's truth table. Named cases with known correct outcomes,
 *     including the juvenile unless-clause in both directions.
 * S3  no unknown is ever rounded into a clean answer.
 * S4  the intake surface cannot receive case facts: the only accepted fields
 *     are the seven question ids, and every accepted value is a declared
 *     choice id.
 * S5  the rendered page carries the disclosure, the no-relationship notice,
 *     and no predictive string.
 */
import { readFileSync, existsSync } from "node:fs";
import {
  CONDITIONS,
  JUVENILE_MISDEMEANORS,
  QUESTIONS,
  evaluate,
  visibleQuestions,
  type Answers,
} from "../src/lib/tools/seal-expunge/engine.ts";
import { INTERACTION_ONLY, SEAL_EXPUNGE_PAGE_COPY } from "../src/lib/tools/seal-expunge/copy.ts";

/** Build output directory. Verification builds use NEXT_DIST_DIR so a running
 * `next dev` keeps .next to itself. */
const DIST_DIR = process.env.NEXT_DIST_DIR || ".next";

let failed = false;
const fail = (m: string) => { console.error(`  FAIL  ${m}`); failed = true; };
const ok = (m: string) => console.log(`  ok    ${m}`);

const norm = (s: string) =>
  s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").trim();

// ---------------------------------------------------------------- S1
console.log("S1: every condition is the statute's own words");
{
  const ps = readFileSync("docs/research/PAGE-SOURCES.md", "utf8");
  const start = ps.indexOf("READ-WHOLE: F.S. 943.059\n");
  if (start < 0) {
    fail("no READ-WHOLE record for F.S. 943.059 in PAGE-SOURCES.md");
  } else {
    const end = ps.indexOf("READ-WHOLE:", start + 10);
    const record = norm(ps.slice(start, end === -1 ? undefined : end));
    let bad = 0;
    for (const c of Object.values(CONDITIONS)) {
      if (!record.includes(norm(c.text))) {
        bad++;
        fail(`${c.cite} text is not in the 943.059 record verbatim: "${c.text.slice(0, 60)}..."`);
      }
    }
    for (const m of JUVENILE_MISDEMEANORS) {
      if (!record.includes(norm(m))) {
        bad++;
        fail(`the (1)(b) misdemeanor "${m.slice(0, 50)}..." is not in the record verbatim`);
      }
    }
    if (!bad)
      ok(`${Object.keys(CONDITIONS).length} conditions and ${JUVENILE_MISDEMEANORS.length} listed misdemeanors are verbatim in the record`);
  }
}

// ---------------------------------------------------------------- S2
console.log("\nS2: the engine's truth table");
{
  const CLEAN: Answers = {
    disposition: "withheld",
    supervision: "finished",
    priorConviction: "no",
    juvenile: "no",
    priorRelief: "no",
    offenceClass: "none",
  };
  const cases: [string, Answers, string][] = [
    ["all five satisfied", CLEAN, "may-petition"],
    ["adjudicated guilty on this case", { ...CLEAN, disposition: "guilty" }, "blocked"],
    ["still on supervision", { ...CLEAN, supervision: "ongoing" }, "blocked"],
    ["prior Florida conviction", { ...CLEAN, priorConviction: "yes" }, "blocked"],
    ["prior sealing already used", { ...CLEAN, priorRelief: "yes" }, "blocked"],
    ["offense on the 943.0584 list", { ...CLEAN, offenceClass: "listed" }, "blocked"],
    ["charges dropped routes to expunction", { ...CLEAN, disposition: "dropped" }, "other-route"],
    // The unless-clause, both directions. This is the case that would be wrong
    // if 943.0515 had not been fetched.
    ["juvenile record NOT expunged blocks", { ...CLEAN, juvenile: "yes", juvenileExpunged: "no" }, "blocked"],
    ["juvenile record EXPUNGED does not block", { ...CLEAN, juvenile: "yes", juvenileExpunged: "yes" }, "may-petition"],
    ["juvenile expunction unknown needs review", { ...CLEAN, juvenile: "yes", juvenileExpunged: "unsure" }, "needs-review"],
    ["any unsure needs review", { ...CLEAN, supervision: "unsure" }, "needs-review"],
    ["empty answers never yield a clean result", {}, "needs-review"],
  ];
  let bad = 0;
  for (const [name, answers, want] of cases) {
    const got = evaluate(answers).outcome;
    if (got === want) ok(`${name} -> ${got}`);
    else { bad++; fail(`${name}: expected ${want}, got ${got}`); }
  }
  // A failure must always beat an unknown: a blocked case is blocked whether or
  // not something else is unsettled.
  const mixed = evaluate({ ...CLEAN, priorRelief: "yes", supervision: "unsure" });
  if (mixed.outcome === "blocked") ok("a definite failure outranks an unknown");
  else { bad++; fail(`mixed failure and unknown gave ${mixed.outcome}, expected blocked`); }
  if (!bad) ok(`${cases.length + 1} truth-table cases hold`);
}

// ---------------------------------------------------------------- S3
console.log("\nS3: no unknown is rounded into a clean answer");
{
  const base: Answers = {
    disposition: "withheld",
    supervision: "finished",
    priorConviction: "no",
    juvenile: "no",
    priorRelief: "no",
    offenceClass: "none",
  };
  let bad = 0;
  for (const q of QUESTIONS) {
    if (!(q.id in base)) continue;
    const withUnsure = { ...base, [q.id]: "unsure" };
    const r = evaluate(withUnsure);
    if (r.outcome === "may-petition") {
      bad++;
      fail(`"unsure" on ${q.id} still produced may-petition`);
    }
    if (!r.conditions.some((c) => c.verdict === "unknown") && q.decides) {
      bad++;
      fail(`"unsure" on ${q.id} produced no unknown verdict`);
    }
  }
  if (!bad) ok("every question answered 'unsure' prevents a clean result and shows an unknown");
}

// ---------------------------------------------------------------- S4
console.log("\nS4: the intake cannot receive case facts");
{
  let bad = 0;
  const ids = new Set(QUESTIONS.map((q) => q.id));
  if (ids.size !== QUESTIONS.length) { bad++; fail("duplicate question ids"); }

  // Every question is multiple choice. A free-text question here would be a
  // channel for exactly the facts Rule 4-1.18 makes costly to receive.
  for (const q of QUESTIONS) {
    if (!q.choices?.length) { bad++; fail(`${q.id} has no choices, so it is free text`); }
    const cids = new Set(q.choices.map((c) => c.id));
    if (cids.size !== q.choices.length) { bad++; fail(`${q.id} has duplicate choice ids`); }
  }

  // The server action accepts only declared ids. Read as source rather than
  // trusted: this is the assertion that the parser is a whitelist.
  const src = readFileSync("src/app/resources/tools/seal-expunge-eligibility/actions.ts", "utf8");
  if (!/q\.choices\.some\(\(c\) => c\.id === raw\)/.test(src)) {
    bad++;
    fail("the server action does not restrict answers to declared choice ids");
  }
  if (/formData\.get\(["'`](?!q_|name|email|company)/.test(src)) {
    bad++;
    fail("the server action reads a form field outside the declared set");
  }
  if (!bad) ok(`all ${QUESTIONS.length} questions are multiple choice and the action whitelists their ids`);
}

// ---------------------------------------------------------------- S6
/**
 * The copy's count of questions matches the engine's.
 *
 * This exists because the copy said "seven questions" while the flow opened
 * "Question 1 of 5": two of the seven are conditional follow-ups, so seven is
 * the total and five is what a reader is promised up front. Nothing caught it
 * but opening the page. A number in prose that describes code is a second copy
 * of a fact, and this is the assertion that keeps the two equal.
 */
console.log("\nS6: the copy's question count matches the engine");
{
  const unconditional = visibleQuestions({}).length;
  const total = QUESTIONS.length;
  const followUps = total - unconditional;
  const lead = SEAL_EXPUNGE_PAGE_COPY.find((s) => s.includes("Statute 943.059 sets five conditions"));
  let bad = 0;
  if (!lead) {
    bad++;
    fail("could not find the lead paragraph to check its counts against");
  } else {
    const words = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
    const wantAsked = words[unconditional - 1];
    const wantFollow = words[followUps - 1];
    if (!lead.includes(`${wantAsked} short questions`)) {
      bad++;
      fail(`the lead does not say "${wantAsked} short questions"; the engine asks ${unconditional} unconditionally`);
    }
    if (followUps > 0 && !lead.includes(`${wantFollow} follow-ups`)) {
      bad++;
      fail(`the lead does not say "${wantFollow} follow-ups"; the engine has ${followUps} conditional questions`);
    }
  }
  if (!bad)
    ok(`the lead's counts match the engine: ${unconditional} asked always, ${followUps} conditional, ${total} total`);
}

// ---------------------------------------------------------------- S5
console.log("\nS5: the rendered page");
const PAGE = `${DIST_DIR}/server/app/resources/tools/seal-expunge-eligibility.html`;
if (!existsSync(PAGE)) {
  fail(`${PAGE} not found. A missing artifact FAILS rather than skips (D30). Run \`npm run build\`.`);
} else {
  const html = readFileSync(PAGE, "utf8");
  const text = norm(
    html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ")
      .replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&"),
  );
  let bad = 0;
  for (const marker of ["data-cannot-know", "data-no-relationship", "data-privacy-note", "data-version-note"]) {
    if (!html.includes(marker)) { bad++; fail(`the page does not carry ${marker}`); }
  }
  // BOTH DIRECTIONS. Server-rendered copy must be present; interaction-only
  // copy must be absent. Checking only the first would let the exemption list
  // hide a string that should have rendered and did not.
  const interactive = new Set(INTERACTION_ONLY.map(norm));
  for (const s of SEAL_EXPUNGE_PAGE_COPY) {
    const n = norm(s);
    if (interactive.has(n)) continue;
    if (n.length > 40 && !text.includes(n)) {
      bad++;
      fail(`server-rendered copy is not on the page: "${s.slice(0, 60)}..."`);
    }
  }
  for (const s of INTERACTION_ONLY) {
    const n = norm(s);
    if (n.length > 40 && text.includes(n)) {
      bad++;
      fail(
        `"${s.slice(0, 50)}..." is declared interaction-only but renders on the ` +
          `server. Either it is not interaction-only, or the flow leaked.`,
      );
    }
  }
  const FORBIDDEN = ["you will be eligible", "guaranteed", "we can seal", "your record will be", "expect to"];
  for (const f of FORBIDDEN) {
    if (text.toLowerCase().includes(f)) { bad++; fail(`forbidden predictive string on the page: "${f}"`); }
  }
  if (!bad) ok("disclosure, privacy note, version note and no-relationship notice render, with no predictive string");
}

console.log(
  "\n  ..    NOT CHECKED: whether FDLE issues a certificate, which no page can know; " +
    "the expunction arm at 943.0585, which this release does not walk through and " +
    "the tool routes to a lawyer instead; and whether email actually delivers, " +
    "which depends on the Resend domain still marked [NEEDS].",
);

console.log(failed ? "\nSeal-expunge check FAILED." : "\nSeal-expunge check passed.");
process.exit(failed ? 1 : 0);
