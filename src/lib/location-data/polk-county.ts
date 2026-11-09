import type { LocationBond, LocationPage } from "../location-types.ts";
import { BUSINESS, FEDERAL, WHITE_COLLAR } from "./hillsborough.ts";
import { FLHSMV_CRASH_SOURCE } from "./sixth-circuit.ts";

/**
 * Polk County: the market page and its criminal and injury hubs (D159). Polk is in
 * the Tenth Judicial Circuit, with Highlands and Hardee, and none of the Hillsborough
 * constants apply here, apart from the three hub hrefs. It is inland and is not part
 * of the Tampa Bay area, so no page describes it that way. Under D155 the county's
 * one bond table and timeline sit on the criminal hub.
 *
 * WHAT IS DIFFERENT HERE:
 * 1. The steps are spread across towns. Every arrest is booked in Winter Haven, the
 *    jails are in Bartow and Frostproof, and release is from behind the Bartow jail.
 * 2. There is no courthouse in Winter Haven. The court's "Winter Haven Branch" virtual
 *    room belongs to the county judge at the Northeast Government Center, Lake Alfred.
 * 3. No published order sends a misdemeanor to Lakeland or Lake Alfred by where the
 *    arrest happened, so no page says one does. See the sources file.
 *
 * THE BOND SCHEDULE: Administrative Order 2-49.10 took effect January 1, 2026 and runs
 * "until further order of the Court", so it has no end date of its own. It recites the
 * 2023 statewide order, and the current statewide schedule (AOSC25-69) runs only through
 * December 31, 2026. Check the circuit's index for a new order around the start of 2027.
 *
 * THE JUDGE ASSIGNMENTS EXPIRE: Administrative Order 1-1.69, as amended, runs through
 * January 3, 2027. The division and location statements come from it, so recheck them
 * against the order that replaces it. No page names a judge.
 */
export const POLK_BOND: LocationBond = {
  heading: "Polk County's own bond amounts, and who waits for a judge.",
  intro:
    "Polk County sets its own schedule, in a court order that took effect 1 January 2026 and has no end date. Several of its amounts are higher than the statewide schedule, so a chart from another county can mislead you. These are starting amounts, and a judge can set something different. Each charge needs its own bond, in cash or through a bonding company.",
  rows: [
    { crime: "Third degree felony", amount: "$5,000" },
    { crime: "First degree misdemeanor", amount: "$1,000" },
    { crime: "Second degree misdemeanor, or a county or city ordinance violation", amount: "$250" },
    { crime: "DUI or boating under the influence, with no earlier DUI or BUI conviction", amount: "$1,000" },
    { crime: "DUI or boating under the influence, with an earlier DUI or BUI conviction", amount: "No bond until first appearance" },
    { crime: "Driving on a suspended or revoked license and causing a death", amount: "$10,000" },
    { crime: "First or second degree felony", amount: "No bond until first appearance" },
    { crime: "Life or capital felony", amount: "No bond" },
  ],
  waitHeading: "Who stays in custody until first appearance",
  waitIntro: "The schedule gives no amount, and you wait for a judge, if any of these is true:",
  wait: [
    "You are on active probation or community control.",
    "You were out on bond or pretrial release and were arrested for a new offense in Polk, Highlands, or Hardee County.",
    "The charge is domestic violence, stalking, robbery, burglary, carjacking, felony battery, or resisting an officer with violence.",
    "The charge is assault or battery on a law enforcement officer or on someone 65 or older.",
    "The charge is sexual battery, child abuse, kidnapping, false imprisonment, or trafficking in a controlled substance.",
    "You are a convicted felon charged with having a gun or ammunition.",
    "You were arrested for violating a protective injunction, or for missing court while on bail.",
    "You were arrested three or more times in the last 6 months.",
    "You are designated a sexual offender or sexual predator, or were arrested for failing to register as one.",
  ],
  waitNote:
    "The order lists more than these, and a charge on this list has no bond even if the table shows an amount for its degree. Call us if you are not sure, before you pay a bail bond company.",
  source: "10th Circuit Administrative Order 2-49.10, effective January 1, 2026, until further order",
};

export const POLK_TIMELINE: NonNullable<LocationPage["timeline"]> = {
  heading: "The dates that follow a Polk County arrest.",
  intro: "Some of these come from Florida's court rules. The Tuesday arraignment and the fast preliminary hearing come from Polk County's own orders.",
  steps: [
    { when: "Within 24 hours of arrest", what: "Unless you were already released, you go before a judge. The weekday docket starts at 12:45 p.m. On weekends and holidays it starts at 8 a.m." },
    { when: "Next business day, on request", what: "Your lawyer can ask for a preliminary hearing in a felony case, though court rules limit when. If the motion is filed by 11 a.m., a status hearing is held the next business day, and the State must say if it will present evidence. If it will not, you are released on that charge, on your promise to appear if a formal charge is on file. If it will, the hearing should come within 5 working days and no later than 10 days unless the parties agree otherwise." },
    { when: "The first Tuesday after 30 days", what: "This is the felony arraignment date when no formal charge was on file at arrest. Do not count the arrest day. If day 30 is a Tuesday, it moves to the next Tuesday. If a formal charge was already on file at arrest, the same rule uses 14 days. If no charge is on file by arraignment, the State must explain why, and the court sets a new date." },
    { when: "30 days in custody", what: "While you are held, the State has 30 days to file a formal charge. If it misses that, the court orders release on your own word on day 33, or on day 40 if the State shows good cause. You cannot be held past day 40 with no formal charge." },
    { when: "60 days if you are out", what: "On release, the State has 60 days to file. A judge can allow up to 30 more days for good cause." },
    { when: "90 days, or 175 days", what: "This is speedy trial: 90 days for a misdemeanor and 175 for a felony, counted from the formal charge. A missed date does not end the case by itself." },
  ],
  source: "Fla. R. Crim. P. 3.130(a), 3.134(a) and (b), and 3.191(a), (d), (f) and (o); 10th Circuit Administrative Orders 2-19.2 and 2-56.8; Special Order amending Exhibit B to Administrative Order 1-1.69",
};

const MARKET = "polk-county";
const COUNTY = "Polk County";
const STATE = "/criminal-defense/state";
const CRIMINAL_HUB = `/locations/${MARKET}/criminal-defense`;
const INJURY_HUB = `/locations/${MARKET}/personal-injury`;
const MARKET_HREF = `/locations/${MARKET}`;

const JAIL_INQUIRY = "https://www.polksheriff.org/detention/jail-inquiry";

const PCSO_DETENTION = "Polk County Sheriff's Office, Security Division";
const PCSO_CONTACT = "Polk County Sheriff's Office, Contact Us";
const PCSO_INQUIRY = "Polk County Sheriff's Office, Jail Inquiry";
const PCSO_SCAM = "Polk County Sheriff's Office, Scam Reporting";
const CLERK_DATES = "Polk County Clerk, Court Dates";
const CLERK_CRIMINAL = "Polk County Clerk, Search Criminal & Traffic Records";
const CLERK_COURTROOM = "Polk County Clerk, Find My Courtroom";
const CLERK_FAQ = "Polk County Clerk, Misdemeanor Cases FAQ";
const CLERK_LEGAL = "Polk County Clerk, Legal Community";
const CLERK_SMALL = "Polk County Clerk, Small Claims FAQ";
const CLERK_CONTACT = "Polk County Clerk, Contact Us";
const COURT_LOCATIONS = "Tenth Judicial Circuit, Courthouse Locations";
const VIRTUAL = "Tenth Judicial Circuit, Virtual Courtroom Links";
const ASSIGNMENTS = "10th Circuit Administrative Order 1-1.69, Exhibits A and E";
const ASSIGNMENTS_F = "Special Order of October 14, 2026, amending Exhibits B, C and F to Administrative Order 1-1.69";
const FIRST_APPEARANCE = "10th Circuit Administrative Order 2-56.8";
const FELONY_ASSIGNMENT = "10th Circuit Administrative Order 2-5.9";
const PRETRIAL = "10th Circuit Administrative Order 2-12.3";
const LOCAL_RULE = "Tenth Circuit Local Rules No. 1, Rule 1.4(b)";
const CIVIL_MANAGEMENT = "10th Circuit Administrative Order 3-42.2";
const CIVIL_SECTIONS = "10th Circuit Administrative Order 3-44.0";
const POLICE_CITIES =
  "City of Lakeland, Police Department, Contact Us; City of Winter Haven, Records Division; City of Bartow, Police Department directory; City of Haines City, Police Department; City of Lake Wales, Police Dispatch; City of Davenport, Police Information & Resources";

const carLinks = [
  { href: "/personal-injury/car-accidents", label: "Car accident claims" },
  { href: "/personal-injury/truck-accidents", label: "Truck accident claims" },
];

export const polkCountyPages: LocationPage[] = [
  // Market page.
  {
    slug: MARKET,
    kind: "market",
    place: COUNTY,
    county: COUNTY,
    published: true,
    indexable: false,
    search: {
      primary: "criminal defense attorney polk county",
      source: "D159: DataForSEO, Florida, about 320 searches a month, 2026-11-09",
    },
    metaTitle: "Polk County Criminal Defense | Hines McCarty Pavlidis",
    metaDescription:
      "Arrested in Lakeland or elsewhere in Polk County? Booking is in Winter Haven and most court is in Bartow. Our only office is in Brandon. 813-738-8650.",
    h1: "Polk County cases: booked in Winter Haven, heard mostly in Bartow.",
    lead: [
      "An arrest in Lakeland, Winter Haven, or anywhere else in Polk County runs through the same chain. Booking is in Winter Haven, the jails are in Bartow and Frostproof, and most court dates are in Bartow.",
      "So the town on your paperwork may not be the town you need. This page shows which building handles each step, and the two pages linked below go further. Our office is in Brandon, in Hillsborough County, and we take Polk County cases from there.",
    ],
    facts: {
      heading: "Which building handles each step of a Polk County case.",
      intro: "Each step has its own office and phone number. Knowing the step tells you who to call.",
      items: [
        {
          title: "The arrest",
          body: "Lakeland, Winter Haven, Bartow, Haines City, Lake Wales, and Davenport have their own police. Outside city limits, expect Sheriff's deputies. The Sheriff also lists six contract cities with Sheriff's stations: Dundee, Eagle Lake, Fort Meade, Frostproof, Mulberry, and Polk City.",
          source: `${POLICE_CITIES}; ${PCSO_CONTACT}`,
        },
        {
          title: "Booking, in Winter Haven",
          body: "The Sheriff says everyone arrested in Polk County is processed at its Processing Center, 7101 De Castro Road, Winter Haven. It runs day and night, and it has a public window for questions. The number is 863-292-3400.",
          source: PCSO_DETENTION,
        },
        {
          title: "Jail, in Bartow or Frostproof",
          body: "The Central County Jail is at 2390 Bob Phillips Road, Bartow, 863-534-6123. The South County Jail is at 1103 US Hwy 98 West, Frostproof, 863-635-6920. A person is let out from the Releasing Center, directly behind the Bartow jail.",
          source: `${PCSO_DETENTION}; ${PCSO_CONTACT}`,
        },
        {
          title: "First appearance",
          body: "A judge sees you within 24 hours of arrest unless you were already released. The weekday docket starts at 12:45 p.m., and the weekend and holiday docket at 8 a.m. Pretrial release staff, who work for the county, interview people at the jail and give the judge a recommendation.",
          source: `Fla. R. Crim. P. 3.130(a); ${FIRST_APPEARANCE}; ${PRETRIAL}; ${ASSIGNMENTS_F}`,
        },
        {
          title: "State court",
          body: "The State Attorney for the Tenth Judicial Circuit prosecutes state charges. Every felony division sits at the Polk County Courthouse, 255 N. Broadway Avenue, Bartow, so a Lakeland felony is usually heard there. The four county criminal divisions sit in Bartow too. County judges also sit at 930 E. Parker Street in Lakeland and 200 Government Center Blvd. in Lake Alfred.",
          source: `State Attorney for the Tenth Judicial Circuit, Contact Us; ${ASSIGNMENTS}; ${ASSIGNMENTS_F}; ${COURT_LOCATIONS}`,
        },
        {
          title: "Federal court",
          body: "A federal charge skips all of this. Polk County is in the Tampa Division of the Middle District of Florida, so the case is heard at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue, Tampa.",
          source: "M.D. Fla. Local Rule 1.04(a)",
        },
        {
          title: "A lawsuit for money",
          body: "A claim over $50,000 goes to circuit court, and all five Polk civil sections sit in Bartow. A claim of $50,000 or less goes to county court. The Clerk's main number is 863-534-4000, and its offices are in Bartow, Lakeland, and Lake Alfred.",
          source: `F.S. 34.01(1)(c); ${ASSIGNMENTS}; ${CLERK_CONTACT}`,
        },
      ],
    },
    practices: {
      heading: "Where to read more about your kind of case.",
      intro:
        "The first two are written for Polk County. The other three are the firm's general pages, so use the courthouse details above with them.",
      items: [
        {
          href: CRIMINAL_HUB,
          title: "Criminal defense in Polk County",
          body: "The first day after an arrest, Polk's bond table, which division takes the case, and the dates that follow.",
        },
        {
          href: INJURY_HUB,
          title: "Personal injury in Polk County",
          body: "After a crash: who has the report, the deadlines, and how a Polk County lawsuit is scheduled.",
        },
        {
          href: FEDERAL,
          title: "Federal criminal defense",
          body: "Federal charges and investigations. Polk County is in the Tampa Division, the division that page describes.",
        },
        {
          href: WHITE_COLLAR,
          title: "White-collar defense",
          body: "Fraud and financial cases, state or federal, starting from the first subpoena or agent visit.",
        },
        {
          href: BUSINESS,
          title: "Business litigation",
          body: "Disputes over contracts, ownership, non-competes, and trade secrets.",
        },
      ],
    },
    faq: [
      {
        question: "Is a Lakeland case heard in Lakeland?",
        answer: "Not always. A felony is usually heard in Bartow. A county judge does sit at the Lakeland branch, 930 E. Parker Street, but the main county criminal divisions are in Bartow. Go by your court notice, and check the Clerk's Find My Courtroom tool on the day of the hearing.",
      },
      {
        question: "Is there a courthouse in Winter Haven?",
        answer: "The court's list of Polk locations shows Bartow, Lakeland, and Lake Alfred. Winter Haven has the Sheriff's booking center. You may still see the name, because the court calls one of its virtual rooms the Winter Haven Branch, and that judge's address is the Northeast Government Center in Lake Alfred.",
      },
      {
        question: "Is Polk County's bond the same as Hillsborough's?",
        answer: "No. Polk sets a third degree felony at $5,000 and a first degree misdemeanor at $1,000. Hillsborough lists lower amounts for those charges when no force is involved. Our Polk criminal page has the full table.",
      },
      {
        question: "Where is the firm's office?",
        answer: "In Brandon, at 745 W Lumsden Rd, in Hillsborough County. It is our only office. We have none in Lakeland, Winter Haven, or anywhere else in Polk County, though we do take Polk County cases.",
      },
    ],
    office: {
      heading: "Our office is in Brandon, not Polk County.",
      body: [
        "The firm has one office, at 745 W Lumsden Rd in Brandon. There is no office in Polk County.",
        "We take Polk County cases from Brandon, and we answer 813-738-8650 24 hours a day, 7 days a week. If you would like to meet in Brandon, please call first to set a time.",
      ],
    },
    cta: {
      heading: "Talk to an attorney about a Polk County case.",
      body: "Calls are confidential and answered 24/7. If you were arrested in Lakeland or elsewhere in the county, contacted by investigators, or hurt in a crash, call before you explain anything to anyone else.",
    },
  },

  // Criminal hub.
  {
    slug: "criminal-defense",
    kind: "hub",
    hubType: "criminal",
    parent: MARKET,
    place: COUNTY,
    county: COUNTY,
    linkLabel: "Criminal defense in Polk County",
    published: true,
    indexable: false,
    metaTitle: "Criminal Defense in Polk County | Hines McCarty Pavlidis",
    metaDescription:
      "Arrested in Polk County? The jail lookup, the county's own bond amounts, first appearance times, and felony dates. Our only office is in Brandon.",
    h1: "Arrested in Polk County: what to do today, and what bond costs here.",
    lead: [
      "If you or someone you love was just arrested in Polk County, start here. This page covers how to find the person, what bond costs, when a judge will see them, and how the case reaches a courtroom.",
      "Polk County has its own bond schedule and its own felony calendar, so details from another county may be wrong here. Our office is in Brandon, and we defend people charged in Polk County from there.",
    ],
    firstSteps: {
      heading: "What to do first after a Polk County arrest.",
      intro: "A hearing could come as soon as this afternoon, so start now.",
      items: [
        {
          title: "Search the Sheriff's Jail Inquiry",
          body: "Whoever made the arrest, the person is booked by the Sheriff. Search by name or booking date. If the name has an apostrophe, the Sheriff says to type it twice, as in O''Keefe. You can also call 863-292-3400.",
          source: `${PCSO_INQUIRY}; ${PCSO_DETENTION}`,
          link: { href: JAIL_INQUIRY, label: "Jail Inquiry (Polk County Sheriff)", external: true },
        },
        {
          title: "Know which building to go to",
          body: "Booking is at 7101 De Castro Road, Winter Haven, and its public window is open at any hour. After that, a person may be held in Bartow or Frostproof. Release is from the Releasing Center, directly behind the Central County Jail in Bartow, 863-534-8712. Confirm before you drive.",
          source: `${PCSO_DETENTION}; ${PCSO_CONTACT}`,
        },
        {
          title: "Read the bond table before you pay",
          body: "Many charges have no bond at all until a judge rules, so no payment can help yet. If a charge has an amount, it can be paid in cash or through a bonding company.",
          source: "10th Circuit Administrative Order 2-49.10",
          link: { href: "#bond", label: "Polk County bond table" },
        },
        {
          title: "Watch for the bail bond scam",
          body: "The Sheriff warns of callers who claim to work for a local bondsman and press you to pay by CashApp, Zelle, or gift card. Hang up and call the company back. Then call the jail yourself at 863-292-3400 to check the person's status.",
          source: PCSO_SCAM,
        },
        {
          title: "Do not discuss what happened",
          body: "You do not have to explain anything to officers or detectives. If you are family, do not ask for the story, and do not repeat what you hear.",
        },
        {
          title: "Call before the docket starts",
          body: "The weekday first appearance docket starts at 12:45 p.m., and the weekend and holiday docket at 8 a.m. Pretrial release staff interview people at the jail and make a recommendation to the judge, so call us as early as you can.",
          source: `${FIRST_APPEARANCE}; ${PRETRIAL}; ${ASSIGNMENTS_F}`,
        },
        {
          title: "Family can watch",
          body: "The Sheriff says visitors can watch from the lobby of either jail, any day. Weekend and holiday hearings are held in Courtroom 8E at the Bartow courthouse. The court posts a virtual room too, but the Clerk warns that not all hearings can be viewed that way.",
          source: `${PCSO_DETENTION}; ${ASSIGNMENTS_F}; ${VIRTUAL}; ${CLERK_COURTROOM}`,
          link: { href: "https://www.jud10.flcourts.org/virtual-courtroom-links/polk-first-appearance", label: "Polk First Appearance virtual courtroom (Tenth Circuit)", external: true },
        },
      ],
    },
    bond: POLK_BOND,
    facts: {
      heading: "How a Polk County case gets to a courtroom.",
      intro: "Felonies and misdemeanors take different paths here, and the town of arrest may not settle either one.",
      items: [
        {
          title: "Felonies go to Bartow",
          body: "Polk has nine felony divisions, F1 to F9, and the court's list puts each of them in Bartow, at 255 N. Broadway Avenue. That holds for an arrest in Lakeland or Winter Haven too. The Clerk's system assigns a new case at random, in shares the Chief Judge sets.",
          source: `${FELONY_ASSIGNMENT}; ${ASSIGNMENTS}; ${COURT_LOCATIONS}`,
        },
        {
          title: "Where to see your division",
          body: "The division is written on the Order Following First Appearance Hearing, so keep that paper. Some cases skip the random draw. A new case follows any open case or probation you already have, and known co-defendants are placed together. First-degree homicide goes to F9.",
          source: FELONY_ASSIGNMENT,
        },
        {
          title: "Misdemeanors, mostly in Bartow",
          body: "Four county criminal divisions, M4 to M7, sit in Bartow. County judges in Lakeland and at the Northeast Government Center in Lake Alfred are also listed for criminal relief work. The circuit's local rule calls for county criminal cases to be assigned on a random schedule. So do not assume a Lakeland arrest means a Lakeland courtroom. Go by your notice.",
          source: `${ASSIGNMENTS_F}; ${LOCAL_RULE}`,
        },
        {
          title: "The name Winter Haven can mislead you",
          body: "The court's site has a Winter Haven Branch virtual room, but that judge's address is 200 Government Center Blvd., Lake Alfred. The Clerk also lists a Haines City mailing address for that building. If your notice says any of these, check the street address.",
          source: `${VIRTUAL}; ${ASSIGNMENTS_F}; ${CLERK_CONTACT}`,
        },
        {
          title: "DUI court",
          body: "Polk County has a DUI/Drug Court in the M8 division. The State Attorney may offer it to a person with multiple DUIs as part of a plea deal, and the program becomes a condition of probation.",
          source: "10th Circuit Administrative Order 2-71.1; Special Order of March 21, 2024, transferring cases to the F8 and M8 divisions",
        },
        {
          title: "Asking a judge to change bond",
          body: "In a felony with no formal charge yet, a county judge hears the bond motion. Once the formal charge is filed, it goes to circuit court. These hearings are in person. After one is held, a later one generally must go to the same judge, a higher court, or the Chief Judge.",
          source: "10th Circuit Administrative Orders 2-61.1 and 2-15.1",
        },
        {
          title: "Finding your court date",
          body: "Search the Clerk's criminal portal, showcase.polkcountyclerk.net/showcaseweb, by case number or name. Open the case and go to the Court Events tab. You do not need an account. The Find My Courtroom tool shows only today's schedule, and e-Notify sends text or email reminders. The Clerk's number is 863-534-4000.",
          source: `${CLERK_DATES}; ${CLERK_CRIMINAL}; ${CLERK_COURTROOM}; ${CLERK_LEGAL}`,
        },
        {
          title: "If you miss court",
          body: "The Clerk warns that a judge can order your arrest, and that you may lose the bond you posted. If you were released to the pretrial program and that order issues, the release is revoked automatically. Call a lawyer right away if you missed a date.",
          source: `${CLERK_FAQ}; 10th Circuit Administrative Order 2-48.0`,
        },
        {
          title: "Federal charges",
          body: "A federal case does not use the Bartow courthouse or this bond schedule. It is heard in the Tampa Division of the Middle District of Florida, at 801 North Florida Avenue, Tampa.",
          source: "M.D. Fla. Local Rule 1.04(a)",
        },
      ],
    },
    timeline: POLK_TIMELINE,
    charges: {
      heading: "Charges we defend, and how each one plays out here.",
      intro: "Each charge page explains the Florida law and penalties. Those pages are written around Hillsborough County courts, so your court details are on this page.",
      items: [
        {
          href: `${STATE}/dui`,
          title: "DUI",
          body: "Polk sets $1,000 with no earlier DUI, and no bond before first appearance with one. Your license is a separate fight, and you get 10 days from the notice of suspension to act.",
        },
        {
          href: `${STATE}/domestic-violence`,
          title: "Domestic violence",
          body: "No schedule amount applies, so you stay in custody until the judge rules, whatever the degree of the charge.",
        },
        {
          href: `${STATE}/gun-crimes`,
          title: "Gun crimes",
          body: "A convicted felon charged with having a gun or ammunition waits for a judge, whatever degree the charge carries.",
        },
        {
          href: `${STATE}/drug-possession`,
          title: "Drug possession",
          body: "The substance and the amount set the charge. A third degree felony lists $5,000, while trafficking has no bond until first appearance.",
        },
        {
          href: `${STATE}/battery`,
          title: "Battery",
          body: "A simple battery is a misdemeanor, but felony battery and battery on someone 65 or older wait for a judge.",
        },
        {
          href: `${STATE}/grand-theft`,
          title: "Grand theft",
          body: "The value sets the degree, and the degree sets the bond. Third degree lists $5,000. First and second degree have no amount until first appearance.",
        },
      ],
    },
    practices: {
      heading: "Related pages for a Polk County case.",
      intro: "Two explain other kinds of charges. Two stay in Polk County.",
      items: [
        { href: FEDERAL, title: "Federal criminal defense", body: "Charges in the Tampa Division, which includes Polk County." },
        { href: WHITE_COLLAR, title: "White-collar defense", body: "Fraud and financial cases, often starting before anyone is charged." },
        { href: INJURY_HUB, title: "Personal injury in Polk County", body: "If you were hurt in a crash: reports, deadlines, and how a suit is scheduled." },
        { href: MARKET_HREF, title: "Polk County overview", body: "Which building handles each step, from booking to a civil claim." },
      ],
    },
    faq: [
      {
        question: "When is the felony arraignment?",
        answer: "It is usually the first Tuesday that comes 30 days after arrest, not counting the arrest day. If a formal charge was on file at arrest, it is the first Tuesday that comes 14 days after. Check the date on the Clerk's portal.",
      },
      {
        question: "Which jail is my family member in?",
        answer: "Check the Jail Inquiry page, or call 863-292-3400. Polk County has two jails, in Bartow and Frostproof, so do not assume it is the one nearest the arrest.",
      },
      {
        question: "Where do I pick someone up?",
        answer: "The Sheriff lists its Releasing Center as the place people are released. It is directly behind the Central County Jail, 2390 Bob Phillips Road, Bartow. Its number is 863-534-8712, so call before you go.",
      },
      {
        question: "Will I get a cash bond back?",
        answer: "Maybe not all of it. If someone other than a bail bond agent posted cash, the Clerk says it will first take any unpaid fees, costs, and penalties when the case ends. Any balance can also go to another case you owe on.",
      },
      {
        question: "Does the firm have an office in Polk County?",
        answer: "No. Our only office is in Brandon, in Hillsborough County. We take Polk County cases from there, and you can call us at any hour.",
      },
    ],
    office: {
      heading: "We defend Polk County cases from Brandon.",
      body: [
        "Our only office is at 745 W Lumsden Rd in Brandon, in Hillsborough County. We have no office in Lakeland, Bartow, Winter Haven, or anywhere else in Polk County.",
        "We answer 813-738-8650 at any hour, every day. If you want to meet in person, call first so an attorney can set aside time for you.",
      ],
    },
    cta: {
      heading: "Someone arrested in Polk County? Call before the docket.",
      body: "We answer 24/7, and the call is confidential. Tell us the person's name and where they were arrested, and we can talk through bond and first appearance.",
    },
  },

  // Injury hub.
  {
    slug: "personal-injury",
    kind: "hub",
    hubType: "injury",
    parent: MARKET,
    place: COUNTY,
    county: COUNTY,
    linkLabel: "Personal injury in Polk County",
    published: true,
    indexable: false,
    metaTitle: "Polk County Personal Injury Claims | Hines McCarty Pavlidis",
    metaDescription:
      "Hurt in a Polk County crash? Who holds the report, your Florida deadlines, and how a suit is scheduled in Bartow. Our only office is in Brandon. 813-738-8650.",
    h1: "Hurt in a Polk County crash: the report, the deadlines, the schedule.",
    lead: [
      "After a crash in Polk County, your first job is to get care and note which agency came. Who took the report decides where you ask for it, and Lakeland police have their own process.",
      "This page also covers what happens if you sue, because a Polk County case runs on a set schedule from the day it is filed. Our office is in Brandon, and we take injury claims from Polk County there.",
    ],
    firstSteps: {
      heading: "After a crash in Polk County, do these first.",
      intro: "The first deadline starts on the day of the crash, so these should not wait.",
      items: [
        {
          title: "Get seen within 14 days",
          body: "Your own insurance pays your first medical bills only if your first care comes within 14 days of the crash. Go even if the pain seems small.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Note who came",
          body: "It could be a city police officer, a Sheriff's deputy, or a state trooper. The Florida Highway Patrol's Troop C covers Polk County. Write down the agency and the case number before you leave the scene, if you can.",
          source: "FLHSMV, Troop C",
        },
        {
          title: "Order the report",
          body: "The state's portal sells crash reports for $10, plus a $2 fee per order. A report can take up to 10 days to appear. Reports are closed to the general public, with an exception for people in the crash and others the law names.",
          source: FLHSMV_CRASH_SOURCE,
          link: { href: "https://www.flhsmv.gov/traffic-crash-reports/", label: "Traffic Crash Reports (FLHSMV)", external: true },
        },
        {
          title: "Be careful with insurers",
          body: "Fault can cut a claim down or end it, so the way you describe the crash matters. Talk to a lawyer before you give an insurer your account.",
        },
      ],
    },
    facts: {
      heading: "Who has the report, and how a Polk County suit runs.",
      intro: "Several agencies work crashes here, and each keeps its own records. The court side is simpler, because most of it is in Bartow.",
      items: [
        {
          title: "A Lakeland police report",
          body: "Ask the Records Section at 219 N. Massachusetts Avenue, 863-834-6936. Its page says crash reports may be requested within 60 days of the crash, with a notarized sworn statement first. It keeps records for its own agency only.",
          source: "City of Lakeland, Police Department, Records and Information",
        },
        {
          title: "A Winter Haven police report",
          body: "The Records Division is on the first floor at 125 N. Lake Silver Drive NW, open weekdays from 8 a.m. to 5 p.m. Its number is 863-291-5858. Give the date, the place, and the names involved.",
          source: "City of Winter Haven, Records Division",
        },
        {
          title: "A Sheriff's report",
          body: "Call Sheriff's Records at 863-298-6300, or email recordsrequest@polksheriff.org. Ask for the public records request forms.",
          source: `${PCSO_CONTACT}; Polk County Sheriff's Office, Public Records`,
        },
        {
          title: "Which county a suit is filed in",
          body: "A suit generally belongs in the county where the defendant lives or where the claim arose. A crash in Lakeland can usually be filed in Polk County, even if you live somewhere else. Different rules apply to a defendant who lives out of state.",
          source: "F.S. 47.011",
        },
        {
          title: "Which court, by amount",
          body: "A claim over $50,000 goes to circuit court. Five civil sections hear those cases, and the court's list puts all five in Bartow. A claim of $50,000 or less goes to county court. Small claims, at $8,000 or less, is its own part of county court.",
          source: `F.S. 34.01(1)(c); ${ASSIGNMENTS}; ${CLERK_SMALL}`,
        },
        {
          title: "How your section is picked",
          body: "The Clerk assigns a new circuit civil case at random among the sections. Cases do move: Section 11 came back in 2026, and some open cases were reassigned to it. Check your case if a judge's name changes.",
          source: `${CIVIL_SECTIONS}; Tenth Circuit Local Rules No. 1, Rule 1.2`,
        },
        {
          title: "The plan filed on day one",
          body: "In Polk County, the person suing picks a case track and files a Civil Case Management Plan with the complaint. The Clerk will not accept the first filing without it. A circuit jury case is on the general track, aimed at ending in 18 months. A county court case is on the streamlined track, at 12 months.",
          source: CIVIL_MANAGEMENT,
        },
        {
          title: "Deadlines inside that plan",
          body: "The complaint must be served within 120 days of filing, and any extension stops at 240 days. On the general track, discovery and mediation or another settlement process must be done within 450 days. On the streamlined track, it is 270 days.",
          source: CIVIL_MANAGEMENT,
        },
        {
          title: "How to look up a case",
          body: "Civil cases are on a separate portal from criminal ones, at pro.polkcountyclerk.net/PRO. Choose Public Access, pick the court type, and search by party name or case number. The Hearings tab shows upcoming dates. The Clerk's number is 863-534-4000.",
          source: CLERK_DATES,
        },
      ],
    },
    injury: {
      heading: "The Florida rules that decide what you can recover.",
      intro: "These come from state law, so a Polk County crash follows the same dates as any other in Florida.",
      items: [
        {
          title: "14 days to first care",
          body: "Wait longer, and your own policy may not pay for that care. The count begins on the crash date.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Two years to sue",
          body: "A negligence suit from a crash after 24 March 2023 must be filed within two years.",
          source: "F.S. 95.11",
        },
        {
          title: "More than half at fault",
          body: "If you are found more than 50 percent at fault for your own harm, you recover nothing from the other driver.",
          source: "F.S. 768.81",
        },
      ],
      links: carLinks,
    },
    practices: {
      heading: "More on crash claims and Polk County cases.",
      intro: "The injury page explains Florida law in more depth. The Polk pages cover local offices, and the last link is for business disputes.",
      items: [
        { href: "/personal-injury", title: "Personal injury", body: "How the firm handles claims after someone else causes a crash." },
        { href: CRIMINAL_HUB, title: "Criminal defense in Polk County", body: "If the crash led to a DUI or other charge, start with the jail and bond details." },
        { href: MARKET_HREF, title: "Polk County overview", body: "Which building handles each step of a case in this county." },
        { href: BUSINESS, title: "Business litigation", body: "Disputes over contracts, ownership, and trade secrets." },
      ],
    },
    faq: [
      {
        question: "Does a Lakeland crash mean a Lakeland courthouse?",
        answer: "Not for a large claim. All five circuit civil sections are listed in Bartow. A county judge does sit in Lakeland, so a smaller claim could be different. Check your notice, or use the Clerk's Find My Courtroom tool on the hearing day.",
      },
      {
        question: "How long does a Polk County injury suit take?",
        answer: "The court's target for a circuit jury case is 18 months, counted from when the last defendant is served or 120 days after filing, whichever is first. That is a target, not a set end date. Complex cases can get 30 months.",
      },
      {
        question: "Can anyone get my crash report?",
        answer: "The state closes these reports to the general public, except for people in the crash and others the law names. Lakeland police ask for a notarized sworn statement before they release one.",
      },
      {
        question: "Does the firm have an office in Polk County?",
        answer: "No. Our only office is in Brandon, at 745 W Lumsden Rd, in Hillsborough County. We take Polk County injury claims from there, and we answer the phone at any hour.",
      },
    ],
    office: {
      heading: "Polk County claims, handled from Brandon.",
      body: [
        "We have one office, at 745 W Lumsden Rd in Brandon, and none in Polk County.",
        "Call 813-738-8650 at any hour to talk about your crash. If you would like to come in, call first so we can set a time.",
      ],
    },
    cta: {
      heading: "Hurt in a crash in Polk County? Talk to us first.",
      body: "We answer 24/7 and the call is confidential. It helps to have the agency and case number, but do not wait on them. Call before you give an insurer your account.",
    },
  },
];
