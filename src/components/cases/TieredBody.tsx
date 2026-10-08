import Link from "next/link";
import { type ChargePage, type ChargeSection, firm, isLiveHref } from "@/lib/site";
import { SectionBody } from "./sections";
import DetailsGrid from "./DetailsGrid";
import OpenFromHash from "./OpenFromHash";
import { color, space, type } from "./ui";

/** The fields of a page that the tiered body reads (charge or injury page). */
export type TieredPage = Pick<ChargePage, "heroCta" | "detailsLayout" | "faq">;

/**
 * The template sentences that name what kind of page this is. Template copy,
 * so each has to hold on every page of its kind. D72 split them out so the
 * injury pages can share this body with their own wording.
 */
export type TieredCopy = {
  /** Under "What you're facing." (or the injury page's first Tier 2 heading). */
  facingIntro: string;
  /** Under the timeline heading. */
  timelineIntro: string;
  /** Under the navy action band heading. */
  doNowIntro: string;
  /** Under "Common questions." */
  faqIntro: string;
};

/* Charge wording. Penalties (D51): "the penalty the law sets", not "the most
   you can get", because some rows are mandatory minimums. Timeline (D55):
   worded to hold on a target letter page, where no one has been charged yet.
   Do-now: process only, no outcome claim. */
export const CHARGE_COPY: TieredCopy = {
  facingIntro:
    "What you face depends on the facts in the charge. Find the situation closest to yours to see the penalty the law sets for it.",
  timelineIntro:
    "These are the deadlines that shape a case, in the order they usually come. A lawyer can tell you which ones are already running for you.",
  doNowIntro:
    "These steps protect your rights in the first days of a case, while it is still taking shape.",
  faqIntro: "Short answers to the questions people ask about this charge.",
};

/**
 * The tiered body. D43.
 *
 * TIER 2 is three sections, always open, under the largest headings on the page
 * after the H1. No disclosure, no sources line, no statute block: those three
 * sections carry the table, the timeline and the action list, which is what the
 * reader came for, and a wall of statute above them would bury it.
 *
 * TIER 3 is ONE accordion. Seven items over nine sections, because two labels
 * cover two sections each. Every item is closed by default and every heading is
 * deliberately a size class below Tier 2, so the two cannot be mistaken for
 * peers. Native <details>, not a React island, so it works with no JavaScript
 * and keeps its own accessibility semantics; the content stays in the HTML and
 * a crawler still reads it.
 *
 * THE CTA REPEATS TWICE, after Tier 2 and at the foot. The hero carries the
 * first. That is three on a page, which is the most this template has ever
 * shown, and it is the client's call rather than a default.
 */
export default function TieredBody({
  charge,
  sections,
  copy = CHARGE_COPY,
}: {
  /** The page-level fields the body reads. Charge and injury pages both have them. */
  charge: TieredPage;
  sections: ChargeSection[];
  /** Template sentences that name the kind of page. Charge wording by default. */
  copy?: TieredCopy;
}) {
  const tier2 = sections.filter((s) => s.tier === 2);
  const tier3 = sections.filter((s) => s.tier === 3);

  // Consecutive sections sharing a `group` collapse into one accordion item.
  // Order is the data's order; nothing is sorted, so the item sequence is the
  // sequence the writer chose.
  const items: { label: string; summary?: string; sections: ChargeSection[] }[] = [];
  for (const sec of tier3) {
    const label = sec.group ?? sec.heading;
    const last = items[items.length - 1];
    if (last && last.label === label) {
      last.sections.push(sec);
      last.summary ??= sec.groupSummary;
    } else items.push({ label, summary: sec.groupSummary, sections: [sec] });
  }


  const cta = charge.heroCta ?? {
    label: `Call ${firm.phone}`,
    href: firm.phoneHref,
  };
  const ctaButton = (
    <a
      href={cta.href}
      className="inline-flex w-full items-center justify-center bg-bronze px-7 py-4 font-display text-lg font-bold text-navy transition-colors hover:bg-bronze-soft sm:w-auto"
    >
      {cta.label}
    </a>
  );

  /*
    WIDTH, and why there are two of them.

    The body used to be `max-w-3xl` (768px) LEFT-ALIGNED inside a centred
    1400px container, so on a desktop the page ran out of content two thirds of
    the way across and left ~630px of white. That reads as a broken layout
    rather than as a measure.

    The COLUMN is 1120px and centred. Widening it to the site's 1400px
    container to align with the hero was tried and rejected (D46).
    Prose inside the details used to be capped at 68 characters, which
    left the right third of every open topic empty; on client direction (D46)
    it now spans the column like everything else.
  */

  /*
    TIER 2 IS SPLIT INTO BANDS, not rendered as one run of divs.

    A section marked `background: "navy"` becomes its own top-level
    `<section data-bg="navy">` sibling. Nesting it inside the white section
    would have produced a navy BOX stopping at the 1120px content column
    instead of a band, and globals.css keys the Section Spacing Rule on
    data-bg adjacency between siblings, which cannot see a nested element.

    Consecutive sections sharing a background stay in one band, so the order
    the writer chose survives and two navy sections in a row would not produce
    two navy bands with a seam between them.
  */
  const bands: { background?: "navy"; sections: ChargeSection[] }[] = [];
  for (const sec of tier2) {
    const last = bands[bands.length - 1];
    if (last && last.background === sec.background) last.sections.push(sec);
    else bands.push({ background: sec.background, sections: [sec] });
  }

  // One topic's sections: each keeps its own charge-specific heading (the
  // label is wayfinding; the heading is the claim), its body, and its link.
  // Shared by the accordion and the box grid (D47).
  const topicBody = (secs: ChargeSection[]) =>
    secs.map((section) => (
      <div key={section.id} id={section.id} className="scroll-mt-28">
        <h4 className={`${type.itemHeading} ${color.heading}`}>{section.heading}</h4>
        <div className={`${space.inItem} ${space.paragraphs}`}>
          <SectionBody section={section} />
        </div>
        {/* D73: a link into hidden Resources stays in the data and is not shown. */}
        {section.link && isLiveHref(section.link.href) ? (
          <Link
            href={section.link.href}
            className={`link-arrow mt-4 inline-block ${type.label} ${color.heading} underline decoration-1 underline-offset-4 transition-colors hover:text-bronze`}
          >
            {section.link.label}
          </Link>
        ) : null}
      </div>
    ));

  /*
    ONE SPACING UNIT. D46. Every section below pads py-24 lg:py-32 (96px, 128px
    on desktop) and Tier 2 sections sharing a band are spaced by the same unit.
    Two white sections in a row lose the second's top padding under the Section
    Spacing Rule, so the gap is one unit; at a navy/white edge each side gets
    one unit. Mixing sizes made some joins look loose and others cramped.
  */
  /* A one-line intro under a Tier 2 heading, by section kind. Template copy,
     so each has to hold on every page, state and federal. Penalties (D51): "the
     penalty the law sets", not "the most you can get", because some rows are
     mandatory minimums. Timeline (D55): worded to hold on a target letter page,
     where no one has been charged yet. */
  const tier2Intro: Partial<Record<ChargeSection["kind"], string>> = {
    penalties: copy.facingIntro,
    timeline: copy.timelineIntro,
  };

  const sectionBlock = (section: ChargeSection, dark: boolean) => {
    const intro = tier2Intro[section.kind];
    const heading = (
      <div>
        <h2
          className={`${type.sectionHeading} ${dark ? color.onDarkHeading : color.heading}`}
        >
          {section.heading}
        </h2>
        {intro ? (
          <p
            className={`${space.afterHeading} max-w-2xl ${type.lead} ${dark ? color.onDarkBody : color.body}`}
          >
            {intro}
          </p>
        ) : null}
      </div>
    );
    return (
    <div key={section.id} id={section.id} className="scroll-mt-28">
      {heading}
      {/* TIER 2 PROSE IS NOT CAPPED. It used to inherit the 68ch measure, which
          left the paragraphs under the penalty table stopping two thirds of the
          way across while the table itself ran the full column: two different
          left-aligned widths stacked on each other, which reads as a mistake
          rather than as a measure. Tier 2 prose now matches the payload above
          it. The cap still applies inside Tier 3, where there is no full-width
          payload for prose to line up with. */}
      <div
        className={`${space.beforeContent} ${type.body} ${dark ? color.onDarkBody : color.body}`}
      >
        <SectionBody section={section} />
      </div>
    </div>
    );
  };

  return (
    <>
      {bands.map((band, i) =>
        band.background === "navy" ? (
          <section
            key={i}
            data-bg="navy"
            className="bg-navy py-24 lg:py-32 text-linen"
          >
            <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
              {band.sections.length === 1 ? (
                /* One section in the band (the action list): its heading and
                   the call button share a header row, as on Common questions,
                   instead of the button trailing under the list. D48. */
                <div id={band.sections[0].id} className="scroll-mt-28">
                  <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-16">
                    <div className="max-w-2xl">
                      <h2 className={`${type.sectionHeading} ${color.onDarkHeading}`}>
                        {band.sections[0].heading}
                      </h2>
                      {/* Template copy, so it has to hold for every charge,
                          including a target letter where no one is arrested.
                          Process only, no outcome claim. */}
                      <p className={`${space.afterHeading} ${type.lead} ${color.onDarkBody}`}>
                        {copy.doNowIntro}
                      </p>
                    </div>
                    <div className="shrink-0">{ctaButton}</div>
                  </div>
                  <div className={`${space.beforeContent} ${type.body} ${color.onDarkBody}`}>
                    <SectionBody section={band.sections[0]} />
                  </div>
                </div>
              ) : (
                <>
                  <div className="space-y-24 lg:space-y-32">
                    {band.sections.map((sec) => sectionBlock(sec, true))}
                  </div>
                  {/* The CTA that follows Tier 2 lives in the band, where the
                      bronze button sits on navy exactly as it does in the hero. */}
                  <div className="mt-12">{ctaButton}</div>
                </>
              )}
            </div>
          </section>
        ) : (
          <section
            key={i}
            data-bg="white"
            className="bg-white py-24 lg:py-32 text-navy"
          >
            <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
              <div className="space-y-24 lg:space-y-32">
                {band.sections.map((sec) => sectionBlock(sec, false))}
              </div>
            </div>
          </section>
        ),
      )}

      {/* TIER 3, THE DETAILS. D46.

          Each topic carries a one-line summary while closed, so a reader knows
          what is inside before opening it. Not numbered, on client direction.
          The label, summary, and plus sign are direct children of the
          <summary> on a grid, because <summary> takes phrasing and heading
          content and not wrapper blocks. */}
      <section data-bg="white" className="bg-white py-24 lg:py-32 text-navy">
        <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
          <h2 id="details" className={`scroll-mt-28 ${type.sectionHeading} ${color.heading}`}>
            The details.
          </h2>
          <p className={`${space.afterHeading} max-w-2xl ${type.lead} ${color.body}`}>
            Each topic goes deeper on one part of your case. Open the ones that
            matter to you.
          </p>
          {charge.detailsLayout === "grid" ? (
            <div className={space.beforeContent}>
              <DetailsGrid
                items={items.map((item) => ({
                  id: `topic-${item.sections[0].id}`,
                  label: item.label,
                  summary: item.summary,
                  content: topicBody(item.sections),
                }))}
              />
            </div>
          ) : (
            <div className={`${space.beforeContent} border-t border-navy/15`}>
              {items.map((item) => (
                <details key={item.label} className="group border-b border-navy/15">
                  <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 py-6 [&::-webkit-details-marker]:hidden">
                    <h3 className={`${type.subheading} ${color.heading} transition-colors group-hover:text-bronze`}>
                      {item.label}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="text-xl leading-none text-bronze transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                    {item.summary ? (
                      <span className={`col-start-1 ${space.inItem} block ${type.body} ${color.body}`}>
                        {item.summary}
                      </span>
                    ) : null}
                  </summary>
                  <div className={`space-y-8 pb-8 ${type.body} ${color.body}`}>
                    {topicBody(item.sections)}
                  </div>
                </details>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* COMMON QUESTIONS. D46.

          Styled apart from the details on purpose: the details are reading
          material, these are quick answers. A header row (heading and
          description on the left, "Don't see yours?" and the call button on
          the right), then the questions full width below it; stacked on a
          phone. White background, on client direction. Same 1120px column as
          the rest of the tiered body. The FAQPage schema is emitted by the
          route from charge.faq, so this markup does not affect it. */}
      {charge.faq?.length ? (
        <section data-bg="white" className="bg-white py-24 lg:py-32 text-navy">
          {/* D76: site search links to "#faq-<n>"; this opens it. */}
          <OpenFromHash />
          <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-16">
              <div className="max-w-2xl">
                <h2 id="common-questions" className={`scroll-mt-28 ${type.sectionHeading} ${color.heading}`}>
                  Common questions.
                </h2>
                <p className={`${space.afterHeading} ${type.lead} ${color.body}`}>
                  {copy.faqIntro}
                </p>
              </div>
              <div className="shrink-0 md:text-right">
                {ctaButton}
              </div>
            </div>
            <div className={`${space.beforeContent} border-t border-navy/15`}>
              {charge.faq.map((item, i) => (
                <details key={item.question} id={`faq-${i}`} className="group scroll-mt-28 border-b border-navy/15">
                  <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                    <h3 className={`${type.itemHeading} ${color.heading} transition-colors group-hover:text-bronze`}>
                      {item.question}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xl leading-none text-bronze transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className={`pb-6 ${type.body} ${color.body}`}>
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* D46: no sources block and no reviewer line on a tiered page, on
          client direction. Citations stay in the data and in each topic's
          collapsed statute text; owner and lastReviewed stay in the data. */}
    </>
  );
}
