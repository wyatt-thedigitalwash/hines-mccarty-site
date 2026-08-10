import type { Metadata } from "next";
import Link from "next/link";
import { attorneys, firm } from "@/lib/site";
import Needs from "@/components/attorneys/Needs";
import Portrait from "@/components/attorneys/Portrait";
import OfficeBlock from "@/components/attorneys/OfficeBlock";

export const metadata: Metadata = {
  title: {
    absolute: "Our Attorneys | Hines & McCarty, Criminal Defense in Tampa Bay",
  },
  description:
    "The attorneys of Hines & McCarty, a Brandon criminal defense firm practicing in the state courts of Hillsborough County and in the Middle District of Florida.",
};

export default function AttorneysPage() {
  return (
    <>
      <section data-bg="navy" className="bg-navy pt-36 pb-20 lg:pt-44 lg:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="eyebrow text-bronze">Our Attorneys</p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-linen sm:text-5xl lg:text-6xl">
            Four attorneys, four different concentrations.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-linen/70">
            Each attorney at {firm.name} concentrates on a different part of
            criminal law, so a case goes to the person who already knows that
            kind of case. Select an attorney to read their background, courts,
            and credentials.
          </p>
        </div>
      </section>

      <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {attorneys.map((attorney) => (
              <li key={attorney.slug}>
                <Link
                  href={`/attorneys/${attorney.slug}`}
                  className="group flex h-full flex-col border border-navy/20 p-6 transition-colors hover:border-navy"
                >
                  <Portrait
                    attorney={attorney}
                    className="aspect-4/5 w-full"
                    sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 90vw"
                  />

                  <h2 className="mt-6 font-display text-2xl leading-tight transition-colors group-hover:text-bronze lg:text-3xl">
                    {attorney.name}
                  </h2>

                  {/* No role label renders until the client confirms it. For
                      Maria Pavlidis that is gated on her relationship to the
                      firm (WEBSITE-PLAN.md Open Question 2a). */}
                  <p className="mt-2 font-heading text-sm uppercase tracking-wide text-navy/50">
                    {attorney.role ?? <Needs>role and title</Needs>}
                  </p>

                  <p className="mt-4 flex-1 text-sm leading-snug text-navy/65">
                    {attorney.concentration ?? (
                      <Needs>one-line concentration</Needs>
                    )}
                  </p>

                  <span className="mt-6 inline-block font-heading text-sm font-medium text-navy underline decoration-1 underline-offset-4 transition-colors group-hover:text-bronze">
                    Read bio
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-bg="navy" className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl leading-tight text-linen sm:text-4xl">
                Talk to an attorney about your case.
              </h2>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center border border-bronze px-8 py-4 font-heading text-sm font-semibold uppercase text-bronze transition-colors hover:bg-bronze hover:text-navy"
                >
                  Request a consultation
                </Link>
                <a
                  href={firm.phoneHref}
                  className="font-display text-2xl font-extrabold text-linen transition-colors hover:text-bronze"
                >
                  {firm.phone}
                </a>
              </div>
            </div>
            <OfficeBlock tone="dark" />
          </div>
        </div>
      </section>
    </>
  );
}
