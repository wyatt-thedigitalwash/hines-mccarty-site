import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { firm, siteUrl } from "@/lib/site";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const DEFAULT_TITLE = "Hines & McCarty | Criminal Defense Attorneys in Tampa Bay";
const DEFAULT_DESCRIPTION =
  "Hines & McCarty is a Brandon, Florida criminal defense firm handling serious state and federal charges across Greater Tampa Bay.";

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
    template: "%s | Hines & McCarty",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
