import type { Metadata } from "next";
import { type Crumb } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import CallToAction from "@/components/CallToAction";
import EmptyState from "@/components/EmptyState";

/**
 * [PENDING: Layer 2 content] Build order per CASES-WE-DEFEND-PLAN.md Section 5
 * as amended by D32 (2026-08-20, bond estimator not built): sentencing
 * calculator, federal case timeline, seal and expunge checker, after-an-arrest
 * guide. The calculator is not linked from anywhere until it clears
 * done-criteria C1 through C8.
 */
export const metadata: Metadata = pageMetadata({
  title: "Tools and Guides | Hines McCarty Pavlidis",
  description: "Calculators, estimators, and step-by-step walkthroughs of the criminal process in Hillsborough County and the Middle District of Florida.",
  path: "/resources/tools-and-guides",
  // Nothing published yet.
  noindex: true,
});

const trail: Crumb[] = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  { name: "Tools &amp; Guides" },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(trail)),
        }}
      />

      <section data-bg="navy" className="bg-navy pt-36 pb-20 lg:pt-44 lg:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Breadcrumbs trail={trail} />
          <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-linen sm:text-5xl lg:text-6xl">
            Tools &amp; Guides
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-linen/70">
            Calculators, estimators, and walkthroughs of what actually happens at each stage of a case.
          </p>
        </div>
      </section>

      <EmptyState
        heading="Nothing is published here yet"
        body="The tools and guides are being built. The first of them explain how sentencing is calculated and what the first day after an arrest actually involves, including how release is decided."
        linkHref="/cases-we-defend"
        linkLabel="Cases we defend"
      />

      <CallToAction heading="Talk to an attorney about your case." tone="navy" />
    </>
  );
}
