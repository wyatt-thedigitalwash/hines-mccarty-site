import type { Metadata } from "next";
import HeroCentered from "@/components/home/HeroCentered";

// Internal-only layout preview. Does not touch the live homepage. The real
// Header already renders above this from the root layout; not linked from
// nav, not indexed.
export const metadata: Metadata = {
  title: "Hero Preview 2 (Internal)",
  robots: { index: false, follow: false },
};

export default function HeroPreview2Page() {
  return <HeroCentered />;
}
