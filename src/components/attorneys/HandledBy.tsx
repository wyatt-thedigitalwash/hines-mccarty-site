import Link from "next/link";
import { attorneysLeadingPractice } from "@/lib/site";
import Portrait from "./Portrait";

/**
 * The reciprocal of the practice-areas list on a bio page: the attorneys who
 * handle a given practice area, linking back to their bios.
 *
 * Drop this into each practice page (`/criminal-defense`,
 * `/federal-criminal-defense`, `/white-collar-defense`) once those pages exist.
 * It renders nothing when no attorney is mapped to the href, so it is safe to
 * place before the attorney-to-practice mapping is confirmed
 * (WEBSITE-PLAN.md Open Question 2).
 *
 * Usage: <HandledBy href="/criminal-defense" />
 */
export default function HandledBy({ href }: { href: string }) {
  const matched = attorneysLeadingPractice(href);
  if (matched.length === 0) return null;

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
