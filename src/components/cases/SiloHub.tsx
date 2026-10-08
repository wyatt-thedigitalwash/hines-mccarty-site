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
  const facts = silo.forumFacts;

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
      {facts && (
        <section data-bg="linen" className="bg-linen py-20 text-navy lg:py-28">
          <div className="mx-auto max-w-[1400px] space-y-20 px-6 lg:space-y-24 lg:px-10">
            {facts.divisions && (
              <div>
                <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                  {facts.divisions.heading}
                </h2>
                {facts.divisions.intro && (
                  <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal">
                    {facts.divisions.intro}
                  </p>
                )}
                {/* No min-width here, unlike the charge-page penalties table.
                    That one has four short columns and needs the floor. This
                    one has two, and the second is a wrapping county list that
                    IS the content. Forcing a min-width would push the counties
                    off-screen at 390px and make the substance of the table
                    reachable only by horizontal scroll. */}
                <div className="mt-10 overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-navy/20">
                        <th className="py-3 pr-6 font-heading text-sm font-semibold uppercase tracking-wide text-navy/70">
                          Division
                        </th>
                        <th className="py-3 font-heading text-sm font-semibold uppercase tracking-wide text-navy/70">
                          Counties
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {facts.divisions.rows.map((row) => (
                        <tr
                          key={row.name}
                          className="border-b border-navy/10 align-top"
                        >
                          <td className="py-4 pr-6 font-medium">
                            <span className="whitespace-nowrap">{row.name}</span>
                            {row.isLocal && (
                              <span className="mt-1 block font-heading text-xs uppercase leading-snug tracking-wide text-navy/70">
                                Hillsborough
                              </span>
                            )}
                          </td>
                          <td className="py-4 leading-relaxed text-charcoal">
                            {row.counties}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {facts.courthouse && (
              <div>
                <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                  {facts.courthouse.heading}
                </h2>
                {facts.courthouse.body?.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal"
                  >
                    {paragraph}
                  </p>
                ))}
                <div className="mt-10 max-w-3xl border-t-2 border-navy pt-6">
                  <p className="font-display text-2xl leading-snug">
                    {facts.courthouse.name}
                  </p>
                  <p className="mt-2 leading-relaxed text-charcoal">
                    {facts.courthouse.address}
                  </p>
                  {!!facts.courthouse.rows?.length && (
                    <dl className="mt-8 space-y-4">
                      {facts.courthouse.rows.map((row) => (
                        <div
                          key={row.label}
                          className="border-t border-navy/12 pt-4 sm:flex sm:gap-8"
                        >
                          <dt className="font-heading text-sm uppercase tracking-wide text-navy/70 sm:w-56 sm:shrink-0">
                            {row.label}
                          </dt>
                          <dd className="mt-1 leading-relaxed text-charcoal sm:mt-0">
                            {row.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </div>
            )}

            {facts.offices && (
              <div>
                <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                  {facts.offices.heading}
                </h2>
                {facts.offices.intro && (
                  <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal">
                    {facts.offices.intro}
                  </p>
                )}
                <ul className="mt-10 grid gap-6 sm:grid-cols-2">
                  {facts.offices.items.map((item) => (
                    <li
                      key={item.name}
                      className="border border-navy/20 bg-white p-8"
                    >
                      <p className="font-heading text-sm uppercase tracking-wide text-navy/70">
                        {item.role}
                      </p>
                      <p className="mt-3 font-display text-xl leading-snug">
                        {item.name}
                      </p>
                      {item.note && (
                        <p className="mt-4 leading-relaxed text-charcoal">
                          {item.note}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {facts.practice && (
              <div className="max-w-3xl">
                <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                  {facts.practice.heading}
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-charcoal">
                  {facts.practice.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

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
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
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
            <div className="flex flex-col gap-6 border border-navy/20 p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:p-10">
              <div className="max-w-2xl">
                <h2 className="font-display text-2xl leading-tight lg:text-3xl">
                  {silo.crossSilo.label}
                </h2>
                <p className="mt-4 leading-relaxed text-charcoal">
                  {silo.crossSilo.note}
                </p>
              </div>
              <Link
                href={silo.crossSilo.href}
                className="link-arrow shrink-0 text-base underline decoration-1 underline-offset-4 transition-colors hover:text-bronze"
              >
                View those charges
              </Link>
            </div>
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
