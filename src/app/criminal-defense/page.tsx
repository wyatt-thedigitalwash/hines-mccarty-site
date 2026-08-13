import type { Metadata } from "next";
import { siloByKey, siloTrail } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import SiloHub from "@/components/cases/SiloHub";

const silo = siloByKey("state")!;

export const metadata: Metadata = pageMetadata({
  title: silo.metaTitle,
  description: silo.metaDescription,
  path: silo.href,
  // Draft copy pending the C12 verification pass and an attorney read.
  noindex: !silo.published,
});

export default function SiloPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [breadcrumbJsonLd(siloTrail(silo)), faqJsonLd(silo.faq)].filter(
              Boolean,
            ),
          ),
        }}
      />
      <SiloHub silo={silo} />
    </>
  );
}
