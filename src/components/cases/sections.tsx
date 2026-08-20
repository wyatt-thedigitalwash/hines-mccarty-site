import type { ChargeSection, PenaltyRow } from "@/lib/site";
import Needs from "@/components/Needs";

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

export function SectionBody({ section }: { section: ChargeSection }) {
  const extras = (
    <>
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

export function SectionPrimary({ section }: { section: ChargeSection }) {
  switch (section.kind) {
    case "statute":
      return section.statute ? (
        <>
          <p className="font-heading text-sm uppercase tracking-wide text-navy/50">
            {section.statute.citation}
          </p>
          <p className="mt-3">{section.statute.body}</p>
        </>
      ) : (
        <Needs>statute citation and what it says</Needs>
      );

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
