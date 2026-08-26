import type { Metadata } from "next";
import { organizationJsonLd } from "@/lib/schema";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Capabilities from "@/components/home/Capabilities";
import PracticeAreas from "@/components/home/PracticeAreas";
import Tools from "@/components/home/Tools";
import CoreValues from "@/components/home/CoreValues";
import Locations from "@/components/home/Locations";
import MattersAndInsights from "@/components/home/MattersAndInsights";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Criminal Defense and Personal Injury Attorneys in Tampa Bay",
  description:
    "Hines & McCarty is a Brandon, Florida firm handling serious state and federal criminal charges and personal injury claims across Greater Tampa Bay.",
};

export default function Home() {
  return (
    <>
      {/*
        The firm entity, emitted here and only here.

        It was previously reachable only by being inlined as `worksFor` inside
        each attorney's Person schema, so the canonical LegalService node lived
        on four bio pages and not on the site's own home page. `organizationId`
        is a stable @id precisely so it can be declared once and referenced,
        which needs the declaration to exist somewhere findable.

        `address` is Brandon alone. `areaServed` carries the cities from the
        locations section, which is a different claim and deliberately a
        different property. See the note on organizationJsonLd.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            ...organizationJsonLd(),
          }),
        }}
      />
      <Hero />
      <About />
      <Capabilities />
      <PracticeAreas />
      <Tools />
      <CoreValues />
      <Locations />
      <MattersAndInsights />
      <Testimonials />
      <CTA />
    </>
  );
}
