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
 * NO IMPORTS, on purpose: the gate scripts load this file directly under
 * node's type stripping, which cannot resolve the "@/" alias.
 *
 * `indexable` is false until an attorney has read the page, the same gate the
 * injury and business litigation pages carry. False means noindex and out of
 * the sitemap; the page still builds so it can be reviewed.
 */

export type LocationFact = {
  title: string;
  body: string;
  /** The source line under the card. Omitted where the card states only what other pages on the site already do. */
  source?: string;
};

export type LocationLink = { href: string; title: string; body: string };

export type LocationPage = {
  slug: string;
  kind: "market" | "community";
  /** The market's slug. Absent on a market, and on a Tampa community (D152). */
  parent?: string;
  /** The place as a reader writes it: "Tampa", "Brandon". */
  place: string;
  county: string;
  published: boolean;
  /** An attorney has read it. See the file comment. */
  indexable: boolean;
  /** True only for Brandon: the office section comes straight after the hero. */
  officeHere?: boolean;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string[];
  facts: { heading: string; intro: string; items: LocationFact[] };
  practices: { heading: string; intro: string; items: LocationLink[] };
  office: { heading: string; body: string[] };
  /** The line over the sub-location links on a market page. */
  communitiesIntro?: string;
  cta: { heading: string; body: string };
};

// The three hubs every market links to rather than duplicating.
const FEDERAL = "/criminal-defense/federal";
const WHITE_COLLAR = "/criminal-defense/white-collar";
const BUSINESS = "/business-litigation";

const HCSO_SOURCE = "Hillsborough County Sheriff's Office, Department of Detention Services";
const FIRST_APPEARANCE_SOURCE = "Fla. R. Crim. P. 3.130(a), (d)";
const COURT_LEVEL_SOURCE = "F.S. 26.012(2)(d); F.S. 34.01(1)(a)";

export const locationPages: LocationPage[] = [
  {
    slug: "brandon",
    kind: "community",
    place: "Brandon",
    county: "Hillsborough County",
    published: true,
    indexable: false,
    officeHere: true,
    metaTitle: "Brandon Criminal Defense Lawyer | Hines McCarty Pavlidis",
    metaDescription:
      "Our office is in Brandon. Felony and misdemeanor defense, injury claims, and business disputes in Hillsborough County. Call (813) 738-8650.",
    h1: "Criminal defense and injury lawyers in Brandon.",
    lead: [
      "Our office is on West Lumsden Road in Brandon. From here we defend people charged with felonies and misdemeanors, and represent people hurt in crashes, across Hillsborough County.",
    ],
    office: {
      heading: "Visit us on West Lumsden Road.",
      body: [
        "This is the firm's only office.",
        "We answer the phone 24 hours a day, 7 days a week. Call first so an attorney can set aside time to meet you.",
      ],
    },
    facts: {
      heading: "If you are arrested in Brandon.",
      intro:
        "Brandon cases run through the Hillsborough County system, but a few things work differently here than they do inside Tampa.",
      items: [
        {
          title: "There is no Brandon police department",
          body: "Brandon is not a city. The Census Bureau counts it as a census-designated place, which is an unincorporated community, so it has no police force of its own. Arrests in Brandon are usually made by deputies of the Hillsborough County Sheriff's Office.",
          source: "U.S. Census Bureau, QuickFacts: Brandon CDP, Florida",
        },
        {
          title: "Booking at Orient Road",
          body: "Deputies take adults they arrest to the Orient Road Jail, 1201 Orient Road, where the Sheriff books and processes new arrests. If someone you know was just arrested in Brandon, that is the place to start looking.",
          source: HCSO_SOURCE,
        },
        {
          title: "In front of a judge within a day",
          body: "You must see a judge within 24 hours of arrest unless you have already been released, and it may be by video from the jail. Bond and release conditions are set at that hearing, sometimes before you have a lawyer, so call as early as you can.",
          source: FIRST_APPEARANCE_SOURCE,
        },
        {
          title: "Felony or misdemeanor",
          body: "A felony goes to circuit court and a misdemeanor to county court. The State Attorney for the 13th Judicial Circuit prosecutes both. Criminal court services are at the Edgecomb Courthouse in downtown Tampa and the Plant City Courthouse.",
          source: COURT_LEVEL_SOURCE,
        },
        {
          title: "Hurt in a Brandon crash",
          body: "You have two years to sue over a crash that happened after 24 March 2023. Your own insurance pays your first medical bills only if you get care within 14 days. If you are found more than 50 percent at fault, you recover nothing from the other driver.",
          source: "F.S. 95.11; F.S. 627.736(1)(a); F.S. 768.81",
        },
      ],
    },
    practices: {
      heading: "What we handle from the Brandon office.",
      intro: "Each of these has its own page, written for the Hillsborough County courts that Brandon cases go to.",
      items: [
        {
          href: "/criminal-defense/state",
          title: "State criminal defense",
          body: "Felony and misdemeanor charges in the Hillsborough County courts, including DUI, drug, theft, and violent charges.",
        },
        {
          href: FEDERAL,
          title: "Federal criminal defense",
          body: "Federal charges and investigations in the Middle District of Florida, heard in Tampa.",
        },
        {
          href: WHITE_COLLAR,
          title: "White-collar defense",
          body: "Fraud and financial cases, state or federal, from the first subpoena or agent visit.",
        },
        {
          href: "/personal-injury",
          title: "Personal injury",
          body: "Car and truck crash claims for people hurt by someone else's carelessness.",
        },
        {
          href: BUSINESS,
          title: "Business litigation",
          body: "Disputes over contracts, ownership, non-competes, and trade secrets.",
        },
      ],
    },
    cta: {
      heading: "Call the Brandon office.",
      body: "Calls are confidential and answered 24/7. If you were arrested, contacted by investigators, or hurt in a crash, talk to an attorney before you talk to anyone else.",
    },
  },
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
  publishedLocations.filter((p) => p.parent === marketSlug);
/** The communities around Tampa, which have no market page of their own (D152). */
export const tampaCommunities = publishedLocations.filter((p) => p.kind === "community" && !p.parent);

export const locationTrail = (p: LocationPage) => {
  const market = p.parent ? marketLocations.find((m) => m.slug === p.parent) : undefined;
  return [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" },
    ...(market ? [{ name: market.place, href: locationHref(market) }] : []),
    { name: p.place, href: locationHref(p) },
  ];
};

/** Every rendered string on a location page, for the content gates (D29). */
export function locationCopy(p: LocationPage): string[] {
  return [
    p.metaTitle,
    p.metaDescription,
    p.h1,
    ...p.lead,
    p.facts.heading,
    p.facts.intro,
    ...p.facts.items.flatMap((f) => [f.title, f.body, ...(f.source ? [f.source] : [])]),
    p.practices.heading,
    p.practices.intro,
    ...p.practices.items.flatMap((l) => [l.title, l.body]),
    p.office.heading,
    ...p.office.body,
    ...(p.communitiesIntro ? [p.communitiesIntro] : []),
    p.cta.heading,
    p.cta.body,
  ];
}
