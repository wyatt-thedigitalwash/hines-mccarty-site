/**
 * What the result panel shows, as DATA rather than as JSX.
 *
 * WHY THIS LAYER EXISTS. Assertion T4 requires the Section 5 disclosure to
 * render adjacent to results AND to refusals, and the concept document says
 * why refusals are the risk: a refusal is the branch a developer thinks of as
 * the empty state rather than as a result, so it is where the disclosure gets
 * dropped. A gate that reads the built HTML cannot check that, because the
 * result panel is client-rendered and no refusal is in the static artifact.
 *
 * So the DECISION about what a panel contains lives here, as a pure function
 * of a resolution, and the component is a thin renderer of it. The gate then
 * runs every one of the corpus's inputs through `panelFor` and asserts the
 * disclosure is present on all of them, which tests all three branches on real
 * inputs rather than testing one page of HTML.
 *
 * The rule this enforces structurally: there is ONE way to build a panel, and
 * it always carries the disclosure. A later edit cannot add a fourth branch
 * that forgets it without deleting this function.
 */
import {
  AMBIGUOUS_NOTE,
  CANNOT_KNOW,
  NO_DEGREE_NOTE,
  NO_PAGE_NOTE,
  PARTIAL_NOTE,
  REFUSAL,
  SCOPE_NOTE,
} from "./copy.ts";
/**
 * From links.ts, NOT from charge-map.ts. charge-map derives the map from
 * site.ts and carries the authored prose of all 30 charge pages with it;
 * importing it here would compile that prose into the client bundle through
 * this module. The map arrives as an argument instead.
 */
import { pagesFor, type ChargeLink, type ChargeMapData } from "./links.ts";
import { parseCite } from "./cite.ts";
import type { Resolution, ResolvedRow } from "./resolve.ts";

export type Panel = {
  kind: Resolution["kind"];
  /** The heading a reader sees. */
  heading: string;
  /** Sentences shown above the rows, in order. */
  notes: string[];
  rows: ResolvedRow[];
  /** Charge pages for the resolved section. Empty is a normal answer. */
  links: ChargeLink[];
  /** Rendered when `links` is empty and the resolution succeeded. */
  noPageNote: string | null;
  /**
   * The Section 5 disclosure. NOT optional in the type, so a branch that
   * wanted to omit it would have to change the type rather than an argument.
   */
  cannotKnow: { heading: string; body: string };
};

export function panelFor(r: Resolution, map: ChargeMapData = {}): Panel {
  if (r.kind === "refuse") {
    return {
      kind: "refuse",
      heading: REFUSAL.heading,
      // The scope sentence rides with every refusal, which is Section 10's
      // out-of-scope rule: refused "with what the tool covers, not with an
      // error". A reader who typed an ordinance or another state's code learns
      // why, rather than being told the string is bad.
      notes: [REFUSAL.body, r.detail, SCOPE_NOTE],
      rows: [],
      links: [],
      noPageNote: null,
      cannotKnow: CANNOT_KNOW,
    };
  }

  const rows = r.rows;
  const notes: string[] = [];
  if (r.kind === "shows-all") notes.push(AMBIGUOUS_NOTE);
  // Explained where the absence appears, per D33, and only where it appears.
  // A standing note about degrees on a page showing a Florida degree would be
  // noise; the same note under a federal result is the difference between
  // "the law is different" and "this tool is broken".
  if (rows.some((row) => row.degree === undefined)) notes.push(NO_DEGREE_NOTE);
  if (rows.some((row) => row.partial)) notes.push(PARTIAL_NOTE);

  const parsed = parseCite(r.query);
  const links = parsed.ok
    ? pagesFor(map, parsed.cite.jurisdiction, parsed.cite.section)
    : [];

  return {
    kind: r.kind,
    heading: r.kind === "paragraph" ? r.cite : r.under,
    notes,
    rows,
    links,
    noPageNote: links.length ? null : NO_PAGE_NOTE,
    cannotKnow: CANNOT_KNOW,
  };
}
