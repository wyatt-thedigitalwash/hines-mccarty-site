import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  chargeBySlug,
  chargeTrail,
  chargesInSilo,
  siloByKey,
} from "@/lib/site";
import { breadcrumbJsonLd, chargeJsonLd, faqJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import ChargeTemplate from "@/components/cases/ChargeTemplate";

const SILO = "white-collar" as const;
const silo = siloByKey(SILO)!;

type Params = { params: Promise<{ charge: string }> };

export function generateStaticParams() {
  return chargesInSilo(SILO).map((c) => ({ charge: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { charge: slug } = await params;
  const charge = chargeBySlug(SILO, slug);
  if (!charge) return {};

  return pageMetadata({
    title: charge.metaTitle ?? `${charge.label} Charges | Hines McCarty Pavlidis`,
    description:
      charge.metaDescription ??
      `${charge.label} defense at Hines McCarty Pavlidis, ${silo.label.toLowerCase()} in Tampa Bay.`,
    path: `${silo.href}/${charge.slug}`,
    // Unwritten pages stay out of the index. A page of [NEEDS] markers costs
    // E-E-A-T rather than building it.
    noindex: !charge.published,
  });
}

export default async function ChargeRoute({ params }: Params) {
  const { charge: slug } = await params;
  const charge = chargeBySlug(SILO, slug);
  if (!charge) notFound();

  const faq = faqJsonLd(charge.faq);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd(chargeTrail(charge)),
            chargeJsonLd(charge),
            ...(faq ? [faq] : []),
          ]),
        }}
      />
      <ChargeTemplate charge={charge} />
    </>
  );
}
