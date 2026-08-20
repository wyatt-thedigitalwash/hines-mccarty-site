import Link from "next/link";
import { type GuidePage, guideTrail } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import Needs from "@/components/Needs";
import Byline from "@/components/cases/Byline";
import CallToAction from "@/components/CallToAction";
import { SectionBody } from "@/components/cases/sections";

/**
 * The Layer 2 guide template. GUIDES-CONCEPT.md D.3, Phase 0.
 *
 * NOT ChargeTemplate, and deliberately so: feeding a guide through that
 * template means constructing a fake ChargePage, which pulls the guide into
 * `charges` and therefore into the silo machinery, the charge index, and the
 * practice grid. The section renderer is shared instead, from
 * components/cases/sections.tsx, so D24's totality guarantee (kind decides
 * order and emphasis, never what survives) holds here for free.
 *
 * Compliance rails carried by this template (plan Section 5, GUIDES-CONCEPT
 * D.5): process and rights only, no outcome language, no "confidential", no
 * implied Bar approval; the no-relationship notice sits adjacent to the
 * content rather than footer-only; owner and lastReviewed render through the
 * same Byline as the charge pages (C11).
 */
export default function GuideTemplate({ guide }: { guide: GuidePage }) {
  return (
    <>
      <section data-bg="navy" className="bg-navy pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Breadcrumbs trail={guideTrail(guide)} />
          <h1 className="mt-10 max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-linen sm:text-5xl lg:text-6xl">
            {guide.title}
          </h1>
          {guide.lead ? (
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-linen/70">
              {guide.lead}
            </p>
          ) : (
            <div className="mt-8">
              <Needs>the guide&apos;s opening: what it covers and for whom</Needs>
            </div>
          )}
        </div>
      </section>

      <section data-bg="white" className="bg-white py-16 text-navy lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl space-y-16">
            {guide.sections?.length ? (
              guide.sections.map((section) => (
                <div key={section.id}>
                  <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                    {section.heading}
                  </h2>
                  <div className="mt-6 text-lg leading-relaxed text-charcoal">
                    <SectionBody section={section} />
                  </div>
                </div>
              ))
            ) : (
              <Needs>
                the guide body. Fact layer first (GUIDES-CONCEPT Phases 1 and
                4), then copy against the Section A.5 boundaries
              </Needs>
            )}

            {/* Related pages render whenever the data carries them: guideCopy
                extracts these labels, so a link in data that never rendered
                would be the D24 hole in reverse. */}
            {guide.relatedLinks?.length ? (
              <div className="border-t border-navy/15 pt-8">
                <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy/60">
                  Read next
                </h2>
                <ul className="mt-4 space-y-2">
                  {guide.relatedLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="link-arrow font-heading text-sm font-medium underline decoration-1 underline-offset-4 transition-colors hover:text-bronze"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Rule 4-1.18 / Op. 24-1: adjacent to the content, not footer-only. */}
            <p className="border-t border-navy/15 pt-8 text-sm leading-relaxed text-navy/70">
              This guide explains process and rights in general terms. It is not
              legal advice, it is not about your case, and reading it does not
              create an attorney-client relationship with Hines &amp; McCarty.
              Every case is different. Speak to a Florida lawyer about yours.
            </p>

            <Byline owner={guide.owner} lastReviewed={guide.lastReviewed} />
          </div>
        </div>
      </section>

      <CallToAction heading="Talk to an attorney about your case." tone="white" />
    </>
  );
}
