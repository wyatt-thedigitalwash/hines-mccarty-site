/**
 * The shape of a location page (D151, D153). Types only, no imports, so the gate
 * scripts can load the data under node's type stripping.
 */

export type LocationFact = {
  title: string;
  body: string;
  /** The source line under the card. Omitted where the card states only what other pages on the site already do. */
  source?: string;
};

export type LocationLink = { href: string; title: string; body: string };

export type LocationStep = LocationFact & {
  link?: { href: string; label: string; external?: boolean };
};

export type LocationBond = {
  heading: string;
  intro: string;
  rows: { crime: string; amount: string }[];
  waitHeading: string;
  waitIntro: string;
  wait: string[];
  waitNote: string;
  source: string;
};

export type LocationDeadlines = {
  bond: { body: string; href: string; label: string };
  clocks: { body: string; href: string; label: string };
  source: string;
};

export type LocationDivisionTable = {
  caption: string;
  rows: { division: string; letters: string }[];
  source: string;
};

export type LocationPage = {
  slug: string;
  /**
   * market: a city page. hub: a market's own State Criminal or Personal Injury
   * page, always with `parent`. community: a place around a market.
   */
  kind: "market" | "hub" | "community";
  /** The market's slug. Absent on a market, and on a Tampa community (D152). */
  parent?: string;
  /** The place as a reader writes it: "Tampa", "Brandon". */
  place: string;
  county: string;
  published: boolean;
  /** An attorney has read it. See the file comment. */
  indexable: boolean;
  /** How links to this page read, where `place` alone is not enough: "Criminal defense in St. Petersburg". */
  linkLabel?: string;
  /** Selects the hero photo on a hub page. */
  hubType?: "criminal" | "injury";
  /** A query recorded in the research for this page, with where it is recorded. Otherwise the search map row has no primary. */
  search?: { primary: string; source: string };
  /** True only for Brandon: the office section comes straight after the hero. */
  officeHere?: boolean;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string[];
  facts: { heading: string; intro: string; items: LocationFact[]; table?: LocationDivisionTable };
  /** What to do in the first day. */
  firstSteps?: { heading: string; intro: string; items: LocationStep[] };
  bond?: LocationBond;
  /**
   * The county's key numbers, with links to the one page holding its full bond
   * table and timeline (D155). A page has this, or `bond` and `timeline`, not both.
   */
  deadlines?: LocationDeadlines;
  timeline?: { heading: string; intro: string; steps: { when: string; what: string }[]; source: string };
  charges?: { heading: string; intro: string; items: LocationLink[] };
  injury?: {
    heading: string;
    intro: string;
    items: LocationFact[];
    links: { href: string; label: string }[];
  };
  faq?: { question: string; answer: string }[];
  practices: { heading: string; intro: string; items: LocationLink[] };
  office: { heading: string; body: string[] };
  /** The line over the sub-location links on a market page. */
  communitiesIntro?: string;
  cta: { heading: string; body: string };
};
