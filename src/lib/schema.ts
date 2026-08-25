import {
  type Attorney,
  type ChargePage,
  type Crumb,
  type FaqItem,
  capabilities,
  chargeHref,
  firm,
  primaryOffice,
  publishedOffices,
  serviceAreas,
  siloByKey,
  siteUrl,
} from "./site";

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
export const chargeJsonLd = (charge: ChargePage) => {
  const url = `${siteUrl}${chargeHref(charge)}`;
  const silo = siloByKey(charge.silo);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: charge.title ?? charge.label,
    url,
    ...(charge.metaDescription ? { description: charge.metaDescription } : {}),
    ...(charge.owner
      ? { author: { "@type": "Person", name: charge.owner } }
      : {}),
    ...(charge.lastReviewed ? { dateModified: charge.lastReviewed } : {}),
    publisher: organizationJsonLd(),
    ...(silo ? { about: silo.label } : {}),
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
