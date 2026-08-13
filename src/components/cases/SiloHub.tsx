import Link from "next/link";
import { type Silo, type SiloKey, siloTrail } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import HandledBy from "@/components/attorneys/HandledBy";
import Needs from "@/components/Needs";
import {
  FederalForumMap,
  WhiteCollarDocumentMap,
} from "@/components/cases/illustrations/ForumMaps";
import CircuitMap from "@/components/cases/illustrations/CircuitMap";
import ChargeIndex from "./ChargeIndex";
import Byline from "./Byline";
import CallToAction from "@/components/CallToAction";

/**
 * The forum illustration for each silo.
 *
 * State and federal share one cartographic grammar: Florida and the United
 * States, same marks, different zoom. They answer the same question, which
 * court.
 *
 * White-collar deliberately does not. It is the one silo with no geography of
 * its own, and forcing it into the map system failed twice: overlaying the two
 * outlines read as a broken map, and marking one Florida for both the circuit
 * and the district is blocked on the M.D. Fla. county list AND illegible, since
 * Hillsborough is roughly 6px on a full-state map. Its section is not about
 * which court anyway; it is about records that exist before anyone knows there
 * is an investigation. So it gets its own drawing.
 */
const FORUM_ILLUSTRATION: Partial<
  Record<SiloKey, (props: { className?: string }) => React.ReactElement>
> = {
  state: CircuitMap,
  federal: FederalForumMap,
  "white-collar": WhiteCollarDocumentMap,
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

  return (
    <>
      <section data-bg="navy" className="bg-navy pt-36 pb-20 lg:pt-44 lg:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Breadcrumbs trail={siloTrail(silo)} />
          <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-linen sm:text-5xl lg:text-6xl">
            {silo.h1}
          </h1>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-linen/70">
            {silo.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <ChargeIndex only={silo.key} heading="Charges we defend in this area" />

      <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div
            className={
              Illustration
                ? "grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-20"
                : ""
            }
          >
            <div className={Illustration ? "" : "max-w-3xl"}>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">
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

            {/* Stacks below the copy on mobile by DOM order, no order juggling. */}
            {Illustration && (
              <div className="lg:pt-2">
                <Illustration className="mx-auto aspect-[21/20] w-full max-w-[26rem] lg:mx-0 lg:max-w-none" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/*
        Forum-level questions. These belong on the hub, not on any one charge
        page, because they are about the court rather than the offence, and
        "state or federal" is the question C10 requires on every overlap page.

        Questions come from docs/research/keywords.md with their winnability
        grade. Answers are legal content and publish only after the C12
        verification pass and an attorney read, so unanswered ones render a
        marker and the FAQPage schema omits them.
      */}
      {!!silo.faq?.length && (
        <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Common questions
            </h2>
            <dl className="mt-10 max-w-3xl space-y-8">
              {silo.faq.map((item) => (
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

      {/* Wired and currently empty. Renders once an attorney is mapped to this
          practice area (WEBSITE-PLAN.md Open Question 2). */}
      <HandledBy href={silo.href} />

      <CallToAction heading="Talk to an attorney about your case." tone="navy" />
    </>
  );
}
