import { MetadataRoute } from "next";
import {
  attorneys,
  charges,
  chargeHref,
  guides,
  guideHref,
  injuryHref,
  injuryIsIndexable,
  injuryPages,
  silos,
  siteUrl,
} from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: siteUrl, changeFrequency: "weekly" as const, priority: 1.0 },
    {
      url: `${siteUrl}/attorneys`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    // Placeholder bios are excluded until the client supplies their content.
    // They are also set to noindex in generateMetadata, because submitting a
    // page full of [NEEDS] markers costs E-E-A-T rather than building it.
    ...attorneys
      .filter((a) => a.confirmed)
      .map((a) => ({
        url: `${siteUrl}/attorneys/${a.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),

    // Charge pages and silo hubs, wired here and gated on `published` for the
    // same reason the bios are gated on `confirmed`.
    //
    // The gate is the point. Both routes set `noindex: !published`, so an
    // unpublished page listed here would ask Google to crawl it and then tell
    // it not to index what it found. Listing them only once `published` flips
    // keeps the two signals saying the same thing, and flipping that one flag
    // after the attorney read puts them in without another code change.
    ...silos
      .filter((s) => s.published)
      .map((s) => ({
        url: `${siteUrl}${s.href}`,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
    ...charges
      .filter((c) => c.published)
      .map((c) => ({
        url: `${siteUrl}${chargeHref(c)}`,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
    // Published guides only, same rule as the charge pages: asking Google to
    // crawl a page and then telling it not to index what it found is the
    // mismatch the comment above this file's charge filter warns about.
    ...guides
      .filter((g) => g.published)
      .map((g) => ({
        url: `${siteUrl}${guideHref(g)}`,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
    // The injury practice, gated on `injuryIsIndexable` rather than on
    // `published` alone. Those pages are all published and all noindex,
    // because indexing them additionally waits on the attorney review, so
    // filtering on `published` here would list nine pages that tell Google not
    // to index them. The predicate lives in site.ts and the route reads the
    // same one, so the two cannot drift.
    //
    // This contributes nothing today. That is the correct state: the practice
    // enters the sitemap when a named attorney has read it.
    ...(injuryPages.some(injuryIsIndexable)
      ? [
          {
            url: `${siteUrl}/personal-injury`,
            changeFrequency: "monthly" as const,
            priority: 0.8,
          },
        ]
      : []),
    ...injuryPages.filter(injuryIsIndexable).map((p) => ({
      url: `${siteUrl}${injuryHref(p)}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return pages.map((page) => ({ ...page, lastModified: new Date() }));
}
