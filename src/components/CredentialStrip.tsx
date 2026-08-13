import Image from "next/image";
import { credentialMarks } from "@/lib/site";

/**
 * The credential strip on the bottom edge of a navy hero: home, the section
 * hero, and the individual bios.
 *
 * STATIC, NOT A MARQUEE. A handful of marks fit on one row, so there is nothing
 * to scroll. A ticker is a solution to overflow, and using one without overflow
 * costs something real: motion beside an autoplaying hero video competes with
 * it, only part of the set is legible at any moment, and a moving row of marks
 * reads as advertising rather than as a record. Showing them all at rest is
 * both the stronger signal and the simpler component. It also removes the
 * WCAG 2.2.2 obligation entirely rather than satisfying it, which is why there
 * is no longer a pause affordance or a reduced-motion branch to maintain.
 *
 * MARKS ONLY, NO TEXT. The three courts are not here; they can never take a
 * mark and reading as a row of names beside a row of logos made the strip look
 * unfinished. They are stated in prose on the home and section pages and in the
 * Bar admission and Courts fields on each bio. An unconfirmed mark renders as
 * an UNLABELLED placeholder square with generic alt text, so the strip has its
 * full width without the page naming a certification or membership the firm has
 * not established. See `credentialMarks` in src/lib/site.ts.
 */
export default function CredentialStrip() {
  if (credentialMarks.length === 0) return null;

  return (
    /* White band, and no borders. It carried a bottom rule so it would not
       dissolve into the white section beneath it on the section and bio pages,
       but the row of marks already reads as its own band and the rule only drew
       a seam across the page. */
    <div className="bg-white py-8 lg:py-9">
      {/* Below lg each item takes a quarter of the row, which lays eight marks
          out as an even 4 + 4. Left to wrap on its own the row broke 5 + 3 and
          looked accidental. Horizontal gap is zero at that size because the
          quarter-width cells already supply the spacing; adding gap on top
          would push the fourth item onto the next line. From lg the items go
          back to sizing to their own content, so a wide wordmark is never
          squeezed into a fixed column. */}
      <ul className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-0 gap-y-8 px-6 lg:gap-x-20 lg:px-10">
        {credentialMarks.map((item, index) => (
          /* Keyed by index, NOT by label. React keys are serialised into the
             RSC flight payload embedded in the HTML, so a label key would put
             every unconfirmed organisation's name into the page even though
             nothing renders it. The list is static and never reorders. */
          <li key={index} className="flex basis-1/4 justify-center lg:basis-auto">
            {/* Marks sit at one height so they match optically regardless of
                aspect ratio, and at full opacity: on white they are not
                competing with a dark field, and this row is the one element
                whose whole job is to be recognised. unoptimized because these
                are SVGs, and routing them through the image optimizer would
                mean turning dangerouslyAllowSVG on globally, which is not worth
                it for a few small marks. */}
            <Image
              src={item.logo!}
              alt={item.confirmed ? item.label : "Logo placeholder"}
              width={200}
              height={200}
              unoptimized
              className="h-11 w-auto lg:h-14"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
