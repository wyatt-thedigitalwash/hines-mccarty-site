import Image from "next/image";
import type { ReactNode } from "react";

/**
 * The navy hero at the top of a main page: heading, intro copy, and an optional
 * photograph bled into the right side of the field.
 *
 * WHAT THIS REPLACED. The same twenty lines of markup copied into seven page
 * files. They had already drifted: /cases-we-defend carried its padding on the
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
 * FROM lg ONLY. Below that the text takes the whole width, and an image behind
 * it would either sit under the copy, where it costs contrast on the one block
 * of text the page exists to deliver, or shrink to a strip too narrow to read
 * as a photograph.
 *
 * ALT IS EMPTY, DELIBERATELY. The photograph carries no information the copy
 * does not: it is a mood, not a fact. WCAG H67 is explicit that decorative
 * images take alt="" so assistive technology skips them, and describing the
 * Tampa skyline to someone who came to read about a charge is noise, not
 * access. This is the one place the project's "every image needs alt text" rule
 * resolves to an empty string rather than a sentence.
 */

/**
 * The photograph the main pages currently share.
 *
 * IT IS TAMPA, which is the whole reason it is the one being used. The other
 * four images in /public/backgrounds are a shelf of GERMAN statute books (NJW,
 * BGB, StGB, ZPO) and the gilded Justice on the Old Bailey in London, which are
 * stock photographs of somebody else's legal system. This one is the downtown
 * skyline from across the river: Rivergate Tower, Bank of America Plaza, 100 N
 * Tampa, the Sticks of Fire sculpture. It is still a stock photograph and it is
 * still the same picture on every page, but it is at least the city the firm
 * practises in.
 *
 * ONE CONSTANT RATHER THAN SEVEN LITERALS so that replacing it with real
 * photography, or splitting it per page, is one edit and not a search.
 */
export const HERO_PHOTO: HeroPhoto = { src: "/backgrounds/yes3.jpg" };

export type HeroPhoto = {
  /** Path under /public. */
  src: string;
  /** How wide the image sits, as a percentage of the section. */
  width?: string;
};

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
};

export default function PageHero({ title, children, photo, bleed }: Props) {
  return (
    <section
      data-bg="navy"
      data-hero
      className="relative isolate overflow-hidden bg-navy pt-36 lg:pt-44"
    >
      {photo ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block"
          style={{ width: photo.width ?? "58%" }}
          data-hero-photo
        >
          <Image
            src={photo.src}
            alt=""
            fill
            sizes="58vw"
            className="object-cover"
          />
          {/* Left-to-right: opaque navy, then gone. The via stop keeps the
              wash over the middle of the image, where the copy's right edge
              can reach on a wide screen, without flattening the far side. */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent" />
        </div>
      ) : null}

      {/*
        lg:min-h-[380px] IS WHAT MAKES EVERY HERO THE SAME HEIGHT. Measured in
        the browser at 1024, 1280, 1440 and 1920, the seven heroes ran from
        457px to 567px, a 110px spread with no pattern to it beyond how much
        copy each page happened to have.

          attorneys       521      results     457
          personal-injury 551      resources   457
          about           567      contact     527

        The floor is 380px of CONTENT, which is the tallest of them once the
        176px of pt-44 comes off, so nothing is squeezed and nothing is cut.
        Every one of these pages now measures 556px. It holds at all four
        widths because max-w-4xl and max-w-2xl cap the text, so no heading
        re-wraps between 1024 and 1920 and the number cannot drift.

        CONTENT STAYS TOP-ALIGNED rather than centring in the taller box. Every
        h1 then starts at the same y on every page, which is the consistency a
        reader actually perceives moving between them; the slack falls to the
        bottom, where it reads as room rather than as a different layout.

        lg ONLY. A phone hero is as tall as its copy, because there the height
        is the copy and padding a short one out would just be scroll.

        /cases-we-defend is taller than 556 and correctly so: it carries the
        credential strip on its bottom edge, which no other hero does.
      */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-20 lg:min-h-[380px] lg:px-10 lg:pb-24">
        <h1 className="max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-linen sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <div className="mt-8 max-w-2xl text-lg leading-relaxed text-linen/70">
          {children}
        </div>
      </div>

      {bleed ? <div className="relative z-10">{bleed}</div> : null}
    </section>
  );
}
