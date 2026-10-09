import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { firm, primaryOffice } from "@/lib/site";

// D84: read at build time (Node runtime) and inlined, since the image renderer
// takes an image as a data URI.
const LOGO = `data:image/svg+xml;base64,${readFileSync(join(process.cwd(), "public/brand/hmp-lockup-linen.svg")).toString("base64")}`;

/**
 * Default Open Graph image for every page that does not define its own.
 *
 * Generated rather than a static asset, so it cannot go stale against the firm
 * data and there is no binary to maintain.
 *
 * [NEEDS: real logo] SITE.md lists logo files as a launch blocker. This renders
 * the wordmark as type, which is what the header does today. Replace with the
 * real mark when it lands.
 *
 * Uses the default typeface, not the site's Cormorant. Embedding a font here
 * means shipping the file to the edge, and the only local family in the repo is
 * Gazpacho, whose licence is unconfirmed. Not worth a licence question for a
 * share card.
 */
export const alt = `${firm.legalName}, ${firm.tagline.toLowerCase()} in ${firm.serviceArea}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NAVY = "#101933";
const LINEN = "#f6f0e8";
const BRONZE = "#c5a059";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: NAVY,
        }}
      >
        {/* D84: the firm's logo, in linen as in the footer. */}
        <img src={LOGO} width={520} height={350} alt="" />
        <div style={{ display: "flex", fontSize: 30, color: LINEN, marginTop: 36 }}>
          {firm.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "rgba(246,240,232,0.7)", marginTop: 14 }}>
          {primaryOffice.city}, {primaryOffice.state}
          <span style={{ margin: "0 14px", color: BRONZE }}>·</span>
          {firm.serviceArea}
        </div>
      </div>
    ),
    size,
  );
}
