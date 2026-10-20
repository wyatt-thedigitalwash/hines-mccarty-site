import Link from "next/link";
import HeroContactForm from "@/components/contact/HeroContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import CallToAction from "@/components/CallToAction";
import HandledBy from "@/components/attorneys/HandledBy";
import HeroPhotoLayer from "@/components/HeroPhotoLayer";
import QuickNav from "@/components/cases/QuickNav";
import TieredBody, { type TieredCopy } from "@/components/cases/TieredBody";
import { card, color, space, type } from "@/components/cases/ui";
import { type InjuryPage, firm, injuryHref, injurySpokes, injuryTrail } from "@/lib/site";
import { injuryHeroPhoto } from "@/lib/hero-photos";
import InjuryLegacy from "./InjuryLegacy";

/**
 * The injury page template, D72. Pillars (car accidents, truck accidents) and
 * their spokes, on the same body as the charge pages (`TieredBody`): the
 * Tier 2 sections, the detail boxes, the FAQ, "Who handles these cases" and
 * the call band, with injury wording where the template names the kind of
 * page. What differs, on client direction:
 *
 *   - The pillars keep a photo hero; the spokes use the charge pages' plain
 *     navy hero (D77, D78).
 *   - Pillars carry the full spine (who pays, what happens next, what to do
 *     right now). Spokes open on a short answer and go straight to their
 *     topics, so the same deadlines and steps are not repeated on nine pages.
 *   - A pillar lists its spokes as boxes after the FAQ.
 *
 * A page whose sections carry no tier still renders through InjuryLegacy.
 */
const INJURY_COPY: TieredCopy = {
  facingIntro:
    "Florida law decides who pays after a crash, and in what order. Each card is one source of payment and what it covers.",
  timelineIntro:
    "These are the deadlines that shape a claim, in the order they usually come. A lawyer can tell you which ones are already running for you.",
  doNowIntro: "These steps protect your claim in the first days after a crash.",
  faqIntro: "Short answers to the questions people ask about this kind of claim.",
};

/** D82: the pages are written for Tampa Bay; this tells a reader elsewhere in
 *  Florida that the firm takes their claim too. */
const ELSEWHERE =
  "Hurt outside Hillsborough County? We also take claims elsewhere in Florida, most often in the counties around Tampa Bay.";

export default function InjuryTemplate({ page }: { page: InjuryPage }) {
  const sections = page.sections ?? [];
  if (!sections.some((s) => s.tier)) return <InjuryLegacy page={page} />;

  const pillar = !page.parent;
  const spokes = page.parent ? [] : injurySpokes(page.slug).filter((s) => s.published);
  const cta = page.heroCta ?? { label: `Call ${firm.phone}`, href: firm.phoneHref };
  const quickNav = [
    ...sections
      .filter((s) => s.tier === 2)
      .map((s) => ({ id: s.id, label: s.heading.replace(/\.$/, "") })),
    ...(sections.some((s) => s.tier === 3) ? [{ id: "details", label: "The details" }] : []),
    ...(page.faq?.length ? [{ id: "common-questions", label: "Common questions" }] : []),
  ];

  return (
    <>
      {/* D78: the two pillars keep the photo hero (client direction); the
          spokes use the plain hero below. Right 58% from lg, a full-bleed
          band under the copy on a phone; isolate and z-10 keep the copy above
          the image. The jump links follow as their own strip. */}
      {pillar ? (
        <>
          <section
            data-bg="navy"
            data-hero
            className="relative isolate overflow-hidden bg-navy pt-28 pb-12 lg:pt-44 lg:pb-20"
          >
            {/* D132: the contact form on the right from lg, over the photo. */}
            <div className="relative z-10 mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[1fr_400px] lg:items-start lg:gap-16 lg:px-10">
              <div>
              <Breadcrumbs trail={injuryTrail(page)} tone="dark" />
              <h1 className={`mt-6 max-w-2xl ${type.pageTitle} ${color.onDarkHeading}`}>{page.title}</h1>
              {page.lead ? (
                <p className={`mt-6 max-w-xl ${type.lead} ${color.onDarkBody}`}>{page.lead}</p>
              ) : null}
              <div className="mt-8">
                <a
                  href={cta.href}
                  className="inline-flex w-full items-center justify-center bg-bronze px-7 py-4 font-heading text-base font-semibold tabular-nums text-navy transition-colors hover:bg-bronze-soft sm:w-auto"
                >
                  {cta.label}
                </a>
              </div>
              <p className={`mt-5 max-w-xl ${type.small} ${color.onDarkMuted}`}>{ELSEWHERE}</p>
              </div>
              <HeroContactForm source={page.label} />
            </div>
            <HeroPhotoLayer photo={injuryHeroPhoto(page)} />
          </section>
          {quickNav.length > 1 ? (
            <div data-bg="navy" className="bg-navy">
              <div className="bg-linen/[0.06]">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                  <QuickNav items={quickNav} />
                </div>
              </div>
            </div>
          ) : null}
        </>
      ) : (
        <>
      {/* The charge pages' hero (D77, client direction: no photo on the
          spokes): breadcrumbs, H1, lead, the call button, and the jump
          links as the band that closes it (D52). */}
      <section data-bg="navy" className={`bg-navy pt-28 lg:pt-44 ${quickNav.length > 1 ? "" : "pb-10 lg:pb-16"}`}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Breadcrumbs trail={injuryTrail(page)} tone="dark" />
          <h1 className={`mt-6 max-w-4xl ${type.pageTitle} ${color.onDarkHeading}`}>{page.title}</h1>
          {page.lead ? (
            <p className={`mt-6 max-w-2xl ${type.lead} ${color.onDarkBody}`}>{page.lead}</p>
          ) : null}
          <div className="mt-8">
            <a
              href={cta.href}
              className="inline-flex w-full items-center justify-center bg-bronze px-7 py-4 font-heading text-base font-semibold tabular-nums text-navy transition-colors hover:bg-bronze-soft sm:w-auto"
            >
              {cta.label}
            </a>
          </div>
          <p className={`mt-5 max-w-2xl ${type.small} ${color.onDarkMuted}`}>{ELSEWHERE}</p>
        </div>
        {quickNav.length > 1 ? (
          <div className="mt-10 bg-linen/[0.06] lg:mt-20">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
              <QuickNav items={quickNav} />
            </div>
          </div>
        ) : null}
      </section>

        </>
      )}

      <TieredBody charge={page} sections={sections} copy={INJURY_COPY} />

      {spokes.length ? (
        <section data-bg="white" className="bg-white py-24 lg:py-32 text-navy">
          <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
            <h2 className={`${type.sectionHeading} ${color.heading}`}>{page.label.charAt(0)}{page.label.slice(1).toLowerCase()}, in more depth.</h2>
            <p className={`${space.afterHeading} max-w-2xl ${type.lead} ${color.body}`}>
              Each page takes one part of these claims further.
            </p>
            <ul className={`${space.beforeContent} ${space.items}`}>
              {spokes.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={injuryHref(s)}
                    className={`group block border border-navy/15 bg-white transition-colors hover:border-bronze hover:bg-linen/15 ${card}`}
                  >
                    <span className={`block ${type.subheading} ${color.heading} transition-colors group-hover:text-bronze`}>
                      {s.title}
                    </span>
                    <span className={`${space.inItem} block ${type.body} ${color.body}`}>{s.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <HandledBy href={injuryHref(page)} charge intro="The attorney at Hines McCarty Pavlidis who handles these claims." />

      <CallToAction
        heading="Talk to an attorney about your injury claim."
        body="Consultations are confidential. If you or someone you care about has been hurt in a collision, reach out and we will tell you what the next step looks like."
        tone="white"
      />
    </>
  );
}
