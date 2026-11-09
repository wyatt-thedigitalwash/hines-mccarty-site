import type { LocationPage } from "../location-types.ts";
import { BUSINESS, FEDERAL, WHITE_COLLAR } from "./hillsborough.ts";
import {
  CLERK_PHONE,
  FEDERAL_TAMPA_SOURCE,
  FHP_PINELLAS_PHONE,
  FLHSMV_CRASH_SOURCE,
  GIBBONS_ADDRESS,
  HISTORIC_COURTHOUSE_ADDRESS,
  JAIL_ADDRESS,
  JAIL_RECORDS_PHONE,
  JUSTICE_CENTER_ADDRESS,
  PCSO_CRASH_SOURCE,
  PCSO_JAIL_SOURCE,
  PCSO_PATROL_SOURCE,
  PINELLAS_BOND,
  PINELLAS_DEADLINES,
  PINELLAS_CASE_LOOKUP_ANSWER,
  PINELLAS_CLERK_CIVIL_SOURCE,
  PINELLAS_CLERK_RECORDS_SOURCE,
  PINELLAS_PHONES_SOURCE,
  PINELLAS_TIMELINE,
  POST_BOND_URL,
  SHERIFF_NON_EMERGENCY_PHONE,
  SHERIFF_RECORDS_PHONE,
  SIXTH_ADVISORY_ORDER_SOURCE,
  SIXTH_ADVISORY_SOURCE,
  SIXTH_CIRCUIT_ASSIGNMENTS_SOURCE,
  SIXTH_CIVIL_SOURCE,
  SIXTH_COUNTY_ASSIGNMENTS_SOURCE,
  SIXTH_CRIMINAL_COURTS_SOURCE,
  SIXTH_DRUG_COURT_SOURCE,
  SIXTH_LOCAL_RULE_SOURCE,
  SIXTH_NTA_SOURCE,
  SIXTH_TRAFFIC_SOURCE,
  STATE_ATTORNEY_DISPATCH_PHONE,
  WHOS_IN_JAIL_URL,
} from "./sixth-circuit.ts";

/**
 * Clearwater: the market page, its two hubs, and five communities (D154). County
 * facts and their source lines live in sixth-circuit.ts.
 *
 * What is different here: "Clearwater" names two places about seven miles apart.
 * The Justice Center and the jail have Clearwater mailing addresses on 49th Street
 * North, and criminal cases go there. The downtown courthouses are for civil
 * business. Census maps put 49th Street outside the city limits, so the pages say
 * "mailing address" and do not say the jail is in the city.
 *
 * Who polices each place was checked one by one: Clearwater, Largo and Tarpon
 * Springs have their own departments; Dunedin contracts with the Sheriff; Palm
 * Harbor is an unincorporated CDP. The agency decides the traffic court.
 *
 * New Port Richey is in Pasco County, so its page is in pasco.ts (D159).
 */

const MARKET = "clearwater";
const CRIMINAL_HUB = `/locations/${MARKET}/criminal-defense`;
const INJURY_HUB = `/locations/${MARKET}/personal-injury`;
const MARKET_PAGE = `/locations/${MARKET}`;
const STATE = "/criminal-defense/state";

const CPD_SOURCE = "Clearwater Police Department, Contact Us";
const CPD_CRASH_SOURCE = "Clearwater Police Department, Support Services Division and File a Report";
const CITY_RECORDS_SOURCE = "City of Clearwater, FAQ for Public Records Requests";
const JUSTICE_CENTER_SOURCE = "Sixth Judicial Circuit, Pinellas County Justice Center";
const CLERK_LOCATIONS_SOURCE = "Pinellas County Clerk of the Circuit Court, Locations and Contact Us";
const COUNTY_CONTACTS_SOURCE = "Pinellas County, Contact Information and Location Maps";
const LARGO_SOURCE = "City of Largo, Police Department and Records";
const PCSO_AREAS_SOURCE = "Pinellas County Sheriff's Office, Service Areas";
const DUNEDIN_SOURCE = "City of Dunedin, City Commission Agenda, September 4, 2025, PCSO FY26 Addendum";
const PALM_HARBOR_CENSUS_SOURCE = "U.S. Census Bureau, TIGERweb: Palm Harbor CDP";
const PASCO_ASSIGNMENT_SOURCE = "6th Circuit Administrative Order 2023-005 PA-CIR";
const TSPD_SOURCE = "Tarpon Springs Police Department, Contact and Records";

const carLinks = [
  { href: "/personal-injury/car-accidents", label: "Car accident claims" },
  { href: "/personal-injury/truck-accidents", label: "Truck accident claims" },
];

export const clearwaterPages: LocationPage[] = [
  // ------------------------------------------------------------------ Market
  {
    slug: MARKET,
    kind: "market",
    place: "Clearwater",
    county: "Pinellas County",
    published: true,
    indexable: false,
    metaTitle: "Clearwater Courts and Jail Guide | Hines McCarty Pavlidis",
    metaDescription:
      "Two Clearwater addresses, about seven miles apart. See where an arrest, a court date, a federal case, or an injury suit from Clearwater really goes.",
    h1: "In Clearwater, the street on your paperwork matters.",
    lead: [
      "Clearwater court papers can point to two very different places. Criminal cases go to the Pinellas County Justice Center on 49th Street North, which has a Clearwater mailing address but sits about seven miles from downtown. The buildings downtown, on Court Street and Ft. Harrison Avenue, are for civil court business.",
      "This page sends you to the right building for an arrest, a federal charge, or a crash. Our office is in Brandon, and we take Pinellas County cases from there.",
    ],
    facts: {
      heading: "From the arrest to the courtroom, the Clearwater addresses in order.",
      intro: "Check the street name, not just the city, before you drive anywhere. Each step has its own agency and its own building.",
      items: [
        {
          title: "Who makes the arrest",
          body: "Inside the city, it is usually the Clearwater Police Department, 645 Pierce Street, downtown. The non-emergency line is 727-562-4242. Outside the city and north of Gulf to Bay Boulevard, the Sheriff's North District usually answers instead. Your paperwork names the agency.",
          source: `${CPD_SOURCE}; ${PCSO_PATROL_SOURCE}`,
        },
        {
          title: "Where people are booked",
          body: `Adults are usually taken to the Pinellas County Jail, ${JAIL_ADDRESS}, and not to police headquarters. Inmate Records is at ${JAIL_RECORDS_PHONE}. The county's contact page lists the same street number under Largo, so a map search may show either town.`,
          source: `${PCSO_JAIL_SOURCE}; ${COUNTY_CONTACTS_SOURCE}`,
        },
        {
          title: "The first hearing",
          body: `Pinellas County calls first appearance advisories. A judge holds it within 24 hours of arrest, unless the person is already out. The court calendar places it at the Justice Center. To check before you drive, call State Attorney Dispatch at ${STATE_ATTORNEY_DISPATCH_PHONE}.`,
          source: `Fla. R. Crim. P. 3.130(a); ${SIXTH_ADVISORY_SOURCE}`,
        },
        {
          title: "Criminal and traffic court",
          body: `Every felony, misdemeanor, and traffic section sits at the Justice Center, ${JUSTICE_CENTER_ADDRESS}. There is no criminal section downtown. Living in Clearwater does not change this, and neither does the part of the county where the arrest took place.`,
          source: SIXTH_CRIMINAL_COURTS_SOURCE,
        },
        {
          title: "Federal charges",
          body: `A federal case leaves the county. Pinellas is in the Tampa Division of the Middle District of Florida, so the case is heard across the bay at the Sam M. Gibbons United States Courthouse, ${GIBBONS_ADDRESS}.`,
          source: FEDERAL_TAMPA_SOURCE,
        },
        {
          title: "Civil court, downtown",
          body: `The Clerk's civil records office is at the Clearwater Courthouse, 315 Court Street, Room 170. County civil and small claims sections sit at the Historic Courthouse, ${HISTORIC_COURTHOUSE_ADDRESS}. Do not go to either one for a criminal date.`,
          source: `${CLERK_LOCATIONS_SOURCE}; ${SIXTH_COUNTY_ASSIGNMENTS_SOURCE}`,
        },
        {
          title: "An injury suit may not stay here",
          body: "A crash in Clearwater does not fix where a suit goes. If it is filed in Pinellas County, the ZIP code of the plaintiff's lawyer picks Clearwater or St. Petersburg. Our ZIP code is on neither list, so a suit we file could be assigned to either city.",
          source: SIXTH_CIVIL_SOURCE,
        },
      ],
    },
    practices: {
      heading: "Where to read more about a Clearwater case.",
      intro: "The first two pages cover Pinellas County in detail. The other three are the firm's main pages for those kinds of cases.",
      items: [
        {
          href: CRIMINAL_HUB,
          title: "Criminal defense in Clearwater",
          body: "The jail, how to post bond, what bond costs, and how the Justice Center assigns a case.",
        },
        {
          href: INJURY_HUB,
          title: "Personal injury in Clearwater",
          body: "Getting a Clearwater police crash report, your deadlines, and the civil courts downtown.",
        },
        {
          href: FEDERAL,
          title: "Federal criminal defense",
          body: "Federal investigations and charges from Pinellas County, which are heard in Tampa.",
        },
        {
          href: WHITE_COLLAR,
          title: "White-collar defense",
          body: "Fraud and other financial cases, in state or federal court, from the first subpoena on.",
        },
        {
          href: BUSINESS,
          title: "Business litigation",
          body: "Disputes over a contract, a share of a company, a non-compete, or trade secrets.",
        },
      ],
    },
    communitiesIntro:
      "These towns around Clearwater have their own pages, because who polices them differs. North of them, across the county line, Pasco County has its own jail and courts, and its own page.",
    faq: [
      {
        question: "I have a Clearwater court date. Which building do I go to?",
        answer: `For a criminal or traffic date, go to the Justice Center, ${JUSTICE_CENTER_ADDRESS}. A civil or small claims date is usually downtown, so read the address on your notice. If your notice gives no address, call the Clerk at ${CLERK_PHONE}.`,
      },
      {
        question: "Which traffic court hears a Clearwater police ticket?",
        answer: "Traffic Court I, at the Justice Center. A deputy's ticket goes there too. A DUI goes to a misdemeanor section instead, and a trooper's ticket moves from Traffic Court I to Traffic Court II on 1 January 2027.",
      },
      {
        question: "How do I look up a Pinellas County case?",
        answer: PINELLAS_CASE_LOOKUP_ANSWER,
      },
      {
        question: "Is your law office in Clearwater?",
        answer: "No. The firm has one office, at 745 W Lumsden Rd in Brandon, in Hillsborough County. We take Pinellas County cases from there, and the phone is answered at any hour.",
      },
    ],
    office: {
      heading: "Our one office is in Brandon, not Clearwater.",
      body: [
        "We have no office in Clearwater or anywhere else in Pinellas County. The firm's only office is at 745 W Lumsden Rd in Brandon.",
        "Call 813-738-8650 at any hour to start. If you would like to meet in person, call first so an attorney can set aside time.",
      ],
    },
    cta: {
      heading: "Not sure which Clearwater address is yours?",
      body: "Read us what the paperwork says. The call is confidential and answered 24/7, and we will tell you where to go and what comes first.",
    },
  },

  // ------------------------------------------------------------------ Criminal hub
  {
    slug: "criminal-defense",
    kind: "hub",
    hubType: "criminal",
    parent: MARKET,
    place: "Clearwater",
    county: "Pinellas County",
    published: true,
    indexable: false,
    linkLabel: "Criminal defense in Clearwater",
    metaTitle: "Clearwater Criminal Defense | Hines McCarty Pavlidis",
    metaDescription:
      "Arrested in Clearwater? How to post bond at the jail on 49th Street, what it costs in 2026, and how the Justice Center hands out felony and DUI cases.",
    h1: "Arrested in Clearwater: the jail, bond, and the Justice Center.",
    lead: [
      "If the arrest was in Clearwater, the jail and the courtroom are on the same stretch of 49th Street North. Neither one is downtown. If someone was booked, look at the jail first, not at police headquarters.",
      "Below is how to find the person, what to bring to the jail, what bond costs under the county's schedule, and how a case gets its courtroom. Our office is in Brandon, and we take these cases from there.",
    ],
    firstSteps: {
      heading: "What to do first after a Clearwater arrest.",
      intro: "A judge will decide on release within 24 hours. These four steps fit into that window.",
      items: [
        {
          title: "Confirm the person is at the jail",
          body: `Clearwater officers usually take adults to the jail at ${JAIL_ADDRESS}. Search Who's In Jail, or ask Inmate Records at ${JAIL_RECORDS_PHONE}. The search also gives you the booking number, which you need to pay by card.`,
          source: PCSO_JAIL_SOURCE,
          link: { href: WHOS_IN_JAIL_URL, label: "Who's In Jail (Sheriff's Office)", external: true },
        },
        {
          title: "Bring the right payment",
          body: "First check that the charge has a bond at all. If it does, a cash bond is the full amount, with a valid photo ID. A money order or bank check must be made out to the Clerk of the Circuit Court, and personal checks are refused. A card works through AllPaid, for up to $2,500 per charge.",
          source: PCSO_JAIL_SOURCE,
          link: { href: POST_BOND_URL, label: "Sheriff's bond page", external: true },
        },
        {
          title: "Expect calls to go one way",
          body: "Nobody can phone in to a person held at this jail. They call out, using credits on a Smart Communications account. Friends and family can add funds online or at a cash kiosk in the public lobby. Do not talk about the facts on those calls.",
          source: PCSO_JAIL_SOURCE,
        },
        {
          title: "Reach a lawyer before advisories",
          body: `Advisories is the first hearing. On weekends and holidays, the advisory judge sits from 8:30 a.m. to about noon. If you plan to attend, call State Attorney Dispatch at ${STATE_ATTORNEY_DISPATCH_PHONE} first and ask where it is. The judge rules on release, so an early call to us gives more time to prepare.`,
          source: `Fla. R. Crim. P. 3.130(a); ${SIXTH_ADVISORY_SOURCE}`,
        },
      ],
    },
    bond: PINELLAS_BOND,
    facts: {
      heading: "Inside the Justice Center: how a Clearwater case gets its courtroom.",
      intro: "The building is the same for every criminal case in the county. The section is what changes, and the rule depends on the charge and the agency that wrote it up.",
      items: [
        {
          title: "Getting there",
          body: `The Justice Center is at ${JUSTICE_CENTER_ADDRESS}, about seven miles from downtown. Court hours are Monday to Friday, 8 a.m. to 5 p.m. The court says there is free parking in its lot, and that bus routes 49 and 52 stop nearby. Everyone goes through security screening.`,
          source: JUSTICE_CENTER_SOURCE,
        },
        {
          title: "A felony section",
          body: "The current order lists 12 lettered felony sections at the Justice Center. Under the local rule, a new case goes to a section at random unless an order says otherwise. Your paperwork will show the letter, and that tells you which judge has the case.",
          source: `${SIXTH_CIRCUIT_ASSIGNMENTS_SOURCE}; ${SIXTH_LOCAL_RULE_SOURCE}`,
        },
        {
          title: "A misdemeanor section",
          body: "County court uses Sections E, F, G, H, L, and V. An open misdemeanor case usually pulls a new one to the same section. With no open case and no recent one, the choice is at random.",
          source: `${SIXTH_COUNTY_ASSIGNMENTS_SOURCE}; ${SIXTH_NTA_SOURCE}`,
        },
        {
          title: "A Clearwater police ticket",
          body: "Criminal traffic charges other than DUI follow the agency on the citation. Clearwater police tickets go to Traffic Court I. A Largo police ticket from just down the road goes to Traffic Court II. Both are in the Justice Center, and a jury demand usually moves the case to a criminal section.",
          source: SIXTH_TRAFFIC_SOURCE,
        },
        {
          title: "A trooper on US 19",
          body: "Florida Highway Patrol tickets go to Traffic Court I through 2026, then to Traffic Court II from 1 January 2027. If your ticket is dated near the change, check with the Clerk. The Clerk aims to set arraignment within 20 days of receiving the citation.",
          source: SIXTH_TRAFFIC_SOURCE,
        },
        {
          title: "DUI",
          body: "A new DUI does not go to a traffic court. If you have no county court history, it goes at random to one of the misdemeanor sections. If you have a case pending in one, it goes to the section with the latest assignment, and related tickets go with it.",
          source: SIXTH_TRAFFIC_SOURCE,
        },
        {
          title: "Domestic violence and injunctions",
          body: "County court sends every domestic violence case to Section R, even a probation violation. An injunction petition is a separate civil case. It is assigned to Sections CV1, CV2, and CV3 in Clearwater, so you can have two cases on two tracks.",
          source: `${SIXTH_ADVISORY_ORDER_SOURCE}; ${SIXTH_CIVIL_SOURCE}`,
        },
        {
          title: "Drug court",
          body: "Section N is the adult drug court. Prosecutors choose which cases go there. A defense lawyer can ask to transfer a case in, and the State Attorney's Office must approve.",
          source: SIXTH_DRUG_COURT_SOURCE,
        },
        {
          title: "Paying a fine in north county",
          body: `The Clerk's north county service center, 3165 McMullen Booth Road, takes payments for fines and costs. That does not make it a courtroom. Your hearing stays at the Justice Center. Criminal records are also at the Justice Center, and the phone is ${CLERK_PHONE}.`,
          source: CLERK_LOCATIONS_SOURCE,
        },
        {
          title: "Federal cases",
          body: `Neither 49th Street nor downtown Clearwater hears a federal case. It goes to Tampa, at the Sam M. Gibbons United States Courthouse, ${GIBBONS_ADDRESS}.`,
          source: FEDERAL_TAMPA_SOURCE,
        },
      ],
    },
    timeline: PINELLAS_TIMELINE,
    charges: {
      heading: "Charges we defend for people arrested in Clearwater.",
      intro: "Each link explains the Florida law and penalties for that charge. Those pages describe Hillsborough County courts, so your court details are here on this page.",
      items: [
        {
          href: `${STATE}/dui`,
          title: "DUI",
          body: "The schedule sets $500 only with no damage to anyone and no DUI history. Otherwise you wait for the advisory judge. Your license is a separate fight, with 10 days to act from the notice of suspension.",
        },
        {
          href: `${STATE}/domestic-violence`,
          title: "Domestic violence",
          body: "Do not head to the jail ready to pay. There is no bond until the advisory judge has ruled. County court then keeps the case in Section R.",
        },
        {
          href: `${STATE}/drug-trafficking`,
          title: "Drug trafficking",
          body: "A trafficking charge has no bond on the schedule, whatever you can pay. The weight of the drug is usually what turns a possession case into this one.",
        },
        {
          href: `${STATE}/gun-crimes`,
          title: "Gun crimes",
          body: "A person with a felony record charged with having a gun or ammunition sees a judge before any release. So does someone under certain injunctions.",
        },
        {
          href: `${STATE}/battery`,
          title: "Battery",
          body: "As a first degree misdemeanor with force, the schedule says $1,000. Felony battery, or battery on an officer or someone 65 or older, waits for a judge.",
        },
        {
          href: `${STATE}/grand-theft`,
          title: "Grand theft",
          body: "How much was taken sets the degree. The lowest degree carries a $5,000 schedule amount in this county if no force was used. Anything higher has no bond before advisories.",
        },
      ],
    },
    practices: {
      heading: "If your Clearwater case goes beyond state court.",
      intro: "A case can turn federal or financial, and a crash can bring a claim as well as a charge. These pages pick up from there.",
      items: [
        {
          href: FEDERAL,
          title: "Federal criminal defense",
          body: "Agents, grand juries, and federal charges heard in Tampa.",
        },
        {
          href: WHITE_COLLAR,
          title: "White-collar defense",
          body: "Fraud and money cases, starting with the first subpoena or visit from an agent.",
        },
        {
          href: INJURY_HUB,
          title: "Personal injury in Clearwater",
          body: "Crash reports, deadlines, and where a suit gets filed if you were the one hurt.",
        },
        {
          href: MARKET_PAGE,
          title: "Clearwater overview",
          body: "Every address on one page, plus the towns around the city.",
        },
      ],
    },
    faq: [
      {
        question: "Will my case be heard downtown, near the police station?",
        answer: `No. Pierce Street and Court Street are downtown, but criminal and traffic sections are all at the Justice Center, ${JUSTICE_CENTER_ADDRESS}. The one exception is a federal case, which goes to Tampa.`,
      },
      {
        question: "Can I just drive to the jail and pay?",
        answer: `Call Inmate Records at ${JAIL_RECORDS_PHONE} first, because the Sheriff's page gives no hours. If the charge has no bond, nothing you bring can get the person out before advisories. If it has one, bring the right payment and a photo ID. A list of registered bonding agents is posted in the Central Division public lobby.`,
      },
      {
        question: "How do I find a court date online?",
        answer: `${PINELLAS_CASE_LOOKUP_ANSWER} The Clerk's phone is ${CLERK_PHONE}.`,
      },
      {
        question: "I was handed a notice to appear. Where do I go?",
        answer: "A misdemeanor notice brings you to the Justice Center. A local ordinance citation or payable infraction goes to Courtroom 16 in the same building. Go by the date and time on your own notice, and do not miss it.",
      },
      {
        question: "The arrest was on a warrant. Does the bond table apply?",
        answer: "Usually not. The booking officer checks that the amount written on the warrant was entered correctly, and that amount controls. Call us if you cannot tell what it says.",
      },
      {
        question: "Could I be released without any bond?",
        answer: "It can happen. A local order urges police to use a notice to appear where the law allows. It also lets booking officers issue one on an ordinance charge or a lower misdemeanor, if you seem likely to come to court. Domestic violence and injunction charges have their own limits.",
      },
    ],
    office: {
      heading: "We work from Brandon, with no Clearwater office.",
      body: [
        "The firm has no office in Clearwater. Our only office is at 745 W Lumsden Rd in Brandon, and Pinellas County cases are handled from there.",
        "You can reach us day or night at 813-738-8650. Please call ahead if you want to sit down with an attorney.",
      ],
    },
    cta: {
      heading: "Call before you drive to 49th Street.",
      body: "We can tell you if there is a bond to post, what to bring, and what happens at advisories. The call is confidential and answered 24/7.",
    },
  },

  // ------------------------------------------------------------------ Injury hub
  {
    slug: "personal-injury",
    kind: "hub",
    hubType: "injury",
    parent: MARKET,
    place: "Clearwater",
    county: "Pinellas County",
    published: true,
    indexable: false,
    linkLabel: "Personal injury in Clearwater",
    metaTitle: "Clearwater Injury Lawyers | Hines McCarty Pavlidis",
    metaDescription:
      "Hurt in a crash on US 19 or Gulf to Bay? How to get a Clearwater police crash report, the 14-day rule, the two-year limit, and which court takes a suit.",
    h1: "Crash in Clearwater: getting the report and protecting your claim.",
    lead: [
      "US 19, Gulf to Bay Boulevard, and the Memorial Causeway all run through Clearwater, and the agency that shows up after a crash depends on where you were. That agency is also where your crash report comes from.",
      "This page explains how to get the report, which dates matter, and what happens if a suit is filed. Our office is in Brandon, and we represent people hurt in Pinellas County from there.",
    ],
    firstSteps: {
      heading: "After a crash in Clearwater, do these first.",
      intro: "None of this takes long. It is much harder to fix later.",
      items: [
        {
          title: "Write down the agency",
          body: "Before you leave, ask which agency came and what the report number is. Clearwater police, Sheriff's deputies, and state troopers each keep their own records, and the number is what you will search with later.",
          source: `${CPD_CRASH_SOURCE}; ${PCSO_CRASH_SOURCE}`,
          link: { href: "https://www.clearwaterpolice.org/Programs-and-Services/Obtain-Crash-Report", label: "Crash reports (Clearwater Police)", external: true },
        },
        {
          title: "If no officer came",
          body: "Clearwater police take online reports of minor traffic collisions that happened in the city. It must not be an emergency, and there can be no known suspect. If you have a suspect, call 727-562-4242 instead.",
          source: CPD_CRASH_SOURCE,
          link: { href: "https://www.clearwaterpolice.org/Programs-and-Services/File-a-Report", label: "File a report (Clearwater Police)", external: true },
        },
        {
          title: "Get seen within 14 days",
          body: "Your own auto policy pays your first medical bills only if your first care comes within 14 days of the crash. Some injuries take days to show. Do not wait to find out.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Say little to insurers",
          body: "An adjuster may call quickly. Do not guess about speed or who was at fault, and do not say you are fine. If you end up more than 50 percent at fault, you recover nothing from the other driver.",
          source: "F.S. 768.81",
        },
      ],
    },
    facts: {
      heading: "Your Clearwater crash report, and where a suit would go.",
      intro: "Start with the agency on your paperwork, since each one has its own process. If you later need a suit, the county sends it by a rule that may surprise you.",
      items: [
        {
          title: "Who usually responds",
          body: `In the city, usually Clearwater police. Outside the city limits, it is often Sheriff's deputies, and a crash may also be worked by the Florida Highway Patrol. The patrol's Pinellas station is at ${FHP_PINELLAS_PHONE}.`,
          source: `${CPD_SOURCE}; ${PCSO_PATROL_SOURCE}; ${PINELLAS_PHONES_SOURCE}`,
        },
        {
          title: "A Clearwater police report",
          body: "The department sends people to LexisNexis to get a crash report online. You can also ask the Records Section at 645 Pierce Street, or call 727-562-4441, Monday to Friday, 8 a.m. to 4 p.m. The city says accident reports are one record where it may have to ask who you are.",
          source: `${CPD_CRASH_SOURCE}; ${CPD_SOURCE}; ${CITY_RECORDS_SOURCE}`,
        },
        {
          title: "A Sheriff's report",
          body: `The Sheriff posts its own crash reports online for one year. You need the report number, the crash date, and a driver's last name. Give it at least two weeks. After that, Records can help at ${SHERIFF_RECORDS_PHONE}.`,
          source: PCSO_CRASH_SOURCE,
        },
        {
          title: "The state's portal",
          body: "Florida also sells crash reports through its portal for $10 each, plus a $2 fee per order. Use it for a trooper's report.",
          source: FLHSMV_CRASH_SOURCE,
        },
        {
          title: "How much is at stake sets the court",
          body: "Up to $8,000 is small claims. From there to $50,000 is county court, and above $50,000 is circuit court. Interest, costs, and attorney fees do not count toward these amounts.",
          source: PINELLAS_CLERK_CIVIL_SOURCE,
        },
        {
          title: "Clearwater or St. Petersburg",
          body: "If a suit is filed in Pinellas County, the ZIP code of your lawyer picks the city. If you have no lawyer, your own ZIP code does. The codes 33755 through 33767 are on the Clearwater list. Where the crash happened does not decide this.",
          source: SIXTH_CIVIL_SOURCE,
        },
        {
          title: "If we file for you",
          body: "Our Brandon ZIP code is on neither list. The order spreads those cases across both cities, so a Clearwater crash could lead to a suit assigned to St. Petersburg. That is a filing rule. It says nothing about the merits of your claim.",
          source: SIXTH_CIVIL_SOURCE,
        },
        {
          title: "The civil buildings downtown",
          body: `Civil Court Records is at the Clearwater Courthouse, 315 Court Street, Room 170. County civil and small claims sections sit at the Historic Courthouse, ${HISTORIC_COURTHOUSE_ADDRESS}. The Justice Center on 49th Street is for criminal and traffic matters.`,
          source: `${CLERK_LOCATIONS_SOURCE}; ${SIXTH_COUNTY_ASSIGNMENTS_SOURCE}`,
        },
        {
          title: "Finding a suit online",
          body: `The Clerk's Public Access site, courtrecords.mypinellasclerk.gov, searches by name or case number, and most records need no account. Call ${CLERK_PHONE} if you get stuck.`,
          source: PINELLAS_CLERK_RECORDS_SOURCE,
        },
      ],
    },
    injury: {
      heading: "Three Florida rules that can change a Clearwater claim.",
      intro: "State law sets these, so they are no different in Clearwater. Each one can shrink a claim or end it.",
      items: [
        {
          title: "The 14-day window",
          body: "Miss it and you can lose the medical benefits on your own policy. A visit soon after the crash is the way to keep them.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "The two-year limit",
          body: "For a crash after 24 March 2023, a negligence suit must be filed within two years. Check the date early, and do not wait on an insurer's answer.",
          source: "F.S. 95.11",
        },
        {
          title: "Your share of the fault",
          body: "At 50 percent or less, your share of the fault cuts what you can recover. Over 50 percent, you recover nothing from the other side.",
          source: "F.S. 768.81",
        },
      ],
      links: carLinks,
    },
    practices: {
      heading: "Other pages that may help after a Clearwater crash.",
      intro: "The main injury page explains a claim from start to finish. The rest cover what else a crash can bring with it.",
      items: [
        {
          href: "/personal-injury",
          title: "Personal injury",
          body: "How a claim moves from the crash to a settlement or a trial.",
        },
        {
          href: CRIMINAL_HUB,
          title: "Criminal defense in Clearwater",
          body: "For a DUI or other charge that came out of the same crash.",
        },
        {
          href: MARKET_PAGE,
          title: "Clearwater overview",
          body: "The court buildings in order, and the towns around the city.",
        },
        {
          href: BUSINESS,
          title: "Business litigation",
          body: "Contract, ownership, non-compete, and trade secret disputes.",
        },
      ],
    },
    faq: [
      {
        question: "Where would my Clearwater injury suit be heard?",
        answer: "If it is filed in Pinellas County with us, either Clearwater or St. Petersburg, because our ZIP code is on neither list. Filing without a lawyer, you would go by your own ZIP code. Any criminal charge from the same crash stays at the Justice Center.",
      },
      {
        question: "What does a crash report cost?",
        answer: "The state's portal charges $10 per report, plus $2 per order. For a Clearwater police report, ask the Records Section at 727-562-4441 about its cost before you go in.",
      },
      {
        question: "The crash was on the Memorial Causeway. Who has my report?",
        answer: "Whoever came. The agency name is on the paper the officer gave you. If you have nothing, start with Clearwater police at 727-562-4242, since the causeway lies inside the city on Census maps.",
      },
      {
        question: "How long do I have to file a suit?",
        answer: "For a negligence claim from a crash after 24 March 2023, two years. Evidence fades well before that, and a suit takes time to prepare, so an early call helps.",
      },
      {
        question: "Do I need to travel to Brandon?",
        answer: "No. You can start by phone at 813-738-8650. Brandon is our only office, and an attorney can tell you on the call what you need.",
      },
    ],
    office: {
      heading: "Your claim would be handled from Brandon.",
      body: [
        "We do not have a Clearwater office. The firm's one office is at 745 W Lumsden Rd in Brandon.",
        "Calls to 813-738-8650 are answered around the clock. Let us know before you come in, so an attorney can make time for you.",
      ],
    },
    cta: {
      heading: "Tell us about the crash.",
      body: "Tell us the date, the road, and who responded. We will explain which deadlines apply and how to get your report. The call is confidential and answered 24/7.",
    },
  },

  // ------------------------------------------------------------------ Largo
  {
    slug: "largo",
    kind: "community",
    parent: MARKET,
    place: "Largo",
    county: "Pinellas County",
    published: true,
    indexable: false,
    metaTitle: "Largo Criminal and Injury Help | Hines McCarty Pavlidis",
    metaDescription:
      "Largo has its own police, and its tickets go to Traffic Court II. See the jail number, 2026 bond, free short crash reports, and how Largo ZIP codes split.",
    h1: "A Largo arrest or crash, step by step.",
    lead: [
      "The Largo Police Department handles calls in the city, and two local details set Largo apart. Its tickets go to a different traffic court than those from Clearwater, and its ZIP codes do not all fall on the same side of the county's civil court split.",
      "The jail and the Justice Center are also not far from Largo, about five miles from the police station. Our office is in Brandon, and we take Largo cases from there.",
    ],
    firstSteps: {
      heading: "The first hours after a Largo arrest.",
      intro: "A judge decides on release within 24 hours. Use the time in this order.",
      items: [
        {
          title: "Look on the Sheriff's list",
          body: `The police department does not run the jail. Adults are usually taken to the county jail at ${JAIL_ADDRESS}. Search Who's In Jail, or call Inmate Records at ${JAIL_RECORDS_PHONE}. The county's own contact page gives that jail a Largo address, but it is the same place.`,
          source: `${PCSO_JAIL_SOURCE}; ${COUNTY_CONTACTS_SOURCE}`,
          link: { href: WHOS_IN_JAIL_URL, label: "Who's In Jail (Sheriff's Office)", external: true },
        },
        {
          title: "Look up the bond",
          body: "Find the charge in the county bond table linked below. If it says no bond, money will not help until after the first hearing. If it has an amount, the Sheriff's page lists the forms of payment the jail takes.",
          link: { href: "#bond", label: "Bond table through 2026" },
        },
        {
          title: "Do not explain the facts",
          body: "Officers may ask for your side. You can say you want a lawyer and stop there. If you are family, do not ask about the facts when the person calls from jail.",
        },
        {
          title: "Get a lawyer involved early",
          body: "Advisories comes within a day of the arrest, and the judge sets the terms of any release. A call to us before then gives an attorney time to prepare.",
          source: "Fla. R. Crim. P. 3.130(a)",
        },
      ],
    },
    deadlines: PINELLAS_DEADLINES,
    facts: {
      heading: "Where a Largo case goes after the arrest.",
      intro: "Largo has no criminal court of its own. Here is how the police department, the traffic courts, and the Justice Center fit together.",
      items: [
        {
          title: "Largo police",
          body: "To report a crime in the city or file a police report by phone, call the Communications Center at 727-587-6730. Records is at 201 Highland Avenue, 727-587-6717. Dial 911 for an emergency.",
          source: LARGO_SOURCE,
        },
        {
          title: "When it is not Largo police",
          body: `A mailing address does not always match a city line. Outside the city and south of Gulf to Bay Boulevard, the Sheriff's Central District usually responds. Its non-emergency line is ${SHERIFF_NON_EMERGENCY_PHONE}. The Sheriff's Administration Building, 10750 Ulmerton Road, also has a Largo address.`,
          source: `${PCSO_PATROL_SOURCE}; ${PCSO_AREAS_SOURCE}`,
        },
        {
          title: "Traffic Court II",
          body: "A criminal traffic ticket from Largo police, other than a DUI, goes to Traffic Court II. A deputy's ticket goes to Traffic Court I, even on the same road. Look at the agency named on the citation. Both courts sit at the Justice Center.",
          source: SIXTH_TRAFFIC_SOURCE,
        },
        {
          title: "Felonies and misdemeanors",
          body: `Each goes to its own section at the Justice Center, ${JUSTICE_CENTER_ADDRESS}. A felony goes to a circuit section and a misdemeanor to a county section. Your street and your last name play no part.`,
          source: SIXTH_CRIMINAL_COURTS_SOURCE,
        },
        {
          title: "Court records",
          body: `Largo's records page points you to the Clerk for final court results. The Clerk's criminal records office is in the Justice Center, at ${CLERK_PHONE}. A police report and a court file are separate records, held in separate places.`,
          source: `${LARGO_SOURCE}; ${CLERK_LOCATIONS_SOURCE}`,
        },
        {
          title: "Federal cases",
          body: `A federal charge from Largo is heard in Tampa, at the Sam M. Gibbons United States Courthouse, ${GIBBONS_ADDRESS}. It does not pass through the county's system at all.`,
          source: FEDERAL_TAMPA_SOURCE,
        },
      ],
    },
    charges: {
      heading: "Charges we defend in Largo.",
      intro: "Each page explains the Florida law and penalties. Those pages are built around Hillsborough County courts, so use this page for your court details.",
      items: [
        {
          href: `${STATE}/dui`,
          title: "DUI",
          body: "This skips Traffic Court II and goes to a misdemeanor section. Bond is $500 only with no damage and no DUI history. You also have 10 days from the suspension notice to act on your license.",
        },
        {
          href: `${STATE}/drug-possession`,
          title: "Drug possession",
          body: "If it is charged as a third degree felony with no force, the schedule says $5,000. Prosecutors control entry into drug court, so ask about it early.",
        },
        {
          href: `${STATE}/grand-theft`,
          title: "Grand theft",
          body: "The value sets the degree of the charge. That in turn decides if you can bond out at all, or must wait for the hearing.",
        },
        {
          href: `${STATE}/battery`,
          title: "Battery",
          body: "A misdemeanor usually has a set amount. Battery on someone 65 or older does not, and neither does felony battery.",
        },
        {
          href: `${STATE}/domestic-violence`,
          title: "Domestic violence",
          body: "No release before the first hearing. County court cases then go to Section R, wherever in the county they began.",
        },
      ],
    },
    injury: {
      heading: "If you were hurt in a crash in Largo.",
      intro: "Ulmerton Road, East Bay Drive, Seminole Boulevard, and US 19 all pass through Largo. The police department's report rules are its own, and the Florida deadlines still apply.",
      items: [
        {
          title: "Your Largo police report",
          body: "For the first 60 days, reports go only to the people directly involved or their authorized representatives. Bring ID. Call 727-587-6717 ahead so the report is ready. The city does not charge for a report under four pages.",
          source: LARGO_SOURCE,
        },
        {
          title: "14 days to first care",
          body: "Your own policy covers early medical bills only if you are seen within 14 days of the crash.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Two years to sue",
          body: "That is the limit for a negligence claim from a crash after 24 March 2023.",
          source: "F.S. 95.11",
        },
        {
          title: "Fault over 50 percent",
          body: "If your share is more than half, you recover nothing from the other driver. Be careful what you tell an adjuster.",
          source: "F.S. 768.81",
        },
        {
          title: "Largo ZIP codes split",
          body: "A Pinellas suit goes by the ZIP code of the plaintiff's lawyer, or your own if you have none. 33770, 33771, 33774, and 33778 are on the Clearwater list, and 33773 is on the St. Petersburg list. Our Brandon ZIP is on neither, so a suit we file can go to either city.",
          source: SIXTH_CIVIL_SOURCE,
        },
      ],
      links: carLinks,
    },
    practices: {
      heading: "More help with a Largo case.",
      intro: "The two Clearwater pages explain the county's courts in more depth. The others are firm-wide.",
      items: [
        { href: CRIMINAL_HUB, title: "Criminal defense in Clearwater", body: "Felony sections, DUI, and how to post bond." },
        { href: INJURY_HUB, title: "Personal injury in Clearwater", body: "The civil courts and how a suit gets assigned." },
        { href: FEDERAL, title: "Federal criminal defense", body: "Federal cases from Pinellas County, heard in Tampa." },
        { href: WHITE_COLLAR, title: "White-collar defense", body: "Fraud and financial charges, from the first subpoena." },
        { href: BUSINESS, title: "Business litigation", body: "Disputes over contracts, ownership, and non-competes." },
      ],
    },
    faq: [
      {
        question: "Is there a court in Largo for my criminal case?",
        answer: "The orders do not list one. State criminal and traffic sections are at the Justice Center on 49th Street North, which uses a Clearwater mailing address. Read your paperwork for the room and time.",
      },
      {
        question: "Why does my friend's ticket go to a different traffic court?",
        answer: "Traffic court follows the agency, not the road. Largo police tickets go to Traffic Court II. Deputies' tickets go to Traffic Court I. A trooper's ticket moves to Traffic Court II on 1 January 2027.",
      },
      {
        question: "How do I check a court date?",
        answer: PINELLAS_CASE_LOOKUP_ANSWER,
      },
      {
        question: "Can I mail for a Largo police report?",
        answer: "Largo's records page says requests by mail must include a stamped, self-addressed envelope for the return. Crash reports are limited in the first 60 days, so call Records at 727-587-6717 first.",
      },
      {
        question: "Do you have an office in Largo?",
        answer: "No. Our only office is in Brandon, at 745 W Lumsden Rd. We take Largo cases from there, and you can call at any hour.",
      },
    ],
    office: {
      heading: "We have no office in Largo.",
      body: [
        "The firm's only office is at 745 W Lumsden Rd in Brandon. Largo cases are handled from there.",
        "Our number is 813-738-8650, and it is answered day and night. Please call first if you would like to come in.",
      ],
    },
    cta: {
      heading: "Call about your Largo case.",
      body: "A short, confidential call can sort out which court you are in and what to do next. We answer 24/7.",
    },
  },

  // ------------------------------------------------------------------ Dunedin
  {
    slug: "dunedin",
    kind: "community",
    parent: MARKET,
    place: "Dunedin",
    county: "Pinellas County",
    published: true,
    indexable: false,
    metaTitle: "Dunedin Arrests and Injury Claims | Hines McCarty Pavlidis",
    metaDescription:
      "Dunedin contracts with the Sheriff for police work. See where deputies take people, 2026 bond amounts, the traffic court, and how to get a crash report.",
    h1: "Dunedin's police are Sheriff's deputies. Here is what that changes.",
    lead: [
      "Dunedin contracts with the Pinellas County Sheriff's Office for law enforcement, so the officer at your door is usually a deputy. That one fact decides where you call, which traffic court hears your ticket, and how you get a crash report.",
      "The Sheriff's North District station is in Dunedin, at 2496 Bayshore Boulevard, but the jail and the courts are not. Our office is in Brandon, and we take Dunedin cases from there.",
    ],
    firstSteps: {
      heading: "If a deputy made an arrest in Dunedin.",
      intro: "Do these in order. First appearance comes within 24 hours, and it moves fast.",
      items: [
        {
          title: "Look at the jail, not the station",
          body: `Dunedin has a Sheriff's station, but adults are usually booked at the county jail, ${JAIL_ADDRESS}. That is more than 10 miles south. Search Who's In Jail, or call Inmate Records at ${JAIL_RECORDS_PHONE}.`,
          source: `${PCSO_JAIL_SOURCE}; ${PCSO_AREAS_SOURCE}`,
          link: { href: WHOS_IN_JAIL_URL, label: "Who's In Jail (Sheriff's Office)", external: true },
        },
        {
          title: "See if a bond exists yet",
          body: "Look for the charge in the county bond table linked below. Many charges have no bond until a judge has seen the person. Check before you pay a bail bond company.",
          link: { href: "#bond", label: "2026 bond amounts" },
        },
        {
          title: "Stay quiet about what happened",
          body: "A deputy may be friendly and may ask for your side. You do not have to give one. Family should keep the facts out of jail calls.",
        },
        {
          title: "Call before the hearing",
          body: "The county calls first appearance advisories. A judge sets any release terms there, within 24 hours of the arrest. Calling us early gives an attorney more time to prepare.",
          source: "Fla. R. Crim. P. 3.130(a)",
        },
      ],
    },
    deadlines: PINELLAS_DEADLINES,
    facts: {
      heading: "What the Sheriff's contract means for a Dunedin case.",
      intro: "You call the Sheriff, not a city department, and the court orders list no court in Dunedin. Here is where each thing lands.",
      items: [
        {
          title: "Who polices Dunedin",
          body: `The Sheriff lists Dunedin as a contract city in its North District, along with Oldsmar and Safety Harbor. The city renews the deal by yearly addendum. For anything not in progress, call ${SHERIFF_NON_EMERGENCY_PHONE}. The county's phone list gives that same number for Dunedin.`,
          source: `${PCSO_PATROL_SOURCE}; ${DUNEDIN_SOURCE}; ${PINELLAS_PHONES_SOURCE}`,
        },
        {
          title: "Traffic Court I",
          body: "A deputy's criminal traffic ticket, other than a DUI, goes to Traffic Court I. The same goes for a trooper's ticket through 2026. From 1 January 2027, a trooper's ticket goes to Traffic Court II. Both courts are at the Justice Center.",
          source: SIXTH_TRAFFIC_SOURCE,
        },
        {
          title: "Criminal court",
          body: `Felonies and misdemeanors from Dunedin are heard at the Justice Center, ${JUSTICE_CENTER_ADDRESS}. The address says Clearwater, but this is not downtown Clearwater. Allow time for the drive.`,
          source: SIXTH_CRIMINAL_COURTS_SOURCE,
        },
        {
          title: "A city code citation",
          body: "Notices from the Sheriff's Office for city or county code violations go to Courtroom 16 at the Justice Center. The court's order sets 1:30 p.m. on the fifth Thursday after the notice. Go by the date printed on yours, since dates can change.",
          source: SIXTH_NTA_SOURCE,
        },
        {
          title: "A misdemeanor notice",
          body: "If a deputy gave you a notice to appear on a misdemeanor, it should send you to the Justice Center as well. Put that date on your calendar now.",
          source: SIXTH_NTA_SOURCE,
        },
        {
          title: "Federal cases",
          body: `A federal charge from Dunedin goes to Tampa, to the Sam M. Gibbons United States Courthouse, ${GIBBONS_ADDRESS}.`,
          source: FEDERAL_TAMPA_SOURCE,
        },
      ],
    },
    charges: {
      heading: "Charges we defend in Dunedin.",
      intro: "These pages explain the Florida law and penalties. They are written around Hillsborough County courts, and your court details are here instead.",
      items: [
        {
          href: `${STATE}/dui`,
          title: "DUI",
          body: "With no damage and no DUI history, the schedule amount is $500. Any injury, damage, or past DUI means you wait for a judge. Your license has its own 10-day deadline.",
        },
        {
          href: `${STATE}/battery`,
          title: "Battery",
          body: "A first degree misdemeanor with force has a $1,000 schedule amount, unless it is domestic violence. Felony battery has none.",
        },
        {
          href: `${STATE}/domestic-violence`,
          title: "Domestic violence",
          body: "Expect to stay in custody until the first hearing. An injunction petition, if there is one, is a separate case.",
        },
        {
          href: `${STATE}/grand-theft`,
          title: "Grand theft",
          body: "At the lowest degree, with no force, the bond is $5,000 here. Above that, you see a judge first.",
        },
        {
          href: `${STATE}/gun-crimes`,
          title: "Gun crimes",
          body: "A prior felony plus a gun or ammunition charge means no release on the schedule. Some injunctions have the same effect.",
        },
      ],
    },
    injury: {
      heading: "If you were hurt in a Dunedin crash.",
      intro: "Alternate US 19, Curlew Road, Bayshore Boulevard, and Main Street all run through Dunedin. If a deputy worked your crash, the report comes from the Sheriff and not from the city.",
      items: [
        {
          title: "The Sheriff's crash report site",
          body: `Reports are posted online for one year, and you search with the report number, the crash date, and a driver's last name. Wait at least two weeks. If it is still not there, call Records at ${SHERIFF_RECORDS_PHONE}.`,
          source: PCSO_CRASH_SOURCE,
        },
        {
          title: "First care in 14 days",
          body: "Your auto policy pays first medical bills only if your first care is within 14 days. Go even if you feel fine.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Two-year filing limit",
          body: "A crash after 24 March 2023 gives you two years to file a negligence suit.",
          source: "F.S. 95.11",
        },
        {
          title: "When fault ends the claim",
          body: "Over 50 percent at fault, you get nothing from the other driver. Choose your words with insurers.",
          source: "F.S. 768.81",
        },
        {
          title: "Where a suit lands",
          body: "If you sue without a lawyer in Pinellas County, your ZIP code picks the court city. 34698, the ZIP code of the Sheriff's Dunedin station, is on the Clearwater list. With us, our Brandon ZIP is on neither list, so it can go to Clearwater or St. Petersburg.",
          source: SIXTH_CIVIL_SOURCE,
        },
      ],
      links: carLinks,
    },
    practices: {
      heading: "More for a Dunedin case.",
      intro: "The Clearwater pages go deeper on the county's courts. The rest are firm-wide pages.",
      items: [
        { href: CRIMINAL_HUB, title: "Criminal defense in Clearwater", body: "Posting bond, sections, and the Justice Center." },
        { href: INJURY_HUB, title: "Personal injury in Clearwater", body: "Crash reports, deadlines, and civil courts." },
        { href: FEDERAL, title: "Federal criminal defense", body: "Investigations and charges heard in Tampa." },
        { href: WHITE_COLLAR, title: "White-collar defense", body: "Fraud and money cases, state or federal." },
        { href: BUSINESS, title: "Business litigation", body: "Contracts, ownership, trade secrets, non-competes." },
      ],
    },
    faq: [
      {
        question: "Can I bond someone out at the Dunedin station?",
        answer: `The Sheriff's bond page describes bond at the jail, not at the station. If the charge has a bond, start with Inmate Records at ${JAIL_RECORDS_PHONE}, then follow the jail's list of accepted payments.`,
      },
      {
        question: "Is a Dunedin case any different because of the contract?",
        answer: "The court process is the same as elsewhere in the county. The difference is in who holds the records, and in the traffic court. Because the Sheriff is the agency, tickets and reports run through the Sheriff's Office.",
      },
      {
        question: "How do I find my court date?",
        answer: PINELLAS_CASE_LOOKUP_ANSWER,
      },
      {
        question: "Is there a city police number in Dunedin?",
        answer: `The county's phone list shows ${SHERIFF_NON_EMERGENCY_PHONE}, the Sheriff, for law enforcement in Dunedin. For an emergency, dial 911.`,
      },
      {
        question: "Is your firm in Dunedin?",
        answer: "No. The firm has one office, in Brandon, at 745 W Lumsden Rd. We take Dunedin cases from there.",
      },
    ],
    office: {
      heading: "Our office is in Brandon, not Dunedin.",
      body: [
        "We have no Dunedin office. Our only office is at 745 W Lumsden Rd in Brandon.",
        "We answer 813-738-8650 at all hours. Call before you visit, so an attorney can make the time.",
      ],
    },
    cta: {
      heading: "Talk to us about a Dunedin case.",
      body: "Tell us what the deputy gave you, and we will explain the next step. Calls are confidential and answered 24/7.",
    },
  },

  // ------------------------------------------------------------------ Palm Harbor
  {
    slug: "palm-harbor",
    kind: "community",
    parent: MARKET,
    place: "Palm Harbor",
    county: "Pinellas County",
    published: true,
    indexable: false,
    metaTitle: "Palm Harbor Defense and Injury | Hines McCarty Pavlidis",
    metaDescription:
      "Palm Harbor is not a city, so deputies answer calls. See the jail, bond amounts through 2026, the drive to court, and how to get a Sheriff's crash report.",
    h1: "Palm Harbor has no city police. Start with the Sheriff.",
    lead: [
      "The Census Bureau counts Palm Harbor as a census-designated place, not a city. It has no city government, and the county's phone list gives the Sheriff's number for law enforcement here.",
      "So an arrest here usually means deputies, the county jail, and a court more than 10 miles south. Our office is in Brandon, and we take Palm Harbor cases from there.",
    ],
    firstSteps: {
      heading: "What to do after an arrest in Palm Harbor.",
      intro: "The first hearing comes within 24 hours, and the court is a long way down the county. Start now.",
      items: [
        {
          title: "Track the person down",
          body: `Deputies usually take adults to the county jail, ${JAIL_ADDRESS}. Search the Sheriff's list online, or call Inmate Records at ${JAIL_RECORDS_PHONE}. Do both before you make the drive.`,
          source: `${PCSO_JAIL_SOURCE}; ${PALM_HARBOR_CENSUS_SOURCE}`,
          link: { href: WHOS_IN_JAIL_URL, label: "Who's In Jail (Sheriff's Office)", external: true },
        },
        {
          title: "Check the table before paying",
          body: "A charge has either a set amount or no bond until a judge rules. If there is an amount, the jail does not take personal checks, so plan for that.",
          source: PCSO_JAIL_SOURCE,
          link: { href: "#bond", label: "Bond amounts" },
        },
        {
          title: "Leave the details for a lawyer",
          body: "You can decline to answer a deputy's questions. Family should not ask what happened over a jail call. Those details can wait for a lawyer.",
        },
        {
          title: "Call us before advisories",
          body: "This is the county's name for first appearance. It decides if the person goes home and on what terms, so an early call gives an attorney time to prepare.",
          source: "Fla. R. Crim. P. 3.130(a)",
        },
      ],
    },
    deadlines: PINELLAS_DEADLINES,
    facts: {
      heading: "Who handles a Palm Harbor case, and where it is heard.",
      intro: "Palm Harbor has no city government, so you deal with county agencies. Here is who to call and where to go.",
      items: [
        {
          title: "Unincorporated, so deputies",
          body: `The Sheriff's North District covers unincorporated land north of Gulf to Bay Boulevard up to the Pasco line. Palm Harbor is in that area. Call ${SHERIFF_NON_EMERGENCY_PHONE} for anything not in progress. The district station is at 2496 Bayshore Boulevard, Dunedin.`,
          source: `${PALM_HARBOR_CENSUS_SOURCE}; ${PCSO_PATROL_SOURCE}; ${PCSO_AREAS_SOURCE}; ${PINELLAS_PHONES_SOURCE}`,
        },
        {
          title: "A long trip to court",
          body: `Palm Harbor has no courtroom of its own in the orders. Felony, misdemeanor, and traffic sections are all at the Justice Center, ${JUSTICE_CENTER_ADDRESS}. That is more than 10 miles south. Plan for it on a work day.`,
          source: SIXTH_CRIMINAL_COURTS_SOURCE,
        },
        {
          title: "Your ticket's court",
          body: "A deputy's non-DUI criminal traffic ticket goes to Traffic Court I. A trooper's ticket on US 19 goes there too until 31 December 2026, then to Traffic Court II from 1 January 2027. The agency on the citation decides.",
          source: SIXTH_TRAFFIC_SOURCE,
        },
        {
          title: "Paying without the drive",
          body: `The Clerk's north county service center, 3165 McMullen Booth Road, takes payments for fines, costs, and payable tickets. It is closer to Palm Harbor than the Justice Center, but it is not where your hearing is. Call ${CLERK_PHONE} to confirm before you go.`,
          source: CLERK_LOCATIONS_SOURCE,
        },
        {
          title: "Close to the county line",
          body: "North of Palm Harbor, past Tarpon Springs, is Pasco County, with its own jail and courts. If the arrest happened over the line, this page does not apply. Check the county on the paperwork.",
          source: "U.S. Census Bureau, TIGERweb",
        },
        {
          title: "Federal cases",
          body: `A federal case from Palm Harbor is heard in Tampa, at the Sam M. Gibbons United States Courthouse, ${GIBBONS_ADDRESS}.`,
          source: FEDERAL_TAMPA_SOURCE,
        },
      ],
    },
    charges: {
      heading: "Charges we defend in Palm Harbor.",
      intro: "Each page covers the Florida law and penalties. They are written around Hillsborough County courts, so rely on this page for where to go.",
      items: [
        {
          href: `${STATE}/dui`,
          title: "DUI",
          body: "$500 on the schedule if nothing was damaged, no one was hurt, and you have no DUI past. If not, you wait. You also get 10 days from the suspension notice to protect your license.",
        },
        {
          href: `${STATE}/drug-possession`,
          title: "Drug possession",
          body: "The drug and the amount set the charge. A large enough amount makes it trafficking, with no bond on the schedule.",
        },
        {
          href: `${STATE}/domestic-violence`,
          title: "Domestic violence",
          body: "No release before the hearing. A county court case then goes to Section R at the Justice Center.",
        },
        {
          href: `${STATE}/sexual-battery`,
          title: "Sexual battery",
          body: "The schedule gives no way out before first appearance. Do not speak with detectives until you have talked to a lawyer.",
        },
        {
          href: `${STATE}/battery`,
          title: "Battery",
          body: "A first degree misdemeanor without force has a $500 schedule amount. With force it is $1,000. Felony battery waits for a judge.",
        },
      ],
    },
    injury: {
      heading: "If you were hurt in a Palm Harbor crash.",
      intro: "US 19, Alternate US 19, and Tampa Road all pass through Palm Harbor. With no city department, a report will usually come from the Sheriff or the state.",
      items: [
        {
          title: "Which report you need",
          body: `For a deputy's report, use the Sheriff's crash site with the report number, date, and a driver's last name. For a trooper's report, use the state portal, at $10 plus a $2 order fee. Sheriff's Records is at ${SHERIFF_RECORDS_PHONE}.`,
          source: `${PCSO_CRASH_SOURCE}; ${FLHSMV_CRASH_SOURCE}`,
        },
        {
          title: "Medical care in 14 days",
          body: "If your first care comes later than 14 days after the crash, you can lose benefits from your own policy.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "The two-year clock",
          body: "You have two years to file a negligence suit from a crash after 24 March 2023.",
          source: "F.S. 95.11",
        },
        {
          title: "More than half at fault",
          body: "Then you recover nothing from the other driver. Do not guess about what happened when an insurer asks.",
          source: "F.S. 768.81",
        },
        {
          title: "If you need to sue",
          body: "In Pinellas County, the lawyer's ZIP code picks the court city, or your own if you have no lawyer. Palm Harbor's 34683, 34684, and 34685 are on the Clearwater list. Our Brandon ZIP is on neither, so a suit we file can be assigned to either city.",
          source: SIXTH_CIVIL_SOURCE,
        },
      ],
      links: carLinks,
    },
    practices: {
      heading: "More help for a Palm Harbor case.",
      intro: "The Clearwater pages explain how the county's courts work. The other three are firm-wide pages.",
      items: [
        { href: CRIMINAL_HUB, title: "Criminal defense in Clearwater", body: "The jail, the bond process, and felony sections." },
        { href: INJURY_HUB, title: "Personal injury in Clearwater", body: "Reports, deadlines, and suits in the county." },
        { href: FEDERAL, title: "Federal criminal defense", body: "Charges and investigations, heard in Tampa." },
        { href: WHITE_COLLAR, title: "White-collar defense", body: "Financial and fraud charges, from the first subpoena." },
        { href: BUSINESS, title: "Business litigation", body: "Partner, contract, and trade secret disputes." },
      ],
    },
    faq: [
      {
        question: "Is Palm Harbor part of Clearwater?",
        answer: "No. It is an unincorporated community with its own Census listing. We list it with Clearwater only because the two are near each other and share the same county courts.",
      },
      {
        question: "Which number do I call for a report that is not an emergency?",
        answer: `The county's phone list gives the Sheriff's Office, ${SHERIFF_NON_EMERGENCY_PHONE}, for law enforcement in Palm Harbor. It shows no town administration at all.`,
      },
      {
        question: "Where can I look up a court date?",
        answer: PINELLAS_CASE_LOOKUP_ANSWER,
      },
      {
        question: "Do you have a Palm Harbor office?",
        answer: "No. Our only office is at 745 W Lumsden Rd in Brandon. You can start with a phone call from wherever you are.",
      },
    ],
    office: {
      heading: "No Palm Harbor office. We are in Brandon.",
      body: [
        "The firm has one office, at 745 W Lumsden Rd in Brandon. We take Palm Harbor cases from there.",
        "Reach us around the clock at 813-738-8650. If you would like to meet, please call first.",
      ],
    },
    cta: {
      heading: "Call about a Palm Harbor arrest or crash.",
      body: "We will help you sort out which agency and which court you are dealing with. The call is confidential and answered 24/7.",
    },
  },

  // ------------------------------------------------------------------ Tarpon Springs
  {
    slug: "tarpon-springs",
    kind: "community",
    parent: MARKET,
    place: "Tarpon Springs",
    county: "Pinellas County",
    published: true,
    indexable: false,
    metaTitle: "Tarpon Springs Defense and Injury | Hines McCarty Pavlidis",
    metaDescription:
      "Tarpon Springs has its own police and sits on the Pasco County line. See the jail, 2026 bond, what police records cost, and where to go for court.",
    h1: "Tarpon Springs: your own police, and a county line to watch.",
    lead: [
      "Tarpon Springs has its own police department, at 444 South Huey Avenue, and it sits at the top of Pinellas County. The north edge of the city reaches the Pasco County line. Which side an arrest or crash happened on changes the jail, the courthouse, and the bond order.",
      "For anything in Pinellas, the case still goes a long way south, to 49th Street North. Our office is in Brandon, and we take Tarpon Springs cases from there.",
    ],
    firstSteps: {
      heading: "Just arrested in Tarpon Springs.",
      intro: "A judge will look at release within 24 hours. These steps come first.",
      items: [
        {
          title: "Find out which county",
          body: `If police arrested the person in Tarpon Springs, adults usually go to the county jail at ${JAIL_ADDRESS}. Check Who's In Jail or call Inmate Records at ${JAIL_RECORDS_PHONE}. If you find nothing and the arrest was near the line, check Pasco County's list too.`,
          source: PCSO_JAIL_SOURCE,
          link: { href: WHOS_IN_JAIL_URL, label: "Who's In Jail (Sheriff's Office)", external: true },
        },
        {
          title: "Know what the department can tell you",
          body: "Police dispatch is 727-937-6151, and records and administration are at 727-938-2849. Start there for the department's own reports. For custody questions, the jail's line is the better call.",
          source: TSPD_SOURCE,
        },
        {
          title: "Check for a bond",
          body: "The county bond table linked below shows which charges have an amount. Many have none until the hearing, so check it before you pay anyone.",
          link: { href: "#bond", label: "2026 bond table" },
        },
        {
          title: "Keep the facts to yourself",
          body: "You do not have to explain anything to officers. Family should not talk about the case when the person calls from jail.",
        },
        {
          title: "Call us before advisories",
          body: "That is the name for first appearance in this county. The hearing happens within a day of the arrest, and we can do more if you call first.",
          source: "Fla. R. Crim. P. 3.130(a)",
        },
      ],
    },
    deadlines: PINELLAS_DEADLINES,
    facts: {
      heading: "Where a Tarpon Springs case goes.",
      intro: "The city has its own police, but its cases join the county system. The first question is which county you were in.",
      items: [
        {
          title: "The Pasco line",
          body: "Past the north edge of the city, you are in Pasco County. That means a different jail, in Land O' Lakes, and courts in New Port Richey or Dade City. Check where the arrest actually took place, and see our New Port Richey page if it was over the line.",
          source: PASCO_ASSIGNMENT_SOURCE,
        },
        {
          title: "Outside the city limits",
          body: `Some land around Tarpon Springs is unincorporated, and the Sheriff has used that name for it. There, deputies usually respond, not city officers. The Sheriff's non-emergency line is ${SHERIFF_NON_EMERGENCY_PHONE}. The agency's name is on your paperwork.`,
          source: `${PCSO_PATROL_SOURCE}; Pinellas County Sheriff's Office, News Release 18-187`,
        },
        {
          title: "Traffic Court I",
          body: "A criminal traffic ticket from Tarpon Springs police, other than a DUI, goes to Traffic Court I at the Justice Center. A deputy's ticket goes there too. A trooper's ticket moves to Traffic Court II on 1 January 2027.",
          source: SIXTH_TRAFFIC_SOURCE,
        },
        {
          title: "Felonies and misdemeanors",
          body: `Both are heard at the Justice Center, ${JUSTICE_CENTER_ADDRESS}, about 17 miles south of the police station. The address says Clearwater, but it is not downtown. Plan your trip around that.`,
          source: SIXTH_CRIMINAL_COURTS_SOURCE,
        },
        {
          title: "Getting police records for your case",
          body: "The department takes requests by phone, mail, email, in person, or online. For discovery in a criminal case, it asks for certain court papers first. A lawyer usually handles this.",
          source: TSPD_SOURCE,
        },
        {
          title: "Federal cases",
          body: `A federal charge from Tarpon Springs is heard in Tampa, at the Sam M. Gibbons United States Courthouse, ${GIBBONS_ADDRESS}.`,
          source: FEDERAL_TAMPA_SOURCE,
        },
      ],
    },
    charges: {
      heading: "Charges we defend in Tarpon Springs.",
      intro: "These pages explain the Florida law and penalties. They are written around Hillsborough County courts, so look here for your own court details.",
      items: [
        {
          href: `${STATE}/dui`,
          title: "DUI",
          body: "It goes to a misdemeanor section, not a traffic court. Bond is $500 only with no damage and a clean DUI record. The 10-day license deadline runs from the notice of suspension.",
        },
        {
          href: `${STATE}/drug-trafficking`,
          title: "Drug trafficking",
          body: "You wait for a judge, with no schedule amount. A lawyer can start on the bond argument before that hearing.",
        },
        {
          href: `${STATE}/domestic-violence`,
          title: "Domestic violence",
          body: "No bond until first appearance. If you are released, you must stay away from the other person.",
        },
        {
          href: `${STATE}/gun-crimes`,
          title: "Gun crimes",
          body: "A felon charged with a gun or ammunition cannot use the schedule at all.",
        },
        {
          href: `${STATE}/grand-theft`,
          title: "Grand theft",
          body: "With no force, the lowest degree carries $5,000 in Pinellas. Check that the amount in front of you came from this county's schedule.",
        },
      ],
    },
    injury: {
      heading: "If you were hurt in a Tarpon Springs crash.",
      intro: "US 19 and Pinellas Avenue, which is Alternate US 19, both run through the city. A crash just north of it may be a Pasco County matter, so note exactly where it happened.",
      items: [
        {
          title: "The police crash report",
          body: "Records is at 727-938-2849. The department has a sworn statement form for crash reports on its records page. The first 15 minutes of staff time are free. After that, research is $24 an hour and copies are 15 cents a page.",
          source: TSPD_SOURCE,
        },
        {
          title: "Be seen within 14 days",
          body: "Your own insurance pays first medical bills only if your first care comes within 14 days of the crash.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Two years to file",
          body: "That is the limit for a negligence suit from a crash after 24 March 2023.",
          source: "F.S. 95.11",
        },
        {
          title: "How fault can end it",
          body: "If you are more than 50 percent at fault, you recover nothing from the other driver.",
          source: "F.S. 768.81",
        },
        {
          title: "If it becomes a lawsuit",
          body: "Filed in Pinellas County, a suit goes by the ZIP code of the plaintiff's lawyer. If you have no lawyer, 34688 and 34689 are on the Clearwater list. Our ZIP code is on neither list, so a suit we file can go to Clearwater or St. Petersburg.",
          source: SIXTH_CIVIL_SOURCE,
        },
      ],
      links: carLinks,
    },
    practices: {
      heading: "More help with a Tarpon Springs case.",
      intro: "The two Clearwater pages go further into Pinellas County's courts. The rest cover the whole firm.",
      items: [
        { href: CRIMINAL_HUB, title: "Criminal defense in Clearwater", body: "Bond, sections, and the Justice Center in detail." },
        { href: INJURY_HUB, title: "Personal injury in Clearwater", body: "The civil courts and how a suit is assigned." },
        { href: FEDERAL, title: "Federal criminal defense", body: "Federal cases from this county are heard in Tampa." },
        { href: WHITE_COLLAR, title: "White-collar defense", body: "Fraud and financial cases, from the first contact." },
        { href: BUSINESS, title: "Business litigation", body: "Contract, ownership, and non-compete disputes." },
      ],
    },
    faq: [
      {
        question: "The arrest was just north of the city. Which county's rules apply?",
        answer: "If it was over the line, Pasco County's. The bond order, the jail, and the courthouse would all be Pasco's. Read the county named on the paperwork, and call us if it looks wrong.",
      },
      {
        question: "Will I go to court in Tarpon Springs?",
        answer: "The county's orders list no criminal or traffic section there. Those cases are heard at the Justice Center on 49th Street North, so allow plenty of time for the drive.",
      },
      {
        question: "How do I check a Pinellas court date?",
        answer: PINELLAS_CASE_LOOKUP_ANSWER,
      },
      {
        question: "Do police records cost money?",
        answer: "Sometimes. The department does not bill the first 15 minutes of staff time, and it asks for payment before release. It lists 15 cents a page for copies and $5 for a thumb drive or DVD. Email delivery has no added charge.",
      },
      {
        question: "Do you have an office in Tarpon Springs?",
        answer: "No. Our only office is in Brandon, at 745 W Lumsden Rd. We take Tarpon Springs cases from there, by phone first.",
      },
    ],
    office: {
      heading: "There is no Tarpon Springs office. We are in Brandon.",
      body: [
        "Our only office is at 745 W Lumsden Rd in Brandon. We take Tarpon Springs cases from there.",
        "Call 813-738-8650 at any time. Please call before you come in, so we can set aside the time.",
      ],
    },
    cta: {
      heading: "Tell us what happened in Tarpon Springs.",
      body: "We can help you work out the county, the court, and the next step. The call is confidential and answered 24/7.",
    },
  },

  // ------------------------------------------------------------------ New Port Richey (Pasco County)
];
