/**
 * Site search, the index half, D76. Built from the site's own data at build
 * time (src/app/search-index.json/route.ts serves it as a static file), so it
 * is never out of step with the pages and needs no outside service.
 *
 * One entry per page; one per detail topic, linking into the page with the
 * topic opened; one per common question, linking to it opened; one per
 * attorney; and the few site pages a visitor looks for by name. Pages hidden
 * at launch (D73) are left out. Published articles join automatically.
 */
import {
  articles,
  attorneys,
  chargeHref,
  charges,
  firm,
  injuryHref,
  injuryPages,
  isLiveHref,
  silos,
  type ChargeSection,
  type FaqItem,
} from "./site.ts";
import type { SearchEntry } from "./search-engine.ts";

/**
 * The words people use for each service page that the page itself may not:
 * street terms, the name on a police report, a different spelling. Search
 * aliases only; nothing here is shown or claimed on a page.
 */
const ALIASES: Record<string, string> = {
  "/criminal-defense/state/sexual-battery": "sexual assault rape forced sex consent",
  "/criminal-defense/state/drug-trafficking": "trafficking drug dealing selling drugs fentanyl cocaine heroin oxycodone pills weight mandatory minimum",
  "/criminal-defense/state/drug-possession": "possession weed marijuana pot cannabis cocaine pills paraphernalia controlled substance",
  "/criminal-defense/state/gun-crimes": "gun firearm weapon concealed carry felon in possession 10 20 life",
  "/criminal-defense/state/sex-crimes": "sex offense lewd molestation solicitation registration sex offender",
  "/criminal-defense/state/battery": "battery assault fight hitting aggravated battery",
  "/criminal-defense/state/domestic-violence": "domestic violence dv spouse partner family no contact order injunction strangulation",
  "/criminal-defense/state/computer-crimes": "computer crime hacking unauthorized access device password",
  "/criminal-defense/state/grand-theft": "theft stealing shoplifting larceny stolen property",
  "/criminal-defense/state/homicide": "murder manslaughter killing death self defense stand your ground",
  "/criminal-defense/state/dui": "dui dwi drunk driving impaired breath test refusal license suspension",
  "/criminal-defense/federal/drug-trafficking": "federal drug trafficking conspiracy distribution fentanyl cocaine",
  "/criminal-defense/federal/healthcare-fraud": "federal health care fraud medicare billing",
  "/criminal-defense/federal/wire-mail-fraud": "federal wire fraud mail fraud scheme email",
  "/criminal-defense/federal/conspiracy-charges": "federal conspiracy agreement co-defendant",
  "/criminal-defense/federal/weapons-gun-offenses": "federal gun firearm felon in possession 922g 924c",
  "/criminal-defense/federal/csam": "child pornography csam images federal",
  "/criminal-defense/federal/money-laundering": "federal money laundering",
  "/criminal-defense/federal/computer-internet-crimes": "federal computer hacking cfaa internet",
  "/criminal-defense/federal/target-letter": "target letter grand jury subpoena investigation fbi agents",
  "/criminal-defense/white-collar/corporate-fraud": "corporate fraud business fraud",
  "/criminal-defense/white-collar/healthcare-fraud": "medicaid fraud provider billing",
  "/criminal-defense/white-collar/bank-fraud": "bank fraud loan check fraud",
  "/criminal-defense/white-collar/embezzlement": "embezzlement employer stealing from work",
  "/criminal-defense/white-collar/securities-fraud": "securities fraud investment stock",
  "/criminal-defense/white-collar/wire-fraud": "wire fraud scheme to defraud communications fraud",
  "/criminal-defense/white-collar/tax-evasion": "tax evasion irs sales tax",
  "/criminal-defense/white-collar/ppp-loan-fraud": "ppp loan fraud paycheck protection pandemic covid sba",
  "/criminal-defense/white-collar/identity-theft": "identity theft stolen identity personal information",
  "/criminal-defense/white-collar/money-laundering": "money laundering florida",
  "/personal-injury/car-accidents": "car accident crash wreck collision auto pip injured",
  "/personal-injury/car-accidents/types-of-car-accidents": "rear end hit and run rideshare uber lyft drunk driver",
  "/personal-injury/car-accidents/compensation": "compensation damages lost wages medical bills settlement value",
  "/personal-injury/car-accidents/insurance-claims": "insurance claim pip uninsured underinsured um coverage",
  "/personal-injury/car-accidents/catastrophic-injuries": "catastrophic injury brain spinal wrongful death serious injury",
  "/personal-injury/truck-accidents": "truck accident 18 wheeler semi commercial vehicle crash",
  "/personal-injury/truck-accidents/semi-truck-collisions": "semi truck tractor trailer 18 wheeler jackknife underride",
  "/personal-injury/truck-accidents/fmcsa-violations": "fmcsa hours of service logs eld trucking rules",
  "/personal-injury/truck-accidents/delivery-and-box-truck": "delivery van box truck amazon fedex ups",
};

/** Statute numbers from citations, as a reader would type them. */
function statuteNumbers(cites: string[]): string {
  const out = new Set<string>();
  for (const c of cites) {
    for (const m of c.matchAll(/\b\d{2,3}\.\d{2,4}\b/g)) out.add(m[0]);
    for (const m of c.matchAll(/(\d{1,2})\s*U\.?S\.?C\.?\s*§?\s*(\d{2,5}[a-z]?)/gi)) {
      out.add(m[2]);
      out.add(`${m[1]} usc ${m[2]}`);
    }
  }
  return [...out].join(" ");
}

/** The first sentence or two, at most about 160 characters. */
function snippet(text: string | undefined): string {
  if (!text) return "";
  const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [text];
  let out = "";
  for (const s of sentences) {
    if ((out + s).length > 160 && out) break;
    out += s;
  }
  return out.trim().length > 170 ? `${out.trim().slice(0, 165).replace(/\s+\S*$/, "")}...` : out.trim();
}

/** The first words of a section's own text, for matching only. */
function firstWords(s: ChargeSection, n = 30): string {
  const text = [...(s.prose ?? []), ...(s.bullets ?? [])].join(" ");
  return text.split(/\s+/).slice(0, n).join(" ");
}

function pageEntries(
  href: string,
  name: string,
  context: string,
  lead: string | undefined,
  extra: string,
  sections: ChargeSection[],
  faq: FaqItem[] | undefined,
): SearchEntry[] {
  const out: SearchEntry[] = [];
  const cites = sections.flatMap((s) => [...(s.sources ?? []), ...(s.statutes ?? []).map((x) => x.citation), s.statute?.citation ?? ""]);
  out.push({
    u: href, t: name, c: context, s: snippet(lead), kind: "page",
    k: [ALIASES[href] ?? "", extra, statuteNumbers(cites)].join(" "),
  });
  // Detail topics: one entry per group, linking to the box (DetailsGrid ids).
  const groups = new Map<string, ChargeSection[]>();
  for (const s of sections.filter((s) => s.tier === 3 && s.group)) {
    groups.set(s.group!, [...(groups.get(s.group!) ?? []), s]);
  }
  for (const [group, secs] of groups) {
    out.push({
      u: `${href}#topic-${secs[0].id}`, t: group, c: name, kind: "topic",
      s: secs[0].groupSummary ?? secs[0].heading,
      k: [...secs.map((s) => `${s.heading} ${firstWords(s)}`), statuteNumbers(secs.flatMap((s) => s.sources ?? []))].join(" "),
    });
  }
  (faq ?? []).forEach((f, i) => {
    if (!f.answer) return;
    out.push({ u: `${href}#faq-${i}`, t: f.question, c: name, s: snippet(f.answer), k: "", kind: "question" });
  });
  return out;
}

export function buildSearchIndex(): SearchEntry[] {
  const out: SearchEntry[] = [];
  const siloLabel = new Map(silos.map((s) => [s.key, s.label]));

  for (const c of charges) {
    const href = chargeHref(c);
    if (!isLiveHref(href) || !(c.sections?.length || c.lead)) continue;
    out.push(...pageEntries(href, c.label, siloLabel.get(c.silo) ?? "Criminal defense", c.lead,
      `${c.title ?? ""} ${c.metaTitle ?? ""}`, c.sections ?? [], c.faq));
  }
  for (const p of injuryPages) {
    const href = injuryHref(p);
    out.push(...pageEntries(href, p.label, "Personal injury", p.lead,
      `${p.title} ${p.metaTitle ?? ""} ${p.description}`, p.sections ?? [], p.faq));
  }
  for (const s of silos) {
    out.push({ u: s.href, t: s.label, c: "Practice area", s: snippet(s.metaDescription), k: `${s.h1} ${s.metaTitle}`, kind: "page" });
  }
  out.push(
    { u: "/personal-injury", t: "Personal Injury", c: "Practice area", s: "Car and truck collision claims in Hillsborough County and across Tampa Bay.", k: "injury accident hurt injured claim", kind: "page" },
    { u: "/criminal-defense", t: "Criminal Defense", c: "Practice area", s: "Every state, federal and white-collar charge the firm defends, in one list.", k: "charges list all crimes criminal defense", kind: "page" },
    { u: "/attorneys", t: "Our Attorneys", c: firm.name, s: "The four attorneys and what each one concentrates on.", k: "attorneys lawyers team who", kind: "page" },
    { u: "/about", t: "About the Firm", c: firm.name, s: "Who the firm is, where it practices, and how it works a case.", k: "about firm office brandon", kind: "page" },
    { u: "/contact", t: "Contact Us", c: firm.name, s: `Call ${firm.phone} or send a confidential message.`, k: "contact call phone number consultation appointment email message talk", kind: "page" },
    { u: "/results", t: "Case Results", c: firm.name, s: "Results from the firm's cases.", k: "results outcomes verdicts", kind: "page" },
    { u: "/resources/articles", t: "Articles", c: firm.name, s: "Explainers on charges, courts and sentencing.", k: "articles blog insights", kind: "page" },
  );
  for (const a of attorneys) {
    out.push({
      u: `/attorneys/${a.slug}`, t: a.name, c: a.role ?? "Attorney", kind: "attorney",
      s: a.concentration ?? "", k: `attorney lawyer ${a.name.split(" ").join(" ")}`,
    });
  }
  for (const a of articles.filter((x) => x.published)) {
    out.push({ u: a.href, t: a.title, c: "Article", s: "", k: "", kind: "page" });
  }
  return out;
}
