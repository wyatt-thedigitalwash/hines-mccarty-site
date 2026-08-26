import type { NextConfig } from "next";

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
        destination: "/resources",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
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

export default nextConfig;
