import { buildSearchIndex } from "@/lib/search-index";

/**
 * The site search index, built once at build time and served as a static
 * file (D76). The search box fetches it the first time it opens.
 */
export const dynamic = "force-static";

export function GET() {
  return Response.json(buildSearchIndex());
}
