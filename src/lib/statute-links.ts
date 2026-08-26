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

/** Every recorded statute a citation string names, in the order named. */
export function resolveStatuteRefs(citation: string): StatuteRef[] {
  const refs: StatuteRef[] = [];
  for (const n of namedSections(citation)) {
    const table = STATUTES[n];
    if (!table) continue;
    refs.push({ key: n, cite: table.cite, url: table.url });
  }
  return refs;
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
  if (namedSections(citation).length !== 1) return undefined;
  const refs = resolveStatuteRefs(citation);
  return refs.length === 1 ? refs[0].url : undefined;
}
