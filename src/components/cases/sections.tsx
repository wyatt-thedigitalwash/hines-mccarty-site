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
      /* A TIER 2 BULLET LIST IS AN ACTION LIST, and it is numbered.
         The same `bullets` kind carries the Tier 3 review-fork analysis, which
         is a set of parallel options and must stay unnumbered: numbering it
         would assert an order the law does not put on it. Tier decides, so the
         two never collide. */
      if (section.tier === 2)
        return section.bullets?.length ? (
          <ol className="grid gap-6 sm:grid-cols-2">
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
                  {/* NO "STEP 1" LABEL. It was an uppercase, letter-spaced
                      eyebrow, which is both a house rule (CLAUDE.md bans eyebrow
                      labels) and the single most generic thing a card can wear.
                      The card this is modelled on has no number either.

                      The ORDER still survives where it has to: this is an <ol>,
                      so a screen reader announces the position, and the grid
                      reads left to right. */}
                  {head && (
                    <p className="font-display text-2xl leading-snug text-navy lg:text-[1.75rem]">
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
          </ol>
        ) : (
          <Needs>the steps to take now</Needs>
        );
      return section.bullets?.length ? (
          <ol className="grid gap-4 sm:grid-cols-2">
            {section.bullets.map((item, i) => (
              <li
                key={item.slice(0, 40)}
                className="flex gap-4 border border-navy/12 bg-linen/40 p-5"
              >
                <span
                  aria-hidden="true"
                  className="shrink-0 font-display text-2xl leading-none text-bronze"
                >
                  {i + 1}
                </span>
                <span className="text-base leading-relaxed text-charcoal">
                  {item}
                </span>
              </li>
            ))}
          </ol>
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
        <ol className="max-w-3xl border-l-2 border-bronze/50">
          {section.steps.map((step) => (
            <li key={step.when} className="py-6 first:pt-0 last:pb-0">
              {/* THE MARKER ALIGNS ITSELF. It used to sit at a hardcoded
                  top-[1.9rem] with a first:top-2 override, which is a guess at
                  where the label's first line lands and was visibly wrong: the
                  square floated above the text it was marking. Wrapping the
                  label alone in a relative box makes that box exactly as tall as
                  the label, so top-1/2 with a -translate-y-1/2 centres the marker
                  on the label by construction, at any font size or line height. */}
              <div className="relative pl-7">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1/2 h-2 w-2 -translate-x-[calc(50%+1px)] -translate-y-1/2 bg-bronze"
                />
                {/* Sentence case. The interval is already written as a phrase in
                    the data ("Within 24 hours of arrest"); only CSS was shouting
                    it. Uppercase with letter-spacing is an eyebrow, which
                    CLAUDE.md bans outright. */}
                <p className="font-display text-2xl leading-snug text-navy">
                  {step.when}
                </p>
              </div>
              <p className="mt-3 pl-7 text-charcoal">{step.what}</p>
            </li>
          ))}
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
              <h3 className="font-display text-xl leading-snug text-navy">
                {group.heading}
              </h3>
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
  return (
    <div className="overflow-x-auto border border-navy/15 bg-white">
      <table className="w-full border-collapse text-left">
        <thead>
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
        <tbody>
          {rows.map((row, i) => (
            <Fragment key={row.degree + row.maximum + i}>
              <tr className={i % 2 ? "bg-linen/25" : "bg-white"}>
                <td className="px-5 pt-4 align-top font-heading text-[15px] font-medium leading-snug text-navy/70">
                  {row.degree}
                </td>
                <td className="px-5 pt-4 align-top text-lg font-medium leading-snug text-navy">
                  {row.maximum}
                </td>
                {hasLevels && (
                  <td className="px-5 pt-4 align-top">
                    {row.offenseLevel ? (
                      <span className="inline-block border border-bronze/50 bg-bronze/10 px-2.5 py-1 font-heading text-sm font-medium text-navy/75">
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
              {row.note && (
                <tr className={i % 2 ? "bg-linen/25" : "bg-white"}>
                  <td
                    colSpan={span}
                    className="border-b border-navy/10 px-5 pb-4 pt-2 text-[15px] leading-relaxed text-charcoal"
                  >
                    {row.note}
                  </td>
                </tr>
              )}
              {!row.note && (
                <tr>
                  <td colSpan={span} className="border-b border-navy/10 p-0" />
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
