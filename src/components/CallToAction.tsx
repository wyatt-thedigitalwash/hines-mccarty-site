import Link from "next/link";
import { firm } from "@/lib/site";
import { florida } from "@/components/cases/generated/map-paths";
import OfficeBlock from "@/components/OfficeBlock";

/**
 * The closing call to action, in two tones.
 *
 * `navy` is the framed card from the home page: gradient panel, Florida
 * watermark bleeding off the right edge, bronze primary button. Used on the
 * hub pages, where the CTA is the loudest thing on a short page.
 *
 * `white` is for the deep pages, charge pages and attorney bios. Those end a
 * long read on a white surface, and dropping a navy slab at the bottom of them
 * fights the page rather than closing it. Same structure and the same two
 * actions, drawn in outline instead of fill.
 *
 * The watermark is the generated Census geometry (scripts/build-maps.mjs), not
 * the 80 KB /shapes/florida-outline.svg mask the home CTA still uses. Inline,
 * no extra request, and no unresolved licence question on that asset.
 */
const DEFAULT_BODY =
  "Consultations are confidential. If you or someone you care about has been arrested, charged, or contacted by investigators, reach out now.";

function Watermark({ tone }: { tone: "navy" | "white" }) {
  const shape = (
    <svg
      viewBox={florida.viewBox}
      className="h-full w-full"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {florida.paths.map((d) => (
        <path key={d.slice(0, 24)} d={d} />
      ))}
    </svg>
  );

  // Bronze reads on navy; on the gray card it turns muddy, so the light tone
  // tints the watermark with navy instead. D90: raised from 6% to 11%. At 6%
  // the state was barely darker than the card's own gradient and read as a
  // smudge rather than as Florida, where the navy card shows it plainly.
  const tint = tone === "navy" ? "text-bronze/20" : "text-navy/[0.11]";
  const tintLg = tone === "navy" ? "lg:text-bronze/10" : "lg:text-navy/[0.11]";

  return (
    <>
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-12 -top-4 block w-[400px] sm:w-[460px] lg:hidden ${tint}`}
      >
        {shape}
      </div>
      {/*
        SIZED TO MATCH THE HOME CTA, which is the reference. It is not the same
        numbers, because it is not the same geometry: the home card masks
        /shapes/florida-outline.svg at 800x679.2, an aspect of 1.178, while this
        draws the generated Census outline at 800x620, an aspect of 1.290. The
        Census shape is wider and shorter, so at an identical width it renders
        about 100px shorter and bleeds half as far above and below, which reads
        as the whole state floating inside the card rather than a crop through
        it.

        Measured on the home card at 1302x497: the watermark is 760x645, so its
        height is 1.30x the card's and it overflows 127px to the right, about
        9.7 percent of the card width. 780px here reproduces both against this
        card, and -right-32 is 128px.

        Match the RATIOS rather than the pixel values if either card's padding
        changes again.
      */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-32 top-1/2 hidden w-[700px] -translate-y-1/2 lg:block lg:w-[780px] ${tintLg}`}
      >
        {shape}
      </div>
    </>
  );
}

export default function CallToAction({
  heading,
  body = DEFAULT_BODY,
  tone = "navy",
}: {
  heading: string;
  body?: string;
  tone?: "navy" | "white";
}) {
  const isNavy = tone === "navy";

  return (
    <section
      data-bg={isNavy ? "navy" : "white"}
      className={`py-20 lg:py-28 ${isNavy ? "bg-navy" : "bg-white"}`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/*
          Both tones are the same idea: the card sits one step off its own
          background so it reads as an object rather than as a bordered region
          of the page. Navy uses a lighter navy gradient on navy. White uses a
          cool gray gradient on white, mixed from the navy token rather than
          from linen, because service pages are white-only and cream would
          reintroduce the tint that was deliberately removed from them.

          navy at 5.5% over white lands near #f2f2f4, which is the gray in the
          reference, and it stays in the palette instead of adding a color.
        */}
        <div
          className={`relative overflow-hidden p-10 sm:p-14 lg:p-16 ${
            isNavy
              ? "border border-white/10 bg-gradient-to-br from-navy-700 to-navy"
              : "border border-navy/10 bg-gradient-to-br from-navy/[0.055] to-navy/[0.02]"
          }`}
        >
          <Watermark tone={tone} />

          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h2
                className={`font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl ${
                  isNavy ? "font-extrabold text-linen" : "font-extrabold text-navy"
                }`}
              >
                {heading}
              </h2>
              <p
                className={`mt-6 max-w-lg text-lg leading-relaxed ${
                  isNavy ? "text-linen/70" : "text-charcoal"
                }`}
              >
                {body}
              </p>

              {/* D90: on a phone the two buttons stack, full width. */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                {/* Bronze fill with navy text measures 7.07:1, so the primary
                    action is identical in both tones. */}
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center bg-bronze px-7 py-4 font-display text-lg font-bold text-navy transition-colors hover:bg-bronze-soft sm:w-auto"
                >
                  Request a consultation
                </Link>
                <a
                  href={firm.phoneHref}
                  className={`inline-flex w-full items-center justify-center border px-7 py-4 font-display text-lg font-bold transition-colors sm:w-auto ${
                    isNavy
                      ? "border-linen/25 text-linen hover:border-bronze hover:text-bronze"
                      : "border-navy/30 text-navy hover:border-bronze hover:text-bronze"
                  }`}
                >
                  Call {firm.phone}
                </a>
              </div>
            </div>

            {/* Renders every published office, so Tampa appears here the moment
                its address is confirmed. The number is already above, hence
                showPhone={false}. */}
            <div
              className={`pt-8 lg:border-t-0 lg:pl-12 lg:pt-0 ${
                isNavy
                  ? "border-t border-white/10 lg:border-l"
                  : "border-t border-navy/15 lg:border-l"
              }`}
            >
              <OfficeBlock
                tone={isNavy ? "dark" : "light"}
                showPhone={false}
                className="grid gap-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
