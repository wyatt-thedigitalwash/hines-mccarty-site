/**
 * Verified statutory grading, as DATA.
 *
 * WHY THIS EXISTS. The grand theft page stated Florida's theft grading wrongly
 * three times in a row, and each correction broke the band beneath the one it
 * fixed. Four adversarial rounds caught them; nothing automatic did. The reason
 * is structural, not carelessness:
 *
 *   A claim written in prose cannot be checked against a source.
 *
 * So legal facts stop living in prose. Each graded statute gets one table here,
 * every row carrying the quoted text it came from and the URL it was fetched
 * from. `scripts/check-claims.mts` then reads the prose on every page, extracts
 * the amount-to-degree and subsection-to-degree pairs it asserts, and fails the
 * build on any pair this table does not support.
 *
 * THE OTHER HALF, and the one that actually caused the repeats: a table is
 * checkable for COMPLETENESS in a way prose is not. Each entry declares whether
 * the section was fetched whole. A page may not make a "nothing else applies"
 * claim about a statute recorded as partial. All three errors were exactly that
 * claim, made from a partial reading:
 *
 *   1. "below $750 it is petit theft of the second degree"   ignored (2)(f)
 *   2. "only below $100 does (3)(a) apply"                   ignored (2)(e)1.
 *   3. "in practice that means property valued under $100"   ignored (2)(e)1.
 *
 * Every one was already sitting verified in W1-03's ranking chart while the page
 * said the opposite. The failure was never a missing source.
 */

import { VERIFIED_TABLES } from "./statute-tables/index.ts";

export type Degree =
  | "capital felony"
  | "life felony"
  | "first degree felony"
  // Real Florida grading categories the original 8-value union could not
  // express, surfaced when the 921.0022 ranking chart landed: "punishable by
  // imprisonment for a term of years not exceeding life". Distinct from both
  // "life felony" and the plain degree, and the chart's controlling degree
  // column uses them, so squeezing them into trigger text understates the
  // exposure.
  | "first degree felony punishable by life"
  | "second degree felony punishable by life"
  | "second degree felony"
  | "third degree felony"
  | "first degree misdemeanor"
  | "second degree misdemeanor"
  | "no degree assigned";

/** Statutory maximums, so a page never states one from recall. */
export const DEGREE_MAXIMUM: Record<Degree, string> = {
  "capital felony": "Death or life without parole",
  "life felony": "Up to life",
  "first degree felony": "Up to 30 years",
  "first degree felony punishable by life": "Up to life (a term of years not exceeding life)",
  "second degree felony punishable by life": "Up to life (a term of years not exceeding life)",
  "second degree felony": "Up to 15 years",
  "third degree felony": "Up to 5 years",
  "first degree misdemeanor": "Up to 1 year",
  "second degree misdemeanor": "Up to 60 days",
  "no degree assigned": "Set by the charging statute",
};

export type GradingRow = {
  /** Subsection, exactly as the statute numbers it. */
  cite: string;
  /** Inclusive lower bound in dollars, or null where value is not the trigger. */
  min: number | null;
  /**
   * True where the statute's threshold is strict ("in excess of $3,000"), so
   * the bound itself does NOT qualify. Without this flag the schema could only
   * express inclusive minimums, and a guard asking "what happens at exactly
   * $3,000" would wrongly include the row. Found by the 812.014 round-2
   * re-audit.
   */
  minExclusive?: boolean;
  /** Exclusive upper bound in dollars, or null for open-ended. */
  max: number | null;
  degree: Degree;
  /** F.S. 921.0022 offense severity level, where the chart lists one. */
  level?: number;
  /**
   * A non-value trigger: the item taken, the place, a prior conviction.
   * Rows carrying one are NOT part of the value ladder and must not be used to
   * answer "what happens at $X".
   */
  trigger?: string;
  /**
   * What narrows this row beyond value.
   *
   * Rows with no scope form the GENERAL ladder, which is what an unqualified
   * sentence like "a $500 theft is a first degree misdemeanor" is asserting
   * about. Scoped rows are compared only when the sentence raises that scope.
   * Without this split the checker fires on correct copy, and a check that
   * cries wolf gets switched off, which is worse than not having it.
   */
  scope?: "dwelling" | "item" | "prior" | "victim" | "place";
  /**
   * A RESIDUAL clause: it applies to whatever the rest of the section does not
   * reach. F.S. 812.014(3)(a) is one, "theft of any property not specified in
   * subsection (2)".
   *
   * Residual clauses are where all three shipped errors came from, and always
   * the same way: the page described the remainder by a dollar figure. A
   * remainder has no floor of its own, so any sentence that gives it one is
   * asserting something about every other paragraph in the section.
   */
  residual?: boolean;
  /** The words the row rests on. */
  quote: string;
};

export type StatuteTable = {
  cite: string;
  title: string;
  url: string;
  fetched: string;
  /**
   * Was the WHOLE section fetched, or only parts?
   *
   * This is the field the three errors turned on. `partial` means no page may
   * assert what the statute does NOT cover, because the reading cannot support
   * a negative. See `check-claims.mts`.
   */
  completeness: "whole-section" | "partial";
  /** What "partial" leaves unread, so the gap is visible rather than implied. */
  unread?: string;
  rows: GradingRow[];
};

export const STATUTES: Record<string, StatuteTable> = {
  // THE HAND-BUILT 812.014 TABLE IS GONE, and this note is what it left behind.
  //
  // It was 23 rows, recorded `completeness: "partial"`, and it existed because
  // the grand theft page stated Florida's theft grading wrongly three times in
  // a row. Its own history is the argument for everything below it: the entry
  // once recorded "whole-section" when the reading was partial, and because
  // check-claims.mts gates its exhaustive-claim rule on that field, a wrong
  // flag silently switched off the guard protecting the one statute that had
  // already been wrong four times. A field describing a FETCH had been standing
  // in for the fact of having READ the section.
  //
  // It is now replaced by the generated 41-row table in
  // statute-tables/fs-812-014.ts, built from the complete section by one agent,
  // independently re-fetched and audited by a second, and repaired across three
  // rounds. The reading that produced it covers paragraphs (a) and (b) as
  // grading by ITEM as well as by value, which is what the hand-built reading
  // missed: the cargo provision at (2)(b)2. has no lower dollar bound at all.
  //
  // One thing did NOT survive the pipeline and had to be restored deliberately:
  // the `residual` flag on (3)(a). The build and audit schema has no field for
  // it, so auditors describe residual clauses in `trigger` prose, and prose
  // does not arm a guard. scripts/statute-table-annotations.json carries the
  // flag now and the generator fails loudly if its cite ever stops matching a
  // row. Losing it would have repeated the completeness-flag failure exactly.
  //
  // Workflow-verified tables, one file per statute in src/lib/statute-tables/.
  // Each passed the independent build-then-audit pipeline; a FAILed table
  // never lands there. Keys are the bare section number as it appears in
  // prose (FS "893.135", USC "1956"), because check-claims.mts matches keys
  // literally against sentences.
  ...VERIFIED_TABLES,
};

/**
 * What does this statute say happens at a given value?
 *
 * Returns EVERY row whose range contains the amount, because more than one
 * usually does and that is the whole point. At $500 the theft statute produces
 * a first degree misdemeanor and a third degree felony depending on where the
 * property was taken from. A page that answers "what happens at $500" with one
 * degree is wrong, and this is the function that shows it.
 */
export function rowsAt(
  statute: string,
  amount: number,
  opts: { scope?: GradingRow["scope"] | null } = {},
): GradingRow[] {
  const t = STATUTES[statute];
  if (!t) return [];
  const want = opts.scope ?? null;
  return t.rows.filter(
    (r) =>
      (r.scope ?? null) === want &&
      (r.min !== null || r.max !== null) &&
      (r.min === null ||
        (r.minExclusive ? amount > r.min : amount >= r.min)) &&
      (r.max === null || amount < r.max),
  );
}

/** Degrees this statute can produce at a given value. */
export function degreesAt(
  statute: string,
  amount: number,
  opts: { scope?: GradingRow["scope"] | null } = {},
): Set<Degree> {
  return new Set(rowsAt(statute, amount, opts).map((r) => r.degree));
}
