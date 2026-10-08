import CredentialStrip from "@/components/CredentialStrip";
import { firm } from "@/lib/site";

/**
 * Home hero.
 *
 * The video runs full bleed behind the headline rather than being silhouetted
 * into the two overlapping arches the mask used to cut. The arch treatment is
 * gone; nothing else on the site used it.
 *
 * The bottom edge is an ellipse clip rather than a straight line, so the
 * footage sweeps into solid navy instead of stopping dead. It is a clip on the
 * media layer only, which keeps the headline and the three blocks out of it:
 * clipping the whole section would cut the text at the same curve.
 *
 * Legibility comes from two stacked scrims, not from one flat overlay. A single
 * uniform wash either washes out the footage or leaves the headline sitting on
 * whatever happens to be behind it that second.
 */
export default function Hero() {
  return (
    <section data-bg="white" className="relative bg-white">
      <div className="relative">
        {/* Media layer. Clipped, so the section's own white shows below the
            sweep: the wedges the ellipse leaves at the bottom corners are the
            page background, not a band of navy. The video's bottom scrim stays
            partly navy on purpose, because the curve is only visible where dark
            footage meets that white.

            The radius is per breakpoint because the depth of the dip is set by
            the ratio of the ellipse's x-radius to the element width, and the
            hero is roughly twice as tall on a phone as it is wide. One radius
            cannot serve both: at 95% the drop is 15% of the height, which is a
            restrained sweep on a wide desktop hero and an enormous bowl on a
            tall narrow one. Widening the radius to 150% on small screens
            flattens it to about 6% while keeping the same curve family. */}
        <div className="absolute inset-0 overflow-hidden [clip-path:ellipse(150%_100%_at_50%_0%)] lg:[clip-path:ellipse(95%_100%_at_50%_0%)]">
          {/* Shows while the video loads, and stays put for anyone who has
              asked for reduced motion. */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-charcoal to-navy" />

          <video
            className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source
              src="https://res.cloudinary.com/dgbiatexy/video/upload/v1784816947/HinesLaw_Hero2_kqhs7w.mp4"
              type="video/mp4"
            />
          </video>

          {/* Horizontal scrim: heaviest under the copy, clearing toward the
              right so the footage is still readable as footage. */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/35" />
          {/* Vertical scrim. Deliberately does NOT reach full navy at the
              bottom: fading the footage out before the cut made the curve
              invisible, which defeated the point of curving it. */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/15 to-navy/55" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 pt-36 pb-32 lg:px-10 lg:pt-48 lg:pb-48">
          <div className="max-w-5xl">
            {/* Two stacked lines, both left aligned. Uppercased in CSS rather
                than in the source so the text stays readable to anything
                reading the markup, and tracked slightly open because Cormorant
                set in all caps at this size closes up without it.

                The wrapper is max-w-5xl rather than the 3xl it was: at 3xl the
                first line broke after "AGGRESSIVE" and the heading rendered as
                three lines instead of two. The paragraph keeps its own narrower
                measure, so only the heading got wider. */}
            <h1 className="font-display text-4xl font-extrabold uppercase leading-[1.08] tracking-[0.01em] text-linen sm:text-5xl lg:text-6xl">
              <span className="block">Aggressive Representation</span>
              <span className="block text-bronze">Defending Your Future</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-linen/80">
              If you have been arrested, are under investigation, or have been
              hurt in a collision, you need straight answers before anything
              else. Hines &amp; McCarty defends state charges in Hillsborough
              County and federal cases in the Middle District of Florida, and
              handles injury claims on the other side of the same courthouse.
              We prepare every case as if it will be tried, because the other
              side treats a firm differently when they know it will.
            </p>
            <a
              href={firm.phoneHref}
              className="mt-10 inline-flex items-center self-start bg-bronze px-7 py-4 font-display text-lg font-bold text-navy transition-colors hover:bg-bronze-soft"
            >
              Call {firm.phone}
            </a>
          </div>
        </div>
      </div>

      {/*
        Credential strip sitting flush on the hero's bottom edge, replacing the
        three navigation blocks that used to sit here. Those links all exist in
        the header and the footer, so nothing became unreachable, but the home
        page did lose three internal links to /attorneys, /cases-we-defend, and
        /resources.
      */}
      <CredentialStrip />
    </section>
  );
}
