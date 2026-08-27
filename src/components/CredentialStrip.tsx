import Image from "next/image";
import { credentialMarks, type Credential } from "@/lib/site";

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

/**
 * ONE DEFINITION OF HOW A MARK RENDERS, used by both layouts below. The alt-text
 * rule is the reason this is factored out rather than written twice: an
 * unconfirmed mark must never name its organisation, and a second copy of that
 * conditional is a second place for it to be got wrong.
 */
function Mark({ item, className, sizes }: { item: Credential; className: string; sizes: string }) {
  return (
    <Image
      src={item.logo!}
      alt={item.confirmed ? item.label : "Logo placeholder"}
      width={540}
      height={540}
      sizes={sizes}
      className={className}
    />
  );
}

/**
 * `marks` defaults to the firm's whole set. A bio passes that attorney's own,
 * via `attorneyMarks`, because eight marks under one person's photograph reads
 * as eight credentials belonging to that person.
 *
 * SPREAD IS DERIVED, NOT PASSED. The full row is distributed edge to edge so it
 * lines up with the cards above it, which is what it was built for. A subset
 * distributed the same way is what the client saw on a bio: two or three marks
 * flung to opposite ends of a 1,320px row with a third of a screen of white
 * between them. So the row spreads only when it is the complete set, and
 * otherwise centres on a real gap. Deriving it means a caller cannot get the
 * combination wrong, and there is no third state to reason about.
 */
export default function CredentialStrip({
  marks = credentialMarks,
  inline = false,
}: {
  marks?: Credential[];
  /**
   * Render as a plate inside a column rather than as a full-bleed band.
   *
   * WHY IT IS A LIGHT PLATE AND NOT MARKS DROPPED STRAIGHT ONTO THE NAVY. All
   * eight files are PNGs WITH TRANSPARENCY, and the artwork inside them is dark:
   * the Hillsborough County Bar seal is black line work, the board certification
   * mark sets "CRIMINAL TRIAL" in navy, and the Florida Justice Association
   * wordmark is near-black. On the navy field those do not read as understated,
   * they disappear. A credential nobody can make out is not a credential, and
   * recolouring somebody else's trademark to fit our palette is not an option
   * either. So the plate carries the light ground the marks were drawn for.
   */
  inline?: boolean;
}) {
  if (marks.length === 0) return null;

  if (inline) {
    return (
      <ul
        data-credential-plate
        className="flex flex-wrap items-center gap-x-7 gap-y-5 bg-linen px-6 py-5 sm:gap-x-9 sm:px-7 sm:py-6"
      >
        {marks.map((item, index) => (
          <li key={index} className="flex">
            {/* Smaller than the band's 72/104px because this sits in a column
                rather than across a page, and larger than the 56px the band
                started at, which was too small to read the lettering set around
                these seals' rims. */}
            <Mark item={item} className="h-14 w-auto sm:h-16" sizes="64px" />
          </li>
        ))}
      </ul>
    );
  }

  const spread = marks.length === credentialMarks.length;

  return (
    /* White band, and no borders. It carried a bottom rule so it would not
       dissolve into the white section beneath it on the section and bio pages,
       but the row of marks already reads as its own band and the rule only drew
       a seam across the page. */
    /* THE PADDING IS THE SPACING ON BOTH SIDES OF THE ROW. Nothing above or
       below this component contributes any: the hero's sweep ends on its own
       bottom edge, and the section beneath drops its top padding because it is
       white too. So these two numbers are the whole gap, which is why they are
       doubled from the py-8 lg:py-9 they started at rather than split between
       here and a neighbour. 64px, 72px from lg. */
    <div className="bg-white py-16 lg:py-18">
      {/* Below lg each item takes a quarter of the row, which lays eight marks
          out as an even 4 + 4. Left to wrap on its own the row broke 5 + 3 and
          looked accidental. Horizontal gap is zero at that size because the
          quarter-width cells already supply the spacing; adding gap on top
          would push the fourth item onto the next line. From lg the items go
          back to sizing to their own content, so a wide wordmark is never
          squeezed into a fixed column.

          FROM lg THE ROW IS justify-between, NOT justify-center. This wrapper
          is already the same max-w-[1400px] with the same px-10 as the card
          grid below it, but centring eight fixed-width marks left them
          occupying about 1,224px of a 1,320px row, so the strip sat inside the
          cards rather than lining up with them. Distributing puts the first
          mark's left edge and the last mark's right edge on the same verticals
          as the outer cards.

          gap-x-6 is a floor rather than the spacing: justify-between hands out
          the remaining space, which lands the real gaps near 70px. The floor
          only matters if a wider mark is ever added, where it stops two marks
          touching. */}
      <ul
        className={
          spread
            ? "mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-0 gap-y-8 px-6 lg:justify-between lg:gap-x-6 lg:px-10"
            : "mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-10 gap-y-8 px-6 sm:gap-x-14 lg:gap-x-16 lg:px-10"
        }
      >
        {marks.map((item, index) => (
          /* Keyed by index, NOT by label. React keys are serialised into the
             RSC flight payload embedded in the HTML, so a label key would put
             every unconfirmed organisation's name into the page even though
             nothing renders it. The list is static and never reorders. */
          <li
            key={index}
            className={
              spread
                ? "flex basis-1/4 justify-center lg:basis-auto"
                : "flex justify-center"
            }
          >
            {/*
              Marks sit at one height so they match optically regardless of
              aspect ratio, and at full opacity: on white they are not
              competing with a dark field, and this row is the one element
              whose whole job is to be recognised.

              SIZE. These were 44px, rising to 56px, which suited the flat
              placeholder squares they were built for and is far too small for
              what replaced them. Every real mark is a detailed seal with an
              organisation's name set around its rim, and at 56px that lettering
              is not legible, so the row read as eight grey circles. 72px, and
              104px from lg. Eight at 104px plus the gaps measure about 1,224px
              inside a 1,400px row, so they fit without crowding.

              Arbitrary values rather than scale steps: Tailwind has no h-18 or
              h-26, and rounding to h-16 or h-24 to stay on the scale would be
              choosing the utility over the measurement.

              OPTIMIZED NOW, and the note that used to sit here explained why
              not: they were SVGs, and the optimizer would have meant enabling
              dangerouslyAllowSVG globally. They are PNGs, 1,037KB across the
              eight, on every page that carries this strip. That reasoning
              expired when the files changed and the flag went with it.

              All eight are square, so one intrinsic ratio describes the set.
            */}
            <Mark
              item={item}
              sizes="(min-width: 1024px) 104px, 72px"
              className="h-[72px] w-auto lg:h-[104px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
