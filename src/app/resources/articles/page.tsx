import type { Metadata } from "next";
import { type Crumb } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";
import PageHero from "@/components/PageHero";
import { RESOURCES_PHOTO } from "@/lib/hero-photos";
import CallToAction from "@/components/CallToAction";
import EmptyState from "@/components/EmptyState";

/**
 * [PENDING: Layer 2 content] Layer 3 in WEBSITE-PLAN.md Section 2. Nothing publishes here until the money pages exist for it to link up to.
 */
export const metadata: Metadata = pageMetadata({
  title: "Articles | Hines McCarty Pavlidis",
  description: "Explainers on charges, courts, and sentencing in Hillsborough County and the Middle District of Florida.",
  path: "/resources/articles",
  // Nothing published yet.
  noindex: true,
});

// D74: /resources is not found while tools are hidden, so the trail skips it.
const trail: Crumb[] = [
  { name: "Home", href: "/" },
  { name: "Articles" },
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

      {/* D76: the Results page's hero, with the photo the Resources hub used
          (client direction). */}
      <PageHero title="Articles" photo={RESOURCES_PHOTO}>
        <p>
          Explainers on charges, courts, and sentencing, written for people who are not lawyers.
        </p>
      </PageHero>

      <EmptyState
        heading="No articles are published yet"
        body="Articles are the last layer to go up, because each one is written to link back to a charge page that explains the offence in full. Those come first."
        linkHref="/cases-we-defend"
        linkLabel="Cases we defend"
      />

      <CallToAction heading="Talk to an attorney about your case." tone="navy" />
    </>
  );
}
