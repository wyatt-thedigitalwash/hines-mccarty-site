import type { LocationBond, LocationPage } from "../location-types.ts";
import { BUSINESS, FEDERAL, WHITE_COLLAR } from "./hillsborough.ts";

/**
 * Orlando and its two hubs, in Orange County (D151, D154). Orange County is the
 * Ninth Judicial Circuit, not the Thirteenth, and Orlando is the one market
 * outside the federal Tampa Division, so almost nothing here carries over from
 * Hillsborough: Corrections runs the jail rather than the Sheriff, the circuit
 * keeps its own bond schedule, and no last-name table or East Division line
 * routes a case.
 *
 * THE BOND SCHEDULE HAS NO END DATE, unlike Hillsborough's. Order 2022-03-04
 * (amended 27 March 2025) runs "until further order" and was listed Active on
 * the circuit's index on 9 November 2026. Recheck the index before relying on
 * it: if the Ninth Circuit adopts the uniform statewide schedule, the doubling
 * for non-residents and the offense-by-offense amounts could change.
 */
export const OCC_SOURCE = "Orange County Corrections";

export const ORANGE_BOND: LocationBond = {
  heading: "Orange County's bond amounts, and when they do not apply.",
  intro:
    "The Ninth Circuit sets its own bond schedule for Orange and Osceola counties, and the order has no end date. It covers release before first appearance and does not bind the judge. Each charge needs its own bond. If you do not live in Florida, the order requires double the listed amount.",
  rows: [
    { crime: "Third degree felony, with any force or threat against a person", amount: "$5,000" },
    { crime: "Third degree felony, with no force or threat", amount: "$2,500" },
    { crime: "First degree misdemeanor, with any force or threat", amount: "$1,000" },
    { crime: "First degree misdemeanor, with no force or threat", amount: "$500" },
    { crime: "Second degree misdemeanor, with any force or threat", amount: "$250" },
    { crime: "Second degree misdemeanor, with no force or threat", amount: "$150" },
    { crime: "DUI, first offense, charged as a second degree misdemeanor", amount: "$500" },
    { crime: "DUI, second offense, charged as a second degree misdemeanor", amount: "$750" },
    { crime: "DUI, first offense, charged as a first degree misdemeanor", amount: "$1,000" },
    { crime: "DUI, second offense, charged as a first degree misdemeanor", amount: "$2,500" },
    { crime: "DUI, third offense within 10 years, or a fourth offense", amount: "$5,000" },
    { crime: "DUI causing serious bodily injury", amount: "$5,000" },
  ],
  waitHeading: "When only a judge can set your bond",
  waitIntro: "The schedule gives no amount, and you stay in custody until first appearance, if any of these is true:",
  wait: [
    "You face a first or second degree felony, or a capital or life felony.",
    "You were on pretrial release, probation, or community control when arrested for a felony.",
    "The charge is domestic violence, stalking, or violating a protective injunction.",
    "The charge is robbery, carjacking, felony battery, or resisting an officer with violence.",
    "The charge is burglary of a structure or vehicle, or aggravated assault with a firearm.",
    "The charge is fleeing from police, or failing to appear in court while on bail.",
    "The charge is sexual battery, child abuse, kidnapping, or trafficking in a controlled substance.",
    "You are a felon charged with having a gun or ammunition.",
    "You have been arrested three or more times in the last 6 months.",
    "You are designated a sexual offender or sexual predator.",
  ],
  waitNote: "This is only part of the list, and a few charges carry no bond at all. Check with us before you pay anyone.",
  source: "Ninth Circuit Administrative Orders 2022-03-04, amended 27 March 2025 and in force until further order, and 2003-39-34",
};

export const ORANGE_TIMELINE: NonNullable<LocationPage["timeline"]> = {
  heading: "The dates that follow an Orlando arrest.",
  intro: "Court rules set most of these clocks. The Orange County details come from the circuit's own orders, and your paperwork controls if it says something different.",
  steps: [
    {
      when: "Within 24 hours of arrest",
      what: "If you are still in custody, a judge sees you at the Booking and Release Center and decides whether you stay in and on what terms. If you cannot afford a lawyer, a Public Defender may be appointed.",
    },
    {
      when: "Arraignment",
      what: "A felony cannot be arraigned at first appearance, but a misdemeanor can, and the judge can take a plea and sentence you then. Talk to a lawyer first. County criminal arraignments otherwise run on Tuesdays, Wednesdays, and Thursdays at 7:30 a.m.",
    },
    {
      when: "30 days in custody",
      what: "If you are locked up, the State gets 30 days to file a formal charge. If it misses that date, the court orders release on your own word on day 33, or on day 40 if the State shows good cause. No one can be held past day 40 without a formal charge.",
    },
    {
      when: "60 days if you are out",
      what: "If you are out on release, the State gets 60 days to file. For good cause, the court can allow up to 30 more.",
    },
    {
      when: "90 days, or 175 days",
      what: "Once you are formally charged, speedy trial time starts: 90 days for a misdemeanor, 175 for a felony. Passing that date does not end the case on its own.",
    },
  ],
  source: "Fla. R. Crim. P. 3.130(a), 3.134(a) and (b), and 3.191(a), (d), (f) and (o); Ninth Circuit Administrative Orders 2003-39-34 and 2009-06-01",
};

const CRIMINAL_HUB = "/locations/orlando/criminal-defense";
const INJURY_HUB = "/locations/orlando/personal-injury";

export const orlandoPages: LocationPage[] = [
  // Market page. An overview: where each kind of case goes, with the detail on the hubs.
  {
    slug: "orlando",
    kind: "market",
    place: "Orlando",
    county: "Orange County",
    published: true,
    indexable: false,
    metaTitle: "Orlando Criminal and Injury Cases | Hines McCarty Pavlidis",
    metaDescription:
      "Where an Orlando arrest, federal charge, or crash claim goes in Orange County, and who runs each step. Our only office is in Brandon. Call 813-738-8650.",
    h1: "Orlando cases, from arrest or crash to the right courthouse.",
    lead: [
      "Orlando is in Orange County, which has its own courts, its own jail system, and its own bond schedule. Unlike Tampa, St. Petersburg, Clearwater, and Sarasota, it also sits outside the federal Tampa Division.",
      "This page shows who handles each step of a case from Orlando. The two pages linked below go further, one for an arrest and one for a crash. Our office is in Brandon, in Hillsborough County, and we take Orange County cases from there.",
    ],
    facts: {
      heading: "Who handles a case from Orlando, step by step.",
      intro: "A case moves through several separate offices here. Knowing which one has it tells you who to call.",
      items: [
        {
          title: "The arrest",
          body: "Inside city limits, the arrest is usually made by the Orlando Police Department. In unincorporated Orange County, it is usually a Sheriff's deputy. An address that says Orlando may not be in the city at all, as the city itself warns, and a nearby town may have its own agency.",
          source: "City of Orlando, Check Your Address; Orange County Sheriff's Office, File Police Report",
        },
        {
          title: "Booking and jail",
          body: "The Sheriff does not manage the jail in this county. Orange County Corrections does, and booking is at its Booking and Release Center, 3855 S. John Young Parkway. Its number is 407-836-3400, and its website has a searchable inmate list.",
          source: `${OCC_SOURCE}, Facilities and Current Inmate Database; Orange County Sheriff's Office, FAQ`,
        },
        {
          title: "The first hearing",
          body: "First appearance happens in that same building, in front of a judge. Weekdays have sessions at 9 a.m. and 1 p.m. Weekends and court holidays have one, at 11 a.m., and start times can shift.",
          source: `${OCC_SOURCE}, First Appearance; Ninth Circuit Administrative Order 2003-39-34`,
        },
        {
          title: "State court",
          body: "The State Attorney for the Ninth Circuit prosecutes state charges. Felonies are processed at the Orange County Courthouse, 425 N. Orange Avenue. For a misdemeanor, the Clerk says to check your court paperwork for the arraignment location. The Clerk's system assigns the judge, so neither side picks.",
          source: "Orange County Clerk of Courts, Criminal Court; Ninth Circuit Administrative Orders 2024-08-01 and 2009-06-01",
        },
        {
          title: "Federal court",
          body: "A federal case from Orlando stays out of Tampa. Orange County belongs to the Orlando Division of the Middle District of Florida. That division's courthouse is the George C. Young Federal Annex Courthouse, 401 West Central Boulevard, and its clerk's number is 407-835-4200.",
          source: "U.S. District Court, Middle District of Florida, Orlando",
        },
        {
          title: "A lawsuit for money",
          body: "Claims over $50,000 belong in circuit court. Claims of $50,000 or less go to county court. Both are run by the Ninth Circuit, and the Clerk's Civil Division is at 425 N. Orange Avenue, Suite 350.",
          source: "Ninth Circuit, Civil Court; Orange County Clerk of Courts, Civil Court",
        },
      ],
    },
    practices: {
      heading: "Where to read more about your kind of case.",
      intro: "Two of these are written for Orange County. The other three are the firm's general pages, so use the courthouse details above with them.",
      items: [
        {
          href: CRIMINAL_HUB,
          title: "Criminal defense in Orlando",
          body: "The first day after an arrest: finding someone in the jail, paying bond, first appearance, and where the case goes next.",
        },
        {
          href: INJURY_HUB,
          title: "Personal injury in Orlando",
          body: "After a crash: who writes the report, how to get a copy, your deadlines, and where a claim is filed.",
        },
        {
          href: FEDERAL,
          title: "Federal criminal defense",
          body: "Federal charges and investigations. That page is written around the Tampa Division, and an Orange County case belongs to the Orlando Division instead.",
        },
        {
          href: WHITE_COLLAR,
          title: "White-collar defense",
          body: "Fraud and financial cases, state or federal, starting from the first subpoena or agent visit.",
        },
        {
          href: BUSINESS,
          title: "Business litigation",
          body: "Disputes over contracts, ownership, non-competes, and trade secrets. The Ninth Circuit keeps a separate Business Court.",
        },
      ],
    },
    faq: [
      {
        question: "Where is the firm's office?",
        answer: "In Brandon, at 745 W Lumsden Rd, in Hillsborough County. It is our only office. We have none in Orlando or anywhere else in Orange County, though Orange County is one of the counties where we take cases.",
      },
      {
        question: "Would a federal charge from Orlando go to Tampa?",
        answer: "No. The Middle District of Florida has five divisions. The Orlando Division serves Brevard, Orange, Osceola, Seminole, and Volusia counties. Our federal pages describe the Tampa courthouse, so their law applies to you but their location does not.",
      },
      {
        question: "How do I look up an Orange County case?",
        answer: "The Clerk's my eClerk site, myeclerk.myorangeclerk.com, gives free access to many court records. It also has a Court Dates search. Some records need a registered login.",
      },
      {
        question: "Your charge pages mention Hillsborough County. Do they apply to me?",
        answer: "They explain Florida law and penalties, and those apply statewide. Their courthouse and jail details are for Hillsborough County. For Orange County, use the two Orlando pages linked above.",
      },
    ],
    office: {
      heading: "Our office is in Brandon, not Orange County.",
      body: [
        "Our only office is at 745 W Lumsden Rd in Brandon, in Hillsborough County. We do not have an office in Orlando, and we do not have one in Orange County.",
        "We take Orange County cases from Brandon, which is a long drive from Orlando, so please call first. We answer 24 hours a day, 7 days a week.",
      ],
    },
    cta: {
      heading: "Tell us what happened in Orlando.",
      body: "Call us any hour, whether it is an arrest, a call from investigators, or a crash. The call is confidential, and it reaches our office in Brandon.",
    },
  },

  // Criminal hub.
  {
    slug: "criminal-defense",
    kind: "hub",
    hubType: "criminal",
    parent: "orlando",
    place: "Orlando",
    county: "Orange County",
    linkLabel: "Criminal defense in Orlando",
    published: true,
    indexable: false,
    metaTitle: "Criminal Defense in Orlando | Hines McCarty Pavlidis",
    metaDescription:
      "Arrested in Orlando? The Orange County jail, how bond is paid and what it costs, and first appearance times. Our only office is in Brandon. 813-738-8650.",
    h1: "Arrested in Orlando: the jail, the bond, and the first hearing.",
    lead: [
      "If you or someone you love was just arrested in Orlando, this page covers the first day in Orange County. It explains how to find the person, how bond gets paid, when a judge will see them, and where the case goes after that.",
      "Orange County does much of this its own way, so the local details differ from our Hillsborough County pages. Our office is in Brandon, and we take Orange County cases from there.",
    ],
    firstSteps: {
      heading: "What to do first after an Orlando arrest.",
      intro: "Much of this can be done tonight.",
      items: [
        {
          title: "Check the jail's list",
          body: "Orange County Corrections runs the jail, not the Sheriff, whichever agency made the arrest. People are booked at the Booking and Release Center, 3855 S. John Young Parkway. The online list shows charges and bond amount, and it updates every 30 minutes, so give it time. For questions, call Inmate Records at 407-836-3400 and press 5.",
          source: `${OCC_SOURCE}, Current Inmate Database and First Appearance; Orange County Sheriff's Office, FAQ`,
          link: { href: "https://netapps.ocfl.net/BestJail/Home/Inmates", label: "Current Inmate Database (Orange County Corrections)", external: true },
        },
        {
          title: "Find out if there was a notice to appear",
          body: "Not everyone goes to jail. For most non-violent misdemeanors, criminal traffic charges, and ordinance violations, the order says to release you at the scene with a notice to appear. Domestic violence and sex crime charges are left out. The officer can still book you for listed reasons, such as having no address to verify, or living outside Orange County and the counties that border it.",
          source: "Ninth Circuit Administrative Order 2022-02-03",
        },
        {
          title: "Pay bond the way the jail accepts it",
          body: "Check the table below first, because some charges cannot bond out until a judge rules. In person, you can post bond at the Booking and Release Center at any hour. Bring ID and a money order, travelers check, or certified or cashier's check made out to Clerk of the Courts. It takes no cash and no personal checks.",
          source: `${OCC_SOURCE}, Bonding Out and Facilities; Orange County Clerk of Courts, Bond Information`,
          link: { href: "https://netapps.ocfl.net/BestJail/Home/BondingOut", label: "Bonding Out (Orange County Corrections)", external: true },
        },
        {
          title: "Know your other two bond options",
          body: "A bonding company of your choice can post bond, usually for a fee. The jail will not recommend one, and it warns of active scams, so check any company that contacts you first. The jail says it will not call you about bond. You can also wire the exact amount by Western Union with the code ORLFLJAILCLERK, but that may take 24 to 50 hours to clear.",
          source: `${OCC_SOURCE}, Bonding Out`,
        },
        {
          title: "Expect a wait after paying",
          body: "The jail says the bond process can take up to 12 hours. No one is released from about 5 to 7:30 in the morning, or from about 5 to 7:30 in the evening. To take a call from someone inside, you must set up a phone account first, and that can take up to 24 hours.",
          source: `${OCC_SOURCE}, Bonding Out and Inmate Phone Info`,
        },
        {
          title: "Say nothing about what happened",
          body: "No one has to explain anything to officers or detectives. If you are family, do not ask for the story, and do not repeat what you hear. Save that talk for a lawyer.",
        },
        {
          title: "Get ready for first appearance",
          body: "Most people booked on a new charge see a judge within 24 hours unless they are released first. Weekday sessions are at 9 a.m. and 1 p.m., and the names are posted at 4:30 a.m. Weekends and court holidays have one session, at 11 a.m. On weekdays, family can watch from the public galleries, reached through the lobby.",
          source: `Fla. R. Crim. P. 3.130(a); ${OCC_SOURCE}, First Appearance`,
          link: { href: "https://netapps.ocfl.net/BestJail/Home/FirstAppearance", label: "First Appearance List (Orange County Corrections)", external: true },
        },
      ],
    },
    bond: ORANGE_BOND,
    facts: {
      heading: "How an Orlando case gets to a courtroom.",
      intro:
        "Orange County has no last-name table and no boundary line that sorts cases. The Clerk's system assigns your judge when the case is filed. What decides your courtroom is the level of the charge.",
      items: [
        {
          title: "Who made the arrest",
          body: "City officers usually make arrests inside Orlando city limits. Police headquarters is at 1250 West South Street, and the non-emergency line is 321-235-5300. Deputies usually handle unincorporated Orange County, at 407-836-4357. Both take people to the same jail.",
          source: "City of Orlando, Orlando Police Department; Orange County Sheriff's Office, Contact Us and File Police Report",
        },
        {
          title: "Felonies",
          body: "A felony is a circuit court case. The Clerk processes felonies at the Orange County Courthouse, 425 N. Orange Avenue, and the court lists its circuit criminal judges there. The Clerk assigns a judge on an even basis, and that judge normally keeps the case to the end.",
          source: "Orange County Clerk of Courts, Criminal Court; Ninth Circuit, Criminal Court and judge directory; Ninth Circuit Administrative Orders 2024-08-01 and 2025-13-09",
        },
        {
          title: "Misdemeanors and criminal traffic",
          body: "These are county court cases, and they are assigned at random across the county criminal judges. Do not assume the case will be downtown. The court also has divisions in Ocoee, Apopka, and Winter Park, and the Clerk says your paperwork names the arraignment location.",
          source: "Ninth Circuit Administrative Orders 2009-06-01 and 2025-13-09; Orange County Clerk of Courts, Criminal Court",
        },
        {
          title: "Domestic violence",
          body: "On weekdays, the morning session at the jail takes felony and misdemeanor domestic violence cases first. If you are released, you must avoid any contact with the alleged victim.",
          source: "Ninth Circuit Administrative Orders 2003-39-34 and 2022-03-04",
        },
        {
          title: "Pretrial release through Corrections",
          body: "Corrections runs a supervised release program, and it reviews some people before first appearance. It looks at non-violent misdemeanors, criminal traffic charges, and ordinance violations. You must live or own real property in Florida, you cannot already be on bail or probation, and domestic violence charges do not qualify. Supervision can include phone check-ins and random drug and alcohol tests.",
          source: "Ninth Circuit Administrative Order 2022-01-04",
        },
        {
          title: "Who prosecutes",
          body: "The State Attorney for the Ninth Circuit decides what to file. The order lets that office release someone without going to court, but only if it has decided not to prosecute that charge.",
          source: "Ninth Circuit Administrative Order 2003-39-34",
        },
        {
          title: "Federal charges",
          body: "Federal cases are separate, and Orlando's do not go to Tampa. The court names the George C. Young Federal Annex Courthouse, 401 West Central Boulevard, as its Orlando Division courthouse. The clerk is at 407-835-4200. Our federal pages are written around Tampa, so use this address instead of theirs.",
          source: "U.S. District Court, Middle District of Florida, Orlando",
        },
      ],
    },
    timeline: ORANGE_TIMELINE,
    charges: {
      heading: "Charges we defend, and Orange County's bond for each.",
      intro: "Each link opens our full page on the charge, which explains the Florida law and penalties. Those pages are written around Hillsborough County courts, so your court details are on this page.",
      items: [
        {
          href: "/criminal-defense/state/dui",
          title: "DUI",
          body: "You face two cases, one on the charge and one on your license. You have 10 days from the notice of suspension to act on the license. Bond for a first offense starts at $500.",
        },
        {
          href: "/criminal-defense/state/grand-theft",
          title: "Grand theft",
          body: "From $300 up to $20,000, the schedule sets $2,500. At $20,000 or more, only a judge can set bond, so the value claimed can decide whether you get out tonight.",
        },
        {
          href: "/criminal-defense/state/battery",
          title: "Battery",
          body: "A simple battery is $1,000 on the schedule. If it is tied to domestic violence, or it is a felony battery, you wait for a judge.",
        },
        {
          href: "/criminal-defense/state/drug-possession",
          title: "Drug possession",
          body: "Under 20 grams of cannabis is $500, and over 20 grams up to 25 pounds is $2,500. Most trafficking amounts wait for a judge, and some carry no bond.",
        },
        {
          href: "/criminal-defense/state/gun-crimes",
          title: "Gun crimes",
          body: "Carrying a concealed firearm is $2,500. A felon charged with having a gun waits for a judge, and so does anyone charged with aggravated assault with a firearm.",
        },
        {
          href: "/criminal-defense/state/domestic-violence",
          title: "Domestic violence",
          body: "The schedule gives no amount for these charges. You stay in custody until a judge decides release, even when the same charge would otherwise be on the schedule.",
        },
      ],
    },
    practices: {
      heading: "Other pages that may help with an Orange County case.",
      intro: "The federal and white-collar pages are general, so use the courthouse details above with them.",
      items: [
        {
          href: FEDERAL,
          title: "Federal criminal defense",
          body: "Federal charges and investigations. The law is the same across the district, but the page describes the Tampa courthouse, not Orlando's.",
        },
        {
          href: WHITE_COLLAR,
          title: "White-collar defense",
          body: "Fraud and financial cases, state or federal, from the first subpoena or agent visit.",
        },
        {
          href: INJURY_HUB,
          title: "Personal injury in Orlando",
          body: "Crash reports, deadlines, and where a claim is filed in Orange County.",
        },
        {
          href: "/locations/orlando",
          title: "Orlando overview",
          body: "Every office that touches a case from Orlando, from arrest to courthouse.",
        },
      ],
    },
    faq: [
      {
        question: "Can bond be lowered after first appearance?",
        answer: "You can ask. A bond motion after first appearance goes to the judge assigned to the case. If that judge cannot hear a first bond motion within 5 business days, you may ask the alternate judge or the chief judge. The clock starts once the motion is filed and notice is given.",
      },
      {
        question: "I do not live in Florida. What changes for me?",
        answer: "Bond doubles under the schedule. An officer may also book you instead of giving you a notice to appear, because you live outside Orange County and its bordering counties. The pretrial release program requires you to live or own real property in Florida.",
      },
      {
        question: "What if I miss a court date on a notice to appear?",
        answer: "The order calls for a warrant, and it sets the minimum bond on that warrant at $2,000. Missing court while on bail is also one of the things that keeps you in custody until first appearance.",
      },
      {
        question: "What if the arrest was on a warrant?",
        answer: "A warrant may list a bond. But the charges in the list above are held for first appearance even if it does. For other Orange County warrants, you can turn yourself in at the jail lobby with a bondsman or money order, on weekdays from 8 a.m. to 2 p.m. That expedited booking costs a $20 money order.",
      },
      {
        question: "What if the warrant is from another county?",
        answer: "If it is the only thing holding you, the other county has a set time to come get you. It is 24 hours from first appearance for a bordering Florida county and 72 hours for other Florida counties, not counting weekends and holidays. If that time passes with no extension, a first appearance judge sets bond or other release, with exceptions for some probation holds.",
      },
      {
        question: "How do I find a court date?",
        answer: "The Clerk's free my eClerk site has a Court Dates search at myeclerk.myorangeclerk.com. A name search needs both first and last name, and the results give the date and location. Dates can change at the last minute, and the Clerk's free E-Notify service sends reminders by text or email.",
      },
    ],
    office: {
      heading: "We work from Brandon, in Hillsborough County.",
      body: [
        "The firm has one office, at 745 W Lumsden Rd in Brandon, and it is not in Orange County. There is no office of ours in Orlando.",
        "Orange County is one of the counties where we take cases. Brandon is a long drive from the jail, so please call rather than come by. The phone is answered at all hours, every day.",
      ],
    },
    cta: {
      heading: "Call before the next first appearance session.",
      body: "If someone is at the Booking and Release Center now, call with their name and the charge. The call is confidential and answered 24/7 by our office in Brandon.",
    },
  },

  // Injury hub.
  {
    slug: "personal-injury",
    kind: "hub",
    hubType: "injury",
    parent: "orlando",
    place: "Orlando",
    county: "Orange County",
    linkLabel: "Personal injury in Orlando",
    published: true,
    indexable: false,
    metaTitle: "Orlando Personal Injury Claims | Hines McCarty Pavlidis",
    metaDescription:
      "After an Orlando crash: who takes the report, how to get a copy, your deadlines, and where a claim is filed. Our only office is in Brandon. 813-738-8650.",
    h1: "Hurt in an Orlando crash: the report, the deadlines, the court.",
    lead: [
      "A crash in Orlando can be handled by city police, a Sheriff's deputy, or the state, so note who came. This page covers what to do first, how to get that report, which deadlines apply, and where a claim would be filed in Orange County.",
      "Our office is in Brandon, and we take injury claims from Orange County there.",
    ],
    firstSteps: {
      heading: "After a crash in Orlando, do these first.",
      intro: "The first deadline starts the day of the crash, so do not wait to see how you feel.",
      items: [
        {
          title: "Call 911",
          body: "Your call gets routed to the right agency. An officer must take a report if anyone is hurt or killed, if a driver leaves, or if a driver seems impaired. The same goes when a wrecker has to tow a vehicle, or when a commercial vehicle is involved.",
          source: "Orange County Sheriff's Office, Report A Crash",
        },
        {
          title: "See a doctor within 14 days",
          body: "Your own insurance covers your first medical bills only if your first care comes within 14 days of the crash. Go even if the pain seems small.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Write down the case number",
          body: "Ask the officer which agency took the crash, and keep the case number. You need it, along with the crash date and a driver's name, to request the report.",
          source: "City of Orlando, Request a Traffic Crash Report",
        },
        {
          title: "Buy the report once it posts",
          body: "Crash reports are sold through the state's online portal for $10, plus a $2 fee per order. Orlando police say to allow 3 to 5 business days, and the state says up to 10 days. Download it within 48 hours of paying.",
          source: "City of Orlando, Request a Traffic Crash Report; FLHSMV, Traffic Crash Reports; Orange County Sheriff's Office, Report A Crash",
          link: { href: "https://www.flhsmv.gov/traffic-crash-reports/", label: "Traffic Crash Reports (FLHSMV)", external: true },
        },
        {
          title: "Watch what you tell an insurer",
          body: "Fault can reduce a claim or end it, so how you describe the crash matters. Talk to a lawyer before you give an insurer your account.",
        },
      ],
    },
    facts: {
      heading: "Who writes the report, and where a claim goes.",
      intro: "Orange County has several agencies on the road and one Clerk for the courts. Here is how to find each piece.",
      items: [
        {
          title: "Who investigates",
          body: "Inside the city, it is usually Orlando police, at 321-235-5300 for non-emergencies. Outside it, a Sheriff's deputy or the Florida Highway Patrol may respond. The Sheriff's online form sends crash questions to the Highway Patrol, so ask at the scene. Orlando addresses can fall outside the city, and the city has a map to check yours.",
          source: "City of Orlando, Check Your Address and Contact the Orlando Police Department; Orange County Sheriff's Office, Report A Crash and File Police Report",
        },
        {
          title: "Who can get the report",
          body: "Crash reports are closed to the general public, with an exception for people in the crash and others the law names. For a city report, the police say you must be a driver or be named as someone involved. That route covers city crashes since 2011.",
          source: "FLHSMV, Traffic Crash Reports; City of Orlando, Request a Traffic Crash Report",
        },
        {
          title: "Which county a suit is filed in",
          body: "A suit generally belongs in the county where the defendant lives or where the claim arose. So a crash in Orlando can be filed in Orange County, even if you live elsewhere. Different rules apply to a defendant who lives out of state.",
          source: "F.S. 47.011",
        },
        {
          title: "Which court, by amount",
          body: "Claims over $50,000 go to circuit court. County court takes $50,000 or less, and small claims is $8,000 or less. The Clerk's Civil Division is at 425 N. Orange Avenue, Suite 350, and its number is 407-836-2000.",
          source: "Ninth Circuit, Civil Court; Orange County Clerk of Courts, Civil Court and Small Claims",
        },
        {
          title: "The schedule the court sets",
          body: "Within 3 business days of a new circuit filing, the court enters a schedule, and it says the dates are strictly enforced. On the usual jury track, the defendant must be served within 120 days, with 30 more added automatically. After that, a defendant not yet served is dropped from the case. Mediation must be finished before the pretrial conference.",
          source: "Ninth Circuit Administrative Order 2021-04-07",
        },
        {
          title: "How to look up a case",
          body: "The Clerk's my eClerk site gives free access to many records at myeclerk.myorangeclerk.com. Documents go back to 2009 for most case types. You can also search it for hearing dates.",
          source: "Orange County Clerk of Courts, Court Records and Hearing Schedule",
        },
      ],
    },
    injury: {
      heading: "The rules that decide what you can recover.",
      intro: "These are Florida law, so they apply the same in Orange County as anywhere else in the state.",
      items: [
        {
          title: "14 days to first care",
          body: "Miss this date and your own insurance may not pay for that care. The clock starts on the day of the crash.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Two years to file",
          body: "A negligence claim from a crash after 24 March 2023 must be filed within two years.",
          source: "F.S. 95.11",
        },
        {
          title: "The 50 percent rule",
          body: "If you are found more than 50 percent at fault for your own harm, you recover nothing from the other driver.",
          source: "F.S. 768.81",
        },
      ],
      links: [
        { href: "/personal-injury/car-accidents", label: "Car accident claims" },
        { href: "/personal-injury/truck-accidents", label: "Truck accident claims" },
      ],
    },
    practices: {
      heading: "More on crash claims and Orange County cases.",
      intro: "Our injury pages explain the Florida law in more depth. The Orlando pages cover the local offices.",
      items: [
        {
          href: "/personal-injury",
          title: "Personal injury",
          body: "Car and truck crash claims for people hurt by someone else's carelessness.",
        },
        {
          href: CRIMINAL_HUB,
          title: "Criminal defense in Orlando",
          body: "If the crash also led to a charge, such as DUI or leaving the scene, start here.",
        },
        {
          href: "/locations/orlando",
          title: "Orlando overview",
          body: "How arrests, federal charges, and lawsuits from Orlando move through Orange County.",
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
        question: "Does it matter if I was only visiting Orlando?",
        answer: "It can. Where you live does not stop you from filing in the county where the crash happened. Which insurance pays first, and how your home state's rules fit in, is worth asking about on a call.",
      },
      {
        question: "My dispute is with my own insurer over medical bills. Is that the same court?",
        answer: "Often not. The circuit says claims against your own insurer for personal injury protection benefits are routinely filed in county court, in small claims. It has a separate order for how those cases run.",
      },
      {
        question: "What if nobody was hurt and the cars still drive?",
        answer: "A report by an officer may not be required. You can use the state's driver self-report form if no one was hurt, both cars can drive, damage is minimal, and no driver seems impaired. If pain shows up later, the 14-day clock still counts from the crash.",
      },
      {
        question: "Is your firm in Orlando?",
        answer: "No. Our only office is in Brandon, in Hillsborough County. Orange County is one of the counties where we take cases, and you can start with a phone call.",
      },
    ],
    office: {
      heading: "Our one office is in Brandon.",
      body: [
        "You can reach us at 745 W Lumsden Rd in Brandon, which is in Hillsborough County. The firm has no office in Orlando, and none in Orange County.",
        "Since Brandon is a long drive from Orlando, start with a call. We pick up 24 hours a day, 7 days a week.",
      ],
    },
    cta: {
      heading: "Hurt in Orlando? Talk to us by phone.",
      body: "Tell us when and where the crash happened, and which agency came. Calls are confidential and answered around the clock from our office in Brandon.",
    },
  },
];
