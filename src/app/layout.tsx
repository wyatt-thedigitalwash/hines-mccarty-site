import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: {
    default: "Hines & McCarty | Criminal Defense Attorneys in Tampa Bay",
    template: "%s | Hines & McCarty",
  },
  description:
    "Hines & McCarty is a Brandon, Florida criminal defense firm handling serious state and federal charges across Greater Tampa Bay.",
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
