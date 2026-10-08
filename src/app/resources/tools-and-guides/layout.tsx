import { notFound } from "next/navigation";
import { TOOLS_LIVE } from "@/lib/site";

/**
 * Hidden at launch, D73: while TOOLS_LIVE is off, every route in this segment
 * answers with the site's not-found page (a real 404), so none is built,
 * crawled or reachable. Articles stay live (D74). The switch lives in site.ts.
 */
export default function HiddenToolsLayout({ children }: { children: React.ReactNode }) {
  if (!TOOLS_LIVE) notFound();
  return children;
}
