import type { Metadata } from "next";
import { firm, siteUrl } from "@/lib/site";
import { organizationJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import PageHero from "@/components/PageHero";
import { ABOUT_PHOTO } from "@/lib/hero-photos";
import CredentialStrip from "@/components/CredentialStrip";
import CallToAction from "@/components/CallToAction";
import PracticeCards from "@/components/about/PracticeCards";
import ProcessCards from "@/components/about/ProcessCards";
import AttorneyGrid from "@/components/about/AttorneyGrid";
import WherePractice from "@/components/about/WherePractice";

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
 * D108, 2026-10-09: REBUILT in the site's newer style (client choice): hero
 * with the call button; the intro beside two practice cards; the process as
 * filled navy cards; the attorneys; "Where we practice" beside the drawn map;
 * the credential strip; the standard closing card. The cream sections and the
 * repeat of the home page's core values are gone, and the copy names both
 * offices, Brandon and Tampa (D101). Each section is its own component in
 * src/components/about/.
 *
 * COMPLIANCE RAILS, plan Section 5. About pages are where firms write what they
 * would never write on a practice page. Nothing here characterizes quality: no
 * best, expert, specialist, or leading; no case results, verdicts, or
 * settlement figures; no outcome language in the process section; no office
 * implied beyond Brandon and Tampa (Rule 4-7.12); no imported directory superlatives.
 * Board certifications name the certifying organisation and the area, which is
 * what Rule 4-7.14(a)(4) requires and the reason they may be stated at all.
 */
export const metadata: Metadata = pageMetadata({
  title: "Our Firm | Hines McCarty Pavlidis, Brandon FL",
  description:
    "Four attorneys in Brandon and Tampa handling criminal defense, personal injury, and business litigation in Hillsborough County and beyond.",
  path: "/about",
});

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteUrl}/about#page`,
  url: `${siteUrl}/about`,
  name: "Our Firm",
  description:
    "A firm of four attorneys, each concentrating in a different area, handling criminal defense, personal injury, and business litigation from offices in Brandon and Tampa.",
  mainEntity: organizationJsonLd(),
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />

      <PageHero
        title="A firm built for the cases other firms refer out."
        photo={ABOUT_PHOTO}
        cta={{ label: `Call ${firm.phone}`, href: firm.phoneHref }}
      >
        <p>
          {`${firm.name} is four attorneys who each concentrate on a different area, practicing in the state courts of Hillsborough County and in the Middle District of Florida. The firm defends people accused of crimes, represents people injured by someone else, and litigates disputes for businesses and their owners.`}
        </p>
      </PageHero>

      {/* The thesis, beside what the firm takes. */}
      <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-10">
          <div>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">Four attorneys, four different concentrations.</h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-charcoal">
              <p>
                Most firms in this market are one lawyer and a staff. That works until a case turns into
                something the lawyer has not handled before.
              </p>
              <p>
                {`${firm.name} is built the other way around. Each attorney concentrates in a different area, so a case goes to the person who already knows that kind of case, and it is worked in front of the other three: one attorney's attention and four attorneys' judgment.`}
              </p>
              <p>
                That is why so much of the firm&apos;s work arrives by referral, from former clients and from
                other lawyers who send the matters they do not take themselves.
              </p>
            </div>
          </div>
          <div className="lg:pt-2">
            <PracticeCards />
          </div>
        </div>
      </section>

      <AttorneyGrid />
      <ProcessCards />
      {/* Credentials. Board certification is stated with the certifying
          organisation and the area, the only form Rule 4-7.14 allows. */}
      <section data-bg="white" className="bg-white pt-20 text-navy lg:pt-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">Credentials and memberships.</h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              The organisations below certify or admit the attorneys of this firm.
            </p>
          </div>
        </div>
        {/* Full bleed; the strip supplies the section's bottom padding. */}
        <CredentialStrip />
      </section>

      <WherePractice />

      <CallToAction
        heading="Talk to the firm."
        body="If you or someone you care about has been arrested, contacted by investigators, or hurt in a collision, a conversation with an attorney is protected in a way that a web form is not. Call, or send a message and we will arrange a time."
      />
    </>
  );
}
