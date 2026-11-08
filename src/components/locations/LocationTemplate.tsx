import { firm } from "@/lib/site";
import {
  type LocationPage,
  locationHref,
  locationTrail,
  marketLocations,
  subLocations,
  tampaCommunities,
} from "@/lib/locations";
import { breadcrumbJsonLd } from "@/lib/schema";
import { SITE_HERO_PHOTO } from "@/lib/hero-photos";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CallToAction from "@/components/CallToAction";
import { FactsSection, OfficeSection, PlaceLinksSection, PracticesSection } from "./LocationSections";

/**
 * One location page, market or community (D151). Reading order: hero, the
 * local facts, what the firm handles, links to the places around it, the
 * office, the call band. Brandon is the office's own town, so its office
 * section moves up to second.
 */
export default function LocationTemplate({ page }: { page: LocationPage }) {
  const trail = locationTrail(page);
  const market = page.parent ? marketLocations.find((m) => m.slug === page.parent) : undefined;
  const siblings = market ? subLocations(market.slug) : tampaCommunities;

  // Tampa has no location page, so a Tampa community links up to the home page (D152).
  const placeLinks =
    page.kind === "community" ? (
      <PlaceLinksSection
        heading={`More around ${market?.place ?? "Tampa"}.`}
        links={[
          market ? { href: locationHref(market), label: market.place } : { href: "/", label: "Tampa" },
          ...siblings.filter((s) => s.slug !== page.slug).map((s) => ({ href: locationHref(s), label: s.place })),
        ]}
      />
    ) : (
      <PlaceLinksSection
        heading={`Communities around ${page.place}.`}
        intro={page.communitiesIntro}
        links={subLocations(page.slug).map((s) => ({ href: locationHref(s), label: s.place }))}
      />
    );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(trail)) }}
      />

      <PageHero
        title={page.h1}
        photo={SITE_HERO_PHOTO}
        cta={{ label: `Call ${firm.phone}`, href: firm.phoneHref }}
        crumbs={<Breadcrumbs trail={trail} />}
      >
        <div className="space-y-5">
          {page.lead.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </PageHero>

      {page.officeHere ? <OfficeSection office={page.office} /> : null}
      <FactsSection facts={page.facts} />
      <PracticesSection practices={page.practices} />
      {placeLinks}
      {page.officeHere ? null : <OfficeSection office={page.office} />}

      <CallToAction heading={page.cta.heading} body={page.cta.body} tone="navy" />
    </>
  );
}
