/**
 * Design tokens for the charge-page layout, D58.
 *
 * WHY THIS EXISTS. Each section of the page was styled when it was asked for,
 * and an audit of the five components that render it found 17 font sizes, 16
 * text colours, 12 top margins and 34 padding values, which is what made the
 * page read as random. Every text style, colour and spacing step is now decided
 * here, once, and the components only name a role. To change how, say, every
 * item heading looks, change it here.
 *
 * Tailwind scans this file, so the class names below are generated as usual.
 */

/** Text styles, by role. Colour is separate (see `color`). */
export const type = {
  /** H1. */
  pageTitle: "font-display text-[2.5rem] leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl",
  /** The five section H2s. `section-heading` carries their weight (globals.css). */
  sectionHeading:
    "section-heading font-display text-[2.125rem] leading-tight tracking-tight sm:text-4xl lg:text-5xl",
  /** Serif subheads: penalty lines, timeline times, topic titles, FAQ
   *  questions, action-card headlines. Anything a reader scans for. */
  subheading: "font-display text-2xl leading-tight md:text-[1.75rem]",
  /** Sans item heads: headings inside an open topic, guidance cards. */
  itemHeading: "font-heading text-lg font-medium leading-snug",
  /** Section intros and the hero lead. */
  lead: "text-lg leading-relaxed",
  /** Everything else a reader reads. */
  body: "text-base leading-relaxed",
  /** Small sans labels: degree, "Read more", citations, eyebrows. */
  label: "font-heading text-sm font-medium",
  /** Fine print: notes under a row. */
  small: "text-sm leading-relaxed",
  /** The 01 to 04 numerals on the action cards. */
  numeral: "font-display text-5xl leading-none",
} as const;

/** Text colours. One quiet shade per background, not nine. */
export const color = {
  heading: "text-navy",
  body: "text-charcoal",
  muted: "text-navy/60",
  accent: "text-bronze",
  onDarkHeading: "text-linen",
  onDarkBody: "text-linen/75",
  onDarkMuted: "text-linen/60",
} as const;

/** Vertical rhythm. */
export const space = {
  /** Section heading to its intro. */
  afterHeading: "mt-4",
  /** Intro to the section's content. */
  beforeContent: "mt-10",
  /** Item heading to its text. */
  inItem: "mt-2",
  /** Between stacked items: cards, ladder levels, timeline steps. */
  items: "space-y-4",
  /** Between paragraphs. */
  paragraphs: "space-y-4",
  /** Between list items. */
  list: "space-y-3",
} as const;

/** Padding inside every card and box. */
export const card = "p-6 md:p-8";
