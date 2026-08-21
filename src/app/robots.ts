import { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Throwaway comparison routes. Deleted before launch, excluded until then.
      disallow: [
        "/hero-preview-2",
        "/home-preview-2",
        "/illustration-preview",
      ],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
