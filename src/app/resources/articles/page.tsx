import type { Metadata } from "next";
import { type Crumb } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
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

const trail: Crumb[] = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
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

      <section data-bg="navy" className="bg-navy pt-36 pb-20 lg:pt-44 lg:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Breadcrumbs trail={trail} />
          <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-linen sm:text-5xl lg:text-6xl">
            Articles
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-linen/70">
            Explainers on charges, courts, and sentencing, written for people who are not lawyers.
          </p>
        </div>
      </section>

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
