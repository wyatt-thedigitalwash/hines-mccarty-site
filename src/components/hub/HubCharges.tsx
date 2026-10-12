import Link from "next/link";
import { chargeHref, chargesInSilo, type SiloKey } from "@/lib/site";

/**
 * "Charges we defend in this area." on the criminal hubs (D112): the home
 * page's practice card (label, one-line description, arrow) in a two-column
 * grid, replacing the dense text index. Same `charges` entries as the home
 * grid, so the copy lives in one place.
 */
export default function HubCharges({ silo }: { silo: SiloKey }) {
  const items = chargesInSilo(silo);
  return (
    <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">Charges we defend in this area.</h2>
          <p className="shrink-0 pb-1 font-heading text-sm text-navy/65">{items.length} charges</p>
        </div>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {items.map((c) => (
            <li key={c.slug}>
              <Link
                href={chargeHref(c)}
                className="group flex h-full items-center justify-between gap-4 border border-navy/20 px-6 py-5 transition-colors hover:border-navy"
              >
                <span className="min-w-0">
                  <span className="block text-lg text-navy transition-colors group-hover:text-bronze">{c.label}</span>
                  {c.description ? (
                    <span className="mt-1 block text-[0.8125rem] leading-snug text-navy/65">{c.description}</span>
                  ) : null}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 text-navy/70 transition-colors group-hover:text-bronze"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
