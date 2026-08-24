/**
 * Every rendered string on the charge-lookup page, as DATA.
 *
 * Same reason as offense-level.ts: copy that lives only in JSX is copy no gate
 * sees. D29 puts this surface in the measured registry, and `toolCopy` hands
 * it to the banned-term, em-dash, duplication and provenance rails.
 *
 * THIS FILE CARRIES MORE WEIGHT THAN THE OFFENSE-LEVEL EQUIVALENT, because
 * Section 4 of the concept document names strings that must never appear
 * anywhere in this tool's output and the refusal copy is the output a
 * frightened reader is most likely to misread. Section 5's two paragraphs are
 * reproduced VERBATIM below and are consts rather than JSX so T4 can check the
 * rendered page against the exact string, and so that a later rewrite of the
 * page cannot quietly soften them.
 */
import { INDEX, EXCLUDED_TABLES } from "./resolve.ts";
import { STATUTES } from "../../statutes.ts";

export const TOOL_HREF = "/resources/tools/charge-lookup";

export const LEAD =
  "A charging document, a booking sheet, and an indictment all name a statute and a paragraph rather than an offense in plain English. Type or paste the number from your paperwork and this page shows you what that paragraph says, in the statute's own words.";

export const INTRO_NOTE =
  "What you type stays in your browser. It is not sent anywhere, not saved, and not put in the address bar, so there is no link to this result and nothing to clear afterwards.";

/**
 * Section 5, first paragraph, VERBATIM. Rule 4-7.13(a)(2), and plan Section
 * 5.2 sets the placement: adjacent to the output, not a footer, at equal or
 * greater prominence. C2 and C3.
 */
export const CANNOT_KNOW = {
  heading: "This tells you what a statute says. It does not tell you anything about your case.",
  body:
    "A charging document names a paragraph; what the state has to prove under it, what the evidence is, whether the right paragraph was charged, and what any of it means for you are questions this page cannot reach. Charges are also frequently amended, so the paragraph on today's paperwork may not be the one a case ends on.",
};

/**
 * Section 5, second paragraph, VERBATIM. Rendered on EVERY refusal.
 *
 * T4 checks refusals specifically, because a refusal is the path most likely
 * to lose the disclosure: it is the branch a developer thinks of as the empty
 * state rather than as a result.
 */
export const REFUSAL = {
  heading: "We could not match that to a statute we have verified text for, so we are not going to guess.",
  body:
    "A wrong paragraph would look exactly like a right one from here. Check the document for the exact numbers, or call and read it to someone.",
};

/** What the tool covers, said on a refusal rather than left to be inferred. */
export const SCOPE_NOTE =
  "This page covers the Florida and federal statute sections this firm has read in full and recorded with their text. It does not cover city or county ordinances, which appear on booking sheets and are not statutes, and it does not cover other states.";

/** Section 10, the ambiguity case, said to the reader rather than resolved for them. */
export const AMBIGUOUS_NOTE =
  "More than one paragraph sits under the number you entered, so all of them are below. Which one applies is decided by the numbers on your own document, and this page will not choose one for you.";

/**
 * D33, said where the absence appears.
 *
 * Without this sentence a reader who resolves 18 usc 2252 and sees no degree
 * learns that the tool is incomplete rather than that the law is different.
 */
export const NO_DEGREE_NOTE =
  "Federal offenses are not graded in degrees the way Florida offenses are, so no degree is shown for a federal paragraph. Some Florida paragraphs carry no degree either, because the degree is assigned at a different paragraph of the same statute.";

/** D34, the partial mark. It states the actual limit rather than hedging. */
export const PARTIAL_NOTE =
  "The text shown for this paragraph was read and recorded in full. The list of paragraphs in this section was not, so do not read this as the complete set of paragraphs in the section.";

export const NO_PAGE_NOTE =
  "This firm has no page written on that section. Nothing is being withheld and nothing is being suggested in its place.";

/** C4. Op. 24-1 and Bartholomew: this reader is the one the rule turns on. */
export const NO_RELATIONSHIP =
  "This page is educational information about what Florida and federal statutes say. It is not legal advice, it is not about your case, and using it does not create an attorney-client relationship with Hines & McCarty. Every case is different. Speak to a lawyer about yours.";

/** What the tool refuses to do, said plainly. Section 4, what it is NOT. */
/**
 * Written twice. The first version said "does not say how SERIOUS a charge
 * is", and `check:charge-lookup` T3 failed the build on it, correctly: the
 * sentence was describing the prohibition using the prohibited word, on the
 * one surface the rule governs absolutely. Kept as a note because it is the
 * shape the rule exists to catch, and it arrived in copy written by someone
 * who had just finished writing the rule.
 */
export const NOT_THIS =
  "This page does not rank one charge against another, does not describe what any paragraph would mean for a person, and does not predict anything about a case. It resolves a citation and shows the text.";

// ---------------------------------------------------------------- C6
/**
 * The version stamp, DERIVED from the tables the resolution can rest on.
 *
 * T8. Never typed: a hand-written list of tables would drift from the corpus
 * the moment a table was added, and would then be a false statement about
 * provenance rather than a stale one.
 */
export const VERSION = (() => {
  const keys = [...INDEX.sections.keys()].map((k) => k.split(":")[1]);
  const tables = [...new Set(keys)]
    .map((k) => STATUTES[k])
    .filter(Boolean)
    .sort((a, b) => a.cite.localeCompare(b.cite, "en", { numeric: true }));
  const dates = [...new Set(tables.map((t) => t.fetched))].sort();
  return {
    tableCount: tables.length,
    partialCount: tables.filter((t) => t.completeness === "partial").length,
    rowCount: INDEX.rowCount,
    excludedRowCount: INDEX.excludedRowCount,
    fetchedFirst: dates[0],
    fetchedLast: dates[dates.length - 1],
    tables: tables.map((t) => ({
      cite: t.cite,
      fetched: t.fetched,
      completeness: t.completeness,
    })),
  };
})();

export const VERSION_NOTE =
  `Resolutions on this page rest on ${VERSION.tableCount} statute sections read and recorded in full, ` +
  `${VERSION.rowCount} paragraph entries, each carrying the text it was built from. ` +
  `Recorded between ${VERSION.fetchedFirst} and ${VERSION.fetchedLast}; every section and its date is listed below. ` +
  `${VERSION.partialCount} of those sections are recorded as partially read and any result drawn from one says so. ` +
  `This page implements no Criminal Punishment Code scoresheet computation, so the Rule 3.992 scoresheet revision does not apply to it and is not stated here.`;

/**
 * The ship condition, stated to the reader rather than only to the build.
 *
 * TOOLS.md: the mapping is built from operative statutory text or it is not
 * built. The chart is excluded, and saying so is how a reader can tell this
 * page apart from the many that quote the ranking chart as though it were law.
 */
export const SOURCE_NOTE =
  `Every paragraph here comes from the statute's own text. The Criminal Punishment Code offense severity ranking chart is deliberately not used as a source for this page, and its ${VERSION.excludedRowCount} entries are excluded: the chart ranks offenses, it does not define them, and this project has found six places where the chart and the statute disagree about scope.`;

export const HOW_TO_READ =
  "Enter the section and the paragraph exactly as they appear, including any letters and numbers after the section. Any of these work: 893.13 6a, F.S. 812.014(2)(c), 18 usc 2252, 794.011 8b.";

export const ATTORNEY_NOTE =
  "[NEEDS: attorney accuracy review per C7. A sample of resolutions checked against the statutes themselves, not against the mapping table, and an independent read of the refusal copy above.]";

export const LAST_REVIEWED = "[NEEDS: lastReviewed date, set at the attorney review]";
export const OWNER = "[NEEDS: owner]";

/**
 * Section 4's forbidden list, SPLIT IN TWO, and the split is a correction to
 * assertion T3 rather than a softening of it. Recorded here because it is the
 * one place this build departs from the concept document's literal wording.
 *
 * T3 says no string from the Section 4 list may appear "in the rendered HTML
 * OR IN THE SHIPPED DATASET". Applied literally that is unsatisfiable, and
 * unsatisfiable in a way that would force a choice between two of this
 * project's own rules. A count over the 987 rows the resolver can emit:
 *
 *   your charge, you are charged with, you are facing,
 *   worse than, better than, good news, bad news .............  0 quotes
 *   serious ................................................. 25 quotes
 *   minor ................................................... 21 quotes
 *   likely ...................................................  5 quotes
 *   severe ...................................................  2 quotes
 *
 * Every one of those 53 is the statute's own word doing legal work: "serious
 * bodily injury" in 21 U.S.C. 841(b)(1)(A), "any minor" in 18 U.S.C. 2251(a),
 * "actual physical force likely to cause serious personal injury" in F.S.
 * 794.011(3), "more severe than a fine" in F.S. 775.082(5). C12 requires those
 * quotes verbatim. A gate firing on them would ask the build to choose which
 * rule to break, which is precisely the reasoning check-pages.mts already
 * records for the "parking enforcement specialist" false positive.
 *
 * So the SHAPE of the rule follows this project's existing precedent: a rule
 * must sit with a CLAIM, not with a bare word.
 *
 * - FORBIDDEN_ANYWHERE: characterisations that are claims about a reader no
 *   matter who wrote them. Zero of them occur in the dataset, so applying them
 *   to the dataset costs nothing and catches a source that ever changed.
 * - FORBIDDEN_IN_COPY: the bare adjectives, applied to AUTHORED copy, which is
 *   the surface the concept document was actually worried about. The tool
 *   characterising exposure is the live edge; the statute using the word
 *   "minor" to mean a person under 18 is not.
 *
 * Both lists are exported so `check-charge-lookup.mts` reads THEM rather than
 * keeping a second copy, which is what stops the rule and the copy drifting.
 *
 * Recorded as a DEPARTURE, not an exemption: DECISIONS.md D36, and the concept
 * document's Section 11 note. It follows the precedent check-pages.mts already
 * carries for "parking enforcement specialist" rather than inventing one. To
 * reverse it, C12 is what changes: the departure exists only because verbatim
 * quotation is mandatory.
 */
export const FORBIDDEN_ANYWHERE = [
  "your charge",
  "you are charged with",
  "you are facing",
  "worse than",
  "better than",
  "good news",
  "bad news",
] as const;

export const FORBIDDEN_IN_COPY = [
  ...FORBIDDEN_ANYWHERE,
  "serious",
  "severe",
  "minor",
  "likely",
] as const;

/**
 * Every rendered string, for the measured-surface registry (D29).
 *
 * Section 9 requires the copy surface to cover "the shipped dataset's rendered
 * strings, not only the page chrome". The dataset is 987 quoted paragraphs of
 * statutory text and IS rendered, so it is included by reference in the gate
 * rather than pasted here: `check-charge-lookup.mts` sweeps every row the
 * resolver can emit. This array is the authored copy.
 */
export const CHARGE_LOOKUP_PAGE_COPY: string[] = [
  LEAD,
  INTRO_NOTE,
  HOW_TO_READ,
  CANNOT_KNOW.heading,
  CANNOT_KNOW.body,
  REFUSAL.heading,
  REFUSAL.body,
  SCOPE_NOTE,
  AMBIGUOUS_NOTE,
  NO_DEGREE_NOTE,
  PARTIAL_NOTE,
  NO_PAGE_NOTE,
  NO_RELATIONSHIP,
  NOT_THIS,
  VERSION_NOTE,
  SOURCE_NOTE,
  "What the paperwork says",
  "What the statute says",
  "Where to read more",
  "What this page cannot tell you",
  "Sections this page can answer about",
];

/** For the page's own "what can I look up" list. Derived, never typed. */
export const COVERED_SECTIONS = VERSION.tables.map((t) => t.cite);

/** Named so the gate can assert the exclusion list is non-empty and reasoned. */
export const EXCLUDED = EXCLUDED_TABLES;
