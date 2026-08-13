import Link from "next/link";
import { chargeHref, chargesInSilo, silos, type SiloKey } from "@/lib/site";

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
 * The full charge index, grouped by silo, as plain links.
 *
 * This is the section hub's entire SEO purpose: it is how authority reaches
 * every charge page. It renders in full, server-side, on every request.
 *
 * DO NOT add tabs, pagination, lazy loading, or an accordion here. Content
 * behind an interaction is discounted or missed entirely by crawlers, which is
 * the exact problem that had to be fixed on the home practice grid, where two
 * of three groups never reached the HTML. Same rule, more at stake.
 */
export default function ChargeIndex({
  only,
  heading,
}: {
  /** Limit to one silo, for the silo hub pages. */
  only?: SiloKey;
  heading?: string;
}) {
  const groups = only ? silos.filter((s) => s.key === only) : silos;

  return (
    <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {heading && (
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            {heading}
          </h2>
        )}

        <div
          className={`gap-12 ${heading ? "mt-12" : ""} ${
            groups.length > 1 ? "grid lg:grid-cols-3" : ""
          }`}
        >
          {groups.map((silo) => {
            const items = chargesInSilo(silo.key);
            return (
              <div key={silo.key}>
                {/* A rule anchors each column. On an all-white service page
                    three unbounded lists have nothing holding them apart. */}
                <h3 className="border-t-2 border-navy pt-5 font-display text-2xl leading-tight">
                  <Link
                    href={silo.href}
                    className="transition-colors hover:text-bronze"
                  >
                    {silo.label}
                  </Link>
                </h3>
                <ul
                  className={`mt-4 ${
                    groups.length === 1
                      ? "sm:columns-2 sm:gap-x-12 lg:columns-3"
                      : ""
                  }`}
                >
                  {items.map((charge) => (
                    // break-inside-avoid: the single-silo layout uses CSS
                    // columns, which will otherwise split a row across them.
                    <li
                      key={charge.slug}
                      className="break-inside-avoid border-b border-navy/12"
                    >
                      {/* Label only. The one-line description lives on the home
                          practice grid, where it orients someone who does not
                          know the legal term yet. This is an index: its job is
                          to get to 29 pages quickly, and a second line on every
                          row halves how many fit on screen. Both read from the
                          same `charges` entry, so the copy stays in one place. */}
                      <Link
                        href={chargeHref(charge)}
                        className="link-arrow group flex items-center justify-between gap-4 py-3 text-navy transition-colors hover:text-bronze"
                      >
                        <span>{charge.label}</span>
                        {/* Always visible, not hover-only. The arrow is the
                            affordance that makes 29 rows read as links. */}
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-navy/40 transition-colors group-hover:text-bronze" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
