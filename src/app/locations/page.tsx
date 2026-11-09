import type { Metadata } from "next";
import Link from "next/link";
import { firm } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";
import { REGION_PHOTO } from "@/lib/hero-photos";
import { locationHref, locationLabel, marketHubs, marketLocations, subLocations, tampaCommunities } from "@/lib/locations";
import PageHero from "@/components/PageHero";
import CallToAction from "@/components/CallToAction";
import { OfficeSection } from "@/components/locations/LocationSections";

/**
 * /locations, the index of location pages (D151). The Tampa card links home,
 * because the site itself is the Tampa page (D152). Reads the published list, so
 * a page appears here the day it is built. The heading says where the firm
 * takes cases, not where it has offices: Brandon is the only office (Rule
 * 4-7.12), and the office section below says so.
 *
 * noindex until the location pages it lists have been read by an attorney.
 */
export const metadata: Metadata = pageMetadata({
  title: "Areas We Cover | Hines McCarty Pavlidis",
  description:
    "Hines McCarty Pavlidis takes criminal, injury, and business cases across Florida from its office in Brandon. See the areas we cover. Call (813) 738-8650.",
  path: "/locations",
  noindex: true,
});

export default function LocationsIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Areas We Cover", href: "/locations" },
            ]),
          ),
        }}
      />

      <PageHero
        title="Areas we cover."
        photo={REGION_PHOTO}
        cta={{ label: `Call ${firm.phone}`, href: firm.phoneHref }}
      >
        <p>
          {`${firm.name} works from one office in Brandon and takes cases across Florida. The pages below cover who makes arrests in each place, which courts hear the case, and what the firm handles. If you do not see your area, call us.`}
        </p>
      </PageHero>

      <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <li className="flex flex-col border border-navy/15 p-8">
              <h2 className="font-display text-3xl leading-tight">
                <Link href="/" className="transition-colors hover:text-bronze">
                  Tampa
                </Link>
              </h2>
              <p className="mt-2 eyebrow text-navy/60 sm:text-sm">Most of this site is written for Tampa</p>
              {tampaCommunities.length ? (
                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-navy/10 pt-6">
                  {tampaCommunities.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={locationHref(s)}
                        className="font-heading text-sm font-medium underline decoration-1 underline-offset-4 transition-colors hover:text-bronze"
                      >
                        {s.place}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
            {marketLocations.map((m) => (
              <li key={m.slug} className="flex flex-col border border-navy/15 p-8">
                <h2 className="font-display text-3xl leading-tight">
                  <Link href={locationHref(m)} className="transition-colors hover:text-bronze">
                    {m.place}
                  </Link>
                </h2>
                <p className="mt-2 eyebrow text-navy/60 sm:text-sm">{m.county}</p>
                {marketHubs(m.slug).length || subLocations(m.slug).length || m.towns ? (
                  <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-navy/10 pt-6">
                    {[...marketHubs(m.slug), ...subLocations(m.slug)].map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={locationHref(s)}
                          className="font-heading text-sm font-medium underline decoration-1 underline-offset-4 transition-colors hover:text-bronze"
                        >
                          {locationLabel(s)}
                        </Link>
                      </li>
                    ))}
                    {/* D157: towns covered on the market page, not on their own. */}
                    {m.towns?.items.map((t) => (
                      <li key={t.title}>
                        <Link
                          href={`${locationHref(m)}#towns`}
                          className="font-heading text-sm font-medium underline decoration-1 underline-offset-4 transition-colors hover:text-bronze"
                        >
                          {t.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <OfficeSection
        office={{
          heading: "One office, in Brandon.",
          body: [
            "Every page here is about where a case is handled, not where we have an office. The firm's only office is in Brandon, in Hillsborough County.",
          ],
        }}
      />

      <CallToAction
        heading="Is your area not listed?"
        body="We take cases across Florida, so call us. Calls are confidential, and we answer 24 hours a day."
        tone="navy"
      />
    </>
  );
}
