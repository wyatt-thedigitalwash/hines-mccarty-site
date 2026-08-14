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

import { VERIFIED_TABLES } from "./statute-tables";

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
  "812.014": {
    cite: "F.S. 812.014",
    title: "Theft",
    url: "https://www.flsenate.gov/Laws/Statutes/2025/812.014",
    fetched: "2026-08-13",
    // WAS "whole-section". That was FALSE, and recording it turned OFF the
    // exhaustive-claim guard in check-claims.mts for this statute, because that
    // rule is gated on `completeness !== "whole-section"`. A field describing a
    // FETCH was standing in for the fact of having READ the section, and the
    // effect was to disable the one check that guards "only" and "never"
    // sentences about the very statute that has been wrong four times.
    //
    // The reading covered the value axis of (2)(c), (2)(d), (2)(e), (2)(f) and
    // (3) thoroughly and read past paragraphs (a) and (b) as if "value tier"
    // were all they contained. It is not: both grade by ITEM as well, and one of
    // those items has no lower dollar bound at all.
    completeness: "partial",
    unread:
      "812.014(2)(a)3 in full, the riot and emergency reclassification clauses in (2)(b) and (2)(c), and 812.014(6) coordinating the activities of others",
    rows: [
      {
        cite: "812.014(2)(a)",
        min: 100000,
        max: null,
        degree: "first degree felony",
        level: 7,
        quote: "If the property stolen is valued at $100,000 or more",
      },
      {
        cite: "812.014(2)(b)",
        min: 20000,
        max: 100000,
        degree: "second degree felony",
        level: 6,
        quote: "If the property stolen is valued at $20,000 or more, but less than $100,000",
      },
      {
        cite: "812.014(2)(c)3.",
        min: 10000,
        max: 20000,
        degree: "third degree felony",
        level: 4,
        quote: "Valued at $10,000 or more, but less than $20,000.",
      },
      {
        cite: "812.014(2)(c)2.",
        min: 5000,
        max: 10000,
        degree: "third degree felony",
        level: 3,
        quote: "Valued at $5,000 or more, but less than $10,000.",
      },
      {
        cite: "812.014(2)(c)1.",
        min: 750,
        max: 5000,
        degree: "third degree felony",
        level: 2,
        quote: "Valued at $750 or more, but less than $5,000.",
      },
      {
        cite: "812.014(2)(f)",
        min: 100,
        max: 750,
        degree: "first degree misdemeanor",
        trigger: "not taken from a dwelling",
        quote:
          "Except as provided in paragraph (d), if the property stolen is valued at $100 or more, but less than $750, the offender commits petit theft of the first degree, punishable as a misdemeanor of the first degree",
      },
      {
        cite: "812.014(3)(a)",
        residual: true,
        min: null,
        max: 100,
        degree: "second degree misdemeanor",
        trigger: "property not specified in subsection (2), so not from a dwelling and not on the item list",
        quote:
          "Theft of any property not specified in subsection (2) is petit theft of the second degree and a misdemeanor of the second degree",
      },
      // ---- the dwelling ladder, which grades the SAME dollar amounts differently
      {
        cite: "812.014(2)(d)2.",
        scope: "dwelling",
        min: 750,
        max: null,
        degree: "third degree felony",
        level: 4,
        trigger: "taken from a dwelling or its unenclosed curtilage",
        quote: "If the property stolen is valued at $750 or more and is taken from a dwelling",
      },
      {
        cite: "812.014(2)(d)1.",
        scope: "dwelling",
        min: 40,
        max: 750,
        degree: "third degree felony",
        level: 2,
        trigger: "taken from a dwelling or its unenclosed curtilage",
        quote:
          "If the property stolen is valued at $40 or more, but less than $750, and is taken from a dwelling",
      },
      {
        cite: "812.014(2)(e)1.",
        scope: "dwelling",
        min: null,
        max: 40,
        degree: "first degree misdemeanor",
        trigger: "taken from a dwelling or its unenclosed curtilage",
        quote:
          "It is petit theft of the first degree and a misdemeanor of the first degree ... if the property stolen is valued at less than $40 and is taken from a dwelling",
      },
      // ---- ITEM-GRADED rows inside paragraphs (a) and (b).
      // These are the rows whose absence made the bottom of the ladder wrong.
      // (2)(b)2 in particular has NO lower bound, so the page's "under $100 is
      // sixty days" row was false for any cargo theft, by fifteen years.
      {
        cite: "812.014(2)(b)2.",
        scope: "item",
        min: null,
        max: 50000,
        degree: "second degree felony",
        level: 7,
        trigger:
          "cargo that has entered the stream of interstate or intrastate commerce, at ANY value below $50,000",
        quote:
          "If the property stolen is cargo valued at less than $50,000 that has entered the stream of interstate or intrastate commerce from the shipper's loading platform to the consignee's receiving dock",
      },
      {
        cite: "812.014(2)(a)2.",
        scope: "item",
        min: 50000,
        max: null,
        degree: "first degree felony",
        level: 8,
        trigger: "cargo in the stream of commerce valued at $50,000 or more",
        quote:
          "If the property stolen is cargo valued at $50,000 or more that has entered the stream of interstate or intrastate commerce from the shipper's loading platform to the consignee's receiving dock",
      },
      {
        cite: "812.014(2)(a)1.",
        scope: "item",
        min: null,
        max: null,
        degree: "first degree felony",
        level: 7,
        trigger: "a semitrailer deployed by a law enforcement officer, at any value",
        quote:
          "If the property stolen is valued at $100,000 or more or is a semitrailer that was deployed by a law enforcement officer",
      },
      {
        cite: "812.014(2)(b)3.",
        scope: "item",
        min: 300,
        max: null,
        degree: "second degree felony",
        level: 7,
        trigger: "emergency medical equipment",
        quote: "emergency medical equipment, valued at $300 or more",
      },
      {
        cite: "812.014(2)(b)4.",
        scope: "item",
        min: 300,
        max: null,
        degree: "second degree felony",
        level: 7,
        trigger: "law enforcement equipment",
        quote: "law enforcement equipment, valued at $300 or more",
      },
      {
        cite: "812.014(2)(e)3.",
        scope: "prior",
        min: null,
        max: null,
        degree: "third degree felony",
        level: 4,
        trigger: "under $40 from a dwelling, with two or more prior theft convictions",
        quote:
          "A person who commits a violation of subparagraph 1. and who has previously been convicted two or more times of any theft commits a felony of the third degree.",
      },
      // ---- non-value triggers
      {
        cite: "812.014(2)(d)3.",
        scope: "dwelling",
        min: null,
        max: null,
        degree: "second degree felony",
        level: 5,
        trigger: "taken from more than 20 dwellings",
        quote: "Property taken from more than 20 dwellings",
      },
      {
        cite: "812.014(2)(c)4.-13.",
        scope: "item",
        min: null,
        max: null,
        degree: "third degree felony",
        trigger:
          "the item taken: a will or codicil, a firearm, a motor vehicle, a commercially farmed animal, an installed fire extinguisher, 2,000 or more pieces of citrus, property from a posted construction site, a stop sign, anhydrous ammonia, or any amount of a controlled substance",
        quote: "It is grand theft of the third degree and a felony of the third degree",
      },
      {
        cite: "812.014(2)(c)5.",
        scope: "item",
        min: null,
        max: null,
        degree: "third degree felony",
        level: 6,
        trigger: "a firearm",
        quote: "A firearm, except as provided in paragraph (g).",
      },
      {
        cite: "812.014(2)(g)",
        scope: "item",
        min: null,
        max: null,
        degree: "second degree felony",
        level: 7,
        trigger: "a firearm, where the offender has a prior conviction for grand theft of a firearm",
        quote:
          "It is grand theft of the second degree and a felony of the second degree ... if the property stolen is a firearm and the offender has previously been convicted of grand theft of a firearm under subparagraph (c)5.",
      },
      {
        cite: "812.014(2)(e)2.",
        scope: "prior",
        min: null,
        max: null,
        degree: "third degree felony",
        level: 2,
        trigger: "under $40 from a dwelling, with one prior theft conviction",
        quote:
          "A person who commits a violation of subparagraph 1. and who has previously been convicted of any theft commits a felony of the third degree.",
      },
      {
        cite: "812.014(3)(b)",
        scope: "prior",
        min: null,
        max: null,
        degree: "first degree misdemeanor",
        trigger: "petit theft with one prior theft conviction",
        quote:
          "A person who commits petit theft and who has previously been convicted of any theft commits a misdemeanor of the first degree",
      },
      {
        cite: "812.014(3)(c)",
        scope: "prior",
        min: null,
        max: null,
        degree: "third degree felony",
        trigger: "petit theft with two or more prior theft convictions",
        quote:
          "A person who commits petit theft and who has previously been convicted two or more times of any theft commits a felony of the third degree",
      },
    ],
  },
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
