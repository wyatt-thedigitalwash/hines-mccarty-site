import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import {
  firm,
  formatOffice,
  primaryNav,
  primaryOffice,
  capabilities,
  injuryPillars,
  injuryHref,
} from "@/lib/site";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-navy text-linen">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="font-display text-3xl font-extrabold tracking-tight"
            >
              <Wordmark />
            </Link>
            <p className="mt-5 max-w-sm text-linen/60">
              A Brandon firm handling serious state and federal criminal
              charges and personal injury claims across {firm.serviceArea}.
            </p>
            <a
              href={firm.phoneHref}
              className="mt-8 inline-block font-display text-3xl font-extrabold hover:text-bronze"
            >
              {firm.phone}
            </a>
          </div>

          <div>
            <span className="eyebrow text-bronze">Explore</span>
            <ul className="mt-5 space-y-3">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-linen/70 transition-colors hover:text-linen"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow text-bronze">Criminal Defense</span>
            <ul className="mt-5 space-y-3">
              {capabilities.map((cap) => (
                <li key={cap.key}>
                  <Link
                    href={cap.href}
                    className="text-linen/70 transition-colors hover:text-linen"
                  >
                    {cap.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/*
            The pillars only. Spokes belong on the practice pages; a footer
            that lists nine injury links next to three criminal ones would
            imply the injury practice is three times the size of the other.
          */}
          <div>
            <span className="eyebrow text-bronze">Personal Injury</span>
            <ul className="mt-5 space-y-3">
              {/*
                `label` rather than `title`. The page titles run to
                "Car Accident Claims in Hillsborough County", which is right on
                a page and wrong beside "White-Collar Defense" in a footer
                column.
              */}
              {injuryPillars.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={injuryHref(p)}
                    className="text-linen/70 transition-colors hover:text-linen"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
              {/*
                The hub, named so it does not simply repeat the column heading
                above it. The criminal column has no equivalent because its hub
                is reachable from the main nav under the same words.
              */}
              <li>
                <Link
                  href="/personal-injury"
                  className="text-linen/70 transition-colors hover:text-linen"
                >
                  All injury claims
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 text-sm text-linen/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              {firm.legalName}, {formatOffice(primaryOffice)}
            </p>
            <p>
              &copy; {year} {firm.legalName}. All rights reserved.
            </p>
          </div>
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-linen/60">
            The information on this website is for general purposes only and is
            not legal advice. Contacting the firm does not create an
            attorney-client relationship. Every case is different and prior
            results do not guarantee a similar outcome.
          </p>
        </div>
      </div>
    </footer>
  );
}
