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
      <figcaption className="font-heading text-sm uppercase tracking-wide text-navy/50">
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
      <p className="font-heading text-sm uppercase tracking-wide text-navy/50">
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
      return section.bullets?.length ? (
        <ul className="space-y-3">
          {section.bullets.map((item) => (
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
        <ol className="space-y-6">
          {section.steps.map((step) => (
            <li key={step.when} className="border-l-2 border-bronze/40 pl-5">
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-navy/60">
                {step.when}
              </p>
              <p className="mt-2">{step.what}</p>
            </li>
          ))}
        </ol>
      ) : (
        <Needs>the sequence, with a real interval on each step</Needs>
      );

    case "guidance":
      return section.guidance?.length ? (
        <div className="space-y-8">
          {section.guidance.map((group) => (
            <div key={group.heading}>
              <h3 className="font-display text-xl leading-snug">
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

     Where a table MIXES ranked and unranked rows the column stays and the empty
     cells still read "Not applicable", which is correct for a misdemeanor row,
     since the chart ranks felonies. Pages that want to say something more
     precise already do it in the data, e.g. "Not carried in the Statute
     921.0022 chart". */
  const hasLevels = rows.some((r) => r.offenseLevel);
  const headers = hasLevels
    ? ["Degree", "Statutory term", "Offense level"]
    : ["Degree", "Statutory term"];
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-navy/20">
            {/* "Statutory term" rather than "Statutory maximum". A reviewer found
                eleven rows on the federal weapons page whose value is a
                MANDATORY MINIMUM ("Not less than 15 years, with no suspended
                sentence and no probation") printed under a header promising a
                maximum, which is a lie in the rendered table even though every
                row was individually true. 34 rows across four pages carry a
                range or a floor rather than a bare ceiling, because federal
                sentencing routinely has both, so the header was the thing
                that was wrong. D24: the check that matters reads the page. */}
            {headers.map((h) => (
              <th
                key={h}
                className="py-3 pr-6 font-heading text-sm font-semibold uppercase tracking-wide text-navy/60"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.degree + row.maximum} className="border-b border-navy/10">
              <td className="py-4 pr-6 align-top">{row.degree}</td>
              {/* The note lives in the LAST rendered cell. It used to live in
                  the offense-level cell unconditionally, so dropping that column
                  would have silently deleted a note from every row of all twelve
                  level-less tables, and every one of those rows carries one. The
                  notes are where the value thresholds and the conditions on a
                  mandatory minimum are written, so losing them would have been a
                  far worse defect than the column this change removes. */}
              <td className={hasLevels ? "py-4 pr-6 align-top" : "py-4 align-top"}>
                {row.maximum}
                {!hasLevels && row.note && (
                  <span className="mt-1 block text-sm text-navy/60">
                    {row.note}
                  </span>
                )}
              </td>
              {hasLevels && (
                <td className="py-4 align-top">
                  {row.offenseLevel ?? "Not applicable"}
                  {row.note && (
                    <span className="mt-1 block text-sm text-navy/60">
                      {row.note}
                    </span>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
