import {
  type Attorney,
  capabilities,
  firm,
  primaryOffice,
  publishedOffices,
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
 */
export const organizationJsonLd = () => ({
  "@type": "LegalService",
  "@id": organizationId,
  name: firm.legalName,
  url: siteUrl,
  telephone: firm.phone,
  address: publishedOffices.map(postalAddress),
  areaServed: firm.serviceArea,
});

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
