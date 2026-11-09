import Link from "next/link";
import { firm } from "@/lib/site";
import {
  type LocationPage,
  locationHref,
  locationLabel,
  locationTrail,
  marketHubs,
  marketLocations,
  subLocations,
  tampaCommunities,
} from "@/lib/locations";
import { breadcrumbJsonLd } from "@/lib/schema";
import { CRIMINAL_HUB_PHOTO, INJURY_HUB_PHOTO, SITE_HERO_PHOTO } from "@/lib/hero-photos";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CallToAction from "@/components/CallToAction";
import { faqJsonLd } from "@/lib/schema";
import AttorneyGrid from "@/components/about/AttorneyGrid";
import { FactsSection, OfficeSection, PlaceLinksSection, PracticesSection } from "./LocationSections";
import { BondSection, ChargesSection, DeadlinesSection, FaqSection, FirstStepsSection, TimelineSection } from "./LocationGuidance";

/**
 * One location page, market or community (D151, D153). Reading order follows
 * the person who just got the call: what to do today, what bond costs, which
 * courtroom, what happens next, then the charges, injury claims, the practice
 * areas, the attorneys and the places nearby. Brandon is the office's own town,
 * so its office section moves up to second.
 */
export default function LocationTemplate({ page }: { page: LocationPage }) {
  const trail = locationTrail(page);
  const faq = faqJsonLd(page.faq?.map((f) => ({ ...f, source: "drafted" as const })));
  const market = page.parent ? marketLocations.find((m) => m.slug === page.parent) : undefined;
  const siblings = market ? subLocations(market.slug) : tampaCommunities;

  // Tampa has no location page, so a Tampa community links up to the home page (D152).
  const link = (p: LocationPage) => ({ href: locationHref(p), label: locationLabel(p) });
  const placeLinks =
    page.kind === "market" ? (
      <PlaceLinksSection
        heading={`Communities around ${page.place}.`}
        intro={page.communitiesIntro}
        links={subLocations(page.slug).map(link)}
      />
    ) : page.kind === "hub" ? (
      <PlaceLinksSection
        heading={`More in ${market?.place ?? page.place}.`}
        links={[
          ...(market ? [link(market), ...marketHubs(market.slug).filter((h) => h.slug !== page.slug).map(link)] : []),
          ...(market ? subLocations(market.slug).map(link) : []),
        ]}
      />
    ) : (
      <PlaceLinksSection
        heading={`More around ${market?.place ?? "Tampa"}.`}
        links={[
          market ? link(market) : { href: "/", label: "Tampa" },
          ...(market ? marketHubs(market.slug).map(link) : []),
          ...siblings.filter((s) => s.slug !== page.slug).map(link),
        ]}
      />
    );

  // The placeholder is the Tampa skyline, so it stays in Hillsborough County. Elsewhere
  // the page takes the firm's own photo for the subject (D154).
  const photo =
    page.hubType === "injury"
      ? INJURY_HUB_PHOTO
      : page.county === "Hillsborough County"
        ? SITE_HERO_PHOTO
        : CRIMINAL_HUB_PHOTO;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(trail)) }}
      />
      {faq ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /> : null}

      <PageHero
        title={page.h1}
        photo={photo}
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
      {page.firstSteps ? <FirstStepsSection steps={page.firstSteps} /> : null}
      {page.bond ? <BondSection bond={page.bond} /> : null}
      {page.deadlines ? <DeadlinesSection place={page.place} deadlines={page.deadlines} /> : null}
      <FactsSection facts={page.facts} />
      {page.timeline ? <TimelineSection timeline={page.timeline} /> : null}
      {page.charges ? <ChargesSection charges={page.charges} /> : null}
      {page.injury ? (
        <FactsSection facts={page.injury}>
          <ul className="mt-10 flex flex-wrap gap-3">
            {page.injury.links.map((l) => (
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
        </FactsSection>
      ) : null}
      <PracticesSection practices={page.practices} />
      <AttorneyGrid />
      {placeLinks}
      {page.towns ? <FactsSection id="towns" facts={page.towns} /> : null}
      {page.faq ? <FaqSection faq={page.faq} /> : null}
      {page.officeHere ? null : <OfficeSection office={page.office} />}

      <CallToAction heading={page.cta.heading} body={page.cta.body} tone="navy" />
    </>
  );
}
