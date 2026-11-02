import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { firm, siteUrl } from "@/lib/site";

/*
  D143: the three faces are bundled with the site (Fontsource 5.3.0, SIL Open
  Font License, licences in ./fonts) instead of fetched from Google at build
  time. Turbopack's next/font/google intermittently failed to resolve its own
  font module and broke builds, locally and on Vercel; local files remove
  that step. Same families, weights and latin subset as before.
*/
const cormorantGaramond = localFont({
  variable: "--font-cormorant",
  display: "swap",
  src: [
    { path: "./fonts/cormorant-garamond-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
});

const poppins = localFont({
  variable: "--font-poppins",
  display: "swap",
  src: [
    { path: "./fonts/poppins-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "./fonts/poppins-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/poppins-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/poppins-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/poppins-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
});

const lora = localFont({
  variable: "--font-lora",
  display: "swap",
  src: [
    { path: "./fonts/lora-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/lora-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/lora-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/lora-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
});

const DEFAULT_TITLE = "Hines McCarty Pavlidis | Criminal Defense Attorneys in Tampa Bay";
const DEFAULT_DESCRIPTION =
  "Hines McCarty Pavlidis is a Brandon, Florida criminal defense firm handling serious state and federal charges across Greater Tampa Bay.";

export const metadata: Metadata = {
  /**
   * Resolves every relative canonical and Open Graph URL to an absolute one.
   * Without it, `alternates.canonical` on a page silently emits nothing, which
   * is why the site had no canonicals at all. Reads from NEXT_PUBLIC_SITE_URL
   * via `siteUrl`, so the production domain is an env var, not a code change.
   */
  metadataBase: new URL(siteUrl),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Hines McCarty Pavlidis",
  },
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: firm.legalName,
    locale: "en_US",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: "/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${lora.variable} ${poppins.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-navy text-linen">
        {/* Skip link: the first stop on Tab, visible only when focused. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-bronze focus:px-4 focus:py-3 focus:font-heading focus:text-sm focus:font-semibold focus:text-navy"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
