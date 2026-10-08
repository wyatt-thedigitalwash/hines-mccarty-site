import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";
import CallToAction from "@/components/CallToAction";
import HandledBy from "@/components/attorneys/HandledBy";
import InjuryIndex from "@/components/injury/InjuryIndex";
import PageHero from "@/components/PageHero";
import { INJURY_HUB_PHOTO } from "@/lib/hero-photos";
import {
  firm,
  injuryIsIndexable,
  injuryPages,
  injuryPractices,
} from "@/lib/site";

/**
 * The personal injury hub, built on the same shape as /cases-we-defend.
 *
 * WHY IT MIRRORS THAT PAGE NOW. It is the same kind of page doing the same
 * job: a practice hub that routes a reader to a specific page and carries
 * authority to everything beneath it. It had a bespoke layout listing two
 * silos as bullets, which read as a placeholder beside the criminal hub and,
 * more importantly, linked none of the seven spokes at all.
 *
 * Three sections, in the order that page uses:
 *   1. Pillar cards, matching the criminal hub's card geometry exactly.
 *   2. The full index. Every page, server-rendered, no interaction. This is
 *      the section's SEO payload, which is why it precedes the row below it.
 *   3. One row out, to a human.
 *
 * WHY IT IS STILL A SEPARATE HUB FROM /cases-we-defend. That one is criminal
 * defence and its reader is accused; this reader was injured. Same firm,
 * opposite posture, and one hub cannot address both without one of them
 * reading as an afterthought.
 *
 * WHAT IT STILL DOES NOT DO. It states no limitations period, no case value
 * and no outcome. Those belong on the pages that quote the statute, and those
 * pages carry them.
 */
export const metadata: Metadata = pageMetadata({
  title: "Personal Injury | Hines McCarty Pavlidis, Brandon FL",
  description:
    "The personal injury side of Hines McCarty Pavlidis: car and truck collision claims in Hillsborough County and across Tampa Bay.",
  path: "/personal-injury",
  // The hub follows its own spokes. Indexable once at least one page beneath
  // it is, which waits on the attorney review along with the rest.
  noindex: !injuryPages.some(injuryIsIndexable),
});

export default function PersonalInjuryHub() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Personal Injury", href: "/personal-injury" },
            ]),
          ),
        }}
      />

      <PageHero
        title="If someone else caused it, you should not be the one paying for it."
        photo={INJURY_HUB_PHOTO}
      >
        <p>
          {firm.name} handles injury claims arising from car and commercial
          vehicle collisions in Hillsborough County and across Tampa Bay. Select
          a claim type to read what the law actually says about it, in the
          statute&apos;s own words.
        </p>
      </PageHero>

      {/*
        Same card geometry as the criminal hub: min-h-[380px] lg:min-h-[440px],
        p-10 lg:p-12, heading text-3xl lg:text-4xl, body mt-6 text-lg, action
        mt-8 text-base. Matching those keeps the two hubs reading as one system
        rather than as two near-misses.
      */}
      <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <ul className="grid gap-6 md:grid-cols-2">
            {injuryPractices.map((practice) => (
              <li key={practice.key}>
                <Link
                  href={practice.href}
                  className="group flex h-full min-h-[380px] flex-col border border-navy/20 bg-white p-10 transition-colors hover:border-navy lg:min-h-[440px] lg:p-12"
                >
                  <h2 className="font-display text-3xl font-medium leading-tight transition-colors group-hover:text-bronze lg:text-4xl">
                    {practice.title}
                  </h2>
                  <p className="mt-6 flex-1 text-lg leading-relaxed text-charcoal">
                    {practice.summary}
                  </p>
                  <span className="mt-8 inline-block text-base underline decoration-1 underline-offset-4 transition-colors group-hover:text-bronze">
                    View claim types
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The full index. Every page, server-rendered, no interaction. */}
      <InjuryIndex heading="Every claim we handle" />

      {/*
        One row out, after the index on purpose: the index is this page's SEO
        payload and has to come first in the DOM. It goes to a person rather
        than to the resources hub, because the honest answer to every question
        this page declines to answer is a conversation.
      */}
      <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col gap-6 border border-navy/20 p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:p-10">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl leading-tight lg:text-3xl">
                What this side of the firm will not tell you
              </h2>
              <p className="mt-4 leading-relaxed text-charcoal">
                No page here says how long you have to file, what a claim is
                worth, or what any case will do. Florida changed both its
                limitations period and its comparative fault rule in 2023, and
                which version applies turns on when the claim arose rather than
                on when someone asks. Those are questions for a lawyer looking
                at your dates and your paperwork.
              </p>
            </div>
            <Link
              href="/contact"
              className="link-arrow shrink-0 text-base underline decoration-1 underline-offset-4 transition-colors hover:text-bronze"
            >
              Talk to an attorney
            </Link>
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
