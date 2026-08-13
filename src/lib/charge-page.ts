/**
 * The level 3 charge page, as an ordered list of sections rather than a fixed
 * form.
 *
 * WHY THIS EXISTS. The previous template hardcoded seven headings inside
 * ChargeTemplate.tsx and rendered them in one order for every charge. That made
 * two of the mission's requirements impossible rather than merely unmet:
 * charge-specific headings could not be expressed at all, because the heading
 * strings lived in the component, and section order could not follow
 * significance, because the order was JSX. The audit found the consequence.
 * Eight written pages, one section order, one set of headings, and reader
 * questions beyond "what am I facing" answered essentially nowhere.
 *
 * So the fix is a schema change, not a copy change.
 *
 * WHAT IS FIXED AND WHAT VARIES. Three things stay in place on every page, per
 * the template spec: the direct-answer paragraph in the hero, the FAQ block,
 * and the close. Everything between them is `sections`, ordered by the writer,
 * headed by the writer, and checked by scripts/check-pages.mts.
 *
 * THE HUMAN LAYER SITS ABOVE THE LEGAL LAYER. Section order is the writer's
 * call, but the reader-question coverage check means a page cannot quietly
 * remain a statute recital: it either answers all six reader questions or
 * records an explicit [NEEDS] naming the one it cannot answer and why.
 */

/** Template item 3, one row of the degrees and penalties table. */
export type PenaltyRow = {
  degree: string;
  maximum: string;
  offenseLevel?: string;
  note?: string;
};

/**
 * The six questions the person landing on the page actually has.
 *
 * These are the mission's, verbatim in substance: what am I facing, what
 * happens next and when, what do I do right now, what does this do to my job or
 * licence or record, can it ever be sealed, who do I call.
 */
export type ReaderQuestion =
  | "facing"
  | "next"
  | "now"
  | "consequences"
  | "sealing"
  | "who";

export const READER_QUESTIONS: Record<ReaderQuestion, string> = {
  facing: "What am I facing",
  next: "What happens next, and when",
  now: "What do I do right now",
  consequences: "What this does to my job, licence, or record",
  sealing: "Whether it can ever be sealed",
  who: "Who to call",
};

/** One step on the what-happens-next timeline. */
export type TimelineStep = {
  /** When it happens. A real interval, never "soon". */
  when: string;
  /** What happens. */
  what: string;
};

/**
 * Do and do-not guidance.
 *
 * PROCESS AND RIGHTS ONLY. Never case-specific advice, and never anything that
 * reads as a prediction. "You have the right to decline to answer questions" is
 * process. "Do not talk and the case will go away" is an outcome claim and is
 * barred by Fla. Bar R. 4-7.13 as well as by this project's own rails.
 */
export type Guidance = {
  /** Grouping heading, itself charge-specific. */
  heading: string;
  items: string[];
};

export type ChargeSectionKind =
  | "prose"
  | "bullets"
  | "penalties"
  | "statute"
  | "timeline"
  | "guidance";

export type ChargeSection = {
  /**
   * Stable identifier, used by the checks and never rendered.
   *
   * Deliberately separate from `heading`. The check for structural sameness
   * needs to know that two pages both have a sealing section without being
   * fooled by two different headings, and the check for charge-specific
   * headings needs to know that two headings differ without being fooled by two
   * different ids. One field cannot do both jobs.
   */
  id: string;
  /**
   * The rendered H2. CHARGE-SPECIFIC.
   *
   * A heading that would be equally true of another charge is the tell that the
   * page is a form with the nouns swapped. scripts/check-pages.mts compares
   * headings across every written page and fails on reuse.
   */
  heading: string;
  kind: ChargeSectionKind;
  /** Which reader questions this section answers. Drives the coverage check. */
  answers?: ReaderQuestion[];
  prose?: string[];
  bullets?: string[];
  penalties?: PenaltyRow[];
  statute?: { citation: string; body: string };
  steps?: TimelineStep[];
  guidance?: Guidance[];
};

/**
 * Generic heading stems.
 *
 * These are the exact headings the old template hardcoded, plus the phrasings a
 * writer reaches for when reproducing it. A heading equal to one of these, or
 * starting with one, is generic by construction: it is true of every charge in
 * the project, so it distinguishes nothing.
 */
export const GENERIC_HEADINGS: string[] = [
  "what the statute says",
  "degrees and penalties",
  "what the state has to prove",
  "what the government has to prove",
  "how the defense is approached",
  "how the defence is approached",
  "where the case is heard",
  "common questions",
  "penalties",
  "the statute",
  "elements",
  "the elements",
  "defense approach",
  "defence approach",
  "what happens next",
  "collateral consequences",
  "sealing and expungement",
  "what to do now",
  "overview",
  "introduction",
  "the charge",
  "the law",
  "next steps",
  "frequently asked questions",
];

/** Normalised heading, for comparison across pages. */
export function normalizeHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * True when a heading is generic by the list above.
 *
 * Prefix matching rather than equality, because "Degrees and penalties for
 * grand theft" is the same generic heading wearing a charge name. Adding the
 * charge name to a generic stem is the most likely way to defeat an
 * equality-only check, so it is the case this handles.
 */
export function isGenericHeading(heading: string): boolean {
  const n = normalizeHeading(heading);
  return GENERIC_HEADINGS.some((g) => n === g || n.startsWith(g + " "));
}
