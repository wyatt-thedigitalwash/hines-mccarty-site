import type { Metadata } from "next";
import Link from "next/link";
import { capabilities, charges, firm } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import CredentialStrip from "@/components/CredentialStrip";
import ChargeIndex from "@/components/cases/ChargeIndex";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = pageMetadata({
  title: "Cases We Defend | Hines & McCarty, Criminal Defense in Tampa Bay",
  description:
    "The state and federal charges Hines & McCarty defends in Hillsborough County and in the Middle District of Florida.",
  path: "/cases-we-defend",
  // Draft copy that has not had its C12 verification pass or attorney read.
  noindex: true,
});

export default function CasesWeDefendPage() {
  return (
    <>
      <section data-bg="navy" className="bg-navy pt-36 lg:pt-44">
        <div className="mx-auto max-w-[1400px] px-6 pb-20 lg:px-10 lg:pb-24">
          <h1 className="max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-linen sm:text-5xl lg:text-6xl">
            Cases we defend.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-linen/70">
            {firm.name} handles serious state and federal charges in
            Hillsborough County and in the Middle District of Florida, including
            the matters many firms refer out. Select a charge to read what it
            involves, what the statute says, and how the defense is built.
          </p>
        </div>

      {/* Credential strip on the hero's bottom edge. Full bleed, so the bottom
          padding lives on the content wrapper above rather than on the section,
          which would inset the strip. */}
      <CredentialStrip />
      </section>

      {/*
        Same card structure as the home Capabilities grid: min-h-[380px]
        lg:min-h-[440px], p-10 lg:p-12, display heading at text-3xl lg:text-4xl,
        body at mt-6 text-lg, action at mt-8 text-base. Matching those keeps the
        two grids reading as one system rather than as two near-misses.

        Different ground, though. The home grid is a white fill on navy, where
        the fill alone carries the card. Service pages run white between the
        navy hero and the navy close, so here the outline is what draws the
        card. The white fill is kept so the card still reads correctly if it is
        ever placed on a tinted section.
      */}
      <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <ul className="grid gap-6 md:grid-cols-3">
            {capabilities.map((cap) => (
              <li key={cap.key}>
                <Link
                  href={cap.href}
                  className="group flex h-full min-h-[380px] flex-col border border-navy/20 bg-white p-10 transition-colors hover:border-navy lg:min-h-[440px] lg:p-12"
                >
                  <h2 className="font-display text-3xl font-medium leading-tight transition-colors group-hover:text-bronze lg:text-4xl">
                    {cap.title}
                  </h2>
                  <p className="mt-6 flex-1 text-lg leading-relaxed text-charcoal">
                    {cap.summary}
                  </p>
                  <span className="mt-8 inline-block text-base underline decoration-1 underline-offset-4 transition-colors group-hover:text-bronze">
                    View charges
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The full index. Every charge, server-rendered, no interaction. */}
      <ChargeIndex heading="Every charge we defend" />

      {/*
        One row to the Layer 2 hub, placed after the full index on purpose. The
        index is this page's SEO payload and has to come first in the DOM.

        Links to the hub only, never to an individual tool or guide. Per-asset
        links belong on the charge pages, where the reader already has a
        specific next question. The sentencing calculator is not linked from
        here or anywhere else until it clears done-criteria C1 through C8
        (CASES-WE-DEFEND-PLAN.md Section 5.6).
      */}
      <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col gap-6 border border-navy/20 p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:p-10">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl leading-tight lg:text-3xl">
                Not sure what you are facing?
              </h2>
              <p className="mt-4 leading-relaxed text-charcoal">
                The charge written on the paperwork is not always the word
                people use for it. The guides and tools explain how a case
                moves through each court, what the terms mean, and what happens
                at each stage.
              </p>
            </div>
            <Link
              href="/resources"
              className="link-arrow shrink-0 text-base underline decoration-1 underline-offset-4 transition-colors hover:text-bronze"
            >
              Browse the resources
            </Link>
          </div>
        </div>
      </section>

      <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Where these cases are heard
          </h2>
          <div className="mt-8 grid max-w-4xl gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-xl">State</h3>
              <p className="mt-3 leading-relaxed text-charcoal">
                The 13th Judicial Circuit in Hillsborough County, with matters
                throughout Tampa Bay.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl">Federal</h3>
              <p className="mt-3 leading-relaxed text-charcoal">
                The Middle District of Florida, including the Tampa, Orlando,
                and Fort Myers divisions.
              </p>
            </div>
          </div>
          <p className="mt-8 text-sm text-navy/55">
            {charges.length} charge pages are planned across the three areas
            above.
          </p>
        </div>
      </section>

      <CallToAction heading="Talk to an attorney about your case." tone="navy" />
    </>
  );
}
