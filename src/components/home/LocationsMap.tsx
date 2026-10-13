import { MAP_VIEWS, toPixel, type MapVariant, type MapView } from "@/lib/map-view";
import { officeLatLon, serviceAreas, type ServiceArea } from "@/lib/site";
import { middleDistrict } from "@/lib/middle-district";

/**
 * The locations map, D91: a drawn base map with the firm's pins and the place
 * names set over it.
 *
 * The base map is a static SVG in /public/maps, generated at build time from
 * Census and Natural Earth geometry (scripts/build-locations-map.mts). No map
 * provider, no token, no request to a third party. Pins and labels are drawn
 * here, in the same viewBox and through the same projection the base map was
 * drawn with, so they land on the coastline it shows. Both share one
 * preserveAspectRatio, so they crop together at any panel size.
 *
 * Labels are SVG text in the site's own type, which a raster tile could not
 * give: crisp at any size and matching the page.
 *
 * OFFICE VERSUS SERVICE AREA. Brandon's dot is gold; the service areas',
 * Tampa's included, are navy. The firm has one office (D125). The reference design marks all its pins alike because all are
 * offices. Ours are not, and under Rule 4-7.12 the firm may only mark an
 * office on Brandon. See the note on `serviceAreas` in site.ts.
 *
 * ACCESSIBILITY. The map is aria-hidden. Every service area on it is listed in
 * real text beside it, at every breakpoint.
 */

/** Context cities, gray, for orientation only. Desktop view. */
const CONTEXT: { label: string; lat: number; lon: number; side: ServiceArea["side"] }[] = [
  { label: "Gainesville", lat: 29.6516, lon: -82.3248, side: "e" },
  { label: "Ocala", lat: 29.1872, lon: -82.1401, side: "e" },
  { label: "Daytona Beach", lat: 29.2108, lon: -81.0228, side: "e" },
  { label: "Palm Bay", lat: 28.0345, lon: -80.5887, side: "w" },
  { label: "Sebring", lat: 27.4956, lon: -81.4409, side: "e" },
  { label: "Port St. Lucie", lat: 27.273, lon: -80.3582, side: "w" },
];

/** County names for the circuit view, where the copy is about counties. */
const COUNTIES: { label: string; lat: number; lon: number }[] = [
  { label: "PASCO", lat: 28.33, lon: -82.43 },
  { label: "PINELLAS", lat: 28.07, lon: -82.74 },
  { label: "HILLSBOROUGH", lat: 27.79, lon: -82.2 },
  { label: "POLK", lat: 28.0, lon: -81.86 },
  { label: "MANATEE", lat: 27.47, lon: -82.3 },
];

const SIZES = {
  desktop: { disc: 6.5, label: 13.5, context: 12 },
  mobile: { disc: 6, label: 13, context: 0 },
  circuit: { disc: 7, label: 15, context: 0 },
  district: { disc: 5, label: 13, context: 0 },
  whitecollar: { disc: 5.5, label: 14, context: 0 },
} as const;

/** Which side each division seat's label sits on, on the federal map. */
const SEAT_SIDE: Record<string, ServiceArea["side"]> = {
  Jacksonville: "w", Ocala: "w", Orlando: "e", Tampa: "w", "Fort Myers": "e",
};

type Marker = { key: string; label: string; side: ServiceArea["side"]; xy: [number, number] };

const NAVY = "#101933";
const GOLD = "#c5a059";

/** The statewide maps' key is HTML, in CircuitMap (D97), so it never crops. */

/** Where a label sits relative to its point, and how it is anchored. */
function place(x: number, y: number, side: ServiceArea["side"], gap: number) {
  switch (side) {
    case "e": return { x: x + gap, y, anchor: "start" as const, dy: "0.35em" };
    case "w": return { x: x - gap, y, anchor: "end" as const, dy: "0.35em" };
    case "s": return { x, y: y + gap + 4, anchor: "middle" as const, dy: "0.7em" };
    case "n": return { x, y: y - gap - 2, anchor: "middle" as const, dy: "0" };
  }
}

// The halo keeps a label legible where it crosses a road or a coastline.
const HALO = { stroke: "#f6f6f7", strokeWidth: 3.5, paintOrder: "stroke" as const, strokeLinejoin: "round" as const };

export default function LocationsMap({
  variant = "desktop",
  anchor = "center",
}: {
  variant?: MapVariant;
  /**
   * Which edge stays put when the map is cropped to fill its box (D97). The
   * hub panels anchor right, so a narrow panel crops the side that dissolves.
   */
  anchor?: "center" | "right";
}) {
  const view: MapView = MAP_VIEWS[variant];
  const size = SIZES[variant];
  const at = (lat: number, lon: number) => toPixel(lat, lon, view);
  // A marker this close to an edge would sit half-hidden in a fade.
  const inView = ([x, y]: [number, number]) => x > 50 && x < view.width - 30 && y > 60 && y < view.height - 60;
  const [ox, oy] = at(officeLatLon.lat, officeLatLon.lon);
  // The home and circuit maps mark the service areas; the federal map marks
  // the five division seats; the white-collar map marks Tampa (navy) beside
  // the Brandon office (D125).
  const tampa = middleDistrict.find((d) => d.name === "Tampa")!;
  const areas: Marker[] =
    variant === "district"
      ? middleDistrict.map((d) => ({ key: d.name, label: d.name, side: SEAT_SIDE[d.name], xy: at(d.lat, d.lon) }))
      : variant === "whitecollar"
        ? [{ key: "tampa", label: "Tampa", side: "w", xy: at(tampa.lat, tampa.lon) }]
        : serviceAreas.map((a) => ({ key: a.key, label: a.label, side: a.side, xy: at(a.lat, a.lon) })).filter((a) => inView(a.xy));
  const showOffice = true;

  return (
    <svg
      viewBox={`0 0 ${view.width} ${view.height}`}
      preserveAspectRatio={anchor === "right" ? "xMaxYMid slice" : "xMidYMid slice"}
      className="block h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <image href={`/maps/${variant}.svg`} width={view.width} height={view.height} />

      {variant === "desktop" ? (
        <text
          x={at(28.72, -81.95)[0]}
          y={at(28.72, -81.95)[1]}
          textAnchor="middle"
          className="font-heading"
          fontSize="17"
          fontWeight="600"
          letterSpacing="0.32em"
          fill="#a3a6ae"
        >
          FLORIDA
        </text>
      ) : null}

      {variant === "circuit"
        ? COUNTIES.map((c) => {
            const [x, y] = at(c.lat, c.lon);
            return (
              <text key={c.label} x={x} y={y} textAnchor="middle" className="font-heading" fontSize="11.5" fontWeight="600" letterSpacing="0.2em" fill="#a3a6ae">
                {c.label}
              </text>
            );
          })
        : null}

      {size.context
        ? CONTEXT.map((c) => {
            const [x, y] = at(c.lat, c.lon);
            const p = place(x, y, c.side, 7);
            return (
              <g key={c.label}>
                <circle cx={x} cy={y} r="2.2" fill="#9a9da5" />
                <text x={p.x} y={p.y} dy={p.dy} textAnchor={p.anchor} className="font-heading" fontSize={size.context} fill="#868a93" {...HALO}>
                  {c.label}
                </text>
              </g>
            );
          })
        : null}

      {areas.map((a) => {
        const [x, y] = a.xy;
        return <circle key={a.key} cx={x} cy={y} r={size.disc} fill={NAVY} stroke="#ffffff" strokeWidth="2.5" />;
      })}

      {/* The office: the same dot, in the firm's gold (client choice, D91).
          The color is what sets it apart; the label says what it is. */}
      {showOffice ? <circle cx={ox} cy={oy} r={size.disc + 0.5} fill={GOLD} stroke="#ffffff" strokeWidth="2.5" /> : null}


      {/* Labels last, so no pin covers one. */}
      {areas.map((a) => {
        const [x, y] = a.xy;
        const p = place(x, y, a.side, size.disc + 5);
        return (
          <text key={a.key} x={p.x} y={p.y} dy={p.dy} textAnchor={p.anchor} className="font-heading" fontSize={size.label} fontWeight="600" fill="#101933" {...HALO}>
            {a.label}
          </text>
        );
      })}
      {showOffice ? (
        <text x={ox + size.disc + 5} y={oy} dy="0.35em" className="font-heading" fontSize={size.label} fontWeight="600" fill={NAVY} {...HALO}>
          Brandon
        </text>
      ) : null}
    </svg>
  );
}
