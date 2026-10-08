import type { PenaltyRow } from "@/lib/charge-page";
import { card, color, space, type } from "./ui";

/**
 * The penalty ladder, D50. Set per section with `display: "ladder"`; every
 * page on the service page standard uses it (D67).
 *
 * WHY NOT THE TABLE. On sexual battery the table ran 17 rows for 6 penalty
 * levels, so the reader re-read the same penalty and degree down the page to
 * find their row; sorted lightest first, its first row was a different crime
 * written into the same law; and its "What you had" header, written for drug
 * possession, made no sense for most charges.
 *
 * The ladder groups rows by degree, in the data's order (lightest first), and
 * shows each level's penalty once, large, with the situations that reach it
 * listed under it. A row whose maximum differs from its level's usual one (an
 * added fine, say) shows its own maximum on the row, so no figure is lost.
 * Rows marked `related` (attempts, and other offenses in the same statute)
 * move to a closing "Attempts and related charges" block rather than sitting
 * between the levels or opening the section.
 *
 * Offense levels are not shown, as in the situation table: they only mean
 * something on the sentencing worksheet, and the prose under the section
 * explains the points in words. They stay in the data.
 */
export default function PenaltyLadder({ rows }: { rows: PenaltyRow[] }) {
  const main = rows.filter((r) => !r.related);
  const related = rows.filter((r) => r.related);

  const levels: { degree: string; rows: PenaltyRow[] }[] = [];
  for (const row of main) {
    const level = levels.find((l) => l.degree === row.degree);
    if (level) level.rows.push(row);
    else levels.push({ degree: row.degree, rows: [row] });
  }
  // The level's headline maximum is the one most of its rows share.
  const headline = (rs: PenaltyRow[]) => {
    const counts = new Map<string, number>();
    for (const r of rs) counts.set(r.maximum, (counts.get(r.maximum) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
  };

  const situation = (row: PenaltyRow, showMax: boolean) => (
    <li key={(row.situation ?? row.degree) + row.maximum} className="flex gap-3">
      <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 bg-navy/40" />
      <span>
        <span className={`block ${type.body} ${color.heading}`}>
          {row.situation ?? row.degree}
        </span>
        {showMax ? (
          <span className={`mt-1 block ${type.label} ${color.muted}`}>{row.maximum}</span>
        ) : null}
        {row.note ? (
          <span className={`mt-1 block ${type.small} ${color.muted}`}>{row.note}</span>
        ) : null}
      </span>
    </li>
  );

  return (
    <div className={space.items}>
      {levels.map((level) => {
        const max = headline(level.rows);
        return (
          /* An outlined white card, the same frame as the detail boxes and the
             attorney cards on the page (D67). The earlier linen/25 tint was
             1.03:1 against the white page and the cards did not read. */
          <div key={level.degree} className={`border border-navy/15 bg-white ${card}`}>
            {/* The penalty is a header across the block, not a left column:
                the column left a tall empty space under one short line and
                squeezed the situations into wrapping. D50. */}
            <div>
              <p className={`${type.label} ${color.muted}`}>{level.degree}</p>
              {/* Lining figures: Cormorant's default old-style digits drop below the
                  baseline and read small, and the numbers are the point of this
                  line. The font carries the lnum feature (verified). */}
              <h3 className={`${space.inItem} ${type.subheading} ${color.heading} lining-nums`}>{max}</h3>
            </div>
            <ul className={`mt-5 ${space.items}`}>
              {level.rows.map((row) => situation(row, row.maximum !== max))}
            </ul>
          </div>
        );
      })}

      {related.length ? (
        <div className={card}>
          <p className={`${type.label} ${color.muted}`}>Attempts and related charges</p>
          <ul className={`mt-5 ${space.items}`}>
            {related.map((row) => (
              <li key={(row.situation ?? row.degree) + row.maximum} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 bg-navy/40" />
                <span>
                  <span className={`block ${type.body} ${color.heading}`}>
                    {row.situation ?? row.degree}
                  </span>
                  <span className={`mt-1 block ${type.label} ${color.muted}`}>
                    {row.maximum} · {row.degree}
                  </span>
                  {row.note ? (
                    <span className={`mt-1 block ${type.small} ${color.muted}`}>{row.note}</span>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
