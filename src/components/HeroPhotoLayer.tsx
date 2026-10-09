import Image from "next/image";

/**
 * The photograph inside a navy hero. Right-hand 58% from lg, full-bleed band
 * under the copy below it.
 *
 * IT IS ONE ELEMENT IN BOTH LAYOUTS, not a desktop copy and a mobile copy. The
 * wrapper is static and in flow on a phone, where sitting after the content in
 * the DOM puts it below the copy, and absolutely positioned from lg, where
 * being out of flow puts it on the right and DOM order stops mattering.
 * Rendering it twice behind `hidden` and `lg:hidden` would mean two <Image>
 * tags, two srcsets, and one of them always the stale one.
 *
 * ITS HOST MUST CARRY `relative isolate overflow-hidden` AND PUT ITS CONTENT ON
 * z-10. Without the isolate the absolute layer can climb over copy elsewhere on
 * the page, and without the z-10 it covers the heading it is meant to sit
 * behind. Two heroes use this now, PageHero and InjuryTemplate, which is why
 * the requirement is written down rather than remembered.
 *
 * ALT IS EMPTY, DELIBERATELY. The photograph carries no information the copy
 * does not: it is a mood, not a fact. WCAG H67 is explicit that decorative
 * images take alt="" so assistive technology skips them. This is the one place
 * the project's "every image needs alt text" rule resolves to an empty string
 * rather than a sentence.
 */

export type HeroPhoto = {
  /** Path under /public. */
  src: string;
};

export default function HeroPhotoLayer({ photo }: { photo?: HeroPhoto }) {
  if (!photo) return null;

  return (
    <div
      aria-hidden="true"
      data-hero-photo
      className="pointer-events-none relative h-64 w-full sm:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[58%]"
    >
      {/* priority, because this is always above the fold. Next defaults an
          <Image> to loading="lazy", which for a hero means the browser will
          not start the request until layout says it is needed, and on desktop
          this image covers 58% of the first screen. It is the most likely LCP
          element on every page that has one. */}
      <Image
        src={photo.src}
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 58vw, 100vw"
        className="object-cover"
      />
      {/*
        The fade changes axis with the layout, because the edge that needs
        hiding moves. On a phone the band sits UNDER the copy, so the join is
        its top edge and the wash runs down; the via stop is light because
        there is no text over the image to keep legible, only a seam to lose.
        From lg the image is BESIDE the copy, so the join is its left edge and
        the wash runs across, heavier through the middle where a wide screen
        lets the copy reach.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/20 to-transparent lg:bg-gradient-to-r lg:via-navy/70" />
      {/* D85: from lg the photo runs up behind the transparent header, and a
          bright sky made the phone number and icons hard to read. A navy wash
          down the top edge gives the header the same ground as a plain navy
          hero, fading out before the subject of the photo. */}
      <div className="absolute inset-x-0 top-0 hidden h-40 bg-gradient-to-b from-navy/90 via-navy/50 to-transparent lg:block" />
    </div>
  );
}
