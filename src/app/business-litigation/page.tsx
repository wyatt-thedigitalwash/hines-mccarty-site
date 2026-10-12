import type { Metadata } from "next";
import { firm } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";
import PageHero from "@/components/PageHero";
import { SITE_HERO_PHOTO } from "@/lib/hero-photos";
import HandledBy from "@/components/attorneys/HandledBy";
import CallToAction from "@/components/CallToAction";
import DisputeCards from "@/components/business/DisputeCards";

/**
 * /business-litigation, the firm's third practice (D116). One page for now,
 * by client choice; dispute-type pages can follow.
 *
 * Handled by David Hines and Colton Trina (client, 2026-10-12), which the
 * attorney entries carry as `leadsPracticeHrefs`, so HandledBy names them.
 *
 * Every legal statement is checked against the statute or the 13th Circuit's
 * administrative order (see DisputeCards and the court section below). No
 * outcome language, no quality claims (Rules 4-7.13, 4-7.14).
 *
 * noindex until an attorney has read it, the same gate the injury pages and
 * the criminal overview carry; it enters the sitemap then.
 */
export const metadata: Metadata = pageMetadata({
  title: "Business Litigation Lawyer in Tampa | Hines McCarty Pavlidis",
  description:
    "Contract, partner and shareholder, non-compete, trade secret and business fraud disputes in Tampa and Hillsborough County. Call (813) 738-8650.",
  path: "/business-litigation",
  noindex: true,
});

const COURTS = [
  {
    title: "The Business Court",
    body: "Hillsborough County's circuit court has a division for business cases. Disputes between owners, non-compete and trade secret cases, the sale of a business, and franchise disputes are assigned there whatever the amount at stake, and other complex business cases can be moved in.",
    source: "13th Judicial Circuit Administrative Order S-2013-021",
  },
  {
    title: "Circuit and county court",
    body: "Other business claims over $50,000 are filed in circuit court, which also hears requests for an injunction. Claims of $50,000 or less go to county court.",
    source: "Fla. Stat. §§ 34.01, 26.012",
  },
];

const FIRST_STEPS = [
  "Keep everything. Emails, texts, invoices, and the contract itself are usually the case, and deleting them after a dispute starts can hurt you.",
  "Find the agreement and read what it says about notice, mediation, arbitration, and where a suit must be filed. Many business contracts set those terms in advance.",
  "Check the deadline. The time to sue runs from when the claim arose or was discovered, not from when you decide to act.",
  "Talk to us before you send a demand letter or answer one. What you put in writing now can be used later.",
];

export default function BusinessLitigationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Business Litigation", href: "/business-litigation" },
            ]),
          ),
        }}
      />

      <PageHero
        title="Business litigation in Tampa and Hillsborough County."
        photo={SITE_HERO_PHOTO}
        cta={{ label: `Call ${firm.phone}`, href: firm.phoneHref }}
      >
        <p>
          {`${firm.name} represents businesses and their owners in disputes over contracts, ownership, non-competes, trade secrets, and fraud, from the first demand letter through trial.`}
        </p>
      </PageHero>

      <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">The disputes we handle.</h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              Each of these turns on a few Florida rules that decide what you can claim and how long you
              have to claim it.
            </p>
          </div>
          <DisputeCards />
        </div>
      </section>

      <section data-bg="navy" className="bg-navy py-20 text-linen lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
          <div>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">Where a business case is heard.</h2>
            <p className="mt-6 text-lg leading-relaxed text-linen/70">
              Which court hears a business dispute in Hillsborough County depends on what it is about and how
              much is at stake.
            </p>
          </div>
          <ul className="grid gap-6">
            {COURTS.map((c) => (
              <li key={c.title} className="bg-linen/[0.06] p-8 lg:p-10">
                <h3 className="font-display text-2xl leading-tight">{c.title}</h3>
                <p className="mt-4 leading-relaxed text-linen/75">{c.body}</p>
                <p className="mt-5 text-sm text-linen/60">
                  <span className="eyebrow">Source</span> {c.source}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <h2 className="max-w-3xl font-display text-4xl leading-tight sm:text-5xl">What to do first.</h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-2">
            {FIRST_STEPS.map((step, i) => {
              const [head, ...rest] = step.split(". ");
              return (
                <li key={head} className="flex gap-6 border-t border-navy/15 pt-6">
                  <span aria-hidden="true" className="font-display text-4xl leading-none text-[#8a6d2f]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="leading-relaxed text-charcoal">
                    <span className="block font-display text-2xl leading-snug text-navy">{head}.</span>
                    <span className="mt-2 block">{rest.join(". ")}</span>
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <HandledBy href="/business-litigation" />

      <CallToAction
        heading="Talk to an attorney about your dispute."
        body="Consultations are confidential. If your business has a dispute, has been served with a lawsuit, or is about to send or answer a demand, reach out now."
        tone="white"
      />
    </>
  );
}
