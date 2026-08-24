/**
 * The tool page-copy registry. DECISIONS.md D29.
 *
 * `toolCopy` historically extracted a tool's CARD only: label, title,
 * description. That was correct while no tool had a page, and it silently
 * stopped being correct the moment one did. A tool page whose body copy is not
 * in this map renders text that the banned-term, duplication and provenance
 * rails cannot see, which is D29's own premise being violated by the registry
 * that exists to enforce it.
 *
 * Keyed by the tool's `href`, so the key is the same string `check:routes`
 * resolves and a typo cannot quietly register copy under a page that does not
 * exist. `check:tool-copy` (in scripts/check-tool-copy.mts) asserts every key
 * here names a real tool and every tool with a built route has an entry.
 */
import { OFFENSE_LEVEL_PAGE_COPY } from "./offense-level.ts";
import { CHARGE_LOOKUP_PAGE_COPY } from "./charge-lookup/copy.ts";

export const TOOL_PAGE_COPY: Record<string, string[]> = {
  "/resources/tools/offense-level-comparison": OFFENSE_LEVEL_PAGE_COPY,
  /**
   * The charging-document decoder's AUTHORED copy.
   *
   * Its shipped statutory dataset is deliberately NOT registered here, and the
   * distinction is the reason this comment exists rather than being obvious.
   * The page renders 987 verbatim statutory quotes, which Section 9 of its
   * concept document requires covered, and they are: `check:charge-lookup`
   * sweeps every row the resolver can emit.
   *
   * They must not come through THIS map, because the rails it feeds include
   * bare-word rules a quoted statute has to be allowed to trip. 53 of those
   * quotes contain "serious", "minor", "likely" or "severe" as the statute's
   * own words: "serious bodily injury" in 21 U.S.C. 841(b)(1)(A), "any minor"
   * in 18 U.S.C. 2251(a). Registering the dataset here would fail the build on
   * the text of the United States Code, which is the same false positive
   * check-pages.mts already records for "parking enforcement specialist".
   */
  "/resources/tools/charge-lookup": CHARGE_LOOKUP_PAGE_COPY,
};
