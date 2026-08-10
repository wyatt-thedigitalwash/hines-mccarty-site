import type { Metadata } from "next";
import HeroCenteredBanner from "@/components/home/HeroCenteredBanner";
import About from "@/components/home/About";
import Capabilities from "@/components/home/Capabilities";
import PracticeAreas from "@/components/home/PracticeAreas";
import Tools from "@/components/home/Tools";
import CoreValues from "@/components/home/CoreValues";
import MattersAndInsights from "@/components/home/MattersAndInsights";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

// Internal-only full homepage preview. Every section below the hero is the
// exact live component, unchanged. Only the hero is swapped for the new
// centered/banner variant. Does not touch the live homepage (src/app/page.tsx
// and src/components/home/Hero.tsx are untouched). Not linked from nav, not
// indexed.
export const metadata: Metadata = {
  title: "Home Preview 2 (Internal)",
  robots: { index: false, follow: false },
};

export default function HomePreview2Page() {
  return (
    <>
      <HeroCenteredBanner />
      <About />
      <Capabilities />
      <PracticeAreas />
      <Tools />
      <CoreValues />
      <MattersAndInsights />
      <Testimonials />
      <CTA />
    </>
  );
}
