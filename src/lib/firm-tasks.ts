/**
 * The firm's to-do list for listings, links and reviews (D127), shown at the
 * unlisted /hmp-tasks-k7x2. Research 2026-10-13; see docs/seo/.
 */
export type Task = { id: string; title: string; note?: string; links?: [string, string][] };
export type TaskGroup = { id: string; title: string; items: Task[] };

const BAR: [string, string] = ["Florida Bar login", "https://member.floridabar.org/"];
const MARTINDALE: [string, string] = ["Update form", "https://www.martindale.com/update-profile/"];
const LINKEDIN: [string, string] = ["Your LinkedIn", "https://www.linkedin.com/in/me/"];
const linkedin = (id: string): Task => ({ id, title: "LinkedIn: add Hines McCarty Pavlidis as your current job", note: "Once the firm's company page exists, pick it from the list so the logo shows.", links: [LINKEDIN] });
const martindale = (id: string): Task => ({ id, title: "Martindale: add the firm, Brandon address, phone and website", note: "Lawyers.com shares this profile, so it updates both.", links: [MARTINDALE] });
const JUSTIA: [string, string] = ["Justia: get listed", "https://lawyers.justia.com/lawyer-directory-listings"];
export const FIRM_TASKS: TaskGroup[] = [
  { id: "lily", title: "Lily", items: [
    { id: "l-bar", title: "Florida Bar: add the firm name and website", links: [BAR] },
    { id: "l-avvo", title: "Avvo: change your firm and address (keep your 25 reviews)", links: [["Your Avvo", "https://www.avvo.com/attorneys/33602-fl-lily-mccarty-1272927.html"]] },
    { id: "l-justia", title: "Justia: create your free profile", links: [JUSTIA] },
    martindale("l-martindale"),
    linkedin("l-linkedin"),
    { id: "l-hcacdl", title: "HCACDL: ask the board if member listings can link to websites", links: [["HCACDL members", "https://www.hcacdl.org/member-directory/"]] },
    { id: "l-check", title: "Check: Google your name; fix any profile showing an old firm, a Tampa address or another phone", links: [["Search your name", "https://www.google.com/search?q=%22Lily+McCarty%22+attorney"], ["Your Bar profile", "https://www.floridabar.org/directories/find-mbr/profile/?num=729701"]] },
  ]},
  { id: "maria", title: "Maria", items: [
    { id: "m-bar", title: "Florida Bar: change Tampa to the Brandon address, phone and firm name", links: [BAR] },
    { id: "m-pavlidis", title: "Close the old Pavlidis Law Google listing and point pavlidislawfirm.com to the new site", links: [["Google Business Profile", "https://business.google.com/"]] },
    { id: "m-avvo", title: "Avvo: update your profile with the new firm, Brandon address, phone and website", links: [["Your Avvo", "https://www.avvo.com/attorneys/33602-fl-maria-pavlidis-1272809.html"]] },
    { id: "m-lawyerscom", title: "Lawyers.com: update your whole profile (firm, Brandon address, phone, website, practice areas, photo)", note: "Lawyers.com and Martindale share one profile, so this form updates both.", links: [["Update form", "https://www.martindale.com/update-profile/"]] },
    { id: "m-experience", title: "Experience.com: update or remove the old Pavlidis Law profile", note: "It still shows Pavlidis Law and (813) 272-2200.", links: [["Your profile", "https://www.experience.com/reviews/maria-7932190"]] },
    { id: "m-justia", title: "Justia: create your free profile", links: [JUSTIA] },
    linkedin("m-linkedin"),
    { id: "m-check", title: "Check: Google your name; fix any profile showing an old firm, a Tampa address or another phone", links: [["Search your name", "https://www.google.com/search?q=%22Maria+Pavlidis%22+attorney"], ["Your Bar profile", "https://www.floridabar.org/directories/find-mbr/profile/?num=684341"]] },
  ]},
  { id: "david", title: "David", items: [
    { id: "d-bar", title: "Florida Bar: update the firm name, add the website", links: [BAR] },
    { id: "d-avvo", title: "Avvo: update your profile with the new firm name, phone and website", links: [["Your Avvo", "https://www.avvo.com/attorneys/33511-fl-david-hines-5288849.html"]] },
    martindale("d-martindale"),
    { id: "d-justia", title: "Justia: create your free profile", links: [JUSTIA] },
    linkedin("d-linkedin"),
    { id: "d-check", title: "Check: Google your name; fix any profile showing an old firm, a Tampa address or another phone", links: [["Search your name", "https://www.google.com/search?q=%22David+Hines%22+attorney"], ["Your Bar profile", "https://www.floridabar.org/directories/find-mbr/profile/?num=1038894"]] },
  ]},
  { id: "colton", title: "Colton", items: [
    { id: "c-bar", title: "Florida Bar: add the firm name, main phone and website", links: [BAR] },
    { id: "c-duidla", title: "DUIDLA: add the website to your member profile", links: [["DUIDLA", "https://duidla.org/directory/"]] },
    { id: "c-justia", title: "Justia: change Rhino Lawyers to the new firm", links: [["Your Justia", "https://lawyers.justia.com/lawyer/colton-trina-1812075"]] },
    { id: "c-avvo", title: "Avvo: update your profile with the new firm, address, phone and website", links: [["Find your Avvo", "https://www.avvo.com/search/lawyer_search?q=Colton+Trina&loc=Brandon%2C+FL"]] },
    martindale("c-martindale"),
    linkedin("c-linkedin"),
    { id: "c-check", title: "Check: Google your name; fix any profile showing an old firm, a Tampa address or another phone", links: [["Search your name", "https://www.google.com/search?q=%22Colton+Trina%22+attorney"], ["Your Bar profile", "https://www.floridabar.org/directories/find-mbr/profile/?num=1057615"]] },
  ]},
  { id: "office", title: "Office", items: [
    { id: "o-name", title: "Confirm the exact firm name with the Florida Bar", links: [["Sunbiz", "https://search.sunbiz.org/"]] },
    { id: "o-google", title: "Google: rename the listing, add categories and photos", links: [["Google Business Profile", "https://business.google.com/"]] },
    { id: "o-apple", title: "Apple Maps: claim the listing", links: [["Apple Business Connect", "https://business.apple.com/"]] },
    { id: "o-facebook", title: "Facebook: use the new name on the page", links: [["Facebook page", "https://www.facebook.com/547898668412988"]] },
    { id: "o-linkedin", title: "LinkedIn: create a company page", links: [["Create", "https://www.linkedin.com/company/setup/new/"]] },
    { id: "o-yelp", title: "Yelp: claim or add the firm", links: [["Yelp", "https://biz.yelp.com/claim"]] },
    { id: "o-bbb", title: "BBB: add or claim the free business profile (skip paid accreditation)", links: [["Get listed", "https://www.bbb.org/get-listed"]] },
    { id: "o-findlaw", title: "FindLaw: fix or remove the old McCarty Gonzalez & Pavlidis listing (the free listing has no website link; don't pay for one)", links: [["The listing", "https://lawyers.findlaw.com/florida/tampa/4871907_1/"], ["How to claim", "https://profileupdate.findlaw.com/help/finding-and-claiming-a-profile/"]] },
    { id: "o-chamber", title: "Chamber: update the member listing. Call (813) 234-5944", note: "It still says \"The Hines Law Firm\" and links to hines-lawfirm.com. Ask for the new name and tampa-litigation.com.", links: [["The listing", "https://web.centralhillsboroughchamber.com/Attorney/The-Hines-Law-Firm-5443"]] },
    { id: "o-featured", title: "Featured.com: sign one attorney up (free)", note: "Reporters post questions; you answer in a few sentences. If they use the answer, the article quotes the attorney and links to the website. Free for 3 answers a month.", links: [["Sign up", "https://featured.com/signup"]] },
    { id: "o-qwoted", title: "Qwoted: sign one attorney up (free)", note: "Same idea as Featured: reporters ask for expert sources and you pitch a short answer. The free plan has a few pitches a month.", links: [["Sign up", "https://app.qwoted.com/users/sign_up"]] },
    { id: "o-check-search", title: "Check: Google the old names and the phone number; fix anything with old details", links: [["Hines & McCarty", "https://www.google.com/search?q=%22Hines+&+McCarty%22"], ["The Hines Law Firm", "https://www.google.com/search?q=%22The+Hines+Law+Firm%22+Brandon"], ["Hines McCarty Pavlidis", "https://www.google.com/search?q=%22Hines+McCarty+Pavlidis%22"], ["(813) 738-8650", "https://www.google.com/search?q=%22813-738-8650%22"]] },
    { id: "o-check-gmaps", title: "Check: on your phone, find the firm in Google Maps and confirm name, address, 24/7 hours, phone, website and categories", links: [["Google Maps", "https://www.google.com/maps/search/Hines+McCarty+Pavlidis+Brandon+FL"]] },
    { id: "o-check-apple-bing", title: "Check: find the firm in Apple Maps and Bing Maps and confirm the same details", links: [["Bing Maps", "https://www.bing.com/maps?q=Hines+McCarty+Pavlidis+Brandon+FL"]] },
    { id: "o-check-directories", title: "Check: search Yelp, BBB, Yellow Pages, Manta and Nextdoor for the firm; claim and correct any listing that exists", links: [["Yelp", "https://www.yelp.com/search?find_desc=Hines+McCarty&find_loc=Brandon%2C+FL"], ["BBB", "https://www.bbb.org/search?find_text=Hines%20McCarty&find_loc=Brandon%2C%20FL"], ["Yellow Pages", "https://www.yellowpages.com/search?search_terms=Hines+McCarty&geo_location_terms=Brandon%2C+FL"], ["Manta", "https://www.manta.com/search?search=Hines+McCarty+Brandon+FL"]] },
    { id: "o-check-social", title: "Check: confirm name, address, phone and website on Facebook and LinkedIn" },
  ]},
];

/**
 * D144: suggestions, not tasks. Shown below the to-do list as optional, with
 * no checkbox and outside the progress count. Researched 2026-11-02.
 */
export type Recommendation = { title: string; note: string; links?: [string, string][] };

export const RECOMMENDED: Recommendation[] = [
  { title: "Martindale peer review rating (AV Preeminent)", note: "Free. Peers rate the attorney; no subscription needed.", links: [["How it works", "https://www.martindale.com/marketyourfirm/profiles/peer-ratings"]] },
  { title: "Super Lawyers, Rising Stars and Best Lawyers", note: "Free, peer-selected. Accept the selection; skip their paid profiles and badges.", links: [["Super Lawyers", "https://www.superlawyers.com/for-lawyers/attorney-profile-comparison/"]] },
  { title: "Florida Trend Legal Elite", note: "Free. Voted by Florida Bar members." , links: [["Florida Trend", "https://www.floridatrend.com/"]] },
  { title: "Justia Connect Pro ($19.99/mo)", note: "Removes competitors' ads from your profiles. Call the Florida Bar Ethics Hotline first: 800-235-8619.", links: [["Justia Pro", "https://connect.justia.com/pro"]] },
  { title: "Sponsor a local youth team (Valrico Rams, from $500)", note: "Mostly local goodwill; one link is a small SEO boost. Bronze is $500. Before paying, confirm the Bronze level gets a logo that links to the website. Email sponsorship@valricorams.org.", links: [["Valrico Rams", "https://www.valricorams.com/"]] },
  { title: "Tell your law school about the new firm", note: "Free. Usually a line in the alumni magazine, rarely a website link, so the value is classmates who refer cases. FSU (Lily): online form. Stetson (David): alumni@law.stetson.edu. SIU (Colton): law@siu.edu.", links: [["FSU class note", "https://law.fsu.edu/alumni/submit-class-note"]] },
  { title: "Tampa Bay Chamber ($590/yr)", note: "Business-litigation referrals. The Brandon Riverview Chamber the firm is already in matters more.", links: [["Join", "https://www.tampabaychamber.com/forms/join-the-chamber/"]] },
  { title: "Avvo Advertising (about $100/mo and up)", note: "Only as a tracked test for criminal and injury leads. Report it to the Florida Bar within 15 days of starting (Rule 4-7.22).", links: [["Bar reporting form", "https://www.floridabar.org/ethics/etad/participation-with-qualifying-provider-reporting/"]] },
  { title: "Skip these", note: "America's Top 100 (can't be advertised in Florida), National Trial Lawyers Top 100, paid Super Lawyers or Best Lawyers profiles, FindLaw, LawInfo or Lawyers.com premium, Lawyer.com, Expertise.com featured spots, link packages and sponsored articles." },
];

