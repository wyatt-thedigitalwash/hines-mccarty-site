import type { Metadata } from "next";
import Link from "next/link";
import {
  attorneys,
  attorneysLeadingPractice,
  capabilities,
  firm,
} from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import Needs from "@/components/Needs";
import Portrait from "@/components/attorneys/Portrait";
import CallToAction from "@/components/CallToAction";
import CredentialStrip from "@/components/CredentialStrip";
import PageHero from "@/components/PageHero";
import { SITE_HERO_PHOTO } from "@/lib/hero-photos";

export const metadata: Metadata = pageMetadata({
  title: "Our Attorneys in Tampa | Hines McCarty Pavlidis",
  description:
    "The attorneys of Hines McCarty Pavlidis, a Brandon firm practicing in the Hillsborough County state courts and the Middle District of Florida.",
  path: "/attorneys",
});

export default function AttorneysPage() {
  // Only attorneys whose bar admission is recorded in the data. See the note on
  // the section below for why unconfirmed ones are omitted rather than marked.
  const admitted = attorneys.filter((a) => a.credentials?.barAdmission);

  return (
    <>
      <PageHero
        title="Four attorneys, four different concentrations."
        photo={SITE_HERO_PHOTO}
      >
        <p>
          Each attorney at {firm.name} concentrates on a different part of
          criminal law, so a case goes to the person who already knows that kind
          of case. Select an attorney to read their background, courts, and
          credentials.
        </p>
      </PageHero>

      {/*
        pt ONLY. The credential strip below is a child of THIS section, not of
        the container above it, so this section's BOTTOM padding lands under the
        marks rather than above them. Left as py-20 lg:py-28 that put 72px above
        the row and 184px below it, which is the same doubled-gap defect as
        everywhere else, one level further in: measured at 1728px, 72 above and
        184 below.

        The strip owns the gap on both sides now, 72px each, and the section
        beneath already carries no top padding because it is white too.
      */}
      <section data-bg="white" className="bg-white pt-20 text-navy lg:pt-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {attorneys.map((attorney) => (
              <li key={attorney.slug}>
                <Link
                  href={`/attorneys/${attorney.slug}`}
                  className="group flex h-full flex-col border border-navy/20 p-6 transition-colors hover:border-navy"
                >
                  <Portrait
                    attorney={attorney}
                    className="aspect-4/5 w-full"
                    sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 90vw"
                  />

                  <h2 className="mt-6 font-display text-2xl leading-tight transition-colors group-hover:text-bronze lg:text-3xl">
                    {attorney.name}
                  </h2>

                  {/* No role label renders until the client confirms it. For
                      Maria Pavlidis that is gated on her relationship to the
                      firm (WEBSITE-PLAN.md Open Question 2a). */}
                  <p className="mt-2 font-heading text-sm uppercase tracking-wide text-navy/70">
                    {attorney.role ?? <Needs>role and title</Needs>}
                  </p>

                  <p className="mt-4 flex-1 text-sm leading-snug text-navy/65">
                    {attorney.concentration ?? (
                      <Needs>one-line concentration</Needs>
                    )}
                  </p>

                  <span className="mt-6 inline-block font-heading text-sm font-medium text-navy underline decoration-1 underline-offset-4 transition-colors group-hover:text-bronze">
                    Read bio
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/*
          The credential marks, under the four of them.

          FULL BLEED, so it sits outside the max-w-[1400px] wrapper above and
          runs the width of the page, the same way it does on the hero of
          /cases-we-defend and at the foot of each bio.

          NO TOP PADDING ON THE STRIP'S OWN SECTION, because there is none to
          add: the strip carries py-16 lg:py-18 of its own, and this section
          already closes with py-20 lg:py-28. Those stack, which is the gap the
          marks want here. On the home page the strip is the only thing between
          two white bands and owns the whole gap; here it is the tail of a
          section that has already ended.
        */}
        <CredentialStrip />
      </section>

      {/*
        Who handles what. Charge first, person second, because that is the
        order a visitor actually thinks in: they know the charge, not the name.

        The mapping comes from `leadsPracticeHrefs` on each attorney, the same
        typed field the "Handled by" block on the silo and charge pages reads.
        One source, so when the client answers, this section and those blocks
        light up together with no component change.

        [NEEDS: confirm which attorney leads which practice area]
        (WEBSITE-PLAN.md Open Question 2). Every entry is unassigned today, so
        every card renders a visible placeholder rather than a guess. Note this
        is deliberately a stronger claim than the "practice areas" list on a
        bio: leading an area is not the same as practising in it.
      */}
      {/* scroll-mt clears the 77px fixed header. Without it an anchor jump from
          the silo hubs lands with this heading hidden behind the nav. */}
      {/*
        NO TOP PADDING: the credential strip immediately above is a WHITE band
        and this section is white, so CLAUDE.md's rule applies and the second of
        two same-coloured neighbours drops its top padding.

        It was py-20 lg:py-28, which stacked 112px on top of the strip's own
        72px and left 184px of blank white between the marks and this heading.
        The strip now owns the gap on both of its sides, 72px each at lg, so the
        row reads as its own band rather than as something abandoned mid-page.
      */}
      <section
        id="who-handles-what"
        data-bg="white"
        className="scroll-mt-28 bg-white pb-20 text-navy lg:pb-28"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Who handles what
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal">
            A case goes to the attorney who concentrates in that area. Select an
            area to see the charges it covers.
          </p>

          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {capabilities.map((cap) => {
              // D74: the attorneys who handle this area's charge pages, from the
              // client's D65 mapping (Lily McCarty and Maria Pavlidis on every
              // state, federal and white-collar charge, David Hines on state).
              // A lead set on the area itself still takes precedence.
              const led = attorneysLeadingPractice(cap.href);
              const leads = led.length
                ? led
                : attorneys.filter((a) => a.handlesChargeHrefs?.some((h) => h.startsWith(`${cap.href}/`)));
              return (
                <li key={cap.key} className="flex">
                  <div className="flex h-full w-full flex-col border border-navy/20 bg-white p-8">
                    <h3 className="font-display text-2xl leading-tight">
                      <Link
                        href={cap.href}
                        className="transition-colors hover:text-bronze"
                      >
                        {cap.title}
                      </Link>
                    </h3>
                    <p className="mt-4 flex-1 leading-relaxed text-charcoal">
                      {cap.summary}
                    </p>
                    <p className="mt-8 border-t border-navy/15 pt-5 leading-relaxed">
                      {leads.length ? (
                        <>
                          Handled by{" "}
                          {leads.map((attorney, index) => (
                            <span key={attorney.slug}>
                              {index > 0 && ", "}
                              <Link
                                href={`/attorneys/${attorney.slug}`}
                                className="underline decoration-1 underline-offset-4 transition-colors hover:text-bronze"
                              >
                                {attorney.name}
                              </Link>
                            </span>
                          ))}
                        </>
                      ) : null}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/*
        Where the bench practices. Facts already established in the repo only.
        No volume, no quality, no outcomes (R. 4-7.13; avoid.md Section 2).

        Bar admissions are read from the attorney entries, so only confirmed
        ones appear. Unconfirmed admissions are absent rather than marked,
        because a bar admission is a credential and a placeholder in a
        credentials list reads as one.

        Bar numbers and admission dates are now known for all four and are
        recorded on their entries. The last three arrived 2026-08-27.
        [NEEDS: confirm federal court admissions, M.D. Fla. or otherwise, for
        each attorney] -- the firm-level Middle District statement below is
        established across the repo, but no individual admission is verified.
      */}
      <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Where the bench practices
          </h2>

          <dl className="mt-10 grid max-w-4xl gap-8 sm:grid-cols-2">
            <div>
              <dt className="font-heading text-sm font-semibold uppercase tracking-wide text-navy/70">
                State
              </dt>
              <dd className="mt-3 text-lg leading-relaxed text-charcoal">
                The 13th Judicial Circuit, Hillsborough County
              </dd>
            </div>
            <div>
              <dt className="font-heading text-sm font-semibold uppercase tracking-wide text-navy/70">
                Federal
              </dt>
              <dd className="mt-3 text-lg leading-relaxed text-charcoal">
                The Middle District of Florida
              </dd>
            </div>
          </dl>

          {admitted.length > 0 && (
            <div className="mt-14 max-w-4xl border-t border-navy/15 pt-10">
              <h3 className="font-display text-xl">Bar admissions</h3>
              <ul className="mt-5 space-y-3">
                {admitted.map((attorney) => (
                  <li key={attorney.slug} className="leading-relaxed">
                    <Link
                      href={`/attorneys/${attorney.slug}`}
                      className="underline decoration-1 underline-offset-4 transition-colors hover:text-bronze"
                    >
                      {attorney.name}
                    </Link>
                    {/* Number omitted when unknown, as on the bio pages. */}
                    <span className="text-charcoal">
                      , The Florida Bar
                      {attorney.credentials?.barAdmission?.number
                        ? `, No. ${attorney.credentials.barAdmission.number}`
                        : ""}
                      , admitted {attorney.credentials?.barAdmission?.admitted}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <CallToAction heading="Talk to an attorney about your case." tone="navy" />
    </>
  );
}
