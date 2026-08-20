/**
 * The measured-surface registry. DECISIONS.md D29.
 *
 * One list of every renderable page: charges, guides, and tools. Every gate
 * iterates THIS list rather than `charges`, because the registry's own premise
 * governs membership: a page outside it is invisible to every gate, silently,
 * which is how every gate on this site has ever broken. Nothing renderable
 * stays outside it.
 *
 * The three concept documents proposed three separate mechanisms for the same
 * hole (check:tool-rendered, check:tools, guideCopy plus a registry); D29
 * reconciled them into this one design. Each entry carries its copy through
 * one extractor per surface kind, so the banned-term, duplication, and heading
 * rails have exactly one iteration source.
 *
 * `check:c9` deliberately does NOT iterate this registry. Cover-the-name is a
 * between-charge-pages test; it keeps iterating `charges` and prints that it
 * skips guides and tools by design.
 */
import {
  type ChargePage,
  type GuidePage,
  type Tool,
  charges,
  chargeHref,
  guides,
  guideHref,
  tools,
} from "./site.ts";
import { guideCopy, pageCopy, toolCopy } from "./page-copy.ts";

export type Measured =
  | {
      kind: "charge";
      key: string;
      href: string;
      copy: string[];
      /** Written = has any authored content; parallels the gates' filters. */
      written: boolean;
      published: boolean;
      charge: ChargePage;
    }
  | {
      kind: "guide";
      key: string;
      href: string;
      copy: string[];
      written: boolean;
      published: boolean;
      guide: GuidePage;
    }
  | {
      kind: "tool";
      key: string;
      href: string;
      copy: string[];
      /** A tool card always renders, so a tool is always written. */
      written: true;
      published: boolean;
      tool: Tool;
    };

export const measuredPages: Measured[] = [
  ...charges.map(
    (c): Measured => ({
      kind: "charge",
      key: `charge:${c.silo}/${c.slug}`,
      href: chargeHref(c),
      copy: pageCopy(c),
      written: Boolean(c.lead || c.statute || c.sections?.length),
      published: c.published,
      charge: c,
    }),
  ),
  ...guides.map(
    (g): Measured => ({
      kind: "guide",
      key: `guide:${g.slug}`,
      href: guideHref(g),
      copy: guideCopy(g),
      written: Boolean(g.lead || g.sections?.length),
      published: g.published,
      guide: g,
    }),
  ),
  // Tool GUIDE rows are derived from `guides` and would double-measure the
  // same copy under two keys, so only non-guide tool cards register here; the
  // guide entries above are the canonical surface for that copy.
  ...tools
    .filter((t) => t.kind !== "Guide")
    .map(
      (t): Measured => ({
        kind: "tool",
        key: `tool:${t.href.split("/").pop()}`,
        href: t.href,
        copy: toolCopy(t),
        written: true,
        published: t.published,
        tool: t,
      }),
    ),
];

export const measuredGuides = measuredPages.filter((m) => m.kind === "guide");
export const measuredCharges = measuredPages.filter((m) => m.kind === "charge");
export const measuredTools = measuredPages.filter((m) => m.kind === "tool");
