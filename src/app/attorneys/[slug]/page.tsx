import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { attorneyBySlug, attorneyTrail, attorneys } from "@/lib/site";
import { attorneyJsonLd, breadcrumbJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import {
  BioHeader,
  BioOverview,
  BioPracticeAreas,
  BioCredentials,
  BioClose,
} from "@/components/attorneys/BioSections";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return attorneys.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const attorney = attorneyBySlug(slug);
  if (!attorney) return {};

  return pageMetadata({
    title: `${attorney.name}, Criminal Defense Attorney | Hines & McCarty`,
    description: attorney.concentration
      ? `${attorney.name} is a criminal defense attorney at Hines & McCarty. ${attorney.concentration}.`
      : `${attorney.name} is an attorney at Hines & McCarty, a criminal defense firm in Brandon, Florida.`,
    path: `/attorneys/${attorney.slug}`,
    // A half-written bio costs more E-E-A-T than it earns, so placeholder pages
    // stay out of the index until the client fills them in. They stay
    // crawlable (follow) so the internal links still pass.
    noindex: !attorney.confirmed,
  });
}

export default async function AttorneyPage({ params }: Params) {
  const { slug } = await params;
  const attorney = attorneyBySlug(slug);
  if (!attorney) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd(attorneyTrail(attorney)),
            attorneyJsonLd(attorney),
          ]),
        }}
      />

      <BioHeader attorney={attorney} />
      <BioOverview attorney={attorney} />
      <BioPracticeAreas attorney={attorney} />
      <BioCredentials attorney={attorney} />
      <BioClose />
    </>
  );
}
