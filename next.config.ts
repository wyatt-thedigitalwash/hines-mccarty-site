import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

const nextConfig: NextConfig = {
  /*
    WHERE THE BUILD OUTPUT GOES, and why this is configurable.

    `next dev` serves out of the same directory `next build` writes to. Running
    a verification build while a dev server is up deletes the directory under
    it and the dev server starts returning 500s, which is precisely what kept
    happening: every gate run on this project killed the running dev server, and
    the response was to kill the dev server first rather than to stop doing it.

    Setting NEXT_DIST_DIR sends a build somewhere else. Verification builds use
    `.next-verify`, so `npm run dev` owns `.next` and nothing an agent runs
    touches it.
  */
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async redirects() {
    return [
      {
        // Layer 2 lives at /resources, which is the structure that came out of
        // the client meeting and is already in the header and side menu.
        // /guides was a stub built before that was settled; it redirects rather
        // than competing, so nothing that pointed at it breaks.
        // See CASES-WE-DEFEND-PLAN.md Section 11.3.
        source: "/guides",
        destination: "/resources/articles",
        permanent: true,
      },
      // D81: every criminal defense page moved under /criminal-defense, and
      // the state charge pages lost their "-defense" suffix. Nothing was
      // published at the old addresses, so these are a safety net for links
      // made during development. The state pages are listed one by one so
      // they cannot catch the new /criminal-defense/state, /federal and
      // /white-collar routes. Redirects from the previous website are added
      // before launch (CLAUDE.md audit 6).
      // D126: the previous website, a four-page GoDaddy site on this same
      // domain. Its pages were About Us, Practice Areas (white-collar defense
      // and corporate law) and Contact Us. Its own sitemaps are dropped too.
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/practice-areas", destination: "/criminal-defense", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/sitemap.website.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/sitemap.ols.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/cases-we-defend", destination: "/criminal-defense", permanent: true },
      { source: "/criminal-defense/battery-defense", destination: "/criminal-defense/state/battery", permanent: true },
      { source: "/criminal-defense/computer-crimes-defense", destination: "/criminal-defense/state/computer-crimes", permanent: true },
      { source: "/criminal-defense/domestic-violence-defense", destination: "/criminal-defense/state/domestic-violence", permanent: true },
      { source: "/criminal-defense/drug-possession-defense", destination: "/criminal-defense/state/drug-possession", permanent: true },
      { source: "/criminal-defense/drug-trafficking-defense", destination: "/criminal-defense/state/drug-trafficking", permanent: true },
      { source: "/criminal-defense/dui-defense", destination: "/criminal-defense/state/dui", permanent: true },
      { source: "/criminal-defense/grand-theft-defense", destination: "/criminal-defense/state/grand-theft", permanent: true },
      { source: "/criminal-defense/gun-crimes-defense", destination: "/criminal-defense/state/gun-crimes", permanent: true },
      { source: "/criminal-defense/homicide-defense", destination: "/criminal-defense/state/homicide", permanent: true },
      { source: "/criminal-defense/sex-crimes-defense", destination: "/criminal-defense/state/sex-crimes", permanent: true },
      { source: "/criminal-defense/sexual-battery-defense", destination: "/criminal-defense/state/sexual-battery", permanent: true },
      { source: "/federal-criminal-defense", destination: "/criminal-defense/federal", permanent: true },
      { source: "/federal-criminal-defense/csam-defense", destination: "/criminal-defense/federal/csam", permanent: true },
      { source: "/federal-criminal-defense/target-letter-defense", destination: "/criminal-defense/federal/target-letter", permanent: true },
      { source: "/federal-criminal-defense/:slug", destination: "/criminal-defense/federal/:slug", permanent: true },
      { source: "/white-collar-defense", destination: "/criminal-defense/white-collar", permanent: true },
      { source: "/white-collar-defense/:slug", destination: "/criminal-defense/white-collar/:slug", permanent: true },
    ];
  },
  async headers() {
    return [
      // D128: the vercel.app addresses are for review only. Search engines
      // must not index them; only the real domain gets indexed after launch.
      {
        source: "/(.*)",
        has: [{ type: "host", value: "(?<host>.*\\.vercel\\.app)" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

// D139: Vercel BotID's challenge routes.
export default withBotId(nextConfig);
