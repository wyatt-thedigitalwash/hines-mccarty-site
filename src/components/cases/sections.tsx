import { Fragment } from "react";
import type { ChargeSection, PenaltyRow } from "@/lib/site";
import Needs from "@/components/Needs";
import { isRecordedVerbatim, singleSourceUrl } from "@/lib/statute-links";

/**
 * The section primitives, shared by ChargeTemplate and GuideTemplate.
 *
 * Extracted from ChargeTemplate in Phase 0 of the guides work
 * (GUIDES-CONCEPT.md D.3): a guide must NOT go through ChargeTemplate, which
 * would pull it into `charges` and therefore into the silo machinery, but
 * duplicating the renderer would fork the one totality guarantee that D24
 * exists to protect. The renderer is total: `kind` decides order and emphasis,
 * never what survives. That property holds for every consumer of this module
 * or for none of them.
 */

/**
 * THE SECTION, SPLIT IN TWO WITHOUT LOSING ANYTHING.
 *
 * `SectionBody` renders a section whole and stays the definition of total: every
 * payload survives, `kind` decides order and emphasis only (D24). The two
 * functions below partition that same output rather than filtering it.
 *
 *   SectionLede  what a reader sees without asking: the structured payload, or
 *                for a prose section its first paragraph.
 *   SectionRest  everything else, which the charge template puts behind a
 *                <details>.
 *
 * LEDE PLUS REST IS EXACTLY BODY. That is the property that matters and it is
 * why this is a partition rather than a summary: nothing is dropped, nothing is
 * rewritten, and nothing is duplicated between the two. Duplicating would be
 * the easy version and it would break the quote gate's counts, which asserts an
 * exact number of verbatim statutory spans on the page.
 */
/**
 * WHICH KINDS OPEN. A penalties table, a timeline of deadlines and a list of
 * what to do are the three things a reader came for and the three that survive
 * being skimmed. A statutory quotation, a bulleted analysis and a five-
 * paragraph essay are the three that do not, however good they are, and they
 * are good.
 *
 * Measured before choosing this split: with only the prose tails collapsed the
 * median page still showed 5,400 words, because the structured payloads ARE the
 * bulk. Collapsing by kind is what gets a charge page to the length of a page.
 */
const OPEN_KINDS = new Set<ChargeSection["kind"]>([
  "penalties",
  "timeline",
  "guidance",
]);

export function SectionLede({ section }: { section: ChargeSection }) {
  if (OPEN_KINDS.has(section.kind)) return <SectionPrimary section={section} />;
  if (section.kind === "prose") {
    const first = section.prose?.[0];
    return first ? <p>{first}</p> : null;
  }
  // statute and bullets open with their heading alone. The heading is already a
  // full sentence stating what the section holds, which is a better summary
  // than any lede that could be written for it.
  return null;
}

export function SectionRest({ section }: { section: ChargeSection }) {
  const proseRest =
    section.kind === "prose" ? section.prose?.slice(1) : section.prose;
  const showPrimary = !OPEN_KINDS.has(section.kind) && section.kind !== "prose";
  const showBullets = section.kind !== "bullets" && section.bullets?.length;
  /**
   * THE COLLAPSED STATUTE BLOCK, on every kind. D41.
   *
   * This was a hole rather than a design. `showPrimary` is false for the three
   * OPEN_KINDS and for prose, so a `statute` payload on a penalties, timeline,
   * guidance or prose section rendered NOWHERE, while `pageCopy` extracted it
   * and every gate read it. That is D24's failure exactly, in the file whose own
   * header says the renderer must be total, and check-pages' payload gate could
   * not see it: that gate asserts the KEY is one this module renders, not that
   * it renders for the kind it is on.
   *
   * It went unnoticed because no section outside the two `statute`-kind ones
   * carried a statute block. D41 puts one on every section, so the hole would
   * have swallowed nine of eleven blocks on the first page converted.
   */
  const showStatuteBlock = section.statute && section.kind !== "statute";
  return (
    <>
      {showPrimary ? <SectionPrimary section={section} /> : null}
      {showStatuteBlock ? (
        <div className={showPrimary ? "mt-8" : undefined}>
          <StatuteBlock section={section} />
        </div>
      ) : null}
      {proseRest?.length ? (
        <div className={showPrimary ? "mt-8 space-y-5" : "space-y-5"}>
          {proseRest.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      ) : null}
      {showBullets ? (
        <ul className="mt-8 space-y-3">
          {section.bullets!.map((item) => (
            <li key={item.slice(0, 40)} className="flex gap-3">
              <span aria-hidden="true" className="text-bronze">
                &bull;
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

/** True when SectionRest would render nothing, so no disclosure is offered. */
export function hasSectionRest(section: ChargeSection): boolean {
  const proseRest =
    section.kind === "prose" ? section.prose?.slice(1) : section.prose;
  const showPrimary = !OPEN_KINDS.has(section.kind) && section.kind !== "prose";
  return Boolean(
    showPrimary ||
      (section.statute && section.kind !== "statute") ||
      proseRest?.length ||
      (section.kind !== "bullets" && section.bullets?.length),
  );
}

/**
 * The sources line. D41.
 *
 * Deliberately NOT inside the disclosure. A reader who never opens the
 * statutory text should still be able to see what the section rests on, and a
 * page whose citations are all hidden behind a toggle is making the same
 * mistake as a page whose citations are in every sentence: it is deciding for
 * the reader how much law they want to see.
 */
export function SectionSources({ section }: { section: ChargeSection }) {
  if (!section.sources?.length) return null;
  return (
    <p className="mt-8 border-t border-navy/10 pt-4 font-heading text-sm leading-relaxed text-navy/55">
      <span className="uppercase tracking-wide text-navy/40">Sources</span>{" "}
      {section.sources.join("; ")}
    </p>
  );
}

export function SectionBody({ section }: { section: ChargeSection }) {
  const extras = (
    <>
      {/* D41: the statute block survives on every kind, same reason as in
          SectionRest. This function is the definition of total, so a payload it
          drops is the D24 defect in the definition itself. */}
      {section.statute && section.kind !== "statute" ? (
        <div className="mt-8">
          <StatuteBlock section={section} />
        </div>
      ) : null}
      {/* D43: blocks re-homed from a Tier 2 section, which renders none. */}
      {section.statutes?.length ? (
        <div className="mt-8 space-y-8">
          {section.statutes.map((st) => (
            <StatuteBlock key={st.citation} section={{ ...section, statute: st }} />
          ))}
        </div>
      ) : null}
      {section.kind !== "prose" && section.prose?.length ? (
        <div className="mt-8 space-y-5">
          {section.prose.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      ) : null}
      {section.kind !== "bullets" && section.bullets?.length ? (
        <ul className="mt-8 space-y-3">
          {section.bullets.map((item) => (
            <li key={item.slice(0, 40)} className="flex gap-3">
              <span aria-hidden="true" className="text-bronze">
                &bull;
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
  return (
    <>
      <SectionPrimary section={section} />
      {extras}
    </>
  );
}

/**
 * The verified statutory text, wherever it appears.
 *
 * EXTRACTED from the `statute` arm of SectionPrimary for D41, which puts a
 * statute block on every section rather than only on `statute`-kind ones. Two
 * call sites now render it and they must render it identically, because
 * `check:quotes` counts `data-statute-quote` and `data-statute-gloss` across
 * the built HTML and compares those counts against what the DATA says should
 * exist. A second, drifting copy of this markup would make that count a
 * coincidence rather than a check.
 */
export function StatuteBlock({ section }: { section: ChargeSection }) {
  if (!section.statute)
    return <Needs>statute citation and what it says</Needs>;
  return isRecordedVerbatim(section.statute.body) ? (
    <figure className="m-0" data-statute-quote>
      <figcaption className="font-heading text-sm font-medium text-navy/50">
        <cite className="not-italic">{section.statute.citation}</cite>
      </figcaption>
      <blockquote
        className="m-0 mt-3"
        cite={singleSourceUrl(section.statute.citation)}
      >
        {section.statute.body}
      </blockquote>
    </figure>
  ) : (
    <div data-statute-gloss>
      <p className="font-heading text-sm font-medium text-navy/50">
        <cite className="not-italic">{section.statute.citation}</cite>
      </p>
      <p className="mt-3">{section.statute.body}</p>
    </div>
  );
}

export function SectionPrimary({ section }: { section: ChargeSection }) {
  switch (section.kind) {
    case "statute":
      /*
        A QUOTATION IS MARKED UP AS ONE. ANYTHING ELSE IS NOT.

        <blockquote cite="..."> asserts that the text inside came from that URL.
        That markup used to wrap every statute body, and for 35 of 56 spans the
        assertion was false: the charge pages carry authored prose that quotes
        fragments, in the shape "The section is short enough to read whole.
        (1)(a) The offense of battery occurs when...". Prose ABOUT a statute is
        not a quotation OF it, and dressing it as one overclaims to every reader
        and every machine that reads the page.

        So the element is chosen by a checkable property rather than by default:
        a body that is a verbatim line from a recorded source renders as a
        cited quotation, and a body that is not renders as what it is, an
        attributed passage. `check:quotes` asserts the split both ways.

        The citation still renders in both cases. What changes is whether the
        page claims the words are the statute's.
      */
      return <StatuteBlock section={section} />;

    case "penalties":
      return section.penalties?.length ? (
        <PenaltyTable rows={section.penalties} />
      ) : (
        <Needs>degrees, statutory maximums, and offense levels</Needs>
      );

    case "bullets":
      /* TWO BULLET LAYOUTS, AND A DEAD BRANCH THAT SAT BETWEEN THEM.

         Tier 2 renders cards; everything else renders a plain list. When the
         cards were rebuilt, the previous numbered-card version was left in
         place BELOW the tier-2 branch and above the generic one, so it caught
         every non-tier-2 bullets section and the plain list underneath it was
         unreachable. The Tier 3 review-fork list therefore rendered as numbered
         cards, which is exactly what the comment here used to promise could
         not happen: those three routes are parallel options and numbering them
         asserts an order the statute does not put on them.

         It survived review because Tier 3 items are closed by default, so it
         never appeared in a screenshot. Deleted. */
      if (section.tier === 2)
        return section.bullets?.length ? (
          /* A NUMBERED VERTICAL LIST, and the <ol> is correct THIS time.

             It was a <ul> in a 2x2 grid, for a reason recorded here that was
             right about that content: those four items had no sequence, two of
             them were both "hold onto this piece of paper", and the fourth was
             "call a lawyer", which an <ol> would have announced as step four of
             four on a page built to get that call made.

             The content changed. There are three steps now and they run toward
             one deadline: keep the notice that starts the clock, keep the permit
             that expires when it runs out, ask for the review before it does.
             That is a progression, so the element says so, and the grid is gone
             because a 2x2 grid gives no reliable reading order for numbers. */
          <ol className="space-y-4">
            {section.bullets.map((item, i) => {
              /* THE FIRST SENTENCE IS THE STEP'S HEADING, a split for the eye
                 only: the string is unchanged and the readability gate measures
                 the DATA, so it still sees one sentence after another. Guarded,
                 because the shape belongs to this copy rather than to the type.
                 A first sentence over 64 characters, or an item with no sentence
                 break, renders whole as body text. */
              const m = item.match(/^([\s\S]{1,64}?[.!?])\s+([\s\S]*)$/);
              const head = m ? m[1] : null;
              const body = m ? m[2] : item;
              return (
                <li
                  key={item.slice(0, 40)}
                  className="flex items-start gap-5 bg-white p-6 sm:gap-6 sm:p-8"
                >
                  {/* Bronze fill with a navy numeral, which is 7.07:1 and
                      passes AA. Bronze numerals ON white would have been 2.46:1
                      and would have added a second instance of the contrast
                      failure already flagged on the timeline. */}
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center bg-bronze font-heading text-lg font-semibold text-navy"
                  >
                    {i + 1}
                  </span>
                  <div>
                    {head && (
                      <p className="font-heading text-lg font-semibold leading-snug text-navy">
                        {head}
                      </p>
                    )}
                    <p
                      className={
                        "text-base leading-relaxed text-charcoal " +
                        (head ? "mt-2" : "")
                      }
                    >
                      {body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        ) : (
          <Needs>the steps to take now</Needs>
        );
      return section.bullets?.length ? (
          <ul className="grid gap-6 sm:grid-cols-2">
            {section.bullets.map((item) => {
              /* THE FIRST SENTENCE IS THE CARD'S HEADING, and this is a split
                 for the eye only: the string is unchanged, nothing is rewritten,
                 and the readability gate measures the DATA, so it still sees one
                 sentence followed by another.

                 It works because of how these items are written. Every one opens
                 on a short imperative ("Keep the notice of suspension.") and then
                 explains it, which is the same shape as the card this is modelled
                 on: a display heading over body copy.

                 GUARDED, because the shape is a property of this copy rather than
                 of the type. A first sentence longer than 64 characters, or an
                 item with no sentence break at all, renders whole as body text
                 instead of being chopped into a heading it was never written to
                 be. */
              const m = item.match(/^([\s\S]{1,64}?[.!?])\s+([\s\S]*)$/);
              const head = m ? m[1] : null;
              const body = m ? m[2] : item;
              return (
                <li key={item.slice(0, 40)} className="bg-white p-8 lg:p-10">
                  {/* NO LABEL, AND NO ORDER CLAIM.

                      The "STEP 1" eyebrow went first: uppercase and
                      letter-spaced, which CLAUDE.md bans outright.

                      The <ol> went second, and the reason it survived the first
                      pass is recorded here because it was wrong: "the order
                      still survives because this is an <ol>". Read the four
                      items and there is no sequence. Two are "hold onto this
                      piece of paper" and are parallel to each other, one is a
                      deadline, one is "call a lawyer". Nothing waits on
                      anything.

                      An <ol> announces "item 1 of 4" to a screen reader, so it
                      asserts that sequence audibly with the numerals gone, and
                      on the card that matters most it would have said calling a
                      lawyer is step four of four. A <ul> is the honest element:
                      four things that all matter, in no required order. */}
                  {/* Navy, not bronze. These sit on white cards inside the navy
                      band, where navy is 17.37:1. The timeline intervals stay
                      bronze by the same client decision that the note there
                      records; this surface went back to dark on sight. */}
                  {head && (
                    <p className="font-heading text-lg font-semibold leading-snug text-navy">
                      {head}
                    </p>
                  )}
                  <p
                    className={
                      "text-base leading-relaxed text-charcoal " +
                      (head ? "mt-4" : "mt-4 font-display text-2xl text-navy")
                    }
                  >
                    {body}
                  </p>
                </li>
              );
            })}
          </ul>
        ) : (
          <Needs>the steps to take now</Needs>
        );
      return section.bullets?.length ? (
        <ul className="space-y-3">
          {section.bullets!.map((item) => (
            <li key={item.slice(0, 40)} className="flex gap-3">
              <span aria-hidden="true" className="text-bronze">
                &bull;
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <Needs>the points this section makes</Needs>
      );

    case "timeline":
      // Deliberately a list of intervals, not a numbered stepper. A stepper
      // implies each stage follows the last on a schedule, and a criminal case
      // does not work that way. Each row states when, so the page never says
      // "soon" and never implies a duration it has not verified.
      return section.steps?.length ? (
        <ol className="max-w-3xl">
          {section.steps.map((step, i) => {
            /* THE RAIL IS PER-ROW, so it can start and stop at a dot.
               It used to be a border-l on the <ol>, which spans the whole list
               box: that drew a stub above the first dot and carried the line
               past the last one, down through the final row's body text.

               Each row draws its own half-segments instead, one reaching up
               from its dot and one reaching down, both clipped to the row by
               overflow-hidden. The first row omits the upward half and the last
               omits the downward half, so the rail begins and ends exactly on a
               dot. Consecutive rows' segments meet because the gap lives in the
               row's own bottom padding, inside the clip.

               NO VERTICAL MAGIC NUMBERS. The segments anchor to the label
               wrapper's centre, which is the dot's centre by construction, so
               this holds at any font size or if a label wraps. The one fixed
               value is horizontal: left-[5px] puts the 8px dot at x 1 to 9 and
               the 2px rail at x 4 to 6, both clear of the row's left edge, so
               overflow-hidden clips the segments vertically without shaving the
               dot. */
            const first = i === 0;
            const last = i === section.steps!.length - 1;
            return (
              <li
                key={step.when}
                className="relative overflow-hidden pb-8 last:pb-0"
              >
                <div className="relative pl-7">
                  {!first && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-1/2 left-[5px] h-[1000px] w-0.5 -translate-x-1/2 bg-bronze/50"
                    />
                  )}
                  {!last && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[5px] top-1/2 h-[1000px] w-0.5 -translate-x-1/2 bg-bronze/50"
                    />
                  )}
                  <span
                    aria-hidden="true"
                    className="absolute left-[5px] top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-bronze"
                  />
                  {/* Sentence case. The interval is already written as a phrase in
                      the data ("Within 24 hours of arrest"); only CSS was shouting
                      it. Uppercase with letter-spacing is an eyebrow, which
                      CLAUDE.md bans outright.

                      KNOWN CONTRAST FAILURE, client decision, flagged for the ADA
                      audit (CLAUDE.md pre-launch item 3). Brand bronze #C5A059 on
                      white measures 2.46:1. WCAG AA wants 4.5:1 for normal text
                      and 3.0:1 for large; at 18px/600 this is normal text, so it
                      misses both. The same colour on navy is 7.07:1 and is fine,
                      which is why the rail, the dots and the CTA are unaffected.
                      A darkened gold #9A7532 measures 4.23:1 and passes at every
                      size if the audit rules this out. */}
                  <p className="font-heading text-lg font-semibold leading-snug text-bronze">
                    {step.when}
                  </p>
                </div>
                <p className="mt-3 pl-7 text-charcoal">{step.what}</p>
              </li>
            );
          })}
        </ol>
      ) : (
        <Needs>the sequence, with a real interval on each step</Needs>
      );

    case "guidance":
      return section.guidance?.length ? (
        <div className="grid gap-5 md:grid-cols-3">
          {section.guidance.map((group) => (
            <div
              key={group.heading}
              className="border border-navy/12 bg-linen/40 p-6"
            >
              <h4 className="font-display text-xl leading-snug text-navy">
                {group.heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item.slice(0, 40)} className="flex gap-3">
                    <span aria-hidden="true" className="text-bronze">
                      &bull;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <Needs>process and rights, never case-specific advice</Needs>
      );

    case "prose":
    default:
      return section.prose?.length ? (
        <div className="space-y-5">
          {section.prose.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      ) : (
        <Needs>this section</Needs>
      );
  }
}

/* The table carries no min-width. Real content broke the one it had: the note
   carries the threshold that decides the row, and at 390px a min-width pushed
   that sentence outside the scroll container. overflow-x-auto stays as a floor
   for very narrow screens. */
export function PenaltyTable({ rows }: { rows: PenaltyRow[] }) {
  /* THE OFFENSE LEVEL COLUMN IS RENDERED ONLY WHERE A ROW ACTUALLY CARRIES ONE.
     It used to render always, printing "Not applicable" for every empty cell,
     and that was wrong in two different directions on twelve tables.

     On the eleven federal-offense tables it was noise: F.S. 921.0022 ranks
     Florida offenses, so a column of "Not applicable" beside 18 U.S.C. rows
     tells the reader nothing and invites the inference that a level was looked
     for and not found.

     On /criminal-defense/computer-crimes-defense it was a false statement of
     law AND a breach of DECISIONS.md D14, which says that page carries no
     offense-level column on any row under any heading. F.S. 815.06 has no row
     in the chart, but F.S. 921.0023 assigns a severity level to a felony the
     chart does not list, so a level DOES apply to an 815.06 felony. What is
     absent is a chart row, not a level. "Not applicable" said the opposite, and
     said it in a column D14 had already decided should not exist. The data was
     compliant, every gate was green, and the defect existed only in the render:
     D24 again, the check that matters reads the page.

     THE NOTE IS ITS OWN ROW NOW, spanning the full width beneath the cells it
     belongs to. It used to sit inside the last rendered cell, which put a
     three-line sentence under a header reading "Offense level" and squeezed it
     into a third of the table's width while the degree column wrapped "No
     degree assigned by the statute" onto three lines beside it. Nothing was
     wrong with the data; the table was asking one column to hold a label and a
     paragraph at the same time.

     A spanning row keeps the note visually inside its record, needs no header
     of its own (so the table makes no new claim about what the note IS), and
     lets each of the real columns size to its actual content. */
  const hasLevels = rows.some((r) => r.offenseLevel);
  const headers = hasLevels
    ? ["Degree", "Statutory term", "Offense level"]
    : ["Degree", "Statutory term"];
  const span = headers.length;
  /*
    ONE TABLE, TWO LAYOUTS, NO DUPLICATED DOM.

    Below md this used to be a real table inside overflow-x-auto, so a phone got
    a three-column grid it had to drag sideways to read, with the note wrapping
    to five or six lines in a third of the screen. That is the version that was
    hard to read, and horizontal scroll is the reason.

    Each record now stacks into a card on a phone and becomes a table row at md
    and up. The switch is CSS only: the header group hides, the row turns into a
    flex column, and the cells go from table-cell to block. Rendering two
    separate trees instead would have put every penalty on the page twice for a
    crawler and a screen reader.

    ORDER FLIPS ON MOBILE, deliberately. In a table the degree column comes
    first because that is how the header reads. On a card the sentence a person
    actually wants is the term, so the flex order puts "Up to 5 years" on top
    and drops the degree underneath it as a label.
  */
  const cardRow = "flex flex-col gap-1 px-5 pt-5 md:table-row md:gap-0 md:p-0";
  return (
    <div className="border border-navy/15 bg-white">
      <table className="w-full border-collapse text-left">
        <thead className="hidden md:table-header-group">
          {/* "Statutory term" rather than "Statutory maximum". A reviewer found
              eleven rows on the federal weapons page whose value is a
              MANDATORY MINIMUM ("Not less than 15 years, with no suspended
              sentence and no probation") printed under a header promising a
              maximum, which is a lie in the rendered table even though every
              row was individually true. 34 rows across four pages carry a
              range or a floor rather than a bare ceiling, because federal
              sentencing routinely has both, so the header was the thing
              that was wrong. D24: the check that matters reads the page. */}
          <tr className="border-b border-navy/15 bg-linen/60">
            {headers.map((h, i) => (
              <th
                key={h}
                className={
                  "px-5 py-3 font-heading text-sm font-semibold text-navy/55 " +
                  (i === 0 ? "w-[30%]" : i === 1 ? "w-[38%]" : "w-[32%]")
                }
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {rows.map((row, i) => (
            <Fragment key={row.degree + row.maximum + i}>
              <tr className={`${cardRow} ${i % 2 ? "bg-linen/25" : "bg-white"}`}>
                <td className="order-2 block font-heading text-[15px] font-medium leading-snug text-navy/70 md:order-none md:table-cell md:px-5 md:pt-4 md:align-top">
                  {row.degree}
                </td>
                <td className="order-1 block text-lg font-medium leading-snug text-navy md:order-none md:table-cell md:px-5 md:pt-4 md:align-top">
                  {row.maximum}
                </td>
                {hasLevels && (
                  <td className="order-3 block md:order-none md:table-cell md:px-5 md:pt-4 md:align-top">
                    {row.offenseLevel ? (
                      <span className="mt-1 inline-block border border-bronze/50 bg-bronze/10 px-2.5 py-1 font-heading text-sm font-medium text-navy/75 md:mt-0">
                        {row.offenseLevel}
                      </span>
                    ) : (
                      <span className="font-heading text-sm text-navy/35">
                        Not applicable
                      </span>
                    )}
                  </td>
                )}
              </tr>
              {/* The note lives in a spanning row. It used to live in the
                  offense-level cell unconditionally, so dropping that column
                  would have silently deleted a note from every row of all twelve
                  level-less tables, and every one of those rows carries one. The
                  notes are where the value thresholds and the conditions on a
                  mandatory minimum are written, so losing them would have been a
                  far worse defect than the column that change removed. */}
              <tr className={`block md:table-row ${i % 2 ? "bg-linen/25" : "bg-white"}`}>
                <td
                  colSpan={span}
                  className="block border-b border-navy/10 px-5 pb-5 pt-2 text-[15px] leading-relaxed text-charcoal md:table-cell md:pb-4"
                >
                  {row.note}
                </td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
