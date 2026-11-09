/**
 * Location pages (D151, D152). Four market pages, St. Petersburg, Clearwater,
 * Sarasota and Orlando, each with community pages around it. A market also gets
 * its own State Criminal and Personal Injury pages, because the courthouse and
 * the jail change with the county; Federal, White Collar and Business Litigation
 * stay as links to the main hubs, because every market but Orlando is in the
 * same federal division and the pages would read the same with the city swapped.
 *
 * THERE IS NO TAMPA PAGE (D152). Tampa is the whole site: the home page and the
 * hubs are its pages. Tampa's communities have no `parent` and sit directly
 * under /locations, so Brandon is /locations/brandon, while a community of
 * another market nests under it, as in /locations/st-petersburg/gulfport.
 *
 * THE RULES THESE PAGES LIVE UNDER, every one a reason a location page goes
 * wrong:
 *   - Rule 4-7.12. Brandon is the only office. No page says or implies an
 *     office anywhere else, and every page names the Brandon office.
 *   - Doorway pages. A page that reads the same as its siblings with the place
 *     name swapped is the pattern Google penalises. Each page carries facts
 *     that are true of that place and not its siblings (who makes the arrest,
 *     where you are booked, which court), from an official source recorded in
 *     PAGE-SOURCES.md. check:seo P7 measures the overlap after the build.
 *   - D7. The Brandon clerk service center stays out of copy until the
 *     attorneys confirm what is heard there.
 *
 * THE DATA IS IN location-data/, one file per area, and every import here uses a
 * relative path with its .ts extension: the gate scripts load this file under
 * node's type stripping, which cannot resolve the "@/" alias.
 *
 * `indexable` is false until an attorney has read the page, the same gate the
 * injury and business litigation pages carry. False means noindex and out of
 * the sitemap; the page still builds so it can be reviewed.
 */

import type { LocationFact, LocationPage } from "./location-types.ts";
import { hillsboroughPages } from "./location-data/hillsborough.ts";

export type { LocationPage } from "./location-types.ts";

export const locationPages: LocationPage[] = [
  ...hillsboroughPages,
];

export const publishedLocations = locationPages.filter((p) => p.published);

export const locationHref = (p: Pick<LocationPage, "slug" | "parent">) =>
  p.parent ? `/locations/${p.parent}/${p.slug}` : `/locations/${p.slug}`;

export const locationBySegments = (segments: string[]) =>
  publishedLocations.find((p) =>
    segments.length === 1
      ? !p.parent && p.slug === segments[0]
      : segments.length === 2 && p.parent === segments[0] && p.slug === segments[1],
  );

export const marketLocations = publishedLocations.filter((p) => p.kind === "market");
export const subLocations = (marketSlug: string) =>
  publishedLocations.filter((p) => p.kind === "community" && p.parent === marketSlug);
export const marketHubs = (marketSlug: string) =>
  publishedLocations.filter((p) => p.kind === "hub" && p.parent === marketSlug);
/** How a link to a page reads. */
export const locationLabel = (p: LocationPage) => p.linkLabel ?? p.place;
/** The communities around Tampa, which have no market page of their own (D152). */
export const tampaCommunities = publishedLocations.filter((p) => p.kind === "community" && !p.parent);

export const locationTrail = (p: LocationPage) => {
  const market = p.parent ? marketLocations.find((m) => m.slug === p.parent) : undefined;
  return [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" },
    ...(market ? [{ name: market.place, href: locationHref(market) }] : []),
    { name: locationLabel(p), href: locationHref(p) },
  ];
};

/** Every rendered string on a location page, for the content gates (D29). */
export function locationCopy(p: LocationPage): string[] {
  const facts = (items: LocationFact[]) =>
    items.flatMap((f) => [f.title, f.body, ...(f.source ? [f.source] : [])]);
  return [
    p.metaTitle,
    p.metaDescription,
    p.h1,
    ...p.lead,
    p.facts.heading,
    p.facts.intro,
    ...facts(p.facts.items),
    ...(p.facts.table
      ? [p.facts.table.caption, p.facts.table.source, ...p.facts.table.rows.flatMap((r) => [r.division, r.letters])]
      : []),
    ...(p.firstSteps
      ? [
          p.firstSteps.heading,
          p.firstSteps.intro,
          ...facts(p.firstSteps.items),
          ...p.firstSteps.items.flatMap((i) => (i.link ? [i.link.label] : [])),
        ]
      : []),
    ...(p.bond
      ? [
          p.bond.heading,
          p.bond.intro,
          ...p.bond.rows.flatMap((r) => [r.crime, r.amount]),
          p.bond.waitHeading,
          p.bond.waitIntro,
          ...p.bond.wait,
          p.bond.waitNote,
          p.bond.source,
        ]
      : []),
    ...(p.timeline
      ? [p.timeline.heading, p.timeline.intro, ...p.timeline.steps.flatMap((t) => [t.when, t.what]), p.timeline.source]
      : []),
    ...(p.charges ? [p.charges.heading, p.charges.intro, ...p.charges.items.flatMap((l) => [l.title, l.body])] : []),
    ...(p.injury
      ? [p.injury.heading, p.injury.intro, ...facts(p.injury.items), ...p.injury.links.map((l) => l.label)]
      : []),
    p.practices.heading,
    p.practices.intro,
    ...p.practices.items.flatMap((l) => [l.title, l.body]),
    p.office.heading,
    ...p.office.body,
    ...(p.communitiesIntro ? [p.communitiesIntro] : []),
    ...(p.faq ?? []).flatMap((f) => [f.question, f.answer]),
    p.cta.heading,
    p.cta.body,
  ];
}
