import Link from "next/link";
import { SectionBody } from "@/components/cases/sections";
import Breadcrumbs from "@/components/Breadcrumbs";
import Byline from "@/components/cases/Byline";
import CallToAction from "@/components/CallToAction";
import HandledBy from "@/components/attorneys/HandledBy";
import Needs from "@/components/Needs";
import EmptyState from "@/components/EmptyState";
import {
  type InjuryPage,
  injuryHref,
  injurySpokes,
  injuryTrail,
} from "@/lib/site";

/**
 * The injury page template, pillar and spoke.
 *
 * REUSES SectionBody, the same primitive the charge and guide templates use, so
 * an injury page written later renders its statute spans as cited blockquotes
 * and its lists as real lists with no further work. That reuse is the point of
 * giving InjuryPage the same section grammar.
 *
 * AN UNWRITTEN PAGE SAYS SO. It renders the empty state rather than a thin
 * imitation of a real page, because scaffolding that looks like content is
 * worse for a reader and for E-E-A-T than an honest gap.
 */
export default function InjuryTemplate({ page }: { page: InjuryPage }) {
  const spokes = page.parent ? [] : injurySpokes(page.slug);
  const written = Boolean(page.lead || page.sections?.length);

  return (
    <>
      <section data-bg="navy" className="bg-navy pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Breadcrumbs trail={injuryTrail(page)} tone="dark" />
          <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-linen sm:text-5xl lg:text-6xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-[68ch] text-lg leading-relaxed text-linen/75">
            {page.description}
          </p>
          {page.lead && (
            <p className="mt-5 max-w-[68ch] text-lg leading-relaxed text-linen/75">
              {page.lead}
            </p>
          )}
        </div>
      </section>

      <section data-bg="white" className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {written ? (
            <div className="max-w-3xl">
              {(page.sections ?? []).map((section) => (
                <div key={section.id} className="mt-12 first:mt-0">
                  <h2 className="font-display text-2xl leading-tight text-navy sm:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4 leading-relaxed text-charcoal">
                    <SectionBody section={section} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              heading="This page is not written yet"
              body="The law it will rest on is recorded and verified, and the page will quote it rather than paraphrase. Until it is written there is nothing here worth reading, so there is nothing here."
              linkHref="/contact"
              linkLabel="Talk to an attorney instead"
            />
          )}

          {spokes.length > 0 && (
            <div className="mt-16 max-w-3xl">
              <h2 className="font-display text-2xl leading-tight text-navy">
                In this section
              </h2>
              <ul className="mt-6 divide-y divide-navy/10 border-t border-navy/10">
                {spokes.map((s) => (
                  <li key={s.slug} className="py-5">
                    {s.published ? (
                      <Link href={injuryHref(s)} className="group block">
                        <span className="font-display text-xl text-navy transition-colors group-hover:text-bronze">
                          {s.title}
                        </span>
                        <span className="mt-1 block leading-relaxed text-charcoal/80">
                          {s.description}
                        </span>
                      </Link>
                    ) : (
                      <div>
                        <span className="font-display text-xl text-navy/55">
                          {s.title}
                        </span>
                        <span className="mt-1 block leading-relaxed text-charcoal/60">
                          {s.description}
                        </span>
                        <span className="mt-2 inline-block font-heading text-xs uppercase tracking-wide text-navy/40">
                          In progress
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="max-w-3xl">
            <p className="mt-14 text-sm text-navy/60">
              <Needs>
                attorney review of this page against its cited sources
              </Needs>
            </p>
            <Byline owner={page.owner} lastReviewed={page.lastReviewed} />
          </div>
        </div>
      </section>

      <HandledBy href="/personal-injury" />

      <CallToAction
        heading="Talk to an attorney about your injury claim."
        body="Consultations are confidential. If you or someone you care about has been hurt in a collision, reach out and we will tell you what the next step looks like."
        tone="white"
      />
    </>
  );
}
