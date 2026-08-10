import { MetadataRoute } from "next";
import { attorneys, siteUrl } from "@/lib/site";

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
  ];

  return pages.map((page) => ({ ...page, lastModified: new Date() }));
}
