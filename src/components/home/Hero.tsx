import CredentialStrip from "@/components/CredentialStrip";
import { firm } from "@/lib/site";
import { HOME_HERO_VIDEO } from "@/lib/hero-photos";

/**
 * Home hero (D121).
 *
 * STRAIGHT BOTTOM EDGE. It was an ellipse clip, the only curved edge on the
 * site, and a curve over video cuts the footage at an odd angle.
 *
 * LEFT ALIGNED, like every other hero, so the call button sits where it does
 * on every page and the copy reads against a solid navy fade while the video
 * shows on the right, where nothing sits on top of it.
 *
 * THE VIDEO is optional (HOME_HERO_VIDEO). It plays muted and inline, shows
 * its poster first, and is hidden for reduced motion, leaving the still.
 */
export default function Hero() {
  const video = HOME_HERO_VIDEO;
  return (
    <section data-bg="white" className="relative bg-white">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          {/* Shows while the video loads, and for reduced motion. */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy to-navy" />
          {video.poster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={video.poster} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
          ) : null}
          {video.src ? (
            <video
              className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={video.poster}
              aria-hidden="true"
              tabIndex={-1}
            >
              <source src={video.src} type="video/mp4" />
            </video>
          ) : null}

          {/* Navy from the left: solid under the copy, opening toward the
              right so the footage reads as footage. A light top and bottom
              wash keeps the header and the edge clean. */}
          {/* Below lg the copy spans the full width, so the wash is even
              and stronger rather than opening toward the right. */}
          <div className="absolute inset-0 bg-navy/80 lg:hidden" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-navy via-navy/80 to-navy/30 lg:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-transparent to-navy/40" />
          {/* D133: a solid navy band behind the see-through header, fading
              out below it, so the nav never sits on bright footage. */}
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-navy via-navy/85 to-transparent lg:h-56" />
        </div>

        {/* D122: from lg the hero is most of the screen (85vh, with a floor
            so a short laptop window still fits the copy) and the copy is
            centred in it, clear of the header, to give the video room. */}
        <div className="relative mx-auto flex max-w-[1400px] flex-col justify-center px-6 pt-36 pb-24 lg:min-h-[max(85vh,640px)] lg:px-10 lg:pt-32 lg:pb-20">
          <div className="max-w-5xl">
            {/* Sentence case in the display serif, one weight; the second
                line in gold italic carries the contrast the all-caps
                two-tone used to (client choice). */}
            <h1 className="font-display font-semibold text-5xl leading-[1.1] tracking-tight text-linen sm:text-6xl lg:text-7xl 2xl:text-8xl">
              <span className="block">Aggressive representation.</span>
              <span className="block italic text-bronze">Defending your future.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-linen/80">
              We defend state and federal criminal cases, handle injury claims for
              people hurt in collisions, and litigate disputes for businesses and
              their owners. Every case is prepared as if it will be tried.
            </p>
            {/* D135: availability beside the button; under it on a phone. */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <a
                href={firm.phoneHref}
                className="inline-flex w-full items-center justify-center bg-white px-7 py-4 font-heading text-base font-semibold tabular-nums text-navy transition-colors hover:bg-linen sm:w-auto"
              >
                Call {firm.phone}
              </a>
              <p className="text-center font-heading text-sm font-medium text-linen/80 sm:text-left">Available 24/7 · Free consultation</p>
            </div>
          </div>
        </div>
      </div>

      {/*
        Credential strip sitting flush on the hero's bottom edge, replacing the
        three navigation blocks that used to sit here. Those links all exist in
        the header and the footer, so nothing became unreachable, but the home
        page did lose three internal links to /attorneys, /criminal-defense, and
        /resources.
      */}
      <CredentialStrip />
    </section>
  );
}
