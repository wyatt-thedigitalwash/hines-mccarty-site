/**
 * Resolving a rendered statute citation back to the recorded source it came
 * from, so a quotation can point at its own authority.
 *
 * WHY THIS EXISTS. Every quoted statutory span on this site is verbatim from a
 * table in `STATUTES`, and each of those tables carries the `url` it was
 * fetched from. That link was reaching no reader and no machine: the spans
 * rendered as ordinary paragraphs. A quotation that cannot be traced to its
 * source is, to anything reading the page, indistinguishable from a paraphrase.
 *
 * WHAT IT WILL NOT DO. It does not construct URLs. A citation resolves only by
 * matching a section number against a table that actually exists in this
 * repository, so a statute nobody recorded produces no link rather than a
 * plausible guess at flsenate.gov. That distinction is the whole point: the
 * link asserts "this text came from here", and it may only be emitted where
 * that is true.
 *
 * MULTI-SOURCE CITATIONS ARE COMMON AND ARE HANDLED HONESTLY. Several spans
 * quote more than one section at once, for example the self-defense span that
 * carries 776.012, 776.013, 776.032, 782.02 and 782.03. There is no single
 * correct `cite` URL for those, so `singleSource` returns undefined and the
 * blockquote renders without the attribute. All of the sources still appear in
 * the page's `citation` schema, which is a list and can hold them all.
 */
import { STATUTES } from "./statutes.ts";
import { RECORDED_SOURCES } from "./generated/source-index.ts";

export type StatuteRef = { key: string; cite: string; url: string };

/**
 * Section numbers a citation NAMES, whether or not this project recorded them.
 *
 * TWO PATTERNS, NOT ONE, and the reason is a bug this function had first. A
 * single "any number" pattern also matches subdivision digits and edition
 * years: "F.S. 815.06(7) (2025)" came back as three sections, and every
 * citation with a subdivision looked multi-source. So Florida sections are
 * matched by their decimal shape, and federal sections only where a U.S.C.
 * marker precedes them.
 *
 * WHY IT MATTERS THAT THIS COUNTS NAMED RATHER THAN RECORDED SECTIONS. The
 * first version counted how many sections RESOLVED to a table, which made
 * "776.012, 776.013, 776.032, 782.02 and 782.03" look single-source, because
 * only 776.032 is recorded. A `cite` pointing at 776.032 would have claimed
 * that a five-statute quotation came from one of them. What decides whether a
 * quotation has one source is what it quotes, not what this repository happens
 * to hold.
 */
function namedSections(citation: string): string[] {
  const out = new Set<string>();
  // Florida: a section number always carries a decimal part.
  for (const m of citation.matchAll(/\b\d{2,3}\.\d{2,4}\b/g)) out.add(m[0]);
  // Federal: only where the title marker is present, so "and 1030(e)(11)"
  // continuing a citation already made is not counted a second time.
  for (const m of citation.matchAll(/\bU\.?\s?S\.?\s?C\.?\s*§?\s*(\d{1,4})\b/gi))
    out.add(m[1]);
  return [...out];
}


/**
 * Matching a rendered citation to a READ-WHOLE record in PAGE-SOURCES.md.
 *
 * WHY A SECOND PATH EXISTS. `STATUTES` holds offence-grading tables. Court
 * rules and procedural statutes carry no degrees, so they have no table, and
 * before this 21 of the 22 statutory spans across the two guides resolved to
 * nothing: those pages quoted eleven authorities each and cited none of them.
 * The sources were recorded all along, under READ-WHOLE markers with their
 * fetch URLs, which `scripts/build-source-index.mjs` now generates into a
 * module.
 *
 * NORMALIZATION ORDER IS LOad-BEARING. Parenthetical groups are stripped BEFORE
 * splitting on the comma, because one record's own comma sits inside its
 * parentheses: "Administrative Order S-2025-063 (Thirteenth Judicial Circuit,
 * Hillsborough County)". Splitting first left an unbalanced fragment that
 * matched nothing.
 *
 * Subdivisions are dropped so 3161(b), 3161(c)(1) and 3161(h) all reach the
 * record for 3161, while the decimal is kept so Rule 5 and Rule 5.1 stay
 * distinct.
 */
function normalizeCite(citation: string): string {
  return citation
    .toLowerCase()
    .replace(/\([^)]*\)/g, " ")
    .split(",")[0]
    .replace(/\brule\s+/g, "")
    .replace(/§/g, "")
    .replace(/\s+/g, " ")
    .replace(/[.\s]+$/, "")
    .trim();
}

const RECORD_INDEX = new Map(
  RECORDED_SOURCES.map((r) => [normalizeCite(r.cite), r]),
);

/** The recorded source for a citation, from PAGE-SOURCES.md, or undefined. */
export function recordedSourceFor(
  citation: string,
): { cite: string; url: string } | undefined {
  return RECORD_INDEX.get(normalizeCite(citation));
}

/** Every recorded statute a citation string names, in the order named. */
export function resolveStatuteRefs(citation: string): StatuteRef[] {
  const refs: StatuteRef[] = [];
  for (const n of namedSections(citation)) {
    const table = STATUTES[n];
    if (!table) continue;
    refs.push({ key: n, cite: table.cite, url: table.url });
  }
  if (refs.length) return refs;
  // No grading table. A court rule or procedural statute may still be recorded
  // whole in PAGE-SOURCES.md, which is the only source these ever had.
  const rec = recordedSourceFor(citation);
  return rec ? [{ key: normalizeCite(citation), cite: rec.cite, url: rec.url }] : [];
}

/** How many distinct sections the citation names. Exported for the gate. */
export function namedSectionCount(citation: string): number {
  return namedSections(citation).length;
}

/**
 * The single source URL for a quotation, or undefined.
 *
 * Undefined when the citation names no recorded statute, and equally when it
 * names more than one: `cite` on a blockquote is a claim about where THAT text
 * came from, and pointing it at one of five sections would be false about the
 * other four.
 */
export function singleSourceUrl(citation: string): string | undefined {
  const named = namedSections(citation).length;
  // A rule citation names no "section" by the numeric test, so a record match
  // is the only signal it has one source. A citation naming several sections
  // never links, whichever path resolved it.
  if (named > 1) return undefined;
  const refs = resolveStatuteRefs(citation);
  return refs.length === 1 ? refs[0].url : undefined;
}
