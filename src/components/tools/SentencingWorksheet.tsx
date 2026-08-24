"use client";

/**
 * The sentencing-worksheet island. THE ONLY CLIENT CODE THIS TOOL SHIPS.
 *
 * READ SENTENCING-WORKSHEET-CONCEPT.md SECTIONS 3 AND 4 BEFORE EDITING.
 *
 * C5, BY CONSTRUCTION. One `useState` holding a row index. No server, no URL
 * including hash, no analytics attribute, no persistence, no autocomplete.
 * There is nothing in this file that could carry a selection off the page, and
 * `check:worksheet` runs a C5 static sweep over this exact file plus everything
 * it imports.
 *
 * WHY THE PICKER MOUNTS ONLY AFTER HYDRATION. Assertion T9: with JavaScript
 * disabled the page renders the blank form and the disclosure and NO FILLED
 * CELL. A server-rendered <select> that does nothing until hydration is an
 * input that appears functional, and it would also imply the form below it
 * responds. It does not, until React is running. So the static artifact carries
 * a sentence saying so, and the blank form stands on its own as the honest
 * product it is.
 *
 * NO ARITHMETIC. Not a sum, not a subtotal, not a comparison of one number to
 * another. The only figure this file can put on screen is a point value the
 * statute assigns to a level, looked up in a typed table and rendered as text.
 */
import { useState, useSyncExternalStore } from "react";
import {
  DEPARTURE_ROW,
  DESIGNATION_ROWS,
  NO_JS_NOTE,
  PICKER,
  SENTENCE_IMPOSED_ROWS,
  STATUTORY_MAXIMUM_CELL,
  TOTAL_SENTENCE_POINTS,
  type Cell,
  type FormRow,
  worksheet,
} from "@/lib/tools/sentencing-worksheet";

const emptyStore = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

/**
 * One cell, in one of three visual states.
 *
 * An empty cell renders a VISIBLE box plus its label. It is deliberately not
 * greyed out and not omitted: a greyed cell reads as disabled and an omitted
 * one reads as inapplicable, and this cell is neither. It is a cell somebody
 * has to fill in and this page cannot.
 */
function CellView({ cell }: { cell: Cell }) {
  if (cell.state === "filled") {
    return (
      <div data-cell="filled">
        <span className="font-medium text-navy">{cell.value}</span>
        <span className="mt-1 block text-xs text-navy/50">from {cell.source}</span>
      </div>
    );
  }
  if (cell.state === "na") {
    return (
      <div data-cell="na">
        <span className="inline-block rounded border border-navy/20 bg-navy/[0.03] px-3 py-1 text-xs uppercase tracking-wide text-navy/50">
          Not applicable
        </span>
        <span className="mt-1 block text-xs text-navy/60">{cell.why}</span>
      </div>
    );
  }
  return (
    <div data-cell="empty">
      <span
        aria-hidden="true"
        className="block h-7 w-full max-w-[16rem] border-b-2 border-dashed border-bronze/60 bg-bronze/[0.06]"
      />
      <span className="mt-1 block text-xs text-navy/60">
        <span className="font-medium text-navy/70">Needs: </span>
        {cell.needs}
      </span>
    </div>
  );
}

function RowView({ row }: { row: FormRow }) {
  return (
    <div className="grid gap-2 border-t border-navy/10 py-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] sm:gap-6">
      <div className="text-sm text-navy/80">{row.label}</div>
      <CellView cell={row.cell} />
    </div>
  );
}

export default function SentencingWorksheet() {
  // False during SSR and on the first client render. See the header note.
  const hydrated = useSyncExternalStore(emptyStore, clientSnapshot, serverSnapshot);

  /**
   * The only state in the tool. A row INDEX, never a cite: three cites in the
   * ranking chart carry two rows at different levels under the same degree, so
   * a cite-keyed selection would silently choose one of them.
   */
  const [selected, setSelected] = useState<number | null>(null);

  const row = selected == null ? null : (PICKER[selected] ?? null);
  const blocks = worksheet(row);

  return (
    <div>
      {hydrated ? (
        <div className="rounded border border-navy/15 bg-white p-6">
          <label
            htmlFor="primary-offense"
            className="block font-heading text-lg text-navy"
          >
            Primary offense
          </label>
          <p className="mt-1 text-sm text-navy/70">
            {PICKER.length} ranked offenses from the severity ranking chart.
          </p>
          <select
            id="primary-offense"
            className="mt-3 w-full rounded border border-navy/25 bg-linen px-3 py-2 text-navy"
            autoComplete="off"
            value={selected ?? ""}
            onChange={(e) =>
              setSelected(e.target.value === "" ? null : Number(e.target.value))
            }
          >
            <option value="">No offense selected. The form below is blank.</option>
            {PICKER.map((r) => (
              <option key={r.index} value={r.index}>
                {r.cite}, {r.degree}, level {r.level}
              </option>
            ))}
          </select>
          {row ? (
            <button
              type="button"
              className="mt-3 text-sm text-bronze underline underline-offset-4"
              onClick={() => setSelected(null)}
            >
              Clear the selection
            </button>
          ) : null}
        </div>
      ) : (
        <p
          data-no-js
          className="rounded border border-navy/15 bg-white p-6 text-sm text-navy/70"
        >
          {NO_JS_NOTE}
        </p>
      )}

      <div className="mt-10 border border-navy/15 bg-white" data-worksheet>
        {blocks.map((b) => (
          <section key={b.numeral} className="border-b border-navy/15 px-6 py-6">
            <h3 className="font-heading text-lg text-navy">
              <span className="mr-2 text-navy/50">{b.numeral}.</span>
              {b.heading}
            </h3>
            {b.printedGrid ? (
              <p className="mt-1 font-mono text-xs text-navy/55">{b.printedGrid}</p>
            ) : null}
            <div className="mt-3">
              {b.rows.map((r, i) => (
                <RowView key={i} row={r} />
              ))}
            </div>
            <div className="mt-4 border-t-2 border-navy/20 pt-3">
              <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] sm:gap-6">
                <div className="text-sm font-medium text-navy">
                  {b.numeral}. Total
                </div>
                <CellView cell={b.total} />
              </div>
            </div>
          </section>
        ))}

        <section className="border-b border-navy/15 px-6 py-6">
          <h3 className="font-heading text-lg text-navy">Total sentence points</h3>
          <div className="mt-3" data-total-sentence-points>
            <CellView cell={TOTAL_SENTENCE_POINTS} />
          </div>
        </section>

        <section className="border-b border-navy/15 px-6 py-6">
          <h3 className="font-heading text-lg text-navy">
            Maximum sentence for the primary offense
          </h3>
          <div className="mt-3">
            <CellView cell={STATUTORY_MAXIMUM_CELL} />
          </div>
        </section>

        <section className="border-b border-navy/15 px-6 py-6">
          <h3 className="font-heading text-lg text-navy">Total sentence imposed</h3>
          <div className="mt-3">
            {SENTENCE_IMPOSED_ROWS.map((r, i) => (
              <RowView key={i} row={r} />
            ))}
          </div>
        </section>

        <section className="border-b border-navy/15 px-6 py-6">
          <h3 className="font-heading text-lg text-navy">
            Sentencing designations
          </h3>
          <div className="mt-3">
            {DESIGNATION_ROWS.map((r, i) => (
              <RowView key={i} row={r} />
            ))}
          </div>
        </section>

        <section className="px-6 py-6">
          <h3 className="font-heading text-lg text-navy">Departure</h3>
          <div className="mt-3">
            <RowView row={DEPARTURE_ROW} />
          </div>
        </section>
      </div>
    </div>
  );
}
