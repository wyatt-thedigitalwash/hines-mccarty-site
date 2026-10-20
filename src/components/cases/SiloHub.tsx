import Link from "next/link";
import { type Silo, type SiloKey } from "@/lib/site";
import HandledBy from "@/components/attorneys/HandledBy";
import Needs from "@/components/Needs";
import CircuitMap, { DistrictMap, WhiteCollarMap } from "@/components/cases/illustrations/CircuitMap";
import HubHero from "@/components/hub/HubHero";
import HubCharges from "@/components/hub/HubCharges";
import ForumFactsSection from "@/components/hub/ForumFactsSection";
import Byline from "./Byline";
import CallToAction from "@/components/CallToAction";

/**
 * The forum illustration for each silo: one drawn map at three framings, each
 * answering which court (D96). White-collar used to get a document drawing
 * because one Florida could not show both courts legibly; drawn from Census
 * counties at a statewide zoom, Hillsborough is about 40 units across and
 * reads fine, so it now gets the both-courts map. See CircuitMap.
 */
const FORUM_ILLUSTRATION: Partial<
  Record<SiloKey, (props: { className?: string; shape?: "box" | "panel" | "bleed" }) => React.ReactElement>
> = {
  state: CircuitMap,
  federal: DistrictMap,
  "white-collar": WhiteCollarMap,
};

/**
 * One shape for all three silo hubs, per CASES-WE-DEFEND-PLAN.md Section 3.
 * The pages differ only in their data, and the section that earns each page is
 * `forumHeading` / `forumBody`.
 *
 * These hubs will not win their head terms in year one. "criminal defense
 * attorney Tampa" and "federal criminal defense attorney Tampa" are both graded
 * YEARS behind a directory wall (avoid.md items 1 and 3). They convert referral
 * traffic and pass links down, which is enough.
 */
export default function SiloHub({ silo }: { silo: Silo }) {
  const Illustration = FORUM_ILLUSTRATION[silo.key];
  const facts = silo.forumFacts;

  return (
    <>
      {/* D112: the hubs in the site's current form. */}
      <HubHero silo={silo} />

      <HubCharges silo={silo.key} />

      <section data-bg="white" className="relative overflow-hidden bg-white py-20 text-navy lg:py-28">
        {/* D97: from lg the map fills the right half of the section, edge to
            edge and top to bottom, like the home map. Absolute, so the copy
            alone sets the section's height. */}
        {Illustration && (
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
            <Illustration shape="panel" className="h-full w-full" />
          </div>
        )}
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <div>
            <div className={Illustration ? "lg:max-w-[44%]" : "max-w-3xl"}>
              <h2 className="font-display font-semibold text-4xl leading-tight sm:text-5xl">
                {silo.forumHeading}
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-charcoal">
                {silo.forumBody.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>

              {/* Reciprocal of the "Who handles what" section on /attorneys.
                  That section is charge-first; this is the way back to it. */}
              <Link
                href="/attorneys#who-handles-what"
                className="link-arrow mt-8 inline-block font-heading text-sm font-medium underline decoration-1 underline-offset-4 transition-colors hover:text-bronze"
              >
                See which attorney leads this area
              </Link>

              <Byline owner={silo.owner} lastReviewed={silo.lastReviewed} />
            </div>
          </div>
        </div>
        {/* D99: below lg the map follows the copy, edge to edge (outside the
            padded container), fading into the page above and below, the key
            under it (client direction). */}
        {Illustration && (
          <div aria-hidden="true" className="mt-12 lg:hidden">
            <Illustration shape="bleed" />
          </div>
        )}
      </section>

      {/*
        Verified court facts, rendered only where a silo has them.

        This is the section that carries the W1-01 brief on the federal hub, per
        DECISIONS.md D1. Nothing here is hardcoded per silo: a hub with no
        `forumFacts` renders none of it, and the state and white-collar hubs
        currently render none.

        No Criminal Punishment Code artifact is linked from any of this. The CPC
        does not apply to federal cases, so such a link would be wrong on the
        merits independent of the calculator ship gate. That is a standing rule
        in CASES-WE-DEFEND-PLAN.md Section 4.2.
      */}
      {facts && <ForumFactsSection facts={facts} />}

      {/*
        Forum-level questions. These belong on the hub, not on any one charge
        page, because they are about the court rather than the offence, and
        "state or federal" is the question C10 requires on every overlap page.

        Questions come from docs/research/keywords.md with their winnability
        grade. Answers are legal content and publish only after the C12
        verification pass and an attorney read, so unanswered ones render a
        marker and the FAQPage schema omits them.
      */}
      {/* D74: only answered questions are shown; an unanswered one used to
          render a [NEEDS] marker on a live page. */}
      {!!silo.faq?.some((item) => item.answer) && (
        <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <h2 className="font-display font-semibold text-4xl leading-tight sm:text-5xl">
              Common questions
            </h2>
            <dl className="mt-10 max-w-3xl space-y-8">
              {silo.faq.filter((item) => item.answer).map((item) => (
                <div
                  key={item.question}
                  className="border-t border-navy/15 pt-6"
                >
                  <dt className="font-display text-xl leading-snug">
                    {item.question}
                  </dt>
                  <dd className="mt-3 leading-relaxed text-charcoal">
                    {item.answer ?? (
                      <Needs>answer, complete in the first two sentences</Needs>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* A pointer to coverage that genuinely lives in another silo (D12).
          Renders nothing where a silo has none. */}
      {silo.crossSilo && (
        <section data-bg="white" className="bg-white pb-20 text-navy lg:pb-28">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <Link
              href={silo.crossSilo.href}
              className="group flex flex-col gap-6 border border-navy/20 p-8 transition-colors hover:border-navy lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:p-10"
            >
              <span className="max-w-2xl">
                <span className="block font-display text-2xl leading-tight transition-colors group-hover:text-bronze lg:text-3xl">
                  {silo.crossSilo.label}
                </span>
                <span className="mt-4 block leading-relaxed text-charcoal">{silo.crossSilo.note}</span>
              </span>
              <span className="inline-flex shrink-0 items-center gap-2 font-heading text-sm font-medium transition-colors group-hover:text-bronze">
                View those charges
                <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* Wired and currently empty. Renders once an attorney is mapped to this
          practice area (WEBSITE-PLAN.md Open Question 2). */}
      <HandledBy href={silo.href} />

      <CallToAction heading="Talk to an attorney about your case." tone="navy" />
    </>
  );
}
