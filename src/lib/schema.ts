import {
  type Attorney,
  type ChargePage,
  type GuidePage,
  type InjuryPage,
  type Crumb,
  type FaqItem,
  capabilities,
  chargeHref,
  guideHref,
  injuryHref,
  firm,
  primaryOffice,
  publishedOffices,
  serviceAreas,
  siloByKey,
  siteUrl,
} from "./site";
import { resolveStatuteRefs } from "./statute-links.ts";

/** Stable @id for the firm entity, referenced by every attorney's worksFor. */
export const organizationId = `${siteUrl}/#organization`;

const postalAddress = (office: (typeof publishedOffices)[number]) => ({
  "@type": "PostalAddress",
  ...(office.street ? { streetAddress: office.street } : {}),
  addressLocality: office.city,
  addressRegion: office.state,
  ...(office.zip ? { postalCode: office.zip } : {}),
  addressCountry: "US",
});

/**
 * The LegalService entity. Only published offices appear, so Tampa is absent
 * until a real address exists (docs/research/avoid.md item 33).
 *
 * `areaServed` carries the cities from the locations section as City entities
 * rather than one loose string. Areas served is a different claim from
 * `address`: address is where the firm has a bona fide office, and only
 * Brandon qualifies. Naming a city here does not assert an office in it, which
 * is exactly why the two are separate properties.
 */
export const organizationJsonLd = () => ({
  "@type": "LegalService",
  "@id": organizationId,
  name: firm.legalName,
  url: siteUrl,
  telephone: firm.phone,
  address: publishedOffices.map(postalAddress),
  areaServed: [
    firm.serviceArea,
    ...serviceAreas.map((area) => ({
      "@type": "City",
      name: `${area.label}, FL`,
    })),
  ],
});

/**
 * BreadcrumbList, built from the same trail the page renders visibly.
 *
 * Emitted only by pages that show a breadcrumb. A trail in the markup that the
 * page does not display is the mismatch this was written to fix, so top-level
 * hubs emit nothing rather than a two-item trail nobody sees.
 *
 * The final crumb carries no `item`: it is the current page, which Google
 * permits and which keeps this honest about what is a link and what is not.
 */
export const breadcrumbJsonLd = (trail: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    ...(crumb.href ? { item: `${siteUrl}${crumb.href}` } : {}),
  })),
});

/**
 * FAQPage markup. Returns null when a page has no FAQ, so an empty block never
 * emits hollow structured data.
 *
 * Value here is entity signaling, not rich results: Google deprecated FAQ
 * display for most sites in 2023 (content-gaps.md cross-topic finding 2).
 */
export const faqJsonLd = (items: FaqItem[] | undefined) => {
  // Answered items only. A Question with no acceptedAnswer is invalid markup,
  // and emitting one to look complete is exactly the kind of hollow structured
  // data that earns a manual action rather than a rich result.
  const answered = (items ?? []).filter(
    (item): item is FaqItem & { answer: string } => Boolean(item.answer),
  );
  if (!answered.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: answered.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
};

/**
 * Article markup for a charge page. Author and dateModified come from the
 * page's own `owner` and `lastReviewed`, so a page with no attorney review
 * emits no false authorship or freshness signal (done-criterion C11).
 */
/**
 * THE SOURCES A PAGE QUOTES, as structured citations.
 *
 * Every statutory span on this site is verbatim from a recorded table that
 * carries the URL it was fetched from, and none of that was legible to a
 * machine: the quotations rendered as prose and the schema named no sources.
 * `citation` is the property for exactly this, and it is the difference
 * between a page that asserts law and a page that shows where its law came
 * from.
 *
 * DERIVED, NEVER LISTED BY HAND. Callers pass the page's own rendered spans, so
 * a section added or removed changes the list without anyone remembering to.
 * Entries appear only for statutes this project actually recorded; a cited
 * authority nobody fetched contributes nothing rather than a guessed URL.
 *
 * SHARED BY CHARGES AND GUIDES on purpose. Two copies of this would drift, and
 * the guide templates already went a whole build emitting no Article schema at
 * all while the charge pages had one.
 */
function legislationCitations(spanCitations: string[]) {
  const seen = new Set<string>();
  return spanCitations
    .flatMap((c) => resolveStatuteRefs(c))
    .filter((r) => (seen.has(r.url) ? false : (seen.add(r.url), true)))
    .map((r) => ({ "@type": "Legislation" as const, name: r.cite, url: r.url }));
}

/**
 * Every provision a page's sections rest on: verbatim statute blocks (singular
 * and plural) and the per-section `sources` lines. D63. Citations used to come
 * from `statute` alone, so a page whose quotes sat in `statutes` (sexual
 * battery) emitted none, and every page omitted the provisions it names only in
 * its sources lines, which is most of them.
 */
function sectionCitations(sections: { statute?: { citation: string }; statutes?: { citation: string }[]; sources?: string[] }[] = []) {
  return sections.flatMap((x) => [
    ...(x.statute ? [x.statute.citation] : []),
    ...(x.statutes ?? []).map((t) => t.citation),
    ...(x.sources ?? []),
  ]);
}

export const chargeJsonLd = (charge: ChargePage) => {
  const url = `${siteUrl}${chargeHref(charge)}`;
  const silo = siloByKey(charge.silo);

  const citations = legislationCitations([
    ...(charge.statute ? [charge.statute.citation] : []),
    ...sectionCitations(charge.sections),
  ]);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: charge.title ?? charge.label,
    url,
    // The canonical page this Article is the primary content of. Without it a
    // consumer has to infer the relationship from the URL alone.
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en-US",
    ...(charge.metaDescription ? { description: charge.metaDescription } : {}),
    ...(charge.owner
      ? { author: { "@type": "Person", name: charge.owner } }
      : {}),
    ...(charge.lastReviewed ? { dateModified: charge.lastReviewed } : {}),
    ...(citations.length ? { citation: citations } : {}),
    publisher: organizationJsonLd(),
    // D63: what the page is about is the charge, not the silo it sits in.
    about: { "@type": "Thing", name: charge.label },
    ...(silo ? { isPartOf: { "@type": "WebPage", name: silo.label, url: `${siteUrl}${silo.href}` } } : {}),
  };
};

/**
 * Article markup for a guide page.
 *
 * Guides carried a BreadcrumbList and nothing else: no Article, no authorship,
 * and no citations, while between them quoting 22 statutory spans in full. They
 * are the longest-form and most citation-worthy pages on the site and they were
 * the least legible to anything reading them.
 *
 * Deliberately the same shape as `chargeJsonLd`, including the conditional
 * author and dateModified, so a guide with no attorney review emits no false
 * authorship or freshness signal (done-criterion C11). Neither guide carries an
 * owner today, so neither emits one.
 */
export const guideJsonLd = (guide: GuidePage) => {
  const url = `${siteUrl}${guideHref(guide)}`;
  const citations = legislationCitations(
    sectionCitations(guide.sections),
  );

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: guide.title ?? guide.label,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en-US",
    ...(guide.metaDescription ? { description: guide.metaDescription } : {}),
    ...(guide.owner ? { author: { "@type": "Person", name: guide.owner } } : {}),
    ...(guide.lastReviewed ? { dateModified: guide.lastReviewed } : {}),
    ...(citations.length ? { citation: citations } : {}),
    publisher: organizationJsonLd(),
  };
};

/**
 * Article markup for an injury page. Same shape as the guide and charge
 * builders, including the conditional author and dateModified, so a page with
 * no attorney review emits no false authorship (C11).
 */
export const injuryJsonLd = (page: InjuryPage) => {
  const url = `${siteUrl}${injuryHref(page)}`;
  const citations = legislationCitations(
    sectionCitations(page.sections),
  );

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: page.title,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en-US",
    ...(page.metaDescription ? { description: page.metaDescription } : {}),
    ...(page.owner ? { author: { "@type": "Person", name: page.owner } } : {}),
    ...(page.lastReviewed ? { dateModified: page.lastReviewed } : {}),
    ...(citations.length ? { citation: citations } : {}),
    publisher: organizationJsonLd(),
  };
};

/**
 * Person markup for one attorney bio.
 *
 * Every field is omitted rather than guessed. `memberOf` carries confirmed
 * memberships only, and no credential language appears absent verification
 * (Rule 4-7.14).
 */
export const attorneyJsonLd = (attorney: Attorney) => {
  const url = `${siteUrl}/attorneys/${attorney.slug}`;
  const education = attorney.credentials?.education ?? [];
  const memberships = attorney.credentials?.memberships ?? [];
  const certifications = attorney.credentials?.boardCertifications ?? [];

  const knowsAbout: string[] = [];
  for (const href of attorney.practiceAreaHrefs ?? []) {
    const title = capabilities.find((c) => c.href === href)?.title;
    if (title) knowsAbout.push(title);
  }

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}#person`,
    name: attorney.name,
    url,
    ...(attorney.role ? { jobTitle: attorney.role } : {}),
    ...(attorney.portrait ? { image: `${siteUrl}${attorney.portrait}` } : {}),
    worksFor: organizationJsonLd(),
    workLocation: postalAddress(primaryOffice),
    ...(education.length
      ? {
          alumniOf: education.map((e) => ({
            "@type": "CollegeOrUniversity",
            name: e.school,
          })),
        }
      : {}),
    ...(knowsAbout.length ? { knowsAbout } : {}),
    // Board certification as a real credential rather than a string, with The
    // Florida Bar named as the recognizing authority. This is the one credential
    // on the site issued by a body that can be checked, so it is the one worth
    // making machine-readable.
    ...(certifications.length
      ? {
          hasCredential: certifications.map((cert) => ({
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Board Certification",
            name: `Board Certified in ${cert.area}`,
            recognizedBy: { "@type": "Organization", name: "The Florida Bar" },
          })),
        }
      : {}),
    ...(memberships.length
      ? {
          memberOf: memberships.map((name) => ({
            "@type": "Organization",
            name,
          })),
        }
      : {}),
  };
};
