/**
 * The offense-level comparison instrument: data and copy.
 *
 * Built to docs/build/tools/OFFENSE-LEVEL-INSTRUMENT-CONCEPT.md. Every figure
 * this module exposes is DERIVED from the audited F.S. 921.0022 chart at module
 * load, never transcribed. A transcribed level is the concept document's named
 * silent-wrong failure: a wrong number in a small table looks exactly like a
 * right one, and a reader cannot tell.
 *
 * The copy lives here too, rather than in the component, so `toolPageCopy` can
 * hand it to the measured-surface registry and the banned-term, duplication and
 * provenance rails can read it (D29). Copy that lives only in JSX is copy no
 * gate sees.
 */
import { STATUTES } from "../statutes.ts";
import type { Degree } from "../statutes.ts";

const CHART = STATUTES["921.0022"];

/**
 * Rows belonging to a statute SECTION, respecting the section boundary.
 *
 * WHY THIS IS NOT `cite.startsWith(section)`. F.S. 893.135 is drug trafficking
 * and every one of its tiers sits at level 7, 8 or 9. F.S. 893.1351 is a
 * different offense, ownership or lease of a place for trafficking or
 * manufacturing, and its (1) sits at level 5. A prefix match returns 51 rows
 * spanning levels 5 through 9 and makes the page state that a level 5
 * trafficking tier exists. It does not.
 *
 * That is not hypothetical. The naive filter was written twice: once while
 * verifying the concept document, where it produced the wrong answer and was
 * caught, and it is the reason the concept document carries a build requirement
 * and assertion T8 for this function specifically.
 *
 * A section ends at a boundary: end of string, an opening parenthesis, or a
 * space. A digit after the section number means a DIFFERENT section.
 */
export function rowsInSection(section: string) {
  const boundary = new RegExp(`^${section.replace(/\./g, "\\.")}(?=$|[^0-9])`);
  return CHART.rows.filter((r) => boundary.test(r.cite.trim()));
}

/** One row of the chart, as the page renders it. */
export type Triple = {
  cite: string;
  degree: Degree;
  level: number;
  /** The chart's own descriptive text. F.S. 921.0022(2): descriptive only. */
  description: string;
};

/**
 * Look a single paragraph up by its exact cite.
 *
 * Throws rather than returning undefined. A comparison that silently loses a
 * row would render a table with a hole in it, and the build should stop
 * instead: every cite below is a claim this page makes in public.
 */
function triple(cite: string): Triple {
  const hits = CHART.rows.filter((r) => r.cite.trim() === cite);
  if (hits.length !== 1) {
    throw new Error(
      `offense-level: ${cite} matched ${hits.length} rows in F.S. 921.0022. ` +
        `Every comparison cite must resolve to exactly one chart row.`,
    );
  }
  const r = hits[0];
  if (r.level == null) {
    throw new Error(`offense-level: ${cite} carries no level in the chart.`);
  }
  return {
    cite: r.cite.trim(),
    degree: r.degree,
    level: r.level,
    description: r.quote ?? "",
  };
}

/** Comparison A. One dollar figure, three statutes, three levels. */
export const COMPARISON_A = {
  heading: "One amount, three statutes, three different levels",
  amount: "$19,000",
  blurb:
    "The same $19,000 charged three ways. The degree is identical in all three. The level the chart assigns is not.",
  rows: [
    { as: "Grand theft", ...triple("812.014(2)(c)3.") },
    { as: "Scheme to defraud", ...triple("817.034(4)(a)3.") },
    { as: "Money laundering", ...triple("896.101(5)(a)") },
  ],
};

/** Comparison B. A lower degree carrying a higher level. */
export const COMPARISON_B = {
  heading: "A lower degree carrying a higher level",
  blurb:
    "Degree and level do not move together. The chart assigns each one separately, so the lower degree here carries the higher level.",
  rows: [
    {
      as: "Fraudulent use of a minor's identification by their own parent or guardian",
      ...triple("817.568(7)"),
    },
    { as: "Grand theft of $100,000 or more", ...triple("812.014(2)(a)1.") },
  ],
};

/**
 * Comparison C. The trafficking floor.
 *
 * Derived through `rowsInSection`, so the boundary is enforced by the same
 * function assertion T8 tests rather than by a hand-written list.
 */
const TRAFFICKING = rowsInSection("893.135").filter((r) => r.level != null);
const TRAFFICKING_LEVELS = [
  ...new Set(TRAFFICKING.map((r) => r.level as number)),
].sort((a, b) => a - b);

/** "7, 8 or 9" from [7,8,9]. Never hand-written; the levels are derived. */
function list(ns: number[], conj: string): string {
  if (ns.length === 1) return String(ns[0]);
  return `${ns.slice(0, -1).join(", ")} ${conj} ${ns.at(-1)}`;
}

/**
 * Counts in prose are spelled, figures in tables are numerals.
 *
 * The count still has to be DERIVED, which is the whole point, so this maps
 * the derived number to a word rather than letting anyone type "five" next to
 * a table that shows four. Falls back to the numeral past the range that ever
 * plausibly appears here, because a wrong-looking "13" is better than a crash
 * and better than a silent stale word.
 */
const WORDS = [
  "zero", "one", "two", "three", "four", "five",
  "six", "seven", "eight", "nine", "ten",
];
const word = (n: number) => WORDS[n] ?? String(n);

export const COMPARISON_C = {
  heading: "Trafficking has no low tier",
  section: "893.135",
  rowCount: TRAFFICKING.length,
  levels: TRAFFICKING_LEVELS,
  // Interpolated from the derived values rather than typed, so a chart update
  // that adds a trafficking paragraph rewrites the sentence instead of leaving
  // a stale count sitting in prose where no gate would read it as a number.
  blurb: `Statute 893.135 has ${TRAFFICKING.length} ranked paragraphs in the chart, and every one of them sits at level ${list(TRAFFICKING_LEVELS, "or")}. There is no low-level trafficking paragraph in the chart.`,
  // The boundary the matcher enforces, said out loud. A reader who counts the
  // chart themselves will find 893.1351 next to 893.135 and should know why it
  // is not in the number above.
  boundaryNote:
    "Statute 893.1351, ownership or lease of a place used for trafficking or manufacturing, is a different statute and is not counted above. Its first subsection sits at level 5.",
};

/** The spread: one degree, many levels, inside a single statute. */
const GRAND_THEFT_3D = rowsInSection("812.014").filter(
  (r) => r.degree === "third degree felony" && r.level != null,
);
const SPREAD_LEVELS = [
  ...new Set(GRAND_THEFT_3D.map((r) => r.level as number)),
].sort((a, b) => a - b);
export const SPREAD = {
  // The count in the heading is derived too. A heading that says "five" while
  // the table shows four is the silent-wrong failure in its cheapest form.
  heading: `One degree, one statute, ${word(SPREAD_LEVELS.length)} different levels`,
  section: "812.014",
  degree: "third degree felony" as Degree,
  levels: SPREAD_LEVELS,
  blurb: `Within statute 812.014, the paragraphs the chart grades as a third degree felony are spread across levels ${list(SPREAD_LEVELS, "and")}. One degree, one statute, ${word(SPREAD_LEVELS.length)} levels. Knowing the degree does not tell you the level.`,
};

export const SPANS_HEADING = "How the code ranks each degree";
export const SPANS_BLURB =
  "Every degree in the chart occupies a range of levels, and the ranges overlap. This table is that in one place.";

/** The thesis in one object: every degree, every level it occupies. */
export const DEGREE_SPANS: { degree: Degree; levels: number[] }[] = (() => {
  const map = new Map<Degree, Set<number>>();
  for (const r of CHART.rows) {
    if (r.level == null) continue;
    if (!map.has(r.degree)) map.set(r.degree, new Set());
    map.get(r.degree)!.add(r.level);
  }
  // Ordered by the lowest level each degree reaches, so the table reads as a
  // ladder. Deliberately NOT ordered by severity: the concept document forbids
  // ranking the comparisons, and an ordering is a ranking.
  return [...map.entries()]
    .map(([degree, levels]) => ({
      degree,
      levels: [...levels].sort((a, b) => a - b),
    }))
    .sort((a, b) => a.levels[0] - b.levels[0] || a.levels.length - b.levels.length);
})();

/** The chart version, for C6. Read from the table, never typed. */
export const CHART_VERSION = {
  cite: CHART.cite,
  completeness: CHART.completeness,
  fetched: CHART.fetched,
  rowCount: CHART.rows.length,
};

// ---------------------------------------------------------------- copy
/**
 * Section 5 of the concept document, verbatim. This is the disclosure Rule
 * 4-7.13(a)(2) requires and plan Section 5.2 sets the placement for: adjacent
 * to the output, not a footer, at equal or greater prominence.
 *
 * It is a const rather than JSX so assertion T4 can check the rendered page
 * against the exact string, and so a rewrite of the page cannot quietly soften
 * it.
 */
export const CANNOT_KNOW = {
  heading: "This page is one input, not a calculation.",
  body:
    "The offense level is the primary-offense component of a Criminal Punishment Code scoresheet. A real scoresheet also scores additional offenses, victim injury, prior record, legal status, community sanction violations, prior serious and prior capital felonies, and firearm possession, and it then applies any of eight multipliers. None of that is on this page. Nothing here is a statement about any particular case, and no page on this site can tell you what sentence a court would impose.",
};

export const LEAD =
  "Two people charged with the same degree of felony can be in very different positions. What separates them is the offense level, a number the Criminal Punishment Code assigns to the offense itself. The degree is on the charging document. The level usually is not, and it is what the sentencing worksheet is built from.";

export const INTRO_NOTE =
  "Every figure below is what the offense severity ranking chart assigns. Nothing here is a statement about any particular case.";

/**
 * DELIBERATELY NOT ON THE PAGE, and kept here so the absence is a decision
 * rather than an oversight (D5).
 *
 * The concept document's rule is conditional: "Any description shown is
 * attributed as the chart's descriptive text." This page shows none. Its
 * tables carry a plain-language label, the cite, the degree and the level, per
 * Section 4. Rendering this note next to tables with no description column
 * explains a column that is not there, which is its own small way of being
 * wrong. Restore it in the same commit that adds the column, never before.
 *
 * `Triple.description` carries the chart's text for that future column and is
 * why the field is populated but unrendered today.
 */
export const DESCRIPTION_NOTE_UNRENDERED =
  "Descriptions are the chart's own wording. Statute 921.0022(2) provides that the language in the right column of the chart is provided solely for descriptive purposes, so it describes the row rather than stating what the offense is.";

export const NO_RELATIONSHIP =
  "This page is educational information about how Florida classifies offenses. It is not legal advice, it is not about your case, and reading it does not create an attorney-client relationship with Hines & McCarty. Every case is different. Speak to a Florida lawyer about yours.";

/**
 * C6, with the scope correction the concept document requires.
 *
 * The criterion names Rule 3.992 because it was written for the sentencing
 * calculator. This tool implements no scoresheet form, so that clause is
 * INAPPLICABLE rather than satisfied, and the page says so. A green C6 must not
 * be readable as a claim about a form this tool does not implement.
 */
/**
 * Both halves are taken apart from the table's own cite rather than typed. The
 * edition year in particular: writing "2025" by hand next to a cite that says
 * (2025) is two copies of one fact, and the hand-written one is the one that
 * survives a table update.
 */
const CITE_NUMBER = CHART.cite.replace(/^F\.S\.\s*/, "").replace(/\s*\(\d{4}\)\s*$/, "");
const CITE_YEAR = CHART.cite.match(/\((\d{4})\)/)?.[1] ?? "";

export const VERSION_NOTE =
  `Figures on this page come from the offense severity ranking chart at Statute ${CITE_NUMBER}, ${CITE_YEAR} Florida Statutes, recorded ${CHART_VERSION.fetched}. This page addresses Florida law only. It implements no Criminal Punishment Code scoresheet computation, so the Rule 3.992 scoresheet revision does not apply to it and is not stated here.`;

export const FEDERAL_NOTE =
  "The Criminal Punishment Code ranks Florida offenses. It does not apply to federal cases, so nothing on this page speaks to a charge in federal court.";

export const H1 = "How Florida ranks offenses";

/**
 * Every rendered string, for the measured-surface registry (D29).
 *
 * This list is not a summary of the page, it is the page. `check:offense-level`
 * sweeps the built HTML for prose elements and fails on any heading or
 * paragraph whose text is not in this array, so copy cannot be added in JSX
 * where the banned-term, duplication and provenance rails would never see it.
 * That sweep is the reason this array can be trusted rather than merely
 * maintained.
 */
export const OFFENSE_LEVEL_PAGE_COPY: string[] = [
  H1,
  LEAD,
  INTRO_NOTE,
  CANNOT_KNOW.heading,
  CANNOT_KNOW.body,
  COMPARISON_A.heading,
  COMPARISON_A.blurb,
  COMPARISON_B.heading,
  COMPARISON_B.blurb,
  COMPARISON_C.heading,
  COMPARISON_C.blurb,
  COMPARISON_C.boundaryNote,
  SPREAD.heading,
  SPREAD.blurb,
  SPANS_HEADING,
  SPANS_BLURB,
  VERSION_NOTE,
  FEDERAL_NOTE,
  NO_RELATIONSHIP,
  ...COMPARISON_A.rows.map((r) => r.as),
  ...COMPARISON_B.rows.map((r) => r.as),
];
