import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, faqJsonLd, injuryJsonLd } from "@/lib/schema";
import InjuryTemplate from "@/components/injury/InjuryTemplate";
import {
  injuryBySlug,
  injuryHref,
  injuryPages,
  injuryTrail,
} from "@/lib/site";

/**
 * One catch-all route for both depths of the injury silo.
 *
 * A pillar sits at /personal-injury/{slug} and a spoke at
 * /personal-injury/{pillar}/{slug}. Two static routes would work today and
 * would drift, which is the reasoning the guide route already records.
 *
 * Every page here is unpublished and unwritten. They build so the structure is
 * real and reviewable and so `check:routes` can see them, and they carry
 * noindex until they have a body, on the same rule the unwritten charge pages
 * follow.
 */
type Params = { params: Promise<{ injury: string[] }> };

export function generateStaticParams() {
  return injuryPages.map((p) => ({
    injury: p.parent ? [p.parent, p.slug] : [p.slug],
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { injury } = await params;
  const page = injuryBySlug(injury);
  if (!page) return {};
  return pageMetadata({
    title: page.metaTitle ?? `${page.title} | Hines & McCarty`,
    description: page.metaDescription ?? page.description,
    path: injuryHref(page),
    /*
      THREE CONDITIONS, AND THE THIRD IS THE ONE THAT MATTERS HERE. Unwritten
      pages stay out of the index because scaffolding costs E-E-A-T rather than
      building it. Unreviewed pages stay out too, and that is stricter than the
      guides, deliberately: an injury page carries limitations periods and
      coverage deadlines, and a reader who acts on a wrong one loses a claim
      that cannot be reopened. `owner` is set when an attorney has read the page
      against its sources, so indexing waits for that signature.
    */
    noindex: !page.published || !page.sections?.length || !page.owner,
  });
}

export default async function InjuryRoute({ params }: Params) {
  const { injury } = await params;
  const page = injuryBySlug(injury);
  if (!page) notFound();

  const faq = faqJsonLd(page.faq);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd(injuryTrail(page)),
            injuryJsonLd(page),
            ...(faq ? [faq] : []),
          ]),
        }}
      />
      <InjuryTemplate page={page} />
    </>
  );
}
