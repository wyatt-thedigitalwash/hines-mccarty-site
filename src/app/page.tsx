import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Capabilities from "@/components/home/Capabilities";
import PracticeAreas from "@/components/home/PracticeAreas";
import Tools from "@/components/home/Tools";
import CoreValues from "@/components/home/CoreValues";
import MattersAndInsights from "@/components/home/MattersAndInsights";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Criminal Defense Attorneys in Tampa Bay",
  description:
    "Hines & McCarty is a Brandon, Florida criminal defense firm handling serious state and federal charges across Greater Tampa Bay. Four attorneys, each focused on their own areas of criminal law.",
};

export default function Home() {
  return (
    <>
      <Hero />
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
