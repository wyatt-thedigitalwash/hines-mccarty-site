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

export const TOOL_PAGE_COPY: Record<string, string[]> = {
  "/resources/tools/offense-level-comparison": OFFENSE_LEVEL_PAGE_COPY,
};
