/**
 * The resolution index and the resolver.
 *
 * CHARGING-DOCUMENT-DECODER-CONCEPT.md Sections 4, 6 and 10. Three properties
 * are load-bearing and each is enforced here rather than asked for:
 *
 * 1. THE 921.0022 CHART IS NOT A MAPPING SOURCE. TOOLS.md states it as a ship
 *    condition, and the concept document's finding 4 shows why intending to
 *    obey it is not enough: the chart's 624 rows carry cites of OTHER statutes,
 *    so any index built by iterating every row of every table swallows the
 *    chart automatically. `794.011(8)(b)` is in the operative statute as a
 *    first degree felony and in the chart as a first degree felony PUNISHABLE
 *    BY LIFE. Indexed together those present as an ambiguity between two
 *    sources, and the tool would show a reader a chart-derived degree about
 *    their own charge as one of two candidate answers.
 *
 * 2. IT REFUSES RATHER THAN GUESSING. There is no fuzzy match, no nearest
 *    cite, no section fallback when a paragraph cannot be reached. Every path
 *    out of `resolve` is either a set of rows that exactly match, a set that
 *    exactly matches BELOW the query, or a refusal naming its reason.
 *
 * 3. AN ABSENT FIELD IS ABSENT. D33. A row recording `no degree assigned` puts
 *    no `degree` key on the result at all, so no renderer can print a blank
 *    degree column and no reader can read "we do not know" where the truth is
 *    "this paragraph assigns none". 694 of the 984 resolvable rows are in that
 *    state, including every federal one, so this is the common case.
 */
import { STATUTES, type GradingRow, type StatuteTable } from "../../statutes.ts";
import {
  citeKey,
  expandMultiCite,
  formatCite,
  parseCite,
  type ParsedCite,
} from "./cite.ts";
import type { RefusalReason } from "./corpus.ts";

/**
 * Tables excluded from the resolution corpus, by key, with the reason.
 *
 * These are the Criminal Punishment Code chart tables. Their rows are rankings
 * OF other statutes, not paragraphs of themselves, so they are not operative
 * text and TOOLS.md forbids mapping from them. Excluding by key rather than by
 * a property of the rows is deliberate: a property test would need the chart
 * to declare itself, and the whole failure mode here is a source that does not
 * announce what it is.
 */
export const EXCLUDED_TABLES: Record<string, string> = {
  "921.0022": "the offense severity ranking chart: rankings of other statutes, not operative text. TOOLS.md ship condition; six chart-versus-statute scope errors found on this project.",
  "921.0023": "the ranking chart's companion table, same reason.",
  "921.0024": "the sentencing scoresheet worksheet, which grades rather than defines offenses.",
};

/** The title a table's own cite records: 21 for `21 U.S.C. §841`. */
function tableTitle(t: StatuteTable): number | null {
  const m = t.cite.match(/(\d{1,2})\s*U\.?\s*S\.?\s*C\.?/i);
  return m ? Number(m[1]) : null;
}

export type IndexedRow = {
  row: GradingRow;
  table: StatuteTable;
  /** The table key, which is the section for bare cites. */
  tableKey: string;
  cite: ParsedCite;
  /** The cite exactly as the audited row writes it, for provenance. */
  rawCite: string;
};

/** Canonical key -> every row at that paragraph. More than one is normal. */
export type ResolutionIndex = {
  byKey: Map<string, IndexedRow[]>;
  /** Section key ("florida:893.13") -> every key beneath it, for prefix walks. */
  sections: Map<string, Set<string>>;
  titles: Map<string, number | null>;
  rowCount: number;
  excludedRowCount: number;
  /** Rows whose own cite parses to a section other than their table's key. */
  foreign: { tableKey: string; rawCite: string; parsedSection: string }[];
};

function sectionKey(c: ParsedCite): string {
  return `${c.jurisdiction}:${c.section}`;
}

export function buildIndex(): ResolutionIndex {
  const byKey = new Map<string, IndexedRow[]>();
  const sections = new Map<string, Set<string>>();
  const titles = new Map<string, number | null>();
  const foreign: ResolutionIndex["foreign"] = [];
  let rowCount = 0;
  let excludedRowCount = 0;

  for (const [tableKey, table] of Object.entries(STATUTES)) {
    if (EXCLUDED_TABLES[tableKey]) {
      excludedRowCount += table.rows.length;
      continue;
    }
    const title = tableTitle(table);

    for (const row of table.rows) {
      const parsed = parseCite(row.cite, { sectionFallback: tableKey });
      if (!parsed.ok) continue;

      const cites = [parsed.cite, ...expandMultiCite(row.cite, tableKey)];
      for (const cite of cites) {
        /**
         * A row whose cite names a section other than its own table's key is
         * the chart's failure shape arriving from somewhere else, so it is
         * recorded rather than indexed. `check-charge-lookup.mts` fails the
         * build on any entry here: a row filed under a foreign section is a
         * mapping this project never audited.
         */
        if (cite.section !== tableKey) {
          foreign.push({ tableKey, rawCite: row.cite, parsedSection: cite.section });
          continue;
        }
        const key = citeKey(cite);
        if (!byKey.has(key)) byKey.set(key, []);
        byKey.get(key)!.push({ row, table, tableKey, cite, rawCite: row.cite });

        const sk = sectionKey(cite);
        if (!sections.has(sk)) sections.set(sk, new Set());
        sections.get(sk)!.add(key);
        titles.set(sk, title);
      }
      rowCount++;
    }
    // A section with zero rows still exists, and must be distinguishable from
    // a section that is not in the corpus at all. 18 U.S.C. 20, 24 and 3553
    // are all audited whole-section and hold no rows.
    const sk = `${tableKey.includes(".") ? "florida" : "federal"}:${tableKey}`;
    if (!sections.has(sk)) sections.set(sk, new Set());
    if (!titles.has(sk)) titles.set(sk, title);
  }

  return { byKey, sections, titles, rowCount, excludedRowCount, foreign };
}

export const INDEX = buildIndex();

// ---------------------------------------------------------------- output
/**
 * The statutory term of imprisonment, as a VERBATIM SPAN of the row's quote.
 *
 * D33 part 2. This is what a federal resolution shows where a Florida one
 * shows a degree, and the constraint is that the words a reader sees are the
 * statute's own words. It is NOT read from the row's `trigger`, which carries
 * an auditor's summary like "Term: 5 to 20 years, a mandatory minimum of 5
 * years". That summary is prose, and this project's founding rule is that a
 * claim written in prose cannot be checked against a source.
 *
 * So the span is LOCATED inside `quote` and returned as a slice of it. The
 * caller can assert `quote.includes(span)`, and `check-charge-lookup.mts`
 * does, for every row the tool can render.
 */
const TERM_PATTERNS: RegExp[] = [
  /**
   * The two-bound form. `(?:not\s+)?` after the conjunction is not optional
   * decoration: the Code writes BOTH "not less than 5 years and not more than
   * 20 years" (2252(b)(1) base) and "not less than 15 years nor more than 40
   * years" (2252(b)(1) with a prior). Requiring "nor not more than" matched
   * the first and missed the second, so the two heaviest enhancement
   * paragraphs in the tool's highest-volume federal section rendered with no
   * term at all while their neighbours rendered one. Caught by counting term
   * coverage per row, not by reading the regex.
   */
  /imprisoned\s+(?:for\s+)?not\s+less\s+than\s+[^,.;]{1,60}?\s+(?:and|nor)\s+(?:not\s+)?more\s+than\s+[^,.;]{1,40}/i,
  /imprisoned\s+(?:for\s+)?not\s+more\s+than\s+[^,.;]{1,40}/i,
  /imprisoned\s+for\s+(?:any\s+term\s+of\s+years\s+or\s+for\s+life|life)/i,
  /imprisonment\s+for\s+(?:any\s+term\s+of\s+years\s+or\s+for\s+life|life)/i,
  /sentenced\s+to\s+a\s+term\s+of\s+imprisonment\s+of\s+[^,.;]{1,60}/i,
];

export function statutoryTerm(quote: string): string | null {
  for (const re of TERM_PATTERNS) {
    const m = quote.match(re);
    if (m) {
      const span = m[0].trim().replace(/[,;]$/, "");
      // The assertion this function exists to make possible. A span that is
      // not literally in the quote is a paraphrase, and would be shipped as if
      // it were a quotation.
      if (!quote.includes(span)) return null;
      return span;
    }
  }
  return null;
}

/**
 * One resolved paragraph, as the page renders it.
 *
 * NOTE WHAT IS OPTIONAL AND WHY. `degree` and `term` are both optional, and
 * absent means absent (D33). A result carrying neither is a correct, complete
 * result for a paragraph that assigns no degree and states no term; it is not
 * a partial one, and the page says so rather than showing two empty cells.
 */
export type ResolvedRow = {
  /** The citation, normalised, as Section 4 item 1 requires it shown back. */
  cite: string;
  /** The cite exactly as the audited row writes it. */
  rawCite: string;
  /** The operative text, verbatim, per C12. */
  quote: string;
  source: { citation: string; url: string; fetched: string };
  /** Absent where the row records `no degree assigned`. Never blank. */
  degree?: string;
  /** A verbatim span of `quote`. Absent where the quote states no term. */
  term?: string;
  /** The row's own scope or trigger note, where it carries one. */
  note?: string;
  /** Set only where the source table is recorded `partial`. D34. */
  partial?: { unread: string | null };
};

function toResolved(hit: IndexedRow, title: number | null): ResolvedRow {
  const out: ResolvedRow = {
    cite: formatCite(hit.cite, { title }),
    rawCite: hit.rawCite,
    quote: hit.row.quote,
    source: {
      citation: hit.table.cite,
      url: hit.table.url,
      fetched: hit.table.fetched,
    },
  };
  // D33 part 1. The key is not set at all, rather than set to a falsy value.
  if (hit.row.degree !== "no degree assigned") out.degree = hit.row.degree;
  const term = statutoryTerm(hit.row.quote);
  if (term) out.term = term;
  if (hit.row.trigger) out.note = hit.row.trigger;
  if (hit.table.completeness === "partial") {
    out.partial = { unread: hit.table.unread ?? null };
  }
  return out;
}

export type Resolution =
  /** Exactly the paragraph asked for. One or more rows; more than one is normal. */
  | { kind: "paragraph"; query: string; cite: string; rows: ResolvedRow[] }
  /**
   * The query names a section or a parent paragraph, and the record holds
   * paragraphs beneath it. EVERY one is returned. Section 10: the tool never
   * picks.
   */
  | { kind: "shows-all"; query: string; under: string; rows: ResolvedRow[] }
  | { kind: "refuse"; query: string; reason: RefusalReason; detail: string };

/**
 * Resolve a string a reader typed.
 *
 * Runs entirely on data shipped in the bundle. It takes a string and returns a
 * value; it reads no globals, touches no storage, and issues no request, which
 * is what makes C5 checkable by static analysis over this module (T6).
 */
export function resolve(input: string, index: ResolutionIndex = INDEX): Resolution {
  const query = typeof input === "string" ? input.trim() : "";
  const parsed = parseCite(query);
  if (!parsed.ok) {
    return { kind: "refuse", query, reason: parsed.reason, detail: parsed.detail };
  }
  const cite = parsed.cite;
  const sk = sectionKey(cite);

  if (!index.sections.has(sk)) {
    return {
      kind: "refuse",
      query,
      reason: "section-not-in-corpus",
      detail:
        `We do not have verified text for ${formatCite(cite)}. This tool covers ` +
        `the Florida and federal sections this firm has read in full, and that ` +
        `section is not one of them.`,
    };
  }

  // A federal title that contradicts the table's own. Section 841 is title 21;
  // a reader who typed title 18 is asking about a different statute, and
  // answering with the drug statute would be a confident wrong answer.
  const recordedTitle = index.titles.get(sk) ?? null;
  if (cite.title != null && recordedTitle != null && cite.title !== recordedTitle) {
    return {
      kind: "refuse",
      query,
      reason: "title-mismatch",
      detail:
        `Section ${cite.section} is in title ${recordedTitle} of the U.S. Code, ` +
        `not title ${cite.title}. Check the title number on the document.`,
    };
  }

  const keys = index.sections.get(sk)!;
  if (keys.size === 0) {
    return {
      kind: "refuse",
      query,
      reason: "section-has-no-rows",
      detail:
        `We have read ${formatCite(cite, { title: recordedTitle })} in full, but our ` +
        `record of it holds no paragraph entries, so there is nothing here to show ` +
        `you about it.`,
    };
  }

  const key = citeKey(cite);
  const exact = index.byKey.get(key) ?? [];

  /**
   * Everything BENEATH the paragraph asked for.
   *
   * EXACT AND BENEATH ARE NOT ALTERNATIVES, and treating them as alternatives
   * was a real bug caught by the corpus rather than by review. F.S.
   * 812.014(2)(c) has two rows AT it, both flush-language spans, and thirteen
   * subparagraphs beneath it. Returning on the exact hit answered the query
   * with the two flush spans and silently dropped all thirteen numbered
   * paragraphs, which is the drop-without-a-signal failure this tool exists to
   * avoid. Both sets are always collected.
   *
   * The widening is downward only. Showing every paragraph inside the one
   * asked about answers the question that was asked; showing the paragraph
   * ABOVE it answers a different question while looking like an answer, and
   * Section 10 forbids it.
   */
  const prefix = cite.path.length ? `${key}.` : key;
  const beneath = [...keys].filter((k) => k !== key && k.startsWith(prefix));

  if (beneath.length) {
    const hits = [...exact, ...beneath.flatMap((k) => index.byKey.get(k) ?? [])];
    const rows = hits.map((h) => toResolved(h, recordedTitle));
    /**
     * The heading uses the STATUTE'S casing, not the reader's.
     *
     * A reader typing "1030 a2a" and a reader typing "1030(A)(2)(A)" are
     * asking the same question and must see the same answer, written the way
     * the Code writes it. Taken from a row beneath the query and sliced to the
     * query's own depth, so it is the corpus speaking rather than the input
     * being echoed back with its own typos in it.
     */
    const sample = hits[0]?.cite.displayPath;
    return {
      kind: "shows-all",
      query,
      under: formatCite(cite, {
        title: recordedTitle,
        displayPath: sample?.slice(0, cite.path.length),
      }),
      rows: sortRows(rows),
    };
  }

  if (exact.length) {
    return {
      kind: "paragraph",
      query,
      // The AUDITED ROW'S casing, never the reader's. A booking sheet is
      // upper-case throughout, so "893.13 6A" must come back as F.S.
      // 893.13(6)(a), the way Florida writes it; the Code's "1030(a)(2)(A)"
      // must keep its capital. Echoing the input's case would make the tool
      // agree with whatever the reader typed, which is the opposite of showing
      // them what was matched.
      cite: formatCite(cite, {
        title: recordedTitle,
        displayPath: exact[0].cite.displayPath,
      }),
      rows: exact.map((h) => toResolved(h, recordedTitle)),
    };
  }

  // The section is held, and so is something above the paragraph asked for,
  // but the record does not reach the depth named. Section 10 forbids falling
  // back to the ancestor, so this refuses and NAMES the ancestor without
  // showing its text as the answer.
  const held: string[] = [];
  for (let i = cite.path.length - 1; i >= 0; i--) {
    const ancestor = citeKey({ ...cite, path: cite.path.slice(0, i) });
    if (index.byKey.has(ancestor)) {
      held.push(formatCite({ ...cite, path: cite.path.slice(0, i) }, { title: recordedTitle }));
      break;
    }
  }
  return {
    kind: "refuse",
    query,
    reason: "deeper-than-record",
    detail:
      `Our record of ${formatCite({ ...cite, path: [] }, { title: recordedTitle })} does not ` +
      `go down to ${formatCite(cite, { title: recordedTitle })}` +
      (held.length ? `. It reaches ${held[0]}` : "") +
      `. We are not going to show you the paragraph above the one you entered as ` +
      `though it were the one you entered.`,
  };
}

/** Stable order: by path, numerically where the tokens are numbers. */
function sortRows(rows: ResolvedRow[]): ResolvedRow[] {
  return [...rows].sort((a, b) =>
    a.cite.localeCompare(b.cite, "en", { numeric: true }),
  );
}
