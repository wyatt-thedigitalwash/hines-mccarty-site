import Link from "next/link";
import { attorneysHandlingCharge, attorneysLeadingPractice } from "@/lib/site";
import Portrait from "./Portrait";
import { color, space, type } from "@/components/cases/ui";

/**
 * The reciprocal of the practice-areas list on a bio page: the attorneys who
 * handle a given practice area, linking back to their bios.
 *
 * Drop this into each practice page (`/criminal-defense/state`,
 * `/criminal-defense/federal`, `/criminal-defense/white-collar`) once those pages exist.
 * It renders nothing when no attorney is mapped to the href, so it is safe to
 * place before the attorney-to-practice mapping is confirmed
 * (WEBSITE-PLAN.md Open Question 2).
 *
 * Usage: <HandledBy href="/criminal-defense/state" />
 */
export default function HandledBy({
  href,
  charge = false,
  intro = "The attorneys at Hines McCarty Pavlidis who defend this charge.",
}: {
  href: string;
  /**
   * Charge-page styling (D65): the section heading, intro, 1120px column and
   * card type of the tiered charge layout, and the per-charge mapping
   * (`handlesChargeHrefs`). Hubs and injury pages omit it and render exactly
   * as before.
   */
  charge?: boolean;
  /** The line under the heading in charge styling. Injury pages pass their own (D72). */
  intro?: string;
}) {
  const matched = charge ? attorneysHandlingCharge(href) : attorneysLeadingPractice(href);
  if (matched.length === 0) return null;

  if (charge) {
    return (
      <section data-bg="white" className="bg-white py-24 text-navy lg:py-32">
        <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
          <h2 className={`${type.sectionHeading} ${color.heading}`}>Who handles these cases.</h2>
          <p className={`${space.afterHeading} max-w-2xl ${type.lead} ${color.body}`}>
            {intro}
          </p>
          <ul className={`${space.beforeContent} grid gap-4 sm:grid-cols-2 lg:grid-cols-3`}>
            {matched.map((attorney) => (
              <li key={attorney.slug}>
                <Link
                  href={`/attorneys/${attorney.slug}`}
                  className="group flex h-full items-center gap-5 border border-navy/15 p-4 transition-colors hover:border-bronze sm:block sm:p-6 md:p-8"
                >
                  {/* Phones: a small portrait beside the name. Three full-width
                      4:5 portraits stacked ran about 1,800px on a 390px screen. */}
                  <Portrait
                    attorney={attorney}
                    className="aspect-4/5 w-24 shrink-0 sm:w-full"
                    sizes="(min-width: 1024px) 20rem, (min-width: 640px) 50vw, 6rem"
                  />
                  <span className="block">
                    <span className={`block ${type.subheading} ${color.heading} transition-colors group-hover:text-bronze sm:mt-5`}>
                      {attorney.name}
                    </span>
                    {attorney.concentration && (
                      <span className={`${space.inItem} block ${type.small} ${color.muted}`}>
                        {attorney.concentration}
                      </span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section data-bg="white" className="bg-white py-20 text-navy lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2 className="font-display text-4xl leading-tight sm:text-5xl">
          Handled by
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {matched.map((attorney) => (
            <li key={attorney.slug}>
              <Link
                href={`/attorneys/${attorney.slug}`}
                className="group block border border-navy/20 p-6 transition-colors hover:border-navy"
              >
                <Portrait
                  attorney={attorney}
                  className="aspect-4/5 w-full"
                  sizes="(min-width: 1024px) 20rem, 100vw"
                />
                <span className="mt-5 block font-display text-2xl leading-tight transition-colors group-hover:text-bronze">
                  {attorney.name}
                </span>
                {attorney.concentration && (
                  <span className="mt-2 block text-sm leading-snug text-navy/65">
                    {attorney.concentration}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
