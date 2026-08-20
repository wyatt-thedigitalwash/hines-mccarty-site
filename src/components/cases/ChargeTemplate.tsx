import Link from "next/link";
import { type ChargePage, chargeHref, chargeTrail } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import Needs from "@/components/Needs";
import { PenaltyTable, SectionBody } from "./sections";
import HandledBy from "@/components/attorneys/HandledBy";
import Byline from "./Byline";
import CallToAction from "@/components/CallToAction";

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

  return (
    <>
      {/* 1. H1 and the direct answer */}
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
        </div>
      </section>

      {/* 2. Forum cross-link, for state and federal overlap pages (Sec. 4.6) */}
      {charge.counterpart && (
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

      <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl space-y-16">
            {useSections &&
              sections.map((section) => (
                <Block key={section.id} heading={section.heading}>
                  <SectionBody section={section} />
                </Block>
              ))}
            {!useSections && !isOverview && (
              <>
            {/* 3. What the statute says */}
            <Block heading="What the statute says">
              {charge.statute ? (
                <>
                  <p className="font-heading text-sm uppercase tracking-wide text-navy/50">
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

      {/* 8. Handled by.
          Wired and currently empty. Keyed on the CHARGE href, not the silo
          href, deliberately: an attorney mapped to /criminal-defense is mapped
          to the silo, and rendering that here would claim they handle all ten
          state charges including homicide and sexual battery. Which attorney
          leads which charge is WEBSITE-PLAN.md Open Question 2 and is not
          answered, so this returns null until charge-level mappings exist. */}
      <HandledBy href={chargeHref(charge)} />

      {/* 9. FAQ, emitted with FAQPage schema by the route.
          An overview with no FAQ renders no marker: the questions are not
          missing there, they are not required. */}
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
          {charge.relatedGuides?.length ? (
            <div className="mt-16 max-w-3xl border-t border-navy/15 pt-8">
              <h3 className="font-display text-xl">Related guides</h3>
              <ul className="mt-4 space-y-2">
                {charge.relatedGuides.map((guide) => (
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
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div>
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
