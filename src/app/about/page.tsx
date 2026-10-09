import type { Metadata } from "next";
import Link from "next/link";
import {
  attorneys,
  caseProcess,
  coreStatement,
  coreValues,
  firm,
  offices,
  primaryOffice,
  siteUrl,
} from "@/lib/site";
import { organizationJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import PageHero from "@/components/PageHero";
import { ABOUT_PHOTO } from "@/lib/hero-photos";
import CredentialStrip from "@/components/CredentialStrip";
import Portrait from "@/components/attorneys/Portrait";
import Needs from "@/components/Needs";
import Byline from "@/components/cases/Byline";

/**
 * /about, the firm page. Built to docs/build/ABOUT-PAGE-PLAN.md Section 4.
 *
 * WHY IT EXISTS. "About the Firm" sits in `primaryNav`, so this route was
 * linked from 51 rendered pages while returning a 404. Nothing caught it until
 * the route-resolution gate went in (HUNT-LIST Instance 14): every gate checked
 * properties of the link, none asked whether the destination existed.
 *
 * WHAT THE 2026-08-27 PASS CHANGED, and why each was wrong rather than merely
 * old:
 *
 *   1. THE PAGE SAID THE FIRM WAS CRIMINAL-ONLY. Hero, thesis, metadata and
 *      JSON-LD all described "a Brandon criminal defense firm" whose attorneys
 *      "each concentrate on a different part of criminal law". That stopped
 *      being true when the firm added personal injury, and this was the last
 *      page still saying it. Not a tone problem: the firm page is where a
 *      referring lawyer looks to see what the firm takes.
 *
 *   2. THE BENCH WAS FOUR NAMES AND A [NEEDS]. The cards carried
 *      "[NEEDS: the area this attorney leads]" and nothing else, from when no
 *      concentration was known. All four have had a role and a concentration
 *      for a while, and /attorneys and the home page were both showing them.
 *      This page was the one place still claiming not to know.
 *
 *   3. CREDENTIALS SHIPPED NOTHING. The section held a [NEEDS] covering both
 *      "board certification status" AND "permission to use each mark". The
 *      first half is answered: two board certifications are recorded, and the
 *      eight marks have been rendering site-wide since 2026-08-26. Written
 *      permission to display them was confirmed by the client on 2026-10-08
 *      (D76).
 *
 *   4. noindex WAS ON, for the stated reason that the page was scaffolding.
 *      After 2 and 3 it is not, so it comes off and the page enters the
 *      sitemap. What remains is two narrow [NEEDS] and the deliberately
 *      unbuilt Tampa office block, which is a smaller footprint than several
 *      pages already indexed.
 *
 * STILL BLOCKED, deliberately: the firm-wide trial count (plan Section 5, Open
 * Question 2b). Permission for the credential marks is confirmed (D76). Each renders a visible [NEEDS] rather than being quietly omitted, so the
 * gap is legible on the page instead of being rediscovered later.
 *
 * COMPLIANCE RAILS, plan Section 5. About pages are where firms write what they
 * would never write on a practice page. Nothing here characterizes quality: no
 * best, expert, specialist, or leading; no case results, verdicts, or
 * settlement figures; no outcome language in the process section; no office
 * implied beyond Brandon (Rule 4-7.12); no imported directory superlatives.
 * Board certifications name the certifying organisation and the area, which is
 * what Rule 4-7.14(a)(4) requires and the reason they may be stated at all.
 */
export const metadata: Metadata = pageMetadata({
  title: "Our Firm | Hines McCarty Pavlidis, Brandon FL",
  description:
    "A Brandon firm of four attorneys handling criminal defense and personal injury in Hillsborough County and the Middle District of Florida.",
  path: "/about",
});

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteUrl}/about#page`,
  url: `${siteUrl}/about`,
  name: "Our Firm",
  description:
    "A Brandon firm of four attorneys, each concentrating in a different area, handling criminal defense and personal injury.",
  // The plan asks for AboutPage wrapping LegalService, which this does. It
  // asks for `employee` links to the four bios as well, and those are NOT
  // emitted: Maria Pavlidis operates a separate firm and her relationship to
  // Hines McCarty Pavlidis is unconfirmed (WEBSITE-PLAN Open Question 2a). An
  // employee assertion is a factual claim about a person, and this project
  // does not make one from an unanswered question.
  mainEntity: organizationJsonLd(),
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* 1. Statement hero */}
      <PageHero
        title="A Brandon firm built for the cases other firms refer out."
        photo={ABOUT_PHOTO}
      >
        <p>
          {firm.name}{" "}is four attorneys who each concentrate on a different area,
          practicing in the state courts of Hillsborough County and in the Middle
          District of Florida. The firm defends people accused of crimes and
          represents people injured by someone else, and it was built so that a
          serious case goes to someone who has handled that exact kind of case
          before.
        </p>
      </PageHero>

      {/* 2. The thesis */}
      <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Four attorneys, four different concentrations.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-charcoal">
              <p>
                Most firms in this market are one lawyer and a staff. That works
                until a case turns into something the lawyer has not handled
                before, and then the client either gets referred out or does not.
              </p>
              <p>
                {firm.name}{" "}is structured the other way around. Each attorney
                concentrates in a different area, so when a case comes in it goes
                to the person who already knows that kind of case rather than to
                whoever has room. Cases get worked in front of the other three,
                which means a client gets one attorney&apos;s attention and four
                attorneys&apos; judgment.
              </p>
              <p>
                That structure is why so much of the firm&apos;s work arrives by
                referral, both from former clients and from other lawyers who
                send the matters they do not take themselves.
              </p>
            </div>

            {/*
              The two practices, named and linked. A referring lawyer reading
              this page needs to know what the firm takes before anything else
              on it matters, and until today this page did not mention personal
              injury at all.
            */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/criminal-defense"
                className="inline-flex items-center border border-navy px-7 py-4 font-display text-lg transition-colors hover:border-bronze hover:text-bronze"
              >
                Criminal defense
              </Link>
              <Link
                href="/personal-injury"
                className="inline-flex items-center border border-navy px-7 py-4 font-display text-lg transition-colors hover:border-bronze hover:text-bronze"
              >
                Personal injury
              </Link>
            </div>

            {/* D74: an internal note, shown in development only. */}
            {process.env.NODE_ENV !== "production" ? (
            <p className="mt-10 text-sm leading-relaxed text-navy/60">
              <Needs>
                firm-wide trial count, substantiated and correctly attributed
              </Needs>{" "}
              Plan Section 5 and Open Question 2b. This is the strongest lawful
              statement available to the page and it stays off until it is
              verifiable, because verifiability is exactly what makes it lawful.
            </p>
            ) : null}
          </div>
        </div>
      </section>

      {/* 3. How a case is handled */}
      <section data-bg="linen" className="bg-linen py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              How a case is handled here.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              The order of operations does not change based on the matter. What
              changes is how long each stage takes.
            </p>
          </div>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {caseProcess.map((step) => (
              <li key={step.number}>
                <span className="font-heading text-sm font-semibold tracking-wide text-navy/70">
                  {step.number}
                </span>
                <h3 className="mt-3 font-display text-2xl leading-snug">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-charcoal">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/*
        4. The bench.

        THESE ARE THE CARDS FROM /attorneys AND THE HOME PAGE, in the navy
        palette: same 4:5 portrait, same name, role and concentration, same
        two-up on a phone and four-up from lg. A third card design for the same
        four people is how a site starts looking assembled rather than designed.

        The board certification line is the one thing these carry that the other
        two do not, because this is the page where a referring lawyer is reading
        for exactly that. It renders only where one is held. There is no [NEEDS]
        branch for it: most lawyers are not board certified, and marking its
        absence would imply the credential is missing rather than not
        applicable.
      */}
      <section data-bg="navy" className="bg-navy py-20 text-linen lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              The bench.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-linen/70">
              Four attorneys. Each bio states what that attorney handles, the
              courts they appear in, and their Florida Bar admission.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {attorneys.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/attorneys/${a.slug}`}
                  className="group flex h-full flex-col border border-white/15 p-4 transition-colors hover:border-white/40 sm:p-6"
                >
                  <Portrait
                    attorney={a}
                    className="aspect-4/5 w-full"
                    sizes="(min-width: 1024px) 20rem, 45vw"
                  />

                  <h3 className="mt-4 font-display text-xl leading-tight transition-colors group-hover:text-bronze sm:mt-6 sm:text-2xl lg:text-3xl">
                    {a.name}
                  </h3>

                  <p className="mt-2 font-heading text-xs uppercase tracking-wide text-linen/50 sm:text-sm">
                    {a.role ?? <Needs>role and title</Needs>}
                  </p>

                  <p className="mt-3 flex-1 text-sm leading-snug text-linen/70 sm:mt-4">
                    {a.concentration ?? <Needs>one-line concentration</Needs>}
                  </p>

                  {a.credentials?.boardCertifications?.length ? (
                    <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-snug text-linen/55">
                      {a.credentials.boardCertifications.map((cert) => (
                        <span key={cert.area} className="block">
                          Board certified by The Florida Bar in {cert.area}
                          {cert.since ? ` since ${cert.since}` : ""}
                        </span>
                      ))}
                    </p>
                  ) : null}

                  <span className="mt-4 inline-block font-heading text-sm font-medium underline decoration-1 underline-offset-4 transition-colors group-hover:text-bronze sm:mt-6">
                    Read bio
                  </span>
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* 5. Where the firm practices */}
      <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              The courts we appear in.
            </h2>
            <div className="mt-8 space-y-8 text-lg leading-relaxed text-charcoal">
              <div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy/60">
                  State
                </h3>
                <p className="mt-3">
                  The 13th Judicial Circuit in Hillsborough County, with matters
                  throughout Tampa Bay including Pinellas, Polk, Manatee,
                  Hernando, Sarasota, and Pasco.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy/60">
                  Federal
                </h3>
                <p className="mt-3">
                  The Middle District of Florida, including the Tampa, Orlando,
                  and Fort Myers divisions.
                </p>
              </div>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-navy/60">
              These are courts the firm appears in, not places it keeps an
              office. The office is in {primaryOffice.city}.
            </p>
          </div>
        </div>
      </section>

      {/* 6. What you can expect */}
      <section data-bg="linen" className="bg-linen py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                What you can expect.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal">
                {coreStatement}
              </p>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
              {coreValues.map((value) => (
                <div key={value.title}>
                  <dt className="font-display text-2xl leading-tight">
                    {value.title}
                  </dt>
                  <dd className="mt-2 leading-relaxed text-charcoal">
                    {value.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/*
        7. Credentials and memberships.

        This section used to ship nothing behind a [NEEDS] covering two separate
        questions at once: board certification status, and permission to use the
        marks. Bundling them meant answering one changed nothing. They are now
        separate, and the first is answered.
      */}
      <section data-bg="white" className="bg-white pt-20 text-navy lg:pt-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Credentials and memberships.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              The organisations below certify or admit the attorneys of this
              firm. Board certification is stated with the certifying
              organisation and the area of law, which is the only form in which
              it may be stated.
            </p>
          </div>
        </div>

        {/* Full bleed, and it supplies the section's bottom padding: the strip
            carries py-16 lg:py-18 of its own, which is why the section above is
            pt-only rather than py. */}
        <CredentialStrip />
      </section>

      {/* 8. Close. Rule 4-7.12: firm name and a bona fide office location. */}
      <section data-bg="navy" className="bg-navy py-20 text-linen lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                Talk to the firm.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-linen/70">
                If you or someone you care about has been arrested, contacted by
                investigators, or hurt in a collision, a conversation with an
                attorney is protected in a way that a web form is not. Call, or
                send a message and we will arrange a time.
              </p>
              {/* D93: stacked and full width on a phone. */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={firm.phoneHref}
                  className="inline-flex w-full items-center justify-center bg-bronze px-7 py-4 font-display text-lg font-bold text-navy transition-colors hover:bg-bronze-soft sm:w-auto"
                >
                  Call {firm.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center border border-linen/30 px-7 py-4 font-display text-lg font-bold text-linen transition-colors hover:border-linen sm:w-auto"
                >
                  Send a message
                </Link>
              </div>
            </div>

            {/* NAP block. Brandon is the bona fide office and renders in full.
                Tampa renders its pending fields as [NEEDS] rather than an
                address, because a second address block would imply an office
                the firm does not yet have, which is the Rule 4-7.12 line. */}
            <div className="space-y-10">
              {/* D74: only offices that are open render. An unopened office card
                  with "not open yet" still reads as an office claim. */}
              {offices.filter((office) => office.published).map((office) => (
                <div
                  key={office.key}
                  className="border-t border-white/15 pt-8 first:border-t-0 first:pt-0"
                >
                  <h3 className="font-display text-2xl leading-tight">
                    {office.label}
                    {!office.published && (
                      <span className="ml-3 align-middle font-heading text-xs uppercase tracking-wide text-linen/45">
                        not open yet
                      </span>
                    )}
                  </h3>
                  {office.published ? (
                    <>
                      <address className="mt-4 not-italic leading-relaxed text-linen/70">
                        <span className="block font-medium text-linen">
                          {firm.legalName}
                        </span>
                        {office.street && <span className="block">{office.street}</span>}
                        {office.suite && <span className="block">{office.suite}</span>}
                        <span className="block">
                          {office.city}, {office.state} {office.zip}
                        </span>
                      </address>
                      {office.phone && office.phoneHref && (
                        <a
                          href={office.phoneHref}
                          className="mt-4 inline-block font-display text-2xl font-extrabold transition-colors hover:text-bronze"
                        >
                          {office.phone}
                        </a>
                      )}
                      {office.hours && (
                        <p className="mt-3 text-sm text-linen/55">{office.hours}</p>
                      )}
                    </>
                  ) : (
                    <div className="mt-4 space-y-2">
                      <Needs>{`${office.label} office address`}</Needs>
                      <br />
                      <Needs>{`${office.label} office hours`}</Needs>
                      <br />
                      <Needs>{`whether ${office.label} has a separate phone number`}</Needs>
                      <p className="mt-3 text-sm leading-relaxed text-linen/55">
                        Nothing on this site states or implies an office here
                        until the address is confirmed.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl">
            <Byline tone="dark" />
          </div>
        </div>
      </section>
    </>
  );
}
