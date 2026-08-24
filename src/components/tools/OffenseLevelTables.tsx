import type { Triple } from "@/lib/tools/offense-level";
import type { Degree } from "@/lib/statutes";

/**
 * The tables for the offense-level comparison instrument.
 *
 * WHY THE DATA ATTRIBUTES. D24: an assertion reads the rendered artifact, not
 * the data behind it. A gate that re-imported `offense-level.ts` and compared
 * it to the chart would prove the module self-consistent while the page
 * rendered something else entirely, which is the whole failure D24 exists to
 * stop. So every rendered triple carries `data-cite`, `data-degree` and
 * `data-level` on the row, and `check:offense-level` reads them out of the
 * built HTML and checks each one against `fs-921-0022.ts`.
 *
 * The attributes are not decoration and are not debug output. They are the
 * page's testable surface, and removing one breaks its gate rather than
 * silently un-checking it.
 */

const th = "px-3 py-2 text-left font-heading text-xs uppercase tracking-wide";
const td = "border-t border-navy/10 px-3 py-3 align-top";

export function TripleTable({
  caption,
  rows,
}: {
  caption: string;
  /** `as` is the plain-language label; the rest is chart data. */
  rows: (Triple & { as: string })[];
}) {
  return (
    <div className="overflow-x-auto" data-comparison>
      <table className="w-full min-w-[34rem] border-collapse text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-navy/5 text-navy/70">
          <tr>
            <th className={th} scope="col">
              Charged as
            </th>
            <th className={th} scope="col">
              Statute
            </th>
            <th className={th} scope="col">
              Degree
            </th>
            <th className={`${th} text-right`} scope="col">
              Offense level
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr
              key={r.cite}
              data-triple
              data-cite={r.cite}
              data-degree={r.degree}
              data-level={r.level}
            >
              <th className={`${td} font-normal`} scope="row">
                {r.as}
              </th>
              <td className={`${td} whitespace-nowrap font-mono text-xs`}>
                Statute {r.cite}
              </td>
              <td className={td}>{r.degree}</td>
              <td className={`${td} text-right font-heading text-base`}>
                {r.level}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SpanTable({
  caption,
  spans,
}: {
  caption: string;
  spans: { degree: Degree; levels: number[] }[];
}) {
  return (
    <div className="overflow-x-auto" data-span-table>
      <table className="w-full min-w-[30rem] border-collapse text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-navy/5 text-navy/70">
          <tr>
            <th className={th} scope="col">
              Degree
            </th>
            <th className={th} scope="col">
              Levels it occupies in the chart
            </th>
          </tr>
        </thead>
        <tbody>
          {spans.map((s) => (
            <tr
              key={s.degree}
              data-span
              data-degree={s.degree}
              data-levels={s.levels.join(",")}
            >
              <th className={`${td} font-normal`} scope="row">
                {s.degree}
              </th>
              <td className={td}>{s.levels.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
