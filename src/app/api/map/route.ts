import { NextResponse } from "next/server";
import { MAP_VIEWS, type MapVariant } from "@/lib/map-view";

/**
 * Serves the locations map as a real tile image.
 *
 * WHY THIS IS A PROXY AND NOT AN <img> POINTING AT THE PROVIDER. CLAUDE.md:
 * API keys live in /api/ routes or server components, never in client code. A
 * static-image URL with the token baked in is client code the moment it lands
 * in a src attribute, so the token stays here and the browser only ever sees
 * /api/map.
 *
 * It also means this is not an open proxy. The only accepted parameter is a
 * variant name that indexes a fixed table of views, so nobody can point it at
 * arbitrary coordinates and use the firm's tile quota as their own.
 *
 * [NEEDS: MAPBOX_TOKEN in the environment] Until it is set this returns 503 and
 * the component falls back rather than rendering a broken image. Get one at
 * mapbox.com; the static-images tier is free well past what this page will use.
 * Set it in .env.local for development and in the Vercel project settings for
 * production.
 */

export const runtime = "nodejs";

/**
 * Mapbox's own light style, which is the closest ready-made match to the
 * reference: near-white land, grey water, thin roads, grey place names.
 * A fully custom style built in Mapbox Studio would let us tune the palette to
 * the brand exactly, and its id would drop in here unchanged.
 */
const STYLE = "mapbox/light-v11";

export async function GET(request: Request) {
  const token = process.env.MAPBOX_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "MAPBOX_TOKEN is not configured" },
      { status: 503 },
    );
  }

  const requested = new URL(request.url).searchParams.get("v") ?? "desktop";
  if (!(requested in MAP_VIEWS)) {
    return NextResponse.json({ error: "unknown view" }, { status: 400 });
  }
  const view = MAP_VIEWS[requested as MapVariant];

  // @2x so the image is sharp on retina. Mapbox caps a static image at 1280
  // logical units per side, which every view here stays under.
  const url =
    `https://api.mapbox.com/styles/v1/${STYLE}/static/` +
    `${view.lon},${view.lat},${view.zoom},0/` +
    `${view.width}x${view.height}@2x` +
    `?access_token=${token}&attribution=false&logo=false`;

  const upstream = await fetch(url, { next: { revalidate: 60 * 60 * 24 * 30 } });

  if (!upstream.ok) {
    return NextResponse.json(
      { error: `map provider returned ${upstream.status}` },
      { status: 502 },
    );
  }

  return new NextResponse(upstream.body, {
    headers: {
      "Content-Type": upstream.headers.get("Content-Type") ?? "image/png",
      // The view is fixed, so this image is effectively immutable. Cache it
      // hard at the edge so a page view does not cost a tile request.
      "Cache-Control": "public, max-age=86400, s-maxage=2592000, immutable",
    },
  });
}
