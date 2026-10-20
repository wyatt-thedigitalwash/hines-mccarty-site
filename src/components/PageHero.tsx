import type { ReactNode } from "react";
import HeroPhotoLayer, { type HeroPhoto } from "@/components/HeroPhotoLayer";

/**
 * The navy hero at the top of a main page: heading, intro copy, and an optional
 * photograph bled into the right side of the field.
 *
 * WHAT THIS REPLACED. The same twenty lines of markup copied into seven page
 * files. They had already drifted: /criminal-defense carried its padding on the
 * content wrapper rather than the section so the credential strip beneath it
 * could run full bleed, /about used lg:pb-28 where the rest used lg:pb-24, and
 * a change to the hero meant seven edits and a memory of which files had one.
 *
 * THE PHOTO IS A BACKGROUND, NOT A COLUMN. It occupies the right side of the
 * section and is blended into the navy with a horizontal gradient rather than
 * being boxed beside the text. Two reasons: the copy keeps the full width it
 * had, so no heading has to re-wrap to make room, and the seam between image
 * and field disappears instead of becoming an edge the eye has to explain.
 *
 * The gradient runs from opaque navy at the image's left edge to nothing at the
 * right. Opaque at the left is what hides the seam; anything less and the
 * image's own left edge shows through as a vertical line.
 *
 * ON A PHONE IT MOVES INSTEAD OF DISAPPEARING. It was hidden below lg, which
 * is the easy answer and the wrong one: the photograph is the only image on
 * these pages, and dropping it left every hub hero on a phone as a navy
 * rectangle of text. Below lg it becomes a full-bleed band under the copy,
 * with the gradient turned to run down from the navy instead of across it, so
 * the join is still a fade rather than a line.
 *
 * IT IS ONE ELEMENT IN BOTH LAYOUTS, not a desktop copy and a mobile copy. The
 * wrapper is static and in flow on a phone, where DOM order after the content
 * puts it below the copy, and absolutely positioned from lg, where being out of
 * flow puts it on the right and DOM order stops mattering. Rendering it twice
 * would have meant two <Image> tags, two srcsets, and one of them always the
 * stale one.
 *
 * ALT IS EMPTY, DELIBERATELY. The photograph carries no information the copy
 * does not: it is a mood, not a fact. WCAG H67 is explicit that decorative
 * images take alt="" so assistive technology skips them, and describing the
 * Tampa skyline to someone who came to read about a charge is noise, not
 * access. This is the one place the project's "every image needs alt text" rule
 * resolves to an empty string rather than a sentence.
 */

type Props = {
  title: ReactNode;
  /** Intro copy, and anything that belongs under it such as a call button. */
  children: ReactNode;
  photo?: HeroPhoto;
  /**
   * Full-bleed content on the hero's bottom edge, inside the navy but outside
   * the padded container. The credential strip is the only user of this.
   */
  bleed?: ReactNode;
  /**
   * The hero's call button, under the intro copy. The same button as the
   * charge pages' hero: full width on a phone, where it is the thumb target,
   * its own width from sm.
   */
  cta?: { label: string; href: string };
};

export default function PageHero({ title, children, photo, bleed, cta }: Props) {
  return (
    <section
      data-bg="navy"
      data-hero
      className="relative isolate overflow-hidden bg-navy pt-36 lg:pt-44"
    >
      {/*
        lg:min-h-[467px] IS WHAT MAKES EVERY HERO THE SAME HEIGHT. Measured in
        the browser at 1024, 1280, 1440 and 1920, the seven heroes ran from
        457px to 567px, a 110px spread with no pattern to it beyond how much
        copy each page happened to have.

          attorneys       521      results     457
          personal-injury 551      resources   457
          about           567      contact     527

        The floor is 380px of CONTENT, which is the tallest of them once the
        176px of pt-44 comes off, so nothing is squeezed and nothing is cut.
        Every one of these pages now measures 556px.

        D87: RAISED TO 467px, so every hero measures 643px. The hero call
        button (D86) took Personal Injury's content to 467px and Attorneys' to
        437px, and About had already grown to 433px, so the heroes ran from
        556px to 643px again. The floor is the tallest content once more. It holds at all four
        widths because max-w-4xl and max-w-2xl cap the text, so no heading
        re-wraps between 1024 and 1920 and the number cannot drift.

        CONTENT STAYS TOP-ALIGNED rather than centring in the taller box. Every
        h1 then starts at the same y on every page, which is the consistency a
        reader actually perceives moving between them; the slack falls to the
        bottom, where it reads as room rather than as a different layout.

        lg ONLY. A phone hero is as tall as its copy, because there the height
        is the copy and padding a short one out would just be scroll.

        /criminal-defense is taller than 556 and correctly so: it carries the
        credential strip on its bottom edge, which no other hero does.
      */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-20 lg:min-h-[467px] lg:px-10 lg:pb-24">
        <h1 className="max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-linen sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <div className="mt-8 max-w-2xl text-lg leading-relaxed text-linen/70">
          {children}
        </div>
        {cta ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <a
              href={cta.href}
              className="inline-flex w-full items-center justify-center bg-bronze px-7 py-4 font-heading text-base font-semibold tabular-nums text-navy transition-colors hover:bg-bronze-soft sm:w-auto"
            >
              {cta.label}
            </a>
            {/* D135: availability beside the button; under it on a phone. */}
            <p className="font-heading text-sm font-medium text-linen/80">Available 24/7 · Free consultation</p>
          </div>
        ) : null}
      </div>

      <HeroPhotoLayer photo={photo} />

      {bleed ? <div className="relative z-10">{bleed}</div> : null}
    </section>
  );
}
