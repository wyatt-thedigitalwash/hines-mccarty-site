import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
