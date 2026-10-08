import type { Metadata } from "next";
import { organizationJsonLd, websiteJsonLd } from "@/lib/schema";
import { TESTIMONIALS_REAL, TOOLS_LIVE } from "@/lib/site";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Practices from "@/components/home/Practices";
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
    "Hines McCarty Pavlidis is a Brandon, Florida firm handling serious state and federal criminal charges and personal injury claims across Greater Tampa Bay.",
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
            "@graph": [organizationJsonLd(), websiteJsonLd()],
          }),
        }}
      />
      <Hero />
      <About />
      <Practices />
      <PracticeAreas />
      {/* D73: the tools carousel returns with Resources. */}
      {TOOLS_LIVE ? <Tools /> : null}
      <CoreValues />
      <Locations />
      {/* D73: the insights section links to the articles, hidden with Resources. */}
      {TOOLS_LIVE ? <MattersAndInsights /> : null}
      {/* D75: placeholder reviews never render; see TESTIMONIALS_REAL. */}
      {TESTIMONIALS_REAL ? <Testimonials /> : null}
      <CTA />
    </>
  );
}
