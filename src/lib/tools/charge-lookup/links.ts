/**
 * The charge-link SHAPE and the lookup, with no dependency on site.ts.
 *
 * WHY THIS IS ITS OWN FILE. `charge-map.ts` derives the map from `charges`,
 * which means it imports site.ts and, with it, the full authored prose of all
 * 30 charge pages. The client island needs the lookup FUNCTION and the TYPE;
 * it must never pull the derivation. A value import of `pagesFor` from
 * charge-map would drag the whole module in even though the function itself
 * touches nothing, because importing a module runs it.
 *
 * MEASURED, and stated precisely because the obvious claim would be wrong.
 * Splitting this out did NOT reduce today's byte count: a shared chunk loaded
 * by every route on this site already contains site.ts, so the charge-lookup
 * page measures 2.90 MB against a 1.89 MB baseline that home and contact pay
 * too. The ~1.0 MB difference is the statute dataset, which is this tool's
 * design and not a defect.
 *
 * What the split buys is that this tool is not a SECOND cause of the same
 * problem, and that the day the shared chunk is fixed the lookup does not
 * quietly re-introduce it. T12 holds that line. The shared chunk itself is a
 * pre-existing, site-wide issue and is not this tool's to fix.
 *
 * So the pure half lives here and the derived half stays in charge-map.ts,
 * which only the server imports.
 */

export type ChargeLink = {
  href: string;
  label: string;
  silo: "state" | "federal" | "white-collar";
  /** False today for every page; the tool must not link a reader to a 404. */
  published: boolean;
  /** The C9 statute string this link was derived from. */
  via: string;
};

/** Section key ("florida:812.014") -> every written page resting on it. */
export type ChargeMapData = Record<string, ChargeLink[]>;

/**
 * Pages for a resolved section. Empty is a normal, expected answer.
 *
 * Returns EVERY match and never picks: F.S. 812.014 is the recorded statute of
 * both the grand theft page and the embezzlement page, which is the collision
 * C9's own header records as the reason the C9 checker exists. Choosing one
 * would be the tool making a judgement about a reader's case.
 *
 * The caller renders all of them, or where the list is empty renders nothing
 * at all: no placeholder, no nearest topic.
 */
export function pagesFor(
  map: ChargeMapData,
  jurisdiction: string,
  section: string,
): ChargeLink[] {
  return map[`${jurisdiction}:${section}`] ?? [];
}
