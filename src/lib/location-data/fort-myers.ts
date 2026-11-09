import type { LocationBond, LocationPage } from "../location-types.ts";
import { BUSINESS, FEDERAL, WHITE_COLLAR } from "./hillsborough.ts";

/**
 * Fort Myers: the market page and its two hubs, in Lee County (D161). Lee County
 * is in the Twentieth Judicial Circuit (Charlotte, Collier, Glades, Hendry, Lee),
 * not the Twelfth or Thirteenth, and in the Fort Myers Division of the federal
 * Middle District, not Tampa. Nothing here comes across from another circuit. Every
 * order cited is listed on the circuit's index on 2026-11-09
 * (https://www.ca.cjis20.org/Documents/admin-orders.aspx) and is not marked vacated.
 * The index has no status column, so that is the test. Under D155 the county's one
 * bond table and timeline sit on the criminal hub.
 *
 * WHAT IS DIFFERENT HERE:
 * 1. One jail books every arrest in the county, Cape Coral's included: the Downtown
 *    Jail on Dr. Martin Luther King Jr. Boulevard. A cash bond there must be the
 *    exact amount, paid in full: no personal checks, money orders or cashier's
 *    checks. The Sheriff's page does not say whether cards are taken, so no page
 *    says either way.
 * 2. No last-name table. The Clerk assigns a felony to a judge, and AO 3.27 keeps one
 *    person's felonies, and small groups of co-defendants, with one judge.
 * 3. No current first appearance order. The 2005 Lee assignment order was vacated in
 *    2022. The court posts a weekly rotation of county and circuit judges instead.
 * 4. Cape Coral has its own police, but its separate county court division ended in
 *    2021 (AO 2.32 vacated). The court still lists a Cape Coral location.
 *
 * THE BOND SCHEDULE EXPIRES. AO 3.23 (Second Amended, effective January 1, 2024)
 * adopts the statewide schedule and says the latest Supreme Court version applies
 * with no local amendment. Its attachment is still the 2024 order (AOSC23-88). The
 * amounts below are read from AOSC25-69, which runs through December 31, 2026.
 * Update LEE_BOND when the 2027 statewide order issues; the circuit need not act.
 *
 * 2027: the court's 2027 felony trial schedule lists four felony divisions (E, S, D,
 * F); the 2026 schedule lists five (also R). The "Felonies" card says so. No page
 * names a division letter as yours, a courtroom, or a judge.
 */

export const LCSO_BOND_SOURCE = "Lee County Sheriff's Office, Frequently Asked Questions, Corrections";
export const LCSO_JAIL_SOURCE = "Lee County Sheriff's Office, Corrections Bureau and Facility Directory";
export const COURT_LEE_SOURCE = "20th Judicial Circuit, Lee County Justice Center location page";
export const PRETRIAL_SOURCE = "20th Judicial Circuit, Pretrial Services page";

export const LEE_BOND: LocationBond = {
  heading: "Lee County bond amounts, and who waits for a judge.",
  intro:
    "The circuit uses the statewide bond schedule, and its order says the newest version applies on its own. The 2026 version ends on 31 December 2026. The amounts let the jail release you before first appearance, but the Sheriff does not have to. A judge is not bound by them, and each charge needs its own bond.",
  rows: [
    { crime: "Third degree felony, with any force or threat of force against a person", amount: "$5,000" },
    { crime: "Third degree felony, with no force or threat", amount: "$2,500" },
    { crime: "First degree misdemeanor, with any force or threat", amount: "$1,000" },
    { crime: "First degree misdemeanor, with no force or threat, other than DUI", amount: "$500" },
    { crime: "Second degree misdemeanor, with any force or threat", amount: "$250" },
    { crime: "Second degree misdemeanor, with no force or threat, other than DUI", amount: "$150" },
    { crime: "DUI or boating under the influence, as a first degree misdemeanor", amount: "$1,000" },
    { crime: "DUI or boating under the influence, second offense, second degree misdemeanor", amount: "$750" },
    { crime: "DUI or boating under the influence, first offense, second degree misdemeanor", amount: "$500" },
  ],
  waitHeading: "Who stays in until first appearance",
  waitIntro: "No amount on the table applies, and the person sees a judge first, if any of these is true:",
  wait: [
    "The charge is a capital, life, first degree, or second degree felony, or any homicide.",
    "The arrest was for a felony while on pretrial release, probation, or community control, in any state.",
    "The charge is domestic violence, stalking, felony battery, or domestic battery by strangulation.",
    "The charge is robbery, burglary, carjacking, or resisting an officer with violence.",
    "The charge is assault or battery on an officer, or on someone 65 or older.",
    "The charge is kidnapping, false imprisonment, or human trafficking.",
    "The charge is sexual battery, lewd touching, luring a child, or child pornography.",
    "The charge is trafficking in a controlled substance, even as a conspiracy.",
    "The charge is having a gun or ammunition as a felon, or while under certain injunctions.",
    "The arrest was for violating a protective injunction, or for missing court while on bail.",
    "The person is a registered sexual offender or predator, or had three or more arrests in the last 6 months.",
  ],
  waitNote:
    "The statewide list is longer than this. The circuit also has the Sheriff run a records check before any early release, and some people on felony probation stay in until a violation hearing. If you are unsure, call us before you hand cash to anyone.",
  source:
    "20th Circuit Administrative Order 3.23, Second Amended, effective 1 January 2024; Florida Supreme Court AOSC25-69, schedule effective through 31 December 2026",
};

export const LEE_TIMELINE: NonNullable<LocationPage["timeline"]> = {
  heading: "What comes after a Lee County arrest, by the calendar.",
  intro: "Florida's court rules set these clocks, so they run the same in every county. Note each date in writing as it comes.",
  steps: [
    { when: "Within 24 hours of arrest", what: "If you are still held, a judge tells you the charges, checks that there was probable cause, and rules on release. This is also when you can ask for a Public Defender." },
    { when: "30 days, if you are held", what: "The State has 30 days from arrest to file a formal charge against someone in custody. If it does not, the court orders release on your own word on day 33, or on day 40 if the State shows good cause. Day 40 is the limit without a formal charge." },
    { when: "60 days, if you are out", what: "For someone on release, the State has 60 days to file. A judge can allow up to 30 more for good cause." },
    { when: "After a formal charge", what: "You are arraigned, and the charges are read to you. Talk to your lawyer before you enter any plea." },
    { when: "90 or 175 days", what: "Speedy trial runs 90 days for a misdemeanor and 175 for a felony, from the formal charge. The case does not end just because the date passes." },
  ],
  source: "Fla. R. Crim. P. 3.130(a), 3.134(a) and (b), and 3.191(a), (d), (f) and (o); Office of the Public Defender, 20th Judicial Circuit, Client Info",
};

const MARKET = "fort-myers";
const PLACE = "Fort Myers";
const COUNTY = "Lee County";
const STATE = "/criminal-defense/state";
const CRIMINAL_HUB = `/locations/${MARKET}/criminal-defense`;
const INJURY_HUB = `/locations/${MARKET}/personal-injury`;
const MARKET_HREF = `/locations/${MARKET}`;

const ARREST_SEARCH = "https://www.sheriffleefl.org/arrest-search/";
const COURT_RECORDS = "https://matrix.leeclerk.org/";

const AGENCIES_SOURCE =
  "Lee County Sheriff's Office, FAQs (contacting another agency; alarm jurisdiction by STRAP number); U.S. Census Bureau, 2020 place codes for Florida";
const FMPD_SOURCE = "Fort Myers Police Department, Contact Us and Obtain Copy of Police Report";
const CCPD_SOURCE = "Cape Coral Police Department, Contact Us";
const FEDERAL_SOURCE = "U.S. District Court, Middle District of Florida, Fort Myers location page";
const CAPE_COURT_SOURCE =
  "20th Circuit Administrative Order 2.32, vacated 7 December 2021; 20th Judicial Circuit, Lee Government Center, Cape Coral location page";
const FELONY_SOURCE = "20th Circuit Administrative Order 3.27, Second Amended";
const FA_SOURCE =
  "Fla. R. Crim. P. 3.130(a); 20th Judicial Circuit, Court Schedules, Lee, and 2026 First Appearance Schedule; Administrative Assignment Order of 26 July 2022 vacating the 2005 Lee first appearance order";
const OFFICES_SOURCE =
  "Office of the State Attorney, 20th Judicial Circuit, Office Locations; Office of the Public Defender, 20th Judicial Circuit, Our Offices";
const CLERK_SOURCE =
  "Lee County Clerk of Court, Court Case Records and Small Claims (archived copies, the Clerk's site refused direct fetches); Office of the State Attorney and Office of the Public Defender, 20th Judicial Circuit, links to the Lee County Court Record Search";
const LCSO_RECORDS = "Lee County Sheriff's Office, Records";
const FHP_SOURCE = "Florida Department of Highway Safety and Motor Vehicles, Troop F and FHP Station Locations";
const CIVIL_LIMITS = "F.S. 34.01(1)(c); Lee County Clerk of Court, Small Claims (archived copy); 20th Judicial Circuit, FAQs";

export const fortMyersPages: LocationPage[] = [
  // Market page. Who handles each step; the detail sits on the two hubs.
  {
    slug: MARKET,
    kind: "market",
    place: PLACE,
    county: COUNTY,
    published: true,
    indexable: false,
    search: {
      primary: "criminal defense attorney fort myers",
      source: "D161: DataForSEO, Florida, about 320 searches a month, 2026-11-09",
    },
    metaTitle: "Fort Myers Criminal Defense Lawyer | Hines McCarty Pavlidis",
    metaDescription:
      "Arrested in Fort Myers or Cape Coral? One Lee County jail books every arrest, and federal cases stay in Fort Myers. Our only office is in Brandon.",
    h1: "Fort Myers cases, from the arrest to the courtroom.",
    lead: [
      "Lee County runs its cases through Fort Myers. Every arrest in the county is booked at the Downtown Jail there, and federal cases go to a courthouse downtown, not to Tampa. That holds for an arrest in Cape Coral or Lehigh Acres too.",
      "This page shows who handles each step of a case from Lee County. The two pages below go further, one for an arrest and one for a crash. Our office is in Brandon, in Hillsborough County, and we take Lee County cases from there.",
    ],
    facts: {
      heading: "Where a Lee County case goes, and who has it.",
      intro: "Lee County is in the Twentieth Judicial Circuit, with its own court orders and its own federal courthouse. Very little here matches Tampa.",
      items: [
        {
          title: "The arrest",
          body: "The Sheriff lists three city police departments in the county: Fort Myers, Cape Coral, and Sanibel. Fort Myers Police take calls at 239-321-7700, and Cape Coral Police at 239-574-3223. Places such as Lehigh Acres and North Fort Myers are not cities at all, so a deputy usually comes there.",
          source: AGENCIES_SOURCE,
        },
        {
          title: "Booking",
          body: "The Sheriff runs every jail in the county. Anyone arrested in Lee County is booked at the Downtown Jail, 2115 Dr. Martin Luther King Jr. Boulevard, Fort Myers. The jail number is 239-477-1500.",
          source: `${LCSO_JAIL_SOURCE}; ${PRETRIAL_SOURCE}`,
        },
        {
          title: "First appearance",
          body: "Someone still held sees a judge within 24 hours of arrest. In Lee County, county and circuit judges take turns by the week, on a list the court posts in advance.",
          source: FA_SOURCE,
        },
        {
          title: "State court",
          body: "The court lists the Lee County Justice Center, 1700 Monroe Street, as its main courthouse here. The State Attorney's Lee office is in the annex next to it, at 2000 Main Street. A felony goes to a judge the Clerk assigns, not one picked by your last name.",
          source: `${COURT_LEE_SOURCE}; ${OFFICES_SOURCE}; 20th Circuit Administrative Order 2.7, Amended; ${FELONY_SOURCE}`,
        },
        {
          title: "Cases from Cape Coral",
          body: "Cape Coral Police make arrests in that city, and those people go to the same jail in Fort Myers. The court still lists a Cape Coral location, at 1039 SE 9th Place. But it closed the separate Cape Coral county court division in 2021, so check your notice for where to go.",
          source: `${CCPD_SOURCE}; ${CAPE_COURT_SOURCE}`,
        },
        {
          title: "Federal court",
          body: "A federal case from Lee County is heard in Fort Myers, not Tampa. The court's Fort Myers Division serves Charlotte, Collier, DeSoto, Glades, Hendry, and Lee counties. Its courthouse is the United States Courthouse and Federal Building, 2110 First Street, and the clerk is at 239-461-2000.",
          source: FEDERAL_SOURCE,
        },
        {
          title: "A suit for money",
          body: "A claim over $50,000 goes to circuit court, and one of $50,000 or less to county court. Small claims covers $8,000 or less. These cases are filed with the Lee County Clerk of Court, whose main line is 239-533-5000.",
          source: `${CIVIL_LIMITS}; ${PRETRIAL_SOURCE}`,
        },
      ],
    },
    practices: {
      heading: "Pick the page that matches what happened.",
      intro: "The first two are written for Lee County. The other three are our general pages, so pair them with the courthouse facts above.",
      items: [
        {
          href: CRIMINAL_HUB,
          title: "Criminal defense in Fort Myers",
          body: "Finding someone at the jail, the exact-amount rule for bond, first appearance, and how a Lee County felony gets its judge.",
        },
        {
          href: INJURY_HUB,
          title: "Personal injury in Fort Myers",
          body: "Which agency has your crash report, how each one releases it, and how a Lee County suit is managed.",
        },
        {
          href: FEDERAL,
          title: "Federal criminal defense",
          body: "Federal charges and investigations. That page is written around the Tampa Division, and a Lee County case belongs to the Fort Myers Division instead.",
        },
        {
          href: WHITE_COLLAR,
          title: "White-collar defense",
          body: "Fraud and financial charges, state or federal, from the first subpoena or call from an agent.",
        },
        {
          href: BUSINESS,
          title: "Business litigation",
          body: "Lawsuits between owners or companies over contracts, non-competes, and trade secrets.",
        },
      ],
    },
    faq: [
      {
        question: "Where is your office?",
        answer: "In Brandon, at 745 W Lumsden Rd, in Hillsborough County. It is the only office we have. We have none in Fort Myers, Cape Coral, or anywhere else in Lee County, though Lee County is one of the counties where we take cases.",
      },
      {
        question: "The arrest was in Cape Coral. Is the jail there?",
        answer: "No. The Sheriff books every Lee County arrest at the Downtown Jail in Fort Myers, including arrests by Cape Coral Police. For the police report, call Cape Coral Police Records at 239-574-0695.",
      },
      {
        question: "Would a federal charge from Fort Myers go to Tampa?",
        answer: "No. The Middle District of Florida has five divisions, and Lee County is in the Fort Myers Division. Our federal pages describe the Tampa courthouse, so their law applies to you but their address does not.",
      },
      {
        question: "How do I look up a Lee County case?",
        answer: "Use the Clerk's Court Record Search at matrix.leeclerk.org. Some documents need a request before the Clerk will release them, and many cases opened before 2004 are only available by a records request. For help, call the Clerk at 239-533-5000.",
      },
    ],
    office: {
      heading: "Our office is in Brandon, not Lee County.",
      body: [
        "We have one office, at 745 W Lumsden Rd in Brandon, in Hillsborough County. There is no office of ours in Fort Myers or anywhere in Lee County.",
        "Brandon is a long drive from Fort Myers, so please call first. We answer 813-738-8650 at any hour, every day.",
      ],
    },
    cta: {
      heading: "Tell us what happened in Lee County.",
      body: "Call any hour about an arrest, a federal agent's call, or a crash. The call is confidential and reaches our office in Brandon.",
    },
  },

  // Criminal hub. Holds Lee County's one bond table and timeline (D155).
  {
    slug: "criminal-defense",
    kind: "hub",
    hubType: "criminal",
    parent: MARKET,
    place: PLACE,
    county: COUNTY,
    linkLabel: "Criminal defense in Fort Myers",
    published: true,
    indexable: false,
    metaTitle: "Fort Myers Arrests and Bond | Hines McCarty Pavlidis",
    metaDescription:
      "Arrested in Fort Myers or Cape Coral? The Lee County jail's exact-amount bond rule, first appearance, and how a felony gets its judge. Call 813-738-8650.",
    h1: "Arrested in Fort Myers: jail, cash bond, and the first hearing.",
    lead: [
      "Every arrest in Lee County ends at one jail, in downtown Fort Myers. That is true whether city police, Cape Coral Police, or a deputy made it. The bond rules there are strict, and they catch families off guard.",
      "This page covers the first hours, what bond takes, how a case reaches a judge, and the dates that follow. We represent people charged in Lee County from our only office, in Brandon.",
    ],
    firstSteps: {
      heading: "The first hours after a Lee County arrest.",
      intro: "Most of this can be done tonight, from a phone.",
      items: [
        {
          title: "Look the person up",
          body: "The Sheriff's Arrest Search shows people in custody, recent bookings, and recent releases. You can search by name or booking number. Keep the booking number, since money sent by mail must show it.",
          source: `Lee County Sheriff's Office, Arrest Search; ${LCSO_BOND_SOURCE}`,
          link: { href: ARREST_SEARCH, label: "Arrest Search (Lee County Sheriff's Office)", external: true },
        },
        {
          title: "Bring the exact amount",
          body: "Check the table below first, since many charges wait for a judge. For a cash bond, the jail wants the exact amount, paid in full. It takes no personal checks, money orders, cashier's checks, or rolled coins. Call the jail at 239-477-1500 before you go.",
          source: LCSO_BOND_SOURCE,
          link: { href: "#bond", label: "Bond amounts and who must wait" },
        },
        {
          title: "Or use a bonding agent",
          body: "You can choose a bonding agent instead, who usually charges a fee. The agent must be registered with the Clerk and the Sheriff's Corrections Bureau. The agent hands the bond to a clerk at the jail's front desk, and bonds are taken in the order they arrive.",
          source: LCSO_BOND_SOURCE,
        },
        {
          title: "Hang up on anyone selling a release",
          body: "The Sheriff warns of callers posing as deputies. Often the relative they name really was arrested hours before. They then ask for gift cards or cash at a crypto machine for a quick release. Report such a call to the Sheriff at 239-477-1000.",
          source: "Lee County Sheriff's Office, Corrections Bureau, Jail Scam Alert",
        },
        {
          title: "Expect a screening and a short wait",
          body: "Court pretrial officers check the background of people arrested on criminal charges, and the judge uses that to decide on release. Once release is ordered, the court says it usually takes a few hours. The person gets a phone call to arrange a ride.",
          source: PRETRIAL_SOURCE,
        },
        {
          title: "Set up a phone account",
          body: "Nobody can call in to the jail. People inside can call out collect. To take those calls, the Sheriff says to set up an account with its phone provider, Viapath, at 1-800-483-8314.",
          source: "Lee County Sheriff's Office, Frequently Asked Questions, Corrections (inmate telephone calls)",
        },
        {
          title: "Say nothing about the case",
          body: "No one has to explain anything to officers or detectives. As family, do not ask for the story, and do not repeat it. Save it for a lawyer.",
        },
      ],
    },
    bond: LEE_BOND,
    facts: {
      heading: "How a Lee County case reaches a judge.",
      intro: "No last-name table and no map line sorts cases here. The Clerk assigns felonies, and a court order keeps related cases together.",
      items: [
        {
          title: "Who made the arrest",
          body: "Fort Myers Police work the city, from 2210 Widman Way. Cape Coral Police work theirs, from 1100 Cultural Park Boulevard. Sanibel has its own department too. Across the rest of the county, the arrest is usually by a deputy.",
          source: `${FMPD_SOURCE}; ${CCPD_SOURCE}; ${AGENCIES_SOURCE}`,
        },
        {
          title: "First appearance",
          body: "A judge must see someone still held within 24 hours of arrest. Each week a different county or circuit judge takes the docket, from a list the court posts for the year. The court's Lee schedule page lists that week's judge with a 10:00 a.m. start.",
          source: FA_SOURCE,
        },
        {
          title: "Revoking an earlier release",
          body: "If you were already out on release in another case in this circuit, be careful. A circuit order lets the first appearance judge revoke that release on finding probable cause of a new crime while you were out. The judge does not have to, but can.",
          source: "20th Circuit Administrative Order 3.33",
        },
        {
          title: "The Justice Center",
          body: "The court lists the Lee County Justice Center, with a public entrance at 1700 Monroe Street and another at 2075 Dr. Martin Luther King Jr. Boulevard. Entrances open at 7:30 a.m. Public parking is across Dr. Martin Luther King Jr. Boulevard, at Heitman Street. The information desk is 239-533-9197.",
          source: `${COURT_LEE_SOURCE}; 20th Judicial Circuit, FAQs`,
        },
        {
          title: "Felonies",
          body: "The Clerk assigns each new felony to a judge and keeps the load even. All felonies from one arrest date go to the same judge, and so do co-defendants when there are eight or fewer. An older open felony pulls newer ones to its judge. The court's 2027 felony schedule lists four divisions, one fewer than 2026, so go by your notice.",
          source: `${FELONY_SOURCE}; 20th Judicial Circuit, 2026 and 2027 Felony Trial Schedules, Lee`,
        },
        {
          title: "Cape Coral arrests",
          body: "A Cape Coral case runs through the same jail and the same Clerk. The court ended its separate Cape Coral county court division in 2021, saying most of that work was by then done remotely. It still lists a court location at 1039 SE 9th Place, so read your notice for the place and time.",
          source: `${CCPD_SOURCE}; ${CAPE_COURT_SOURCE}`,
        },
        {
          title: "Pretrial supervision",
          body: "A judge can release someone on supervision, sometimes with no money bond. Check-ins start at the pretrial office, on the third floor of the Justice Center at 1700 Monroe Street, 239-533-8400. You need a permit from that office before you travel out of state.",
          source: PRETRIAL_SOURCE,
        },
        {
          title: "Prosecutor and Public Defender",
          body: "The State Attorney's Lee office is on the sixth floor of 2000 Main Street, where visitors sign in, 239-533-1000. The Public Defender is on the third floor of the same address, 239-533-2911.",
          source: OFFICES_SOURCE,
        },
        {
          title: "Federal charges",
          body: "A federal case skips all of this. It goes to the Fort Myers Division, at the United States Courthouse and Federal Building, 2110 First Street. Our federal pages describe the Tampa courthouse, so use this address instead.",
          source: FEDERAL_SOURCE,
        },
      ],
    },
    timeline: LEE_TIMELINE,
    charges: {
      heading: "Charges we defend, and what Lee County bond means for each.",
      intro: "Each link opens our page on the Florida law and penalties. Those pages are written around Hillsborough County courts, so use this page for Lee County's jail and court details.",
      items: [
        {
          href: `${STATE}/dui`,
          title: "DUI",
          body: "The license and the charge are separate fights, and you have 10 days from the notice of suspension to act on the license. The schedule runs from $500 to $1,000, and the jail takes no money orders for it.",
        },
        {
          href: `${STATE}/domestic-violence`,
          title: "Domestic violence",
          body: "There is no schedule amount, so release waits for the first appearance judge. Once out, you must have no contact of any kind with the alleged victim.",
        },
        {
          href: `${STATE}/battery`,
          title: "Battery",
          body: "A simple battery can be bonded out on the schedule. Felony battery, and battery on an officer or on someone 65 or older, have to wait for a judge.",
        },
        {
          href: `${STATE}/sex-crimes`,
          title: "Sex crimes",
          body: "Sexual battery, lewd touching, and child pornography charges wait for a judge. Before any early release, the circuit has the Sheriff run a records check for sex offender status, and some people on probation stay in until a hearing.",
        },
        {
          href: `${STATE}/drug-trafficking`,
          title: "Drug trafficking",
          body: "No schedule amount applies, even to a conspiracy charge. Release is up to the first appearance judge.",
        },
        {
          href: `${STATE}/gun-crimes`,
          title: "Gun crimes",
          body: "A felon charged with having a gun or ammunition waits for a judge. So does someone charged with the same while under a domestic violence or stalking injunction.",
        },
      ],
    },
    practices: {
      heading: "Other pages for a Lee County case.",
      intro: "A case can touch more than one of these.",
      items: [
        {
          href: FEDERAL,
          title: "Federal criminal defense",
          body: "The law there is the same across the district. The page describes Tampa's courthouse, and a Lee County case goes to Fort Myers.",
        },
        {
          href: WHITE_COLLAR,
          title: "White-collar defense",
          body: "Fraud and money cases, in state or federal court.",
        },
        {
          href: INJURY_HUB,
          title: "Personal injury in Fort Myers",
          body: "If you were hurt, this covers crash reports and lawsuits in Lee County.",
        },
        {
          href: MARKET_HREF,
          title: "Fort Myers overview",
          body: "A short page on which office handles each step of a Lee County case.",
        },
      ],
    },
    faq: [
      {
        question: "Can I pay a cash bond with a money order or cashier's check?",
        answer: "No. The Sheriff takes neither for a cash bond, and no personal checks either. The bond must be the exact amount, paid in full. Its page does not say whether a card works, so call the jail at 239-477-1500 first. A bonding agent is the other route.",
      },
      {
        question: "Why is my relative held when the charge looks minor?",
        answer: "Several things can hold someone for a judge. A felony arrest while on probation or pretrial release is one. A pretrial officer can also ask the Sheriff to hold a person for first appearance. Some people on felony probation stay in until a violation hearing.",
      },
      {
        question: "How do I find a court date?",
        answer: "Search the Clerk's Court Record Search at matrix.leeclerk.org by name or case number. You can also call the Clerk at 239-533-5000. If you miss a date, the court's pretrial office says to contact your lawyer.",
      },
      {
        question: "How do I check for a warrant?",
        answer: "Call the Clerk at 239-533-5000 or the Sheriff's Warrants Division at 239-477-1690. The state also has a search of warrants entered by Florida agencies. Talk to a lawyer before you turn yourself in.",
      },
      {
        question: "Can family bring clothes for a trial?",
        answer: "Not directly. The jail gives clothing while someone is held. For trial clothes, the person's lawyer calls the Court Operations Office at 239-258-3400 to arrange it. The Sheriff says those plans are not made with family.",
      },
      {
        question: "What if I cannot afford a lawyer?",
        answer: "Ask the judge at first appearance, where pretrial officers help screen who qualifies. The Public Defender's $50 application fee must be paid before your other court costs.",
      },
    ],
    office: {
      heading: "We work from Brandon, not Fort Myers.",
      body: [
        "Our only office is at 745 W Lumsden Rd in Brandon, in Hillsborough County. We have none in Fort Myers or Cape Coral.",
        "Lee County is one of the counties where we take cases. Since the drive is long, start with a call to 813-738-8650, which is answered day and night.",
      ],
    },
    cta: {
      heading: "Call before the money goes anywhere.",
      body: "If someone is at the Lee County jail now, call with their name and booking number. The call is confidential and answered 24/7 from Brandon.",
    },
  },

  // Injury hub.
  {
    slug: "personal-injury",
    kind: "hub",
    hubType: "injury",
    parent: MARKET,
    place: PLACE,
    county: COUNTY,
    linkLabel: "Personal injury in Fort Myers",
    published: true,
    indexable: false,
    metaTitle: "Fort Myers Crash Injury Claims | Hines McCarty Pavlidis",
    metaDescription:
      "After a Fort Myers or Cape Coral crash: which agency has the report, how to get it in the first 60 days, and how a Lee County suit is run.",
    h1: "Hurt in a Fort Myers crash: the report, the clock, and the court.",
    lead: [
      "After a crash in Lee County, any of several agencies might have written the report. Each one hands it out its own way, and only to certain people for the first 60 days. Start by knowing who came.",
      "This page covers the first steps, how to get each report, and how a Lee County lawsuit is run. We represent people hurt across Florida from our only office, in Brandon.",
    ],
    firstSteps: {
      heading: "After a crash in Fort Myers, start here.",
      intro: "A few of these cannot wait, so do them first.",
      items: [
        {
          title: "Call 911 if anyone is hurt",
          body: "Get help to the scene and let an officer take the report. Do not leave before the officer says you can.",
        },
        {
          title: "See a doctor within 14 days",
          body: "Your own insurance pays toward early medical bills only if your first care comes within 14 days of the crash. Go even if the pain seems small.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Get the agency and case number",
          body: "Ask which agency is taking the crash, and write down the case number and the officer's name. Each agency keeps its own reports, so this tells you where to go.",
        },
        {
          title: "For a small crash, file it yourself",
          body: "If no officer was needed, the state has a form for drivers to report a minor crash on their own. Fort Myers Police link to it from their report page.",
          source: "Fort Myers Police Department, Obtain Copy of Police Report",
          link: { href: "https://www.flhsmv.gov/traffic-crash-reports/#report", label: "Self-Report Minor Traffic Crash (FLHSMV)", external: true },
        },
        {
          title: "Keep a file",
          body: "Save photos, the other driver's details, and witness names in one place. Add each bill and each day of work you miss.",
        },
        {
          title: "Wait before you talk to an adjuster",
          body: "An adjuster may call early for your side of the story. What you say can be used to put fault on you, so speak with a lawyer first.",
        },
      ],
    },
    facts: {
      heading: "Who has your report, and how a Lee County suit runs.",
      intro: "State law keeps crash reports from the public for 60 days. The people in the crash can still get them, but each agency asks for something different.",
      items: [
        {
          title: "Who investigates",
          body: "Inside Fort Myers it is usually city police, and inside Cape Coral, Cape Coral Police. Elsewhere it is usually a deputy. The Highway Patrol's Fort Myers station, at 10041 Daniels Parkway, 239-344-1730, also covers Lee County.",
          source: `${AGENCIES_SOURCE}; ${FHP_SOURCE}`,
        },
        {
          title: "A Fort Myers Police report",
          body: "Get it in person at 2210 Widman Way, weekdays 8:00 a.m. to 4:30 p.m., or online through CrashDocs. In the first 60 days it goes only to the people involved, their insurer, or their lawyer, so bring ID. Records will not email or fax it. Call 239-321-7665 with questions.",
          source: FMPD_SOURCE,
        },
        {
          title: "A Cape Coral Police report",
          body: "Request it through the department's online records portal. You can also pick one up at 1100 Cultural Park Boulevard, weekdays 8:00 a.m. to 4:00 p.m. Records is 239-574-0695.",
          source: CCPD_SOURCE,
        },
        {
          title: "A Sheriff's report",
          body: "Central Records is at Sheriff's headquarters, 14750 Six Mile Cypress Parkway, 239-477-1350. The lobby opens at 8:00 a.m. on weekdays. Copies cost 15 cents a page, but a person in the crash who sends a government ID pays nothing. Ask online, and you can download it.",
          source: LCSO_RECORDS,
        },
        {
          title: "A Highway Patrol report",
          body: "These are sold through FloridaCrashPortal.gov, or through the state line at 850-617-3416, option 5. In the first 60 days, you state why you qualify and give your driver license number.",
          source: "Florida Department of Highway Safety and Motor Vehicles, crash records FAQ and Contact FHP",
        },
        {
          title: "Which court, by the amount",
          body: "Over $50,000, a claim belongs in circuit court. At $50,000 or less it is a county court case, and small claims covers $8,000 or less. The Lee County Clerk of Court takes small claims by mail, in person, or through the state's e-filing portal.",
          source: CIVIL_LIMITS,
        },
        {
          title: "The plan the court sets",
          body: "In this circuit, most civil cases get a case plan from the court within 120 days of filing. It sets a projected trial date and deadlines the court says it will strictly enforce. Missing them can bring sanctions, up to dismissal of the case.",
          source: "20th Circuit Administrative Order 1.13, Third Amended, effective 1 January 2025",
        },
        {
          title: "Looking up a suit",
          body: "The Clerk's Court Record Search is at matrix.leeclerk.org. Some documents need a request before the Clerk releases them. Many cases opened before 2004 are only available through a records request.",
          source: CLERK_SOURCE,
        },
      ],
    },
    injury: {
      heading: "The limits on a Lee County injury claim.",
      intro: "These come from Florida law, so they work the same here as in any county. Know them early.",
      items: [
        {
          title: "First care within 14 days",
          body: "If your first doctor visit comes after day 14, your own policy may not pay toward those early bills.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Over half the fault means nothing back",
          body: "If you are found more than 50 percent at fault for your own injury, you recover nothing from the other side.",
          source: "F.S. 768.81",
        },
        {
          title: "Two years to sue",
          body: "A negligence claim from a crash after 24 March 2023 has to be filed within two years.",
          source: "F.S. 95.11",
        },
      ],
      links: [
        { href: "/personal-injury/car-accidents", label: "Car accident claims" },
        { href: "/personal-injury/truck-accidents", label: "Truck accident claims" },
      ],
    },
    practices: {
      heading: "More on crash claims and Lee County cases.",
      intro: "Our main injury pages explain the law in more depth. They are written around Hillsborough County, so use this page for Lee County's offices.",
      items: [
        {
          href: "/personal-injury",
          title: "Personal injury",
          body: "Claims for people hurt in car and truck crashes caused by another driver.",
        },
        {
          href: CRIMINAL_HUB,
          title: "Criminal defense in Fort Myers",
          body: "If the crash also brought a charge, such as DUI, this covers the Lee County jail and bond.",
        },
        {
          href: MARKET_HREF,
          title: "Fort Myers overview",
          body: "Who handles arrests, federal cases, and lawsuits in Lee County.",
        },
        {
          href: BUSINESS,
          title: "Business litigation",
          body: "Disputes over contracts, company ownership, and trade secrets.",
        },
      ],
    },
    faq: [
      {
        question: "Can we start without me driving to Brandon?",
        answer: "Yes. A claim can start with a call to 813-738-8650. Our only office is in Brandon, and we have none in Lee County. If you want to meet in person, we set that up at the Brandon office.",
      },
      {
        question: "The crash was on Sanibel. Who has the report?",
        answer: "Sanibel has its own police department, at 239-472-3111. If you are not sure which agency came, check any paper the officer gave you before you call around.",
      },
      {
        question: "Will my lawsuit be filed in Fort Myers?",
        answer: "A suit can usually be brought in the county where the crash happened or where the other driver lives. For a Lee County crash, that often means the Lee County Clerk. Ask before you file, because other rules apply to drivers from out of state.",
      },
      {
        question: "Can I get the report before 60 days have passed?",
        answer: "Yes, if you were in the crash. Each agency asks for proof, such as ID. Fort Myers Police release it in person or through CrashDocs, and the Sheriff waives the copy fee if you send a government ID.",
      },
    ],
    office: {
      heading: "One office, in Brandon.",
      body: [
        "All of our work runs from 745 W Lumsden Rd in Brandon, in Hillsborough County. We have no office in Fort Myers or anywhere in Lee County.",
        "Call 813-738-8650 at any hour. If you would rather meet face to face, phone first so an attorney can be there.",
      ],
    },
    cta: {
      heading: "Hurt in Lee County? Call before you give a statement.",
      body: "Tell us when and where the crash happened and which agency came. Calls are confidential and answered at all hours from Brandon.",
    },
  },
];
