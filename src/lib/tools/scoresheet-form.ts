/**
 * Rule 3.992 Criminal Punishment Code Scoresheet: the form's point values,
 * typed.
 *
 * SENTENCING-WORKSHEET-CONCEPT.md Section 8, machine item 3. Four point grids
 * and eight scalars, transcribed by a fresh build-and-audit pass.
 *
 * HOW THESE VALUES GOT HERE, because the method is the guarantee and not the
 * decoration:
 *
 *   BUILD. Every number below was typed by hand from a 150dpi visual render of
 *   all four pages of the corrected Rule 3.992 PDF, read as a form. They were
 *   NOT derived by splitting the flattened quote strings in fs-921-0024.ts.
 *   That matters: the 921.0024 audit already rejected one reconstruction of
 *   this grid as a fabrication in a quote field, and regexing the flattened
 *   string would repeat the act it refused while looking like a parse.
 *
 *   AUDIT. `scripts/check-worksheet.mts` re-derives all four grids and all
 *   eight scalars from TWO in-repo records that were written independently of
 *   this file, and fails on any disagreement:
 *     1. the audited whole-section table `fs-921-0024.ts`, whose quote strings
 *        are the statute's own worksheet cells in document order;
 *     2. the READ-WHOLE Rule 3.992 record in docs/research/PAGE-SOURCES.md.
 *   The gate fails if it cannot LOCATE a grid or a scalar, not merely if it
 *   finds a mismatch. A parse that quietly matches nothing is the failure shape
 *   this project keeps meeting.
 *
 * THE SILENT-WRONG FAILURE this guards, in the concept document's words: the
 * failure a reader cannot detect is a wrong point value in a filled cell, which
 * looks exactly like a right one.
 */

/**
 * The revision this file implements. C6, and the reason C6 is a gate.
 *
 * The October 23, 2025 upload printed the PRIMARY offense grid inside the
 * ADDITIONAL OFFENSES block, contradicting both F.S. 921.0024(1)(a) and its own
 * supplemental page. The January 2026 corrected upload fixes exactly that line.
 * A build against the October PDF would have rendered a wrong number in a
 * filled cell. So the revision date alone is not sufficient to state; the
 * correction has to be named with it, and every surface that states one states
 * both.
 */
export const FORM_REVISION = {
  rule: "Fla. R. Crim. P. 3.992",
  title: "Criminal Punishment Code Scoresheet",
  /** Effective date of the amendment. */
  effective: "October 23, 2025",
  amendedBy:
    "In re Amendments to Florida Rule of Criminal Procedure 3.992, No. SC2025-1036",
  /** The corrected upload. Load-bearing; see the file header. */
  correction: "January 2026",
  /** The corrected PDF's own creation date, as a second grip on "January 2026". */
  correctionPdfDate: "2026-01-14",
  source:
    "https://www-media.floridabar.org/uploads/2026/01/Rule-3.992-Scoresheet-Effective-October-23-2025-Corrected-1.pdf",
  recorded: "2026-08-24",
  /**
   * One official publisher, where the house standard is two. Stated here as
   * data so a surface can print it rather than infer it (D22). The POINT VALUES
   * are separately confirmed by F.S. 921.0024(1)(a) and by FDLE's independently
   * published copy of the form; the LAYOUT AND WORDING rest on the Bar alone.
   */
  singleSource: true,
} as const;

/** A level key. "M" is a misdemeanor row, present in three grids of the four. */
export type LevelKey = "M" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/**
 * Grid 1 of 4. Section I, Primary Offense.
 *
 * NO "M" ROW, and that absence is load-bearing rather than an omission here: a
 * misdemeanor cannot be a primary offense, and borrowing the 0.2 from the
 * Additional Offenses grid would invent a rule. Both the statute and the form
 * print this grid without an M row.
 *
 * This is the ONLY grid the worksheet tool ever reads. The other three are
 * typed because the form prints them on its face and a rendering of the form
 * shows them, not because anything computes from them.
 */
export const PRIMARY_OFFENSE_POINTS: Partial<Record<LevelKey, number>> = {
  1: 4,
  2: 10,
  3: 16,
  4: 22,
  5: 28,
  6: 36,
  7: 56,
  8: 74,
  9: 92,
  10: 116,
};

/** Grid 2 of 4. Section II, Additional Offenses. Per count, and has an M row. */
export const ADDITIONAL_OFFENSE_POINTS: Record<LevelKey, number> = {
  M: 0.2,
  1: 0.7,
  2: 1.2,
  3: 2.4,
  4: 3.6,
  5: 5.4,
  6: 18,
  7: 28,
  8: 37,
  9: 46,
  10: 58,
};

/**
 * Grid 3 of 4. Section III, Victim Injury.
 *
 * Not keyed by offense level. The two sexual categories sit at the BOTTOM of
 * the printed grid and carry higher values than the severe, moderate and slight
 * categories above them: sexual penetration at 80 outranks severe at 40. A
 * reader who scans the visible top rows and stops will miss them, which is why
 * the order below is the form's order rather than a sorted one.
 */
export const VICTIM_INJURY_POINTS: { label: string; points: number }[] = [
  { label: "2nd Degree Murder", points: 240 },
  { label: "Death", points: 120 },
  { label: "Severe", points: 40 },
  { label: "Moderate", points: 18 },
  { label: "Slight", points: 4 },
  { label: "Sex Penetration", points: 80 },
  { label: "Sex Contact", points: 40 },
];

/** Grid 4 of 4. Section IV, Prior Record. Per count, and has an M row. */
export const PRIOR_RECORD_POINTS: Record<LevelKey, number> = {
  M: 0.2,
  1: 0.5,
  2: 0.8,
  3: 1.6,
  4: 2.4,
  5: 3.6,
  6: 9,
  7: 14,
  8: 19,
  9: 23,
  10: 29,
};

/**
 * The eight scalars: flat point assessments the form prints beside a section
 * heading. Each carries the form's own wording for its cell, because the
 * worksheet renders the cell rather than describing the rule.
 *
 * Every one of these is a cell the tool leaves EMPTY. They are typed so the
 * form's printed face is accurate, not so anything is scored.
 */
export const SCALARS = {
  legalStatus: { points: 4, section: "V", face: "LEGAL STATUS VIOLATION = 4 Points" },
  communitySanction: {
    points: 6,
    section: "VI",
    face: "6 points for any violation other than new felony conviction",
  },
  communitySanctionNewFelony: {
    points: 12,
    section: "VI",
    face: "New felony conviction = 12 points",
  },
  communitySanctionSpecialConcern: {
    points: 12,
    section: "VI",
    face:
      "12 points for a violent felony offender of special concern when the violation is not based solely on failure to pay costs, fines, or restitution",
  },
  communitySanctionSpecialConcernNewFelony: {
    points: 24,
    section: "VI",
    face:
      "New felony conviction = 24 points for a violent felony offender of special concern",
  },
  firearm: {
    points: 18,
    section: "VII",
    face: "FIREARM/SEMI-AUTOMATIC OR MACHINE GUN = 18 or 25 Points",
  },
  semiautomaticOrMachineGun: {
    points: 25,
    section: "VII",
    face: "FIREARM/SEMI-AUTOMATIC OR MACHINE GUN = 18 or 25 Points",
  },
  priorSeriousFelony: {
    points: 30,
    section: "VIII",
    face: "PRIOR SERIOUS FELONY = 30 Points",
  },
} as const;

/**
 * The eight multipliers printed in Section IX, in the form's own printed order
 * and with the form's own labels.
 *
 * `requiresPrimaryOffenseIn` records the statute SECTIONS the (1)(b) key names
 * as a necessary condition for that multiplier. It exists for exactly one safe
 * inference, in one direction only: if the selected primary offense is not in
 * one of the named sections, the multiplier cannot apply to that selection, and
 * the cell can be rendered "not applicable" rather than merely empty. The
 * converse is NOT safe and is not drawn: a matching section means the remaining
 * conditions are unknown, so the cell stays empty.
 *
 * A null value means the key states no single-section predicate (the condition
 * turns on conduct, purpose, or prior record), so the cell is always empty.
 *
 * Sections only, never subsections. The animal cruelty key names s. 828.12(2)
 * specifically; comparing at section level makes the tool claim LESS than the
 * statute would allow, which is the correct direction to be wrong in.
 */
export const MULTIPLIERS: {
  label: string;
  values: number[];
  requiresPrimaryOffenseIn: string[] | null;
}[] = [
  {
    label: "Specified Justice System Personnel",
    values: [1.5, 2.0, 2.5],
    requiresPrimaryOffenseIn: ["775.0823", "784.07", "775.0875"],
  },
  { label: "Drug Trafficking", values: [1.5], requiresPrimaryOffenseIn: ["893.135"] },
  { label: "Motor Vehicle Theft", values: [1.5], requiresPrimaryOffenseIn: null },
  { label: "Criminal Gang Offense", values: [1.5], requiresPrimaryOffenseIn: null },
  {
    label: "Domestic Violence in Presence of Related Child",
    values: [1.5],
    requiresPrimaryOffenseIn: null,
  },
  {
    label: "Adult-on-Minor Sex Offense",
    values: [2.0],
    requiresPrimaryOffenseIn: ["787.01", "787.02", "794.011", "800.04", "847.0135"],
  },
  {
    label: "Aggravated Animal Cruelty",
    values: [1.25],
    requiresPrimaryOffenseIn: ["828.12"],
  },
  {
    label: "Fleeing/Aggravated Fleeing",
    values: [1.5],
    requiresPrimaryOffenseIn: ["316.1935"],
  },
];

/**
 * The four sentencing designations the form prints as post-sentence checkboxes.
 *
 * NAMES ONLY, and deliberately. `fs-921-0024.ts` records in its `unread` field
 * that s. 775.082(9) and s. 775.084, the substantive sources of all four, were
 * NOT FETCHED, and `fs-775-084.ts` is recorded partial. So this tool may render
 * these as cells on a form, because they are on the form's face and the face is
 * recorded, and it may not say what any of them does. On a worksheet that is a
 * comfortable limit: they are cells, and this tool renders cells.
 */
export const DESIGNATIONS = [
  "Habitual Offender",
  "Habitual Violent Offender",
  "Violent Career Criminal",
  "Prison Releasee Reoffender",
] as const;

/**
 * Points for a primary offense at a given level.
 *
 * Throws rather than returning undefined or zero. A missing level must stop the
 * build, because the alternative is a cell that renders "0" or blank and reads
 * to a reader as a scored value. There is no level the chart assigns that this
 * grid lacks, and if that ever stops being true the build should say so.
 */
export function primaryOffensePoints(level: number): number {
  const points = PRIMARY_OFFENSE_POINTS[level as LevelKey];
  if (points == null) {
    throw new Error(
      `scoresheet-form: no Primary Offense point value for level ${level}. ` +
        `The Rule 3.992 Primary Offense grid runs levels 1 through 10 and has no ` +
        `M row. A level outside that range must not be rendered as a filled cell.`,
    );
  }
  return points;
}
