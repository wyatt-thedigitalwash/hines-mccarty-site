/**
 * The sealing eligibility engine: F.S. 943.059(1), condition by condition.
 *
 * WHAT THIS IS. Five statutory conditions, (a) through (e), each mapped to one
 * question a person can actually answer about their own record. It reports
 * which conditions are met, which are not, and which cannot be decided from
 * what was entered. It does not predict what a court will do and it does not
 * tell anyone they are eligible: eligibility to PETITION is what 943.059(1)
 * defines, and the certificate under (2) is issued by the department, not by
 * this page.
 *
 * WHY THE CONDITION TEXT LIVES HERE AS CONSTANTS. Every `text` below is the
 * statute's own words, and `check:seal-expunge` asserts each one appears
 * verbatim in the READ-WHOLE record in PAGE-SOURCES.md. Holding them here and
 * proving them against the record is the split that works: the engine can be
 * read on its own, and it cannot drift from the law without the build failing.
 *
 * THE ONE THAT CHANGES ANSWERS RATHER THAN ADDING DETAIL is condition B's
 * unless-clause. A juvenile adjudication disqualifies UNLESS it was expunged
 * under s. 943.0515. A checker that asks about juvenile adjudications and
 * ignores that clause gives a wrong answer to every reader whose delinquency
 * record was expunged, which is why B has a follow-up question rather than a
 * single yes or no.
 *
 * NO INPUT LEAVES THE BROWSER unless the reader asks for their summary by
 * email, and even then what is sent is the ANSWER SET, never a description of
 * what happened. See actions.ts.
 */

export type ConditionId = "a" | "b" | "c" | "d" | "e";

export type Condition = {
  id: ConditionId;
  cite: string;
  /** The statute's own words. Asserted verbatim by the gate. */
  text: string;
  /** What this condition means, in a sentence a reader would use. */
  plain: string;
};

export const CONDITIONS: Record<ConditionId, Condition> = {
  a: {
    id: "a",
    cite: "F.S. 943.059(1)(a)",
    text: "The criminal history record is not ineligible for court-ordered sealing under s. 943.0584.",
    plain:
      "The offense is not on the list of offenses that can never be sealed.",
  },
  b: {
    id: "b",
    cite: "F.S. 943.059(1)(b)",
    text: "The person has never, before the date the application for a certificate of eligibility is filed, been adjudicated guilty in this state of a criminal offense, or been adjudicated delinquent in this state for committing any felony or any of the following misdemeanor offenses, unless the record of such adjudication of delinquency has been expunged pursuant to s. 943.0515:",
    plain:
      "You have no prior Florida conviction, and no prior juvenile adjudication for a felony or one of thirteen listed misdemeanors, unless that juvenile record was expunged.",
  },
  c: {
    id: "c",
    cite: "F.S. 943.059(1)(c)",
    text: "The person has not been adjudicated guilty of, or adjudicated delinquent for committing, any of the acts stemming from the arrest or alleged criminal activity to which the petition to seal pertains.",
    plain:
      "On this case itself, you were not adjudicated guilty. Adjudication was withheld.",
  },
  d: {
    id: "d",
    cite: "F.S. 943.059(1)(d)",
    text: "The person is no longer under court supervision applicable to the disposition of arrest or alleged criminal activity to which the petition to seal pertains.",
    plain: "You have finished probation or any other supervision on this case.",
  },
  e: {
    id: "e",
    cite: "F.S. 943.059(1)(e)",
    text: "The person has never secured a prior sealing or expunction of a criminal history record under this section, s. 943.0585, former s. 893.14, former s. 901.33, or former s. 943.058.",
    plain: "You have never had a Florida record sealed or expunged before.",
  },
};

/** The thirteen misdemeanors named in condition (b). Verbatim, in order. */
export const JUVENILE_MISDEMEANORS = [
  "Assault, as defined in s. 784.011",
  "Battery, as defined in s. 784.03",
  "Assault on a law enforcement officer, a firefighter, or other specified officers, as defined in s. 784.07(2)(a)",
  "Carrying a concealed weapon, as defined in s. 790.01(2)",
  "Open carrying of a weapon, as defined in s. 790.053",
  "Unlawful possession or discharge of a weapon or firearm at a school-sponsored event or on school property, as defined in s. 790.115",
  "Unlawful use of destructive devices or bombs, as defined in s. 790.1615(1)",
  "Unlawful possession of a firearm by a minor, as defined in s. 790.22(5)",
  "Exposure of sexual organs, as defined in s. 800.03",
  "Arson, as defined in s. 806.031(1)",
  "Petit theft, as defined in s. 812.014(3)",
  "Neglect of a child, as defined in s. 827.03(1)(e)",
  "Cruelty to animals, as defined in s. 828.12(1)",
] as const;

// ---------------------------------------------------------------- questions
export type Choice = { id: string; label: string; hint?: string };
export type Question = {
  id: string;
  /** Condition it decides. `intro` decides none and routes instead. */
  decides: ConditionId | null;
  prompt: string;
  help?: string;
  choices: Choice[];
  /** Only asked when this predicate holds over the answers so far. */
  when?: (a: Answers) => boolean;
};

export type Answers = Record<string, string | undefined>;

export const QUESTIONS: Question[] = [
  {
    id: "disposition",
    decides: "c",
    prompt: "How did this case end?",
    help: "This is the single biggest factor. Sealing is for cases where the court withheld adjudication rather than convicting you.",
    choices: [
      { id: "withheld", label: "Adjudication was withheld", hint: "You pled or were found guilty, but the judge did not convict you" },
      { id: "guilty", label: "I was convicted, or adjudicated guilty" },
      { id: "dropped", label: "The charges were dropped, dismissed, or I was acquitted" },
      { id: "unsure", label: "I am not sure" },
    ],
  },
  {
    id: "supervision",
    decides: "d",
    prompt: "Have you finished all probation or court supervision on this case?",
    help: "Including early termination. If supervision is still running, the petition cannot be filed yet.",
    choices: [
      { id: "finished", label: "Yes, it is finished" },
      { id: "ongoing", label: "No, I am still on supervision" },
      { id: "none", label: "There was never any supervision" },
      { id: "unsure", label: "I am not sure" },
    ],
  },
  {
    id: "priorConviction",
    decides: "b",
    prompt: "Before this case, had you ever been convicted of any criminal offense in Florida?",
    help: "Any adjudication of guilt, for a felony or a misdemeanor. A withheld adjudication is not a conviction.",
    choices: [
      { id: "no", label: "No" },
      { id: "yes", label: "Yes" },
      { id: "unsure", label: "I am not sure" },
    ],
  },
  {
    id: "juvenile",
    decides: null,
    prompt: "Do you have a juvenile record in Florida for a felony, or for an offense like assault, battery, theft, arson, or a weapons charge?",
    help: "Juvenile adjudications count separately from adult convictions.",
    when: (a) => a.priorConviction === "no",
    choices: [
      { id: "no", label: "No" },
      { id: "yes", label: "Yes" },
      { id: "unsure", label: "I am not sure" },
    ],
  },
  {
    id: "juvenileExpunged",
    decides: null,
    prompt: "Was that juvenile record expunged?",
    help: "Florida expunges many juvenile records automatically once a person reaches a certain age. If yours was, the statute says it does not count against you.",
    when: (a) => a.juvenile === "yes",
    choices: [
      { id: "yes", label: "Yes, it was expunged" },
      { id: "no", label: "No, it is still there" },
      { id: "unsure", label: "I am not sure" },
    ],
  },
  {
    id: "priorRelief",
    decides: "e",
    prompt: "Have you ever had a Florida record sealed or expunged before?",
    help: "Florida allows this once in a lifetime, with narrow exceptions.",
    choices: [
      { id: "no", label: "No" },
      { id: "yes", label: "Yes" },
      { id: "unsure", label: "I am not sure" },
    ],
  },
  {
    id: "offenceClass",
    decides: "a",
    prompt: "Was the charge in this case any of the following?",
    help: "Statute 943.0584 lists offenses that can never be sealed, whatever else is true. This covers the common ones.",
    choices: [
      { id: "none", label: "None of these" },
      { id: "listed", label: "A sexual offense, or one requiring sex offender registration" },
      { id: "listed2", label: "Domestic violence, stalking, or a violation of an injunction" },
      { id: "listed3", label: "Homicide, manslaughter, or a violent felony such as robbery or aggravated battery" },
      { id: "listed4", label: "Child abuse or neglect, or abuse of an elderly or disabled person" },
      { id: "listed5", label: "Drug trafficking, or an offense against a minor" },
      { id: "unsure", label: "I am not sure" },
    ],
  },
];

/** Questions actually shown, given the answers so far. */
export function visibleQuestions(answers: Answers): Question[] {
  return QUESTIONS.filter((q) => !q.when || q.when(answers));
}

// ---------------------------------------------------------------- evaluation
export type Verdict = "met" | "failed" | "unknown";

export type ConditionResult = {
  condition: Condition;
  verdict: Verdict;
  /** Why, in the reader's terms. Never a prediction. */
  because: string;
};

export type Outcome = "may-petition" | "blocked" | "needs-review" | "other-route";

export type Result = {
  outcome: Outcome;
  headline: string;
  summary: string;
  conditions: ConditionResult[];
  /** Set when a different statute is the right route. */
  route?: { label: string; cite: string; note: string };
};

/**
 * Evaluate the five conditions.
 *
 * THREE VERDICTS, NEVER TWO. A condition the answers cannot decide is
 * `unknown`, and an unknown anywhere prevents a clean answer rather than being
 * rounded toward one. Rounding an "I am not sure" into a yes is how a tool
 * tells someone they are eligible when they are not.
 */
export function evaluate(answers: Answers): Result {
  const results: ConditionResult[] = [];
  const R = (id: ConditionId, verdict: Verdict, because: string) =>
    results.push({ condition: CONDITIONS[id], verdict, because });

  // (c) disposition of this case
  const d = answers.disposition;
  if (d === "withheld") R("c", "met", "Adjudication was withheld on this case.");
  else if (d === "guilty") R("c", "failed", "You were adjudicated guilty on this case, which is what this condition excludes.");
  else if (d === "dropped") R("c", "met", "There was no adjudication of guilt on this case.");
  else R("c", "unknown", "How the case ended has not been established.");

  // (d) supervision
  const s = answers.supervision;
  if (s === "finished" || s === "none") R("d", "met", "No court supervision is running on this case.");
  else if (s === "ongoing") R("d", "failed", "Supervision on this case has not finished, so a petition cannot be filed yet.");
  else R("d", "unknown", "Whether supervision has finished has not been established.");

  // (b) prior record, with the 943.0515 unless-clause
  const p = answers.priorConviction;
  if (p === "yes") {
    R("b", "failed", "A prior Florida conviction is what this condition excludes.");
  } else if (p === "unsure") {
    R("b", "unknown", "Whether there is a prior Florida conviction has not been established.");
  } else {
    const j = answers.juvenile;
    const je = answers.juvenileExpunged;
    if (j === "no") R("b", "met", "No prior Florida conviction and no qualifying juvenile adjudication.");
    else if (j === "yes" && je === "yes")
      R("b", "met", "The juvenile adjudication was expunged, and the statute's unless-clause says an expunged delinquency record does not count.");
    else if (j === "yes" && je === "no")
      R("b", "failed", "A juvenile adjudication that was not expunged is what this condition excludes.");
    else R("b", "unknown", "The juvenile record question has not been settled, and it changes the answer.");
  }

  // (e) prior relief
  const e = answers.priorRelief;
  if (e === "no") R("e", "met", "No previous Florida sealing or expunction.");
  else if (e === "yes") R("e", "failed", "Florida allows this once, and a previous sealing or expunction is what this condition excludes.");
  else R("e", "unknown", "Whether you have used this before has not been established.");

  // (a) the ineligible-offense list
  const o = answers.offenceClass;
  if (o === "none") R("a", "met", "The charge is not among the categories this page asks about.");
  else if (o === "unsure" || !o) R("a", "unknown", "The offense category has not been established.");
  else R("a", "failed", "Statute 943.0584 lists this kind of offense as one that cannot be sealed.");

  const failed = results.filter((r) => r.verdict === "failed");
  const unknown = results.filter((r) => r.verdict === "unknown");

  // A dropped or dismissed case is an EXPUNCTION question, not a sealing one.
  // Answering it under 943.059 would be answering the wrong statute.
  if (d === "dropped" && !failed.length) {
    return {
      outcome: "other-route",
      headline: "Your case may be an expunction question rather than a sealing one",
      summary:
        "Sealing under Statute 943.059 is built for cases that ended without a conviction but with a withheld adjudication. Where charges were dropped, dismissed, or ended in an acquittal, the route people are usually pointed to is court-ordered expunction under Statute 943.0585, which has its own conditions this page does not walk through. That is a question worth putting to a lawyer rather than guessing at.",
      conditions: results,
      route: {
        label: "Court-ordered expunction",
        cite: "F.S. 943.0585",
        note: "A different section with its own eligibility conditions and its own certificate.",
      },
    };
  }

  if (failed.length) {
    return {
      outcome: "blocked",
      headline:
        failed.length === 1
          ? "One condition in the statute stands in the way"
          : `${failed.length} conditions in the statute stand in the way`,
      summary:
        "Statute 943.059(1) sets five conditions and all five have to be satisfied. Based on what you entered, the ones marked below are not. That is what the statute says about the answers given; it is not a decision about your record, and a lawyer reading the actual disposition sometimes finds the paperwork says something different from what a person remembers.",
      conditions: results,
    };
  }

  if (unknown.length) {
    return {
      outcome: "needs-review",
      headline: "This one needs a person to look at it",
      summary:
        "Nothing you entered rules sealing out, but some of it could not be settled from a form. The items marked below are the ones that need checking against the actual court record, and they are the kind of thing that is quick for a lawyer to confirm and slow to guess at.",
      conditions: results,
    };
  }

  return {
    outcome: "may-petition",
    headline: "Nothing you entered rules out a petition to seal",
    summary:
      "Every condition in Statute 943.059(1) is satisfied by the answers you gave. That is the first step rather than the last one: sealing runs through a certificate of eligibility from the Florida Department of Law Enforcement under 943.059(2), and then a petition to the court, which the statute leaves to the court's discretion. This page does not file anything and does not predict what a court will do.",
    conditions: results,
  };
}
