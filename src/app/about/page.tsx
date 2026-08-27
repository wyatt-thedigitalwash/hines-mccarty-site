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
import { SITE_HERO_PHOTO } from "@/lib/hero-photos";
import Needs from "@/components/Needs";
import Byline from "@/components/cases/Byline";

/**
 * /about, the firm page. Built to docs/build/ABOUT-PAGE-PLAN.md Section 4.
 *
 * WHY IT EXISTS NOW. "About the Firm" sits in `primaryNav`, so this route was
 * linked from 51 rendered pages while returning a 404. Nothing caught it until
 * the route-resolution gate went in (HUNT-LIST Instance 14): every gate checked
 * properties of the link, none asked whether the destination existed.
 *
 * SHIPS: sections 1, 2, 3, 5, 6 and 8 of the plan, which its Section 7 marks
 * buildable now and none of which is client-dependent.
 *
 * DELIBERATELY NOT SHIPPED, all four blocked on the client (plan Section 7):
 * the attorney strip with who-leads-what, the Pavlidis card, the trial-count
 * line, and the credential strip. Each renders a visible [NEEDS] rather than
 * being quietly omitted, so the gap is legible on the page instead of being
 * rediscovered later. `published` has no meaning for an app route, so the
 * equivalent is noindex until the blocked sections land.
 *
 * COMPLIANCE RAILS, plan Section 5. About pages are where firms write what they
 * would never write on a practice page. Nothing here characterizes quality: no
 * best, expert, specialist, or leading; no case results, verdicts, or
 * settlement figures; no outcome language in the process section; no office
 * implied beyond Brandon (Rule 4-7.12); no imported directory superlatives.
 */
export const metadata: Metadata = pageMetadata({
  title: "Our Firm | Hines & McCarty, Criminal Defense in Brandon FL",
  description:
    "A Brandon criminal defense firm of four attorneys, each concentrating in a different area, practicing in Hillsborough County and the Middle District of Florida.",
  path: "/about",
  // Blocked sections still render [NEEDS] markers. A page of scaffolding costs
  // E-E-A-T rather than building it, which is the same rule the unwritten
  // charge pages follow.
  noindex: true,
});

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteUrl}/about#page`,
  url: `${siteUrl}/about`,
  name: "Our Firm",
  description:
    "A Brandon criminal defense firm of four attorneys, each concentrating in a different area.",
  // The plan asks for AboutPage wrapping LegalService, which this does. It
  // asks for `employee` links to the four bios as well, and those are NOT
  // emitted: Maria Pavlidis operates a separate firm and her relationship to
  // Hines & McCarty is unconfirmed (WEBSITE-PLAN Open Question 2a). An
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
        title="A Brandon criminal defense firm built for the charges other firms refer out."
        photo={SITE_HERO_PHOTO}
      >
        <p>
          {firm.name} is four attorneys who each concentrate on a different part
          of criminal law, practicing in the state courts of Hillsborough County
          and in the Middle District of Florida. The firm was built so that a
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
                Most criminal defense firms in this market are one lawyer and a
                staff. That works until a case turns into something the lawyer
                has not handled before, and then the client either gets referred
                out or does not.
              </p>
              <p>
                {firm.name} is structured the other way around. Each attorney
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
            <p className="mt-8 text-sm leading-relaxed text-navy/60">
              <Needs>
                firm-wide trial count, substantiated and correctly attributed
              </Needs>{" "}
              Plan Section 5 and Open Question 2b. This is the strongest lawful
              statement available to the page and it stays off until it is
              verifiable, because verifiability is exactly what makes it lawful.
            </p>
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
              The order of operations does not change based on the charge. What
              changes is how long each stage takes.
            </p>
          </div>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {caseProcess.map((step) => (
              <li key={step.number}>
                <span className="font-heading text-sm font-semibold tracking-wide text-bronze">
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

      {/* 4. The bench. Blocked: plan Section 7. */}
      <section data-bg="navy" className="bg-navy py-20 text-linen lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              The bench.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-linen/70">
              Four attorneys. Each bio states what that attorney handles and the
              courts they appear in.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {attorneys.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/attorneys/${a.slug}`}
                  className="group block border border-white/15 p-6 transition-colors hover:border-white/40"
                >
                  <span className="block font-display text-2xl leading-tight transition-colors group-hover:text-bronze">
                    {a.name}
                  </span>
                  <span className="mt-3 block text-sm leading-relaxed text-linen/60">
                    <Needs>the area this attorney leads</Needs>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-linen/55">
            The cards are name and link only, deliberately. Which attorney leads
            which area is Open Question 2 and is the largest content dependency
            on this page. Maria Pavlidis operates a separate firm, so her label
            here is blocked on Open Question 2a rather than guessed at.
          </p>
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

      {/* 7. Credentials. Blocked: plan Section 7, Open Questions 7 and 8. */}
      <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Credentials and memberships.
            </h2>
            <p className="mt-8 leading-relaxed text-charcoal">
              <Needs>
                board certification status, and permission to use each
                organisation&apos;s mark
              </Needs>
            </p>
            <p className="mt-6 text-sm leading-relaxed text-navy/60">
              Open Questions 7 and 8. Three confirmed credentials beat five with
              one that cannot be verified, so this section ships nothing until
              each is confirmed. Displaying an unearned certification is a Rule
              4-7.14 problem rather than a copy problem.
            </p>
          </div>
        </div>
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
                If you or someone you care about has been arrested or contacted
                by investigators, a conversation with an attorney is protected in
                a way that a web form is not. Call, or send a message and we will
                arrange a time.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={firm.phoneHref}
                  className="inline-flex items-center bg-bronze px-7 py-4 font-display text-lg font-bold text-navy transition-colors hover:bg-bronze-soft"
                >
                  Call {firm.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center border border-linen/30 px-7 py-4 font-display text-lg font-bold text-linen transition-colors hover:border-linen"
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
              {offices.map((office) => (
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
