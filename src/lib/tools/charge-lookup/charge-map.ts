/**
 * Statute -> charge page. DERIVED from the written pages, never hand-listed.
 *
 * CHARGING-DOCUMENT-DECODER-CONCEPT.md Section 8 item 5 and assertion T7. The
 * fourth output element: every resolution ends by handing the reader onward,
 * which is the design choice Section 4 says forecloses the reading that
 * resolving a citation is the same as being told what your case is about.
 *
 * WHY DERIVED. A hand-written map is a second copy of the truth and this
 * project has recorded that drift more than once (check-routes.mts says so at
 * its own inventory). The source is each page's own C9 assertion, which is the
 * statute the page's differentiator rests on, so a page cannot appear in this
 * map claiming a statute it does not actually rest on.
 *
 * TWO THINGS IT DOES NOT DO, both of them Section 10 applied to links.
 *
 * 1. IT DOES NOT PICK. F.S. 812.014 is the recorded statute of BOTH
 *    /criminal-defense/grand-theft-defense and
 *    /white-collar-defense/embezzlement, which is not an accident: C9's own
 *    header records that exact pair as the collision that made the C9 checker
 *    exist. A reader who resolves 812.014(2)(c)1. is shown both pages, because
 *    choosing one would be the tool making a judgement about their case.
 *
 * 2. IT SAYS NOTHING WHERE THERE IS NO PAGE. A resolution with no page emits
 *    no link and no "coming soon" and no nearest-topic suggestion. Most
 *    resolvable sections have no page at all, and inventing a near-miss
 *    destination is the same defect as a near-miss paragraph.
 */
import { charges, chargeHref } from "../../site.ts";
import { isPopulated } from "../../c9.ts";
import type { ChargeLink, ChargeMapData } from "./links.ts";

/**
 * Every statute a C9 assertion names, not just the first.
 *
 * `c9.statuteKey` returns ONE key and stops, which is right for collision
 * detection and wrong here. Four written pages record more than one statute:
 * wire-mail-fraud rests on 18 U.S.C. 1341 AND 1343, securities-fraud on F.S.
 * 517.302 AND 18 U.S.C. 1348, tax-evasion on 26 U.S.C. 7201 AND F.S.
 * 212.15(2), conspiracy on 371, 846 and 1349. Taking only the first would make
 * `18 usc 1343`, a TOOLS.md-named input form with its own page, resolve to no
 * page while the page sat there naming it.
 */
export function statutesNamed(citation: string): string[] {
  const out: string[] = [];
  for (const m of citation.matchAll(
    /(\d{1,2})\s*U\.?\s*S\.?\s*C\.?\s*(?:§\s*)?(\d{1,4}[A-Za-z]?)/gi,
  )) {
    out.push(`federal:${m[2]}`);
  }
  /**
   * Trailing bare sections in a list: "18 U.S.C. 1341 and 1343".
   *
   * The lookahead is required, not tidiness. Without it, "18 U.S.C. 371,
   * against 21 U.S.C. 846 and 18 U.S.C. 1349" yields a bare `18` and the map
   * grows a `federal:18` key pointing at two real pages. That is not
   * harmless: 18, 20 and 24 are all real audited table keys in this corpus, so
   * a title number captured as a section number is a live wrong link waiting
   * for the matching query.
   */
  const usc = citation.match(/(\d{1,2})\s*U\.?\s*S\.?\s*C\.?/i);
  if (usc) {
    for (const m of citation.matchAll(
      /\band\s+(\d{2,4}[A-Za-z]?)\b(?!\s*U\.?\s*S\.?\s*C\.?)/gi,
    )) {
      out.push(`federal:${m[1]}`);
    }
  }
  for (const m of citation.matchAll(/(\d{3}\.\d{1,4})/g)) {
    out.push(`florida:${m[1]}`);
  }
  return [...new Set(out)];
}

/**
 * Section key ("florida:812.014") -> every written page resting on it.
 *
 * A PLAIN OBJECT rather than a Map, because it crosses the server/client
 * boundary as a prop. The island must not import this module: see links.ts for
 * why, and for the 2.3 MB bundle that made the split necessary.
 */
export const CHARGE_MAP_DATA: ChargeMapData = (() => {
  const map = new Map<string, ChargeLink[]>();
  for (const c of charges) {
    // Written pages only. An unwritten stub has a [NEEDS] C9 and nothing on
    // it for a reader, so linking one would hand a reader an empty page.
    const written = Boolean(c.lead || c.statute || c.sections?.length);
    if (!written || !isPopulated(c.c9)) continue;

    for (const key of statutesNamed(c.c9.statute)) {
      if (!map.has(key)) map.set(key, []);
      const list = map.get(key)!;
      if (list.some((l) => l.href === chargeHref(c))) continue;
      list.push({
        href: chargeHref(c),
        label: c.label,
        silo: c.silo,
        published: c.published,
        via: c.c9.statute,
      });
    }
  }
  // Stable order so the rendered list cannot reorder between builds, and so
  // "first" never becomes an implicit recommendation.
  for (const list of map.values()) list.sort((a, b) => a.href.localeCompare(b.href));
  return Object.fromEntries([...map.entries()].sort(([a], [b]) => a.localeCompare(b)));
})();

/** Every href this tool can emit, for the T7 route sweep. */
export const EMITTABLE_HREFS: string[] = [
  ...new Set(Object.values(CHARGE_MAP_DATA).flat().map((l) => l.href)),
].sort();

/** Sections that resolve AND have a page to hand the reader onward to. */
export const LINKED_SECTION_COUNT = Object.keys(CHARGE_MAP_DATA).length;
