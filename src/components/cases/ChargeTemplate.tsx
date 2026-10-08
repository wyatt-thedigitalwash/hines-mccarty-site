import { Fragment } from "react";
import Link from "next/link";
import { type ChargePage, isLiveHref, attorneys, chargeHref, chargeTrail, firm } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import Needs from "@/components/Needs";
import {
  PenaltyTable,
  SectionLede,
  SectionRest,
  SectionSources,
  hasSectionRest,
} from "./sections";
import HandledBy from "@/components/attorneys/HandledBy";
import Byline from "./Byline";
import CallToAction from "@/components/CallToAction";
import TieredBody from "./TieredBody";
import QuickNav from "./QuickNav";
import { color, type } from "./ui";

/**
 * The level 3 charge page template. Ten sections, per
 * docs/build/CASES-WE-DEFEND-PLAN.md Section 4.3.
 *
 * Every field comes from the `charges` data. Nothing about a specific charge is
 * hardcoded here. Unwritten fields render a visible [NEEDS] marker and the page
 * stays `published: false`, which keeps it noindex and out of the sitemap.
 *
 * Compliance rails carried by this template (Fla. Bar R. 4-7, avoid.md Sec. 2):
 * no case results, verdicts, settlement figures, or testimonials anywhere; no
 * expert, specialist, best, or guarantee language; no outcome prediction in the
 * defense-approach section, which describes process only.
 */
export default function ChargeTemplate({ charge }: { charge: ChargePage }) {
  // A C9-exempt entry is a category overview rather than a charge page
  // (DECISIONS.md D12). It rests on no statute, so it has no statute section,
  // no degrees, and no elements, and rendering [NEEDS] markers for them would
  // be wrong: those fields are not missing, they are inapplicable. A marker
  // says "someone still has to write this", which would never become true.
  const isOverview = Boolean(charge.c9Exempt);

  // Section order and heading text are DATA, not JSX. The old template put both
  // in this file, which made the mission's requirement (open on what matters
  // most for that charge, headings true of that charge and false of the others)
  // unexpressible rather than merely unmet. A page with `sections` renders them
  // in the order the writer chose. Legacy pages fall through to the fixed
  // sequence below until they are migrated.
  const sections = charge.sections ?? [];
  const useSections = sections.length > 0;
  // D43: a page opts into the tiered layout by putting a tier on its sections.
  const tiered = sections.some((sec) => sec.tier);
  // D52: the hero's "On this page" links. Tier 2 sections by their own
  // headings (minus the closing period), then the details and the FAQ, each
  // only when the page has them.
  const quickNav = tiered
    ? [
        ...sections
          .filter((sec) => sec.tier === 2)
          .map((sec) => ({ id: sec.id, label: sec.heading.replace(/\.$/, "") })),
        ...(sections.some((sec) => sec.tier === 3)
          ? [{ id: "details", label: "The details" }]
          : []),
        ...(charge.faq?.length ? [{ id: "common-questions", label: "Common questions" }] : []),
      ]
    : [];

  return (
    <>
      {/*
        1. H1 and the direct answer.

        TWO HEROES, and the branch is a page-level opt-in rather than a
        replacement. This template renders all 28 charge pages, so editing the
        hero in place would have edited every one of them, which is the thing
        this change was told not to do.

        THE STRIPPED HERO (charge.heroCta set) carries four things and nothing
        else: breadcrumbs, the H1, the lead, and one primary button. (The gold
        band that closed it was removed by D46.) The secondary "Send a message" link and the
        confidentiality line are deliberately absent from it. Both are good copy
        and both were removed on instruction, because the brief was that the top
        section is exactly those elements; they are still rendered on every
        other charge page by the branch below.

        The vertical padding is tighter than the default hero (pt-28 against
        pt-36, pb-10 against pb-20). That is not taste: at 390px the four
        elements have to clear the fold under a 77px fixed header, and the
        default padding put the button below it.
      */}
      {charge.heroCta ? (
        <section
          data-bg="navy"
          className={`bg-navy pt-28 lg:pt-44 ${quickNav.length ? "" : "pb-10 lg:pb-16"}`}
        >
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <Breadcrumbs trail={chargeTrail(charge)} />
            <h1 className={`mt-6 max-w-4xl ${type.pageTitle} ${color.onDarkHeading}`}>
              {charge.title ?? charge.label}
            </h1>
            <div className={`mt-6 max-w-2xl ${type.lead} ${color.onDarkBody}`}>
              {charge.lead ?? (
                <Needs>
                  opening answer, what this charge is, in the first 40 words
                </Needs>
              )}
            </div>
            {/* D65: who reviewed the page and when, linked to the attorney's
                bio. Renders only with BOTH an owner and a real review date. */}
            {charge.owner && charge.lastReviewed ? (
              <p className={`mt-4 ${type.label} ${color.onDarkMuted}`}>
                Reviewed by{" "}
                {(() => {
                  const a = attorneys.find((x) => x.name === charge.owner);
                  return a ? (
                    <Link href={`/attorneys/${a.slug}`} className="text-linen/85 underline decoration-1 underline-offset-4 hover:text-bronze">
                      {charge.owner}
                    </Link>
                  ) : (
                    charge.owner
                  );
                })()}
                {" · "}
                {new Date(`${charge.lastReviewed}T12:00:00`).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </p>
            ) : null}
            <div className="mt-8">
              <a
                href={charge.heroCta.href}
                className="inline-flex w-full items-center justify-center bg-bronze px-7 py-4 font-display text-lg font-bold text-navy transition-colors hover:bg-bronze-soft sm:w-auto"
              >
                {charge.heroCta.label}
              </a>
            </div>
          </div>
          {/* The page's own menu as a full-width band closing the hero, a shade
              lighter than the navy (a background, not a rule), D52. A row of
              links on desktop; on a phone a single "Jump to a section" row
              that expands (see QuickNav). It closes the section, so the hero
              carries no bottom padding of its own when it is present. */}
          {quickNav.length ? (
            <div className="mt-10 bg-linen/[0.06] lg:mt-20">
              <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                <QuickNav items={quickNav} />
              </div>
            </div>
          ) : null}
        </section>
      ) : null}
      {charge.heroCta ? null : (
      <section data-bg="navy" className="bg-navy pt-36 pb-20 lg:pt-44 lg:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Breadcrumbs trail={chargeTrail(charge)} />
          <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight text-linen sm:text-5xl lg:text-6xl">
            {charge.title ?? charge.label}
          </h1>
          <div className="mt-8 max-w-2xl text-lg leading-relaxed text-linen/70">
            {charge.lead ?? (
              <Needs>
                opening answer, what this charge is, in the first 40 words
              </Needs>
            )}
          </div>

          {/*
            A WAY OUT, IN THE HERO. Measured on /criminal-defense/dui-defense
            before this existed: 10,495 words of the page's 10,548 came BEFORE
            the first phone number or contact link. Every one of these pages is
            written for someone who was arrested, or whose child was, and the
            page made them read a statutory treatise to the end before offering
            them a person. The reading is the asset and none of it is being cut;
            it just no longer stands between the reader and the phone.

            The confidentiality line is here rather than under the button
            because it is the reason someone hesitates, and it is a statement
            about the conversation rather than a claim about the firm.
          */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={firm.phoneHref}
              className="inline-flex items-center justify-center bg-bronze px-7 py-4 font-display text-lg font-bold text-navy transition-colors hover:bg-bronze-soft"
            >
              Call {firm.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-linen/30 px-7 py-4 font-display text-lg text-linen transition-colors hover:border-linen"
            >
              Send a message
            </Link>
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-linen/55">
            Consultations are confidential. You do not have to know what you are
            charged with to call.
          </p>
        </div>
      </section>
      )}

      {/* 2. Forum cross-link, for state and federal overlap pages (Sec. 4.6).
          Not rendered on a tiered page (D51): between the hero and "What
          you're facing" it read as an interruption, in statute language. The
          `counterpart` data stays. */}
      {charge.counterpart && !tiered && (
        <section data-bg="white" className="bg-white py-14 text-navy">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <h2 className="font-display text-2xl leading-tight sm:text-3xl">
              State charge or federal charge?
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-charcoal">
              {charge.counterpart.note}
            </p>
            <Link
              href={charge.counterpart.href}
              className="link-arrow mt-5 inline-block font-heading text-sm font-medium underline decoration-1 underline-offset-4 transition-colors hover:text-bronze"
            >
              {charge.counterpart.label}
            </Link>
          </div>
        </section>
      )}

      {/*
        THREE TIERS. D43.

        Tier 1 is the hero above. Tier 2 is the three things a reader came for,
        always open under the largest headings on the page after the H1. Tier 3
        is everything else, in ONE accordion, closed, under headings that are
        visibly smaller so the two tiers cannot read as peers.

        The per-section sources line and the per-section "read the full
        analysis" disclosure are both gone, and so is the page-level sources
        block (D46); the statute blocks live inside their Tier 3 item.

        A page with no `tier` on any section falls through to the pre-D43
        renderer below, which is what leaves the other 27 charge pages byte
        identical.
      */}
      {tiered ? (
        <TieredBody charge={charge} sections={sections} />
      ) : (
      <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl space-y-16">
            {useSections &&
              sections.map((section, index) => (
                <Fragment key={section.id}>
                  <Block id={section.id} heading={section.heading}>
                    <SectionLede section={section} />
                    {hasSectionRest(section) && (
                      <details className="group mt-8 border-t border-navy/15 pt-6">
                        <summary className="cursor-pointer list-none font-heading text-sm font-semibold uppercase tracking-wide text-navy/60 transition-colors hover:text-bronze">
                          <span className="group-open:hidden">
                            Read the full analysis
                          </span>
                          <span className="hidden group-open:inline">
                            Close this section
                          </span>
                        </summary>
                        <div className="mt-6 space-y-5">
                          <SectionRest section={section} />
                        </div>
                      </details>
                    )}
                    <SectionSources section={section} />
                  </Block>
                  {index === 1 && sections.length > 3 && (
                    <div className="border border-navy/20 p-8">
                      <p className="font-display text-2xl leading-tight">
                        None of this is a substitute for asking about your own
                        case.
                      </p>
                      <p className="mt-4 leading-relaxed text-charcoal">
                        The rest of this page is the law in detail. If you would
                        rather just ask someone what it means for you, that is
                        what the call is for, and it costs nothing to have it.
                      </p>
                      <a
                        href={firm.phoneHref}
                        className="mt-6 inline-flex items-center border border-navy px-7 py-4 font-display text-lg transition-colors hover:border-bronze hover:text-bronze"
                      >
                        Call {firm.phone}
                      </a>
                    </div>
                  )}
                </Fragment>
              ))}
            {!useSections && !isOverview && (
              <>
            {/* 3. What the statute says */}
            <Block heading="What the statute says">
              {charge.statute ? (
                <>
                  <p className="font-heading text-sm uppercase tracking-wide text-navy/70">
                    {charge.statute.citation}
                  </p>
                  <p className="mt-3">{charge.statute.body}</p>
                </>
              ) : (
                <Needs>statute citation and what it says</Needs>
              )}
            </Block>

            {/* 4. Degrees and penalties.
                The scoresheet link belongs in this block and is deliberately
                absent: the sentencing calculator has not cleared done-criteria
                C1 through C8 (CASES-WE-DEFEND-PLAN.md Section 5.6), and no page
                links to it until it does. Add the link here, on the offense
                level row, once the ship gate is met.

                The table carries no min-width. It had one, which was harmless
                while the only entry was a template preview with two-word notes.
                Real content broke it: the note carries the value threshold that
                decides the row, and at 390px a min-width pushed that sentence
                outside the scroll container, putting the substance of the table
                behind a horizontal scrollbar. Same fix and same reason as the
                divisions table on the silo hub. overflow-x-auto stays as a
                floor for very narrow screens. */}
            <Block heading="Degrees and penalties">
              {charge.penalties?.length ? (
                <PenaltyTable rows={charge.penalties} />
              ) : (
                <Needs>
                  degrees, statutory maximums, and offense levels, each verified
                  against the operative statute
                </Needs>
              )}
            </Block>

            {/* 5. What the government has to prove */}
            <Block heading="What the state has to prove">
              {charge.elements?.length ? (
                <ul className="space-y-3">
                  {charge.elements.map((element) => (
                    <li key={element} className="flex gap-3">
                      <span aria-hidden="true" className="text-bronze">
                        &bull;
                      </span>
                      <span>{element}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <Needs>the elements the government has to prove</Needs>
              )}
            </Block>
              </>
            )}

            {/* 6. How the defense is approached. Process only, never outcome. */}
            {!useSections && (
            <Block
              heading={
                isOverview
                  ? "What is actually charged"
                  : "How the defense is approached"
              }
            >
              {charge.defenseApproach?.length ? (
                <div className="space-y-5">
                  {charge.defenseApproach.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <Needs>
                  how the defense is approached, described as process, never as
                  a predicted outcome
                </Needs>
              )}
            </Block>
            )}

            {/* 7. Where the case is heard */}
            {!useSections && (charge.forum?.length || !isOverview) && (
              <Block heading="Where the case is heard">
                {charge.forum?.length ? (
                  <div className="space-y-5">
                    {charge.forum.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>
                ) : (
                  <Needs>which court hears this charge, and what to expect</Needs>
                )}
              </Block>
            )}
          </div>
        </div>
      </section>
      )}

      {/* 8. Who handles these cases. Keyed on the CHARGE href, not the silo
          href, deliberately: an attorney mapped to /criminal-defense would be
          claimed for every state charge. The charge-level mapping was confirmed
          by the client 2026-10-08 (D65). Charge-page styling on tiered pages. */}
      <HandledBy href={chargeHref(charge)} charge={tiered} />

      {/* 9. FAQ, emitted with FAQPage schema by the route.
          An overview with no FAQ renders no marker: the questions are not
          missing there, they are not required.

          The FAQPage schema is emitted by the ROUTE from charge.faq and is
          unaffected by which component renders the answers. */}
      {/* D46: a tiered page renders none of this. Its FAQ and byline live in
          TieredBody, and its links sit inside the sections they belong to. */}
      {!tiered && (
      <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {(charge.faq?.length || !isOverview) && (
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Common questions
            </h2>
          )}
          <div className="mt-10 max-w-3xl">
            {charge.faq?.length ? (
              <dl className="space-y-8">
                {charge.faq.map((item) => (
                  <div
                    key={item.question}
                    className="border-t border-navy/15 pt-6"
                  >
                    <dt className="font-display text-xl leading-snug">
                      {item.question}
                    </dt>
                    <dd className="mt-3 leading-relaxed text-charcoal">
                      {item.answer ?? (
                        <Needs>
                          answer, complete in the first two sentences
                        </Needs>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : isOverview ? null : (
              <Needs>
                FAQ items answerable only about this charge, not about criminal
                defense generally
              </Needs>
            )}
          </div>

          {/* 10. Related guides, plus the byline and review date (C11) */}
          {/* D73: guides are hidden at launch, so their links are too. */}
          {charge.relatedGuides?.some((g) => isLiveHref(g.href)) ? (
            <div className="mt-16 max-w-3xl border-t border-navy/15 pt-8">
              <h3 className="font-display text-xl">Related guides</h3>
              <ul className="mt-4 space-y-2">
                {charge.relatedGuides.filter((g) => isLiveHref(g.href)).map((guide) => (
                  <li key={guide.href}>
                    <Link
                      href={guide.href}
                      className="text-navy/70 underline decoration-1 underline-offset-4 transition-colors hover:text-bronze"
                    >
                      {guide.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="max-w-3xl">
            <Byline owner={charge.owner} lastReviewed={charge.lastReviewed} />
          </div>
        </div>
      </section>
      )}

      <CallToAction
        heading={
          isOverview
            ? "Talk to an attorney about your case."
            : "Talk to an attorney about this charge."
        }
        tone="white"
      />
    </>
  );
}


function Block({
  id,
  heading,
  children,
}: {
  id?: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    /* scroll-mt-28 clears the 77px fixed header, the same value /attorneys uses
       on its anchor. Without it a jump from the contents list lands with the
       heading it just took you to hidden behind the nav, which reads as a
       broken link rather than a near miss. */
    <div id={id} className="scroll-mt-28">
      <h2 className="font-display text-4xl leading-tight sm:text-5xl">
        {heading}
      </h2>
      <div className="mt-6 text-lg leading-relaxed text-charcoal">
        {children}
      </div>
    </div>
  );
}

/**
 * Renders one section by kind.
 *
 * No heading is emitted here. The heading is the section's own, rendered by
 * Block above, which is the whole point of the redesign: this file no longer
 * knows what any section is called.
 */
/**
 * Render EVERY payload a section carries, not just the one its kind names.
 *
 * WHY. This was a switch that returned exactly one payload, so a section of
 * kind "statute" rendered `statute` and silently dropped `prose`. An
 * adversarial reviewer found the consequence on the DUI page: three sections
 * carried 1,489 words that no reader could ever see, including the effective
 * date of the 2025 refusal amendment, the breath-and-urine scope limit, the
 * 0.15 and minor-passenger enhancement, and the whole injury and death block.
 * Two headings promised material their rendered bodies did not contain.
 *
 * THE GATES COULD NOT SEE IT, and that is the part worth keeping in mind.
 * `pageCopy` extracts every field regardless of kind, so the banned-term,
 * duplication, claim and unverified checks were all reading text that was not
 * on the page. The reader-question coverage check was worse than blind: it
 * credited those sections for `answers` a reader never received. page-copy.ts
 * already warns that a field which renders but is not extracted is a hole in
 * every gate at once. This is the same hole inverted, and it is more dangerous,
 * because a gate reading invisible text reports a page in better shape than it
 * is.
 *
 * `ChargeSection` makes every payload optional on every kind, so nothing in the
 * type system prevents the combination. The renderer therefore has to be total:
 * kind decides ORDER and emphasis, never what survives. scripts/check-pages.mts
 * asserts that every payload field on every section is one this function
 * renders, so adding a field to the schema without teaching this function about
 * it fails the build rather than quietly deleting content.
 */
