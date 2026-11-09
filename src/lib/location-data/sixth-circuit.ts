import type { LocationBond, LocationPage, LocationDeadlines } from "../location-types.ts";

/**
 * Pinellas County facts from the Sixth Judicial Circuit, shared by the St.
 * Petersburg and Clearwater pages (D154). Full quotes and caveats are in the
 * sources file for this circuit. Orders were read on 2026-11-09 from the index at
 * https://www.jud6.org/administrative-orders/. The circuit's older subject pages
 * lag that index (they still list bond order 2026-022), so check the index.
 *
 * WHAT IS DIFFERENT HERE:
 * 1. There is no criminal split. AO 2026-038 and AO 2026-014 put every criminal
 *    and traffic section at the Justice Center on 49th Street North, wherever in
 *    the county the case began. The St. Petersburg Judicial Building has civil,
 *    family and probate sections only.
 * 2. Civil cases do split, by ZIP code, but it is the ZIP of the plaintiff's
 *    lawyer, not where the crash happened (AO 2026-002). The firm's Brandon ZIP,
 *    33511, is on neither list, so paragraph 2(g) spreads its cases evenly.
 * 3. Traffic court follows the agency that wrote the citation (AO 2024-029,
 *    replaced by AO 2026-048 on January 1, 2027). That is the one thing that
 *    differs town by town. FHP moves from Traffic Court I to II on that date.
 * 4. Pinellas has its own bond schedule, higher than the statewide one for a
 *    third degree felony: no bond if any force, $5,000 if none (AO 2026-036).
 *
 * THE BOND SCHEDULE EXPIRES. AO 2026-036 runs through December 31, 2026, and the
 * circuit has reissued this schedule several times in 2026 (2026-005, 2026-022,
 * 2026-026, 2026-036). Check for the 2027 order and update these amounts.
 *
 * JUDGES ARE NOT NAMED. Assignment orders change several times a year.
 */

// Source lines.
export const SIXTH_BOND_SOURCE = "6th Circuit Administrative Order 2026-036, effective through December 31, 2026";
export const SIXTH_CRIMINAL_COURTS_SOURCE = "6th Circuit Administrative Orders 2026-038 and 2026-014";
export const SIXTH_CIRCUIT_ASSIGNMENTS_SOURCE = "6th Circuit Administrative Order 2026-038";
export const SIXTH_COUNTY_ASSIGNMENTS_SOURCE = "6th Circuit Administrative Order 2026-014";
export const SIXTH_TRAFFIC_SOURCE = "6th Circuit Administrative Orders 2024-029 and 2026-048";
export const SIXTH_NTA_SOURCE = "6th Circuit Administrative Order 2020-019";
export const SIXTH_CIVIL_SOURCE = "6th Circuit Administrative Order 2026-002";
export const SIXTH_RELEASE_SOURCE = "6th Circuit Administrative Order 2021-016";
export const SIXTH_DRUG_COURT_SOURCE = "6th Circuit Administrative Order 2019-066";
export const SIXTH_ADVISORY_SOURCE = "Sixth Judicial Circuit, Duty Judge Calendar";
export const SIXTH_ADVISORY_ORDER_SOURCE = "6th Circuit Administrative Orders 2026-014 and 2007-009";
export const SIXTH_LOCAL_RULE_SOURCE = "Sixth Judicial Circuit Local Rule 3(A)";
export const JUDICIAL_BUILDING_SOURCE = "Sixth Judicial Circuit, St. Petersburg Judicial Building";
export const PCSO_JAIL_SOURCE = "Pinellas County Sheriff's Office, Inmate Information and How to Post Bond";
export const PCSO_PATROL_SOURCE = "Pinellas County Sheriff's Office, Patrol Operations Bureau";
export const PCSO_CRASH_SOURCE = "Pinellas County Sheriff's Office, Crash Report Policy";
export const PINELLAS_PHONES_SOURCE = "Pinellas County, Non-Emergency Phone Numbers";
export const PINELLAS_CLERK_RECORDS_SOURCE = "Pinellas County Clerk of the Circuit Court, Public Access Case Records and Hearing Search";
export const PINELLAS_CLERK_CIVIL_SOURCE = "Pinellas County Clerk of the Circuit Court, Civil Court; F.S. 34.01(1)(c)";
export const FLHSMV_CRASH_SOURCE = "Florida Department of Highway Safety and Motor Vehicles, Traffic Crash Reports";
export const FEDERAL_TAMPA_SOURCE = "U.S. District Court, Middle District of Florida";

// Places, phones and links. Addresses are as the Sheriff and the circuit give them.
export const JUSTICE_CENTER_ADDRESS = "14250 49th Street North, Clearwater";
export const JAIL_ADDRESS = "14400 49th Street North, Clearwater";
export const JUDICIAL_BUILDING_ADDRESS = "545 1st Avenue North, St. Petersburg";
export const HISTORIC_COURTHOUSE_ADDRESS = "324 South Ft. Harrison Avenue, Clearwater";
export const GIBBONS_ADDRESS = "801 North Florida Avenue, Tampa";
export const JAIL_RECORDS_PHONE = "727-464-6415";
export const SHERIFF_NON_EMERGENCY_PHONE = "727-582-6200";
export const SHERIFF_RECORDS_PHONE = "727-582-6281";
export const STATE_ATTORNEY_DISPATCH_PHONE = "727-464-6221";
export const CLERK_PHONE = "727-464-7000";
export const FHP_PINELLAS_PHONE = "727-217-8820";
export const WHOS_IN_JAIL_URL = "https://whosinjail.pinellassheriff.gov";
export const POST_BOND_URL = "https://pinellassheriff.gov/Post-Bond";
export const CRASH_REPORTS_URL = "https://pinellassheriff.gov/CrashReports/CrashPolicy";
export const FLHSMV_CRASH_PORTAL_URL = "https://services.flhsmv.gov/CrashReportPurchasing/";

export const PINELLAS_CASE_LOOKUP_ANSWER =
  "The Clerk's Public Access site, courtrecords.mypinellasclerk.gov, lets you search by name, case number, or citation number, and most records need no account. The Clerk's Quick Hearing Search shows upcoming or recent criminal and traffic hearings, but it is not the official record. Juvenile and some family records will not show in full.";

export const PINELLAS_BOND: LocationBond = {
  heading: "What bond costs in Pinellas County, and who waits for a judge.",
  intro:
    "Pinellas County has its own bond schedule, so a chart from another county may be wrong here. It runs through 31 December 2026. Jail staff use it for release before first appearance, and it does not bind a judge. Each charge needs its own bond.",
  rows: [
    { crime: "Third degree felony, no force or threat of force against a person", amount: "$5,000" },
    { crime: "Third degree felony, any force or threat of force against a person", amount: "No bond until first appearance" },
    { crime: "Felony driving or boating offense, or felony failure to register", amount: "No bond until first appearance" },
    { crime: "First degree misdemeanor, any force or threat", amount: "$1,000" },
    { crime: "First degree misdemeanor, no force or threat", amount: "$500" },
    { crime: "Second degree misdemeanor, any force or threat", amount: "$250" },
    { crime: "Second degree misdemeanor, no force or threat", amount: "$150" },
    { crime: "DUI or boating under the influence, with no damage to anyone and no DUI history", amount: "$500" },
    { crime: "DUI or boating under the influence, with damage to a person or property, or any DUI history", amount: "No bond until first appearance" },
  ],
  waitHeading: "When the schedule does not help you",
  waitIntro: "You stay in custody until first appearance, whatever the amount above, if any of these is true:",
  wait: [
    "You are charged with a first or second degree felony, or a capital or life felony.",
    "You were on pretrial release, probation, or community control when arrested for a felony.",
    "You were on any supervised pretrial release or supervised bond when arrested for a new felony or misdemeanor.",
    "The charge is domestic violence, stalking, robbery, burglary, felony battery, or resisting an officer with violence.",
    "The charge is assault or battery on an officer or on someone 65 or older.",
    "The charge is sexual battery, child abuse, kidnapping, false imprisonment, or trafficking in a controlled substance.",
    "You are a convicted felon charged with having a gun or ammunition.",
    "You were arrested for violating a protective injunction, or for missing court while on bail.",
    "You were arrested three or more times in the last 6 months.",
    "You are designated a sexual offender or sexual predator.",
  ],
  waitNote:
    "The order lists more than these. If jail staff cannot tell whether a rule applies to you, you also wait for a judge. If you are not sure, call us before you pay a bail bond company.",
  source: SIXTH_BOND_SOURCE,
};

export const PINELLAS_TIMELINE: NonNullable<LocationPage["timeline"]> = {
  heading: "The clocks that start after the arrest.",
  intro: "Court rules and one local order set these deadlines. Each one is counted from the point shown.",
  steps: [
    {
      when: "Within 24 hours of arrest",
      what: "You go before a judge unless you were already released. Pinellas County calls this hearing advisories. The judge decides whether you are held and sets any terms of release.",
    },
    {
      when: "7 days, for a misdemeanor in custody",
      what: "If your top charge is a first degree misdemeanor and no formal charge has come within 7 days of first appearance, not counting weekends and holidays, the Sheriff may release you with a notice to appear. This does not cover domestic violence, stalking, or injunction charges.",
    },
    {
      when: "30 days in custody",
      what: "If you are held, the State gets 30 days to file a formal charge. If it misses that date, the court must release you on your own word on day 33, or on day 40 if the State shows good cause. Day 40 is the limit without a formal charge.",
    },
    {
      when: "60 days if you are out",
      what: "If you are on release, the State gets 60 days to file. For good cause, the court can add up to 30 more.",
    },
    {
      when: "90 days, or 175 days",
      what: "This is the speedy trial clock, counted from the formal charge: 90 days for a misdemeanor and 175 for a felony. A case does not end on its own when the time runs out.",
    },
  ],
  source: "Fla. R. Crim. P. 3.130(a), 3.134(a) and (b), and 3.191(a), (d), (f) and (o); 6th Circuit Administrative Order 2021-016",
};

/** The key numbers for pages without the full table (D155). */
export const PINELLAS_DEADLINES: LocationDeadlines = {
  bond: {
    body: "Through 31 December 2026, a third degree felony with no force is $5,000, and one with any force or threat has no bond until first appearance. A first degree misdemeanor is $500 or $1,000. Many charges have to wait for a judge, and each charge needs its own bond.",
    href: "/locations/clearwater/criminal-defense#bond",
    label: "Full Pinellas County bond table",
  },
  clocks: {
    body: "You see a judge within 24 hours of arrest. The State then has 30 days to file a formal charge if you are held, or 60 days if you are out. The speedy trial clock is 90 days for a misdemeanor and 175 for a felony, counted from the formal charge.",
    href: "/locations/clearwater/criminal-defense#timeline",
    label: "Full Pinellas County timeline",
  },
  source: `${PINELLAS_BOND.source}; Fla. R. Crim. P. 3.130(a), 3.134(a) and (b), and 3.191(a), (d), (f) and (o)`,
};
