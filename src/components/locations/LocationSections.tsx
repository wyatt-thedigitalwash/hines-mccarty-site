import type { ReactNode } from "react";
import Link from "next/link";
import { firm, formatOffice, primaryOffice } from "@/lib/site";
import type { LocationPage } from "@/lib/locations";
import OfficeBlock from "@/components/OfficeBlock";

/**
 * The sections of a location page (D151), in the site's card language: white
 * fact cards with a source line, navy practice cards, and the office. Each
 * section sets data-bg so the house spacing rule (globals.css) drops the top
 * padding between two white neighbours.
 */
const H2 = "font-display font-semibold text-4xl leading-tight sm:text-5xl";
const LEAD = "mt-6 max-w-3xl text-lg leading-relaxed text-charcoal";

export function FactsSection({
  facts,
  id,
  children,
}: {
  facts: LocationPage["facts"];
  id?: string;
  /** Anything that belongs under the cards, such as the injury page links. */
  children?: ReactNode;
}) {
  return (
    <section id={id} data-bg="white" className="scroll-mt-28 bg-white py-20 text-navy lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2 className={H2}>{facts.heading}</h2>
        <p className={LEAD}>{facts.intro}</p>
        {/* Two or four cards go two across, so none is left alone on a row of three. */}
        <ul className={`mt-12 grid gap-6 md:grid-cols-2 ${[2, 4].includes(facts.items.length) ? "" : "lg:grid-cols-3"}`}>
          {facts.items.map((f) => (
            <li key={f.title} className="flex flex-col border border-navy/15 p-6 lg:p-8">
              <h3 className="font-display text-2xl leading-tight">{f.title}</h3>
              <p className="mt-4 flex-1 leading-relaxed text-charcoal">{f.body}</p>
              {f.source ? (
                <p className="mt-6 border-t border-navy/10 pt-4 text-sm text-navy/65">
                  <span className="eyebrow">Source</span> {f.source}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
        {facts.table ? (
          <div className="mt-12 max-w-2xl">
            <table className="w-full border-collapse text-left">
              <caption className="mb-4 text-left font-display text-2xl leading-tight">{facts.table.caption}</caption>
              <thead>
                <tr className="border-b border-navy/30 font-heading text-sm">
                  <th scope="col" className="py-3 pr-6 font-semibold">Division</th>
                  <th scope="col" className="py-3 font-semibold">Last name starts with</th>
                </tr>
              </thead>
              <tbody>
                {facts.table.rows.map((r) => (
                  <tr key={r.division} className="border-b border-navy/10 text-charcoal">
                    <td className="py-3 pr-6 font-medium text-navy">{r.division}</td>
                    <td className="py-3">{r.letters}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-sm text-navy/65">
              <span className="eyebrow">Source</span> {facts.table.source}
            </p>
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function PracticesSection({ practices }: { practices: LocationPage["practices"] }) {
  return (
    <section data-bg="navy" className="bg-navy py-20 text-linen lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2 className={H2}>{practices.heading}</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-linen/70">{practices.intro}</p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {practices.items.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group flex h-full flex-col bg-linen/[0.06] p-8 transition-colors hover:bg-linen/[0.1]"
              >
                <h3 className="font-display text-2xl leading-tight transition-colors group-hover:text-bronze">
                  {l.title}
                </h3>
                <p className="mt-4 flex-1 leading-relaxed text-linen/75">{l.body}</p>
                <span className="mt-6 font-heading text-sm font-medium underline decoration-1 underline-offset-4 transition-colors group-hover:text-bronze">
                  Read more
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Links to other location pages: a market's communities, or a community's market and siblings. */
export function PlaceLinksSection({
  heading,
  intro,
  links,
}: {
  heading: string;
  intro?: string;
  links: { href: string; label: string }[];
}) {
  if (links.length === 0) return null;
  return (
    <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2 className={H2}>{heading}</h2>
        {intro ? <p className={LEAD}>{intro}</p> : null}
        <ul className="mt-10 flex flex-wrap gap-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="inline-flex items-center border border-navy/20 px-5 py-3 font-heading text-base font-medium transition-colors hover:border-navy hover:text-bronze"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/**
 * The Brandon office, on every location page (Rule 4-7.12: firm name and a
 * bona fide office). OfficeBlock renders the published office only, so no
 * page can name an office that does not exist.
 */
export function OfficeSection({ office }: { office: LocationPage["office"] }) {
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${firm.legalName}, ${formatOffice(primaryOffice)}`,
  )}`;
  return (
    <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-10">
        <div>
          <h2 className={H2}>{office.heading}</h2>
          <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-charcoal">
            {office.body.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
        <div className="border border-navy/15 p-8 lg:p-10">
          <OfficeBlock tone="light" className="grid gap-8" />
          <a
            href={directions}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block font-heading text-sm font-medium underline decoration-1 underline-offset-4 transition-colors hover:text-bronze"
          >
            Get directions<span className="sr-only"> (opens Google Maps in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
