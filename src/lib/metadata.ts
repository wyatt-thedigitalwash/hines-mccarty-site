import type { Metadata } from "next";
import { firm } from "./site";

/**
 * The generated share card (src/app/opengraph-image.tsx).
 *
 * Referenced explicitly because a page that defines its own `openGraph` block
 * REPLACES the file-based image Next would otherwise inherit from the root
 * segment. Without this, every page except the home page shipped with no
 * og:image at all.
 */
const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${firm.legalName}, criminal defense in ${firm.serviceArea}`,
};

/**
 * One builder for every page's metadata.
 *
 * Exists so canonical URLs and Open Graph tags cannot be forgotten on a page,
 * which is what happened across all 40-odd routes before this: no
 * `metadataBase`, so no canonicals anywhere, and no OG tags at all. With 29
 * charge pages and overlapping fraud topics, missing canonicals are a real
 * duplicate-content exposure rather than a nicety.
 *
 * `path` is site-relative and becomes both the canonical and the OG URL.
 * Because the root layout sets `metadataBase`, Next resolves these to absolute
 * URLs against the configured origin, so a domain change is one env var.
 */
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  /** Full title. Bypasses the layout's template, so write it complete. */
  title: string;
  description: string;
  path: string;
  /**
   * Draft or unwritten pages. They stay crawlable (follow) so internal links
   * still pass, but out of the index until they have content.
   */
  noindex?: boolean;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: firm.legalName,
      locale: "en_US",
      title,
      description,
      url: path,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
