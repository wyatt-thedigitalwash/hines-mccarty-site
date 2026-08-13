import { ImageResponse } from "next/og";
import { firm, primaryOffice } from "@/lib/site";

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
export const runtime = "edge";
export const alt = `${firm.legalName}, criminal defense in ${firm.serviceArea}`;
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
          justifyContent: "space-between",
          backgroundColor: NAVY,
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 68, color: LINEN }}>
            <span>Hines</span>
            <span style={{ color: BRONZE, margin: "0 16px" }}>&</span>
            <span>McCarty</span>
          </div>
          <div
            style={{
              width: 96,
              height: 3,
              backgroundColor: BRONZE,
              marginTop: 36,
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 40, color: LINEN }}>
            Criminal Defense, State and Federal
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "rgba(246,240,232,0.65)",
              marginTop: 20,
            }}
          >
            {primaryOffice.city}, {primaryOffice.state}
            <span style={{ margin: "0 14px" }}>/</span>
            {firm.serviceArea}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
