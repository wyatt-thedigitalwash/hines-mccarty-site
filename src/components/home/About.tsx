import Link from "next/link";
import Portrait from "@/components/attorneys/Portrait";
import Needs from "@/components/Needs";
import { attorneys } from "@/lib/site";

/**
 * The firm section on the home page: heading, copy, then the four attorneys.
 *
 * WHAT THIS REPLACED. A two-column split with a stock photograph bleeding off
 * the right edge. The photograph was `mock-team-photo2.jpg`, a stock image of
 * three people who do not work here, sitting under a sign reading CRIMSON LAW
 * FIRM. On a page about a four-attorney firm whose whole argument is that you
 * get the person who knows your kind of case, a stock photo of strangers was
 * the weakest thing available. The attorneys are the illustration.
 *
 * THE CARDS ARE THE ONES FROM /attorneys, deliberately identical: same border,
 * same 4:5 portrait, same name, role, concentration and Read bio. Two surfaces
 * showing the same four people in two different card designs is how a site
 * starts looking assembled rather than designed.
 *
 * Four across from lg, two by two everywhere below it, including a phone. There
 * is no one-up breakpoint: a single column turned four attorneys into four
 * full-width blocks and roughly three screens of scrolling, which buries the
 * fourth and makes the point of the section (there are four of us) something
 * you have to scroll to discover rather than see.
 *
 * Two columns on a 360px phone leaves each card near 160px wide, so the padding
 * and type step down below sm. The `sizes` hint follows the same breakpoints so
 * a phone fetches a half-width portrait rather than a 20rem one.
 */
export default function About() {
  return (
    /*
      NO TOP PADDING, ON PURPOSE. What sits above this on the home page is the
      credential strip, which is white, on a hero section that is also white.
      Three consecutive white bands, so the house rule in CLAUDE.md applies:
      when two consecutive sections share a background, the second drops its
      top padding rather than stacking a second gap on the first one.

      It was py-24 lg:py-32, and the two gaps around the logos came out wildly
      unequal because only one of them was a single value. Above the marks was
      the strip's own py-9, 36px. Below them was the strip's py-9 plus this
      section's py-32, 164px, which read as the logos having been pushed up
      against the sweep with the rest of the screen left empty.

      The strip now owns the space on both of its sides, so the gap is 36px
      above and 36px below at lg, 32px at every smaller width, and the row of
      marks reads as one band rather than as the tail of the hero.
    */
    <section data-bg="light" className="bg-white pb-24 text-navy lg:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            A partnership, not a single name on the door.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-charcoal">
            <p>
              Hines &amp; McCarty is a Brandon firm built around four attorneys
              who each concentrate on different areas. When a case comes in, it
              goes to the person who knows that kind of case, not to whoever is
              available.
            </p>
            <p>
              That structure is why so much of the firm&apos;s work arrives by
              referral, from former clients and from other lawyers who send the
              matters they do not handle themselves.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:mt-16 lg:grid-cols-4">
          {attorneys.map((attorney) => (
            <li key={attorney.slug}>
              <Link
                href={`/attorneys/${attorney.slug}`}
                className="group flex h-full flex-col border border-navy/20 p-4 transition-colors hover:border-navy sm:p-6"
              >
                <Portrait
                  attorney={attorney}
                  className="aspect-4/5 w-full"
                  sizes="(min-width: 1024px) 20rem, 45vw"
                />

                <h3 className="mt-4 font-display text-xl leading-tight transition-colors group-hover:text-bronze sm:mt-6 sm:text-2xl lg:text-3xl">
                  {attorney.name}
                </h3>

                {/* No role label renders until the client confirms it, same
                    rule as the attorneys index. */}
                <p className="mt-2 font-heading text-xs uppercase tracking-wide text-navy/50 sm:text-sm">
                  {attorney.role ?? <Needs>role and title</Needs>}
                </p>

                <p className="mt-3 flex-1 text-sm leading-snug text-navy/65 sm:mt-4">
                  {attorney.concentration ?? (
                    <Needs>one-line concentration</Needs>
                  )}
                </p>

                <span className="mt-4 inline-block font-heading text-sm font-medium text-navy underline decoration-1 underline-offset-4 transition-colors group-hover:text-bronze sm:mt-6">
                  Read bio
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/attorneys"
          className="mt-12 inline-flex items-center border border-navy px-8 py-4 font-display text-lg transition-colors hover:border-bronze hover:text-bronze"
        >
          Meet the attorneys
        </Link>
      </div>
    </section>
  );
}
