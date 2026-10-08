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

      The strip now owns the space on both of its sides. If the gap around the
      marks needs changing, change it there, in CredentialStrip's own py; there
      is no second value here to keep in step with it.
    */
    <section data-bg="light" className="bg-white pb-24 text-navy lg:pb-32">
      {/*
        ONE GRID FOR THE WHOLE SECTION, because the Our Firm button belongs in
        two different places at two different widths and this is what lets it be
        ONE link rather than two.

        From md it is a two-column grid: heading at row 1 column 1, the button
        at row 1 column 2, the cards spanning both at row 2. Below md it is a
        single column in DOM order, which is heading, cards, button.

        The DOM order IS the mobile order, deliberately. The alternative was to
        render the button twice, `hidden md:inline-flex` in the header and
        `md:hidden` under the cards, which works and is common and puts two
        links to /about in the markup, one of them permanently invisible. A
        second copy of a thing is a second thing to keep correct, and an
        invisible one is the copy nobody notices has gone stale. Explicit grid
        placement moves the single link instead.
      */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 px-6 md:grid-cols-[1fr_auto] md:gap-x-12 lg:px-10">
        {/*
          THE SAME HEADER AS THE PRACTICES SECTION, on purpose, so the two
          section openings on this page are one pattern rather than two:
          heading at text-4xl sm:text-5xl on a 1.05 line, copy at text-lg with
          mt-6. It briefly went full-width and centred; matching Practices is
          what replaced that.

          Three values differ from Practices. Colour, because that section is
          on navy and this one is on white. space-y-5, because this copy is two
          paragraphs where that is one. And the measure: max-w-3xl here against
          its max-w-2xl, because 672px was a narrow column for two paragraphs.
          768px is still a comfortable measure at text-lg, around 85 characters.

          THE HEADING LOSES ITS lg:text-6xl. Practices tops out at sm:text-5xl,
          and leaving this one a step larger is exactly the near-miss that makes
          a page look assembled: not different enough to read as a hierarchy,
          different enough to notice.
        */}
        <div className="max-w-3xl md:col-start-1 md:row-start-1">
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            A partnership, not a single name on the door.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-charcoal">
            <p>
              Hines McCarty Pavlidis is a Brandon firm built around four attorneys
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

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:col-span-2 md:row-start-2 lg:mt-16 lg:grid-cols-4">
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
                <p className="mt-2 font-heading text-xs uppercase tracking-wide text-navy/70 sm:text-sm">
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

        {/*
          OUR FIRM, and it goes to /about. It is now the only button in the
          section: a "Meet the attorneys" button sat here pointing at
          /attorneys, and it went with the cards above it, which are themselves
          four links to the four bios it was offering to take a reader to.
          /attorneys is still one click away in the nav and in the footer.

          LAST IN THE DOM, WHICH IS WHERE IT RENDERS ON A PHONE: under the
          cards, centred, with mt-12 of its own. From md the explicit row and
          column placement lifts it into the header row, right-aligned and sat
          on the last line of the copy's baseline rather than centred against a
          two-paragraph block. mt-0 there because the header row supplies the
          spacing.
        */}
        <Link
          href="/about"
          className="mt-12 inline-flex shrink-0 items-center justify-self-center border border-navy px-8 py-4 font-display text-lg transition-colors hover:border-bronze hover:text-bronze md:col-start-2 md:row-start-1 md:mt-0 md:self-end md:justify-self-end"
        >
          Our Firm
        </Link>
      </div>
    </section>
  );
}
