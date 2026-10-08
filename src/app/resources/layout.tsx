import { notFound } from "next/navigation";
import { RESOURCES_LIVE } from "@/lib/site";

/**
 * Every page under /resources (tools, guides, articles, and the hubs) is
 * hidden at launch, D73. Off, this layout answers every route in the segment
 * with the site's not-found page, so none is built, crawled or reachable. On,
 * it renders the pages exactly as before. The switch lives in site.ts.
 */
export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  if (!RESOURCES_LIVE) notFound();
  return children;
}
