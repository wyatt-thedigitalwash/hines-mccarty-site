import Link from "next/link";
import Image from "next/image";
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
    // D129: a deeper navy and a gold rule, so the footer reads apart from
    // the navy closing section above it.
    <footer className="border-t border-bronze/60 bg-[#0b1226] text-linen">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            {/* D84: the full logo, in linen on the navy footer (client choice). */}
            <Link href="/" aria-label={`${firm.name} home`} className="inline-block">
              <Image
                src="/brand/hmp-lockup-linen.svg"
                alt=""
                width={240}
                height={162}
                className="h-auto w-48"
              />
            </Link>
            <p className="mt-5 max-w-sm text-linen/60">
              A Florida firm handling state and federal criminal
              charges, personal injury claims, and business disputes across{" "}
              {firm.serviceArea}.
            </p>
            {/* D129: the contact as a clear button with the two things a
                caller wants to know (client direction). */}
            <a
              href={firm.phoneHref}
              className="mt-8 inline-flex items-center bg-bronze px-6 py-3.5 font-heading text-base font-semibold tabular-nums text-navy transition-colors hover:bg-bronze-soft"
            >
              Call {firm.phone}
            </a>
            <p className="mt-3 font-heading text-sm text-linen/75">Available 24/7 · Free consultation</p>
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
