import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guideBySlug, guideTrail, guides } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import GuideTemplate from "@/components/guides/GuideTemplate";

/**
 * The guide routes. GUIDES-CONCEPT.md D.4, built in Phase 0 (D29).
 *
 * One dynamic route with generateStaticParams from `guides`, matching the
 * charge routes' shape: two static routes would work today and would drift.
 * Schema is breadcrumb plus FAQ-if-answered only. No HowTo, deliberately: a
 * HowTo for legal steps is a machine-readable claim that following the steps
 * produces the outcome, on a page that must not predict outcomes under
 * Rule 4-7.13(b)(1).
 */
type Params = { params: Promise<{ guide: string }> };

export function generateStaticParams() {
  return guides.map((g) => ({ guide: g.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { guide: slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) return {};

  return pageMetadata({
    title: guide.metaTitle ?? `${guide.title} | Hines & McCarty`,
    description: guide.metaDescription ?? guide.description,
    path: `/resources/guides/${guide.slug}`,
    // Unwritten guides stay out of the index, same rule as the charge pages.
    noindex: !guide.published,
  });
}

export default async function GuideRoute({ params }: Params) {
  const { guide: slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) notFound();

  const faq = faqJsonLd(guide.faq);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd(guideTrail(guide)),
            ...(faq ? [faq] : []),
          ]),
        }}
      />
      <GuideTemplate guide={guide} />
    </>
  );
}
