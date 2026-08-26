import Link from "next/link";
import { injuryHref, injuryPillars, injurySpokes } from "@/lib/site";

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

/**
 * The full injury index, grouped by pillar, as plain links.
 *
 * Deliberately the same component as ChargeIndex in everything that matters:
 * a rule anchoring each column, label-only rows, and an arrow on every row that
 * is always visible rather than appearing on hover. The arrow is the affordance
 * that makes a list of rows read as a list of links, which is the thing this
 * page was missing.
 *
 * DO NOT add tabs, pagination or an accordion. This is how authority reaches
 * every injury page, and content behind an interaction is discounted or missed
 * by crawlers. Same rule as the charge index, same reason.
 */
export default function InjuryIndex({ heading }: { heading?: string }) {
  return (
    <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {heading && (
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            {heading}
          </h2>
        )}

        <div className={`grid gap-12 lg:grid-cols-2 ${heading ? "mt-12" : ""}`}>
          {injuryPillars.map((pillar) => (
            <div key={pillar.slug}>
              <h3 className="border-t-2 border-navy pt-5 font-display text-2xl leading-tight">
                <Link
                  href={injuryHref(pillar)}
                  className="transition-colors hover:text-bronze"
                >
                  {pillar.label}
                </Link>
              </h3>
              <ul className="mt-4">
                {injurySpokes(pillar.slug).map((page) => (
                  <li
                    key={page.slug}
                    className="break-inside-avoid border-b border-navy/12"
                  >
                    <Link
                      href={injuryHref(page)}
                      className="link-arrow group flex items-center justify-between gap-4 py-3 text-navy transition-colors hover:text-bronze"
                    >
                      <span>{page.label}</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-navy/40 transition-colors group-hover:text-bronze" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
