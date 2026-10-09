import Link from "next/link";
import { firm, primaryOffice, serviceAreas } from "@/lib/site";
import LocationsMap from "./LocationsMap";

/**
 * Where the firm appears.
 *
 * THE HEADING IS NOT "OUR LOCATIONS", AND THAT IS DELIBERATE. The reference
 * design this was modelled on is a locations section for a firm with seven
 * offices. Hines McCarty Pavlidis has one. Under Rule 4-7.12 a firm may not advertise
 * a place as an office unless it is a bona fide office, so this section is
 * about where cases are handled, and the single office is stated separately and
 * plainly. See docs/build/LOCATIONS-MAP-PLAN.md Section 2.
 *
 * The map bleeds off the top, right, and bottom and dissolves into the page on
 * its left edge, so it reads as ground rather than as an embedded widget. That
 * dissolve is the one detail worth taking wholesale from the reference.
 */
export default function Locations() {
  return (
    <section data-bg="white" className="relative overflow-hidden bg-white py-20 text-navy lg:min-h-[44rem] lg:py-28">
      {/* Desktop map. Absolute so it can bleed vertically. Below lg it is a
          separate block above the copy (below), because a background map
          behind body text at that width is unreadable. */}
      {/* The dissolve is a mask on this panel rather than an overlay drawn on
          top of it, so it fades the map to the page instead of painting white
          over it, and it works whatever the map's own colours are. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] [mask-image:linear-gradient(to_right,transparent_0%,black_22%)] lg:block"
      >
        <LocationsMap />
      </div>

      {/* Phone and tablet map (D92). First in the section, edge to edge,
          starting right at the navy section above, and fading into the page
          at the bottom so it reads as ground rather than a boxed picture.
          The negative margin takes it up through the section's top padding.
          Only the service areas and the office are named at this size. */}
      <div
        aria-hidden="true"
        className="pointer-events-none -mt-20 mb-6 h-[26rem] w-full [mask-image:linear-gradient(to_bottom,black_84%,transparent)] sm:mb-10 sm:h-[32rem] lg:hidden"
      >
        <LocationsMap variant="mobile" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="lg:max-w-[46%]">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Where we appear.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal">
            {firm.name} is one office in {primaryOffice.city}, not a chain of
            them. State charges are defended in Hillsborough County, and federal
            cases across the Middle District of Florida, which reaches from
            Orlando down through Fort Myers and Naples.
          </p>

          {/* The real text equivalent of the map, at every breakpoint. The map
              itself is aria-hidden, so this list is what a screen reader gets,
              and it is also the only reason these city names exist in the HTML
              at all. A raster map puts none of them there. */}
          <ul className="mt-10 grid max-w-xl grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
            {serviceAreas.map((area) => (
              <li
                key={area.key}
                className="flex items-baseline gap-2.5 whitespace-nowrap font-heading text-sm text-navy/80"
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 translate-y-[-1px] rounded-full bg-bronze"
                />
                {area.label}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-xl text-sm leading-relaxed text-navy/60">
            These are the areas the firm practices in. The office is in{" "}
            {primaryOffice.city}.
          </p>

          {/* D89: the call button beside "Talk to the firm"; stacked and full
              width on a phone. */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center bg-navy px-7 py-4 font-display text-lg font-bold text-linen transition-colors hover:bg-navy-700 sm:w-auto"
            >
              Talk to the firm
            </Link>
            <a
              href={firm.phoneHref}
              className="inline-flex w-full items-center justify-center bg-bronze px-7 py-4 font-display text-lg font-bold text-navy transition-colors hover:bg-bronze-soft sm:w-auto"
            >
              Call {firm.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
