/**
 * Draws the base maps for LocationsMap, D91.
 *
 *   npm run build:maps -- <data dir>
 *
 * Output: public/maps/<view>.svg for every view in src/lib/map-view.ts. The
 * files are GENERATED and committed; rerun this script to change them, never
 * hand-edit. The same inputs give byte-identical output.
 *
 * SOURCES, all public domain, fetched rather than drawn:
 *   - U.S. Census Bureau cartographic boundaries, 2023, 1:500,000:
 *     states (cb_2023_us_state_500k) and counties (cb_2023_us_county_500k).
 *     Clipped to the shoreline, so Tampa Bay, Charlotte Harbor and the barrier
 *     islands are real water and real islands.
 *   - U.S. Census Bureau TIGER/Line primary roads, 2023
 *     (tl_2023_us_primaryroads): the interstates and other limited-access
 *     highways.
 *   - Natural Earth 1:10m lakes, global and the North America supplement
 *     (ne_10m_lakes, ne_10m_lakes_north_america).
 * Download each zip from www2.census.gov and naciscdn.org, unzip each into its
 * own folder under <data dir>, named as the zip is. The data is not committed.
 *
 * WHY NOT A TILE PROVIDER. It needed a token, a paid account and a request to
 * a third party on every cold page, for a picture that never changes.
 *
 * Every view is projected with the same `toPixel` LocationsMap uses for its
 * pins, then clipped to the view, simplified to a third of a unit (below what
 * a screen can show at the sizes these render), and written with one decimal.
 */
import { open } from "shapefile";
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { MAP_VIEWS, toLatLon, toPixel, type MapView } from "../src/lib/map-view.ts";
import { middleDistrictCounties } from "../src/lib/middle-district.ts";

const DATA = process.argv[2];
if (!DATA || !existsSync(DATA)) {
  console.error("Usage: npm run build:maps -- <data dir>. See the header of this script for what goes in it.");
  process.exit(1);
}

/** Palette. Cool grays from the reference, so the navy pins carry the color. */
const C = {
  water: "#dfe1e5",
  land: "#f6f6f7",
  countyLine: "#e1e3e7",
  road: "#e4e5e9",
  /** Georgia and Alabama, a shade off Florida so the state line reads. */
  neighbor: "#eeeff1",
  /** The Middle District on the federal map (D96). */
  district: "#d6dde9",
  /** The Middle District on the white-collar map, lighter, under... */
  districtLight: "#e1e6ef",
  /** ...Hillsborough County, the state court, darker. */
  circuit: "#b4c0d5",
};

/**
 * Counties shaded per view, D96. Statewide views only; the home maps and the
 * circuit view shade nothing.
 */
const SHADES: Record<string, { counties: string[]; fill: string }[]> = {
  district: [{ counties: middleDistrictCounties, fill: C.district }],
  whitecollar: [
    { counties: middleDistrictCounties, fill: C.districtLight },
    { counties: ["Hillsborough"], fill: C.circuit },
  ],
};

/**
 * D98. The hub maps have no sea: the water is the page itself (client
 * direction), so the land carries a thin coastline and a shade more gray to
 * hold its shape on white, and lakes and bays are white.
 */
const NO_SEA = new Set(["circuit", "district", "whitecollar"]);
const HUB = { land: "#eff1f4", coast: "#cdd2db", lake: "#ffffff", neighbor: "#f7f8f9" };

/** Views that draw every county line: the ones about counties. */
const COUNTY_LINES = new Set(["circuit", "district", "whitecollar"]);

type Pt = [number, number];
type Ring = Pt[];

const shp = (name: string) => join(DATA, name, `${name}.shp`);

async function read(name: string, keep: (props: Record<string, unknown>) => boolean) {
  const src = await open(shp(name), undefined, { encoding: "utf-8" });
  const out: { geometry: GeoJSON.Geometry; properties: Record<string, unknown> }[] = [];
  for (;;) {
    const r = await src.read();
    if (r.done) break;
    const f = r.value as { geometry: GeoJSON.Geometry; properties: Record<string, unknown> };
    if (f.geometry && keep(f.properties)) out.push(f);
  }
  return out;
}

/** Distance from p to the segment a-b. */
function segDist(p: Pt, a: Pt, b: Pt) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const l = dx * dx + dy * dy;
  let t = l ? ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / l : 0;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dy));
}

/** Douglas-Peucker, iterative. */
function simplify(pts: Pt[], tol: number): Pt[] {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack: [number, number][] = [[0, pts.length - 1]];
  while (stack.length) {
    const [i, j] = stack.pop()!;
    let max = 0, at = -1;
    for (let k = i + 1; k < j; k++) {
      const d = segDist(pts[k], pts[i], pts[j]);
      if (d > max) { max = d; at = k; }
    }
    if (max > tol && at > 0) { keep[at] = 1; stack.push([i, at], [at, j]); }
  }
  return pts.filter((_, k) => keep[k]);
}

/** Sutherland-Hodgman against the view rectangle grown by `m`. */
function clipRing(ring: Ring, w: number, h: number, m: number): Ring {
  const edges: [(p: Pt) => boolean, (a: Pt, b: Pt) => Pt][] = [
    [(p) => p[0] >= -m, (a, b) => { const t = (-m - a[0]) / (b[0] - a[0]); return [-m, a[1] + t * (b[1] - a[1])]; }],
    [(p) => p[0] <= w + m, (a, b) => { const t = (w + m - a[0]) / (b[0] - a[0]); return [w + m, a[1] + t * (b[1] - a[1])]; }],
    [(p) => p[1] >= -m, (a, b) => { const t = (-m - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), -m]; }],
    [(p) => p[1] <= h + m, (a, b) => { const t = (h + m - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), h + m]; }],
  ];
  let out = ring;
  for (const [inside, cross] of edges) {
    const input = out;
    out = [];
    for (let i = 0; i < input.length; i++) {
      const cur = input[i], prev = input[(i + input.length - 1) % input.length];
      if (inside(cur)) {
        if (!inside(prev)) out.push(cross(prev, cur));
        out.push(cur);
      } else if (inside(prev)) out.push(cross(prev, cur));
    }
    if (!out.length) break;
  }
  return out;
}

function area(r: Ring) {
  let a = 0;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) a += (r[j][0] + r[i][0]) * (r[j][1] - r[i][1]);
  return Math.abs(a / 2);
}

const f1 = (n: number) => (Math.round(n * 10) / 10).toString();

function ringPath(r: Ring) {
  return "M" + r.map((p) => `${f1(p[0])} ${f1(p[1])}`).join("L") + "Z";
}
function linePath(l: Pt[]) {
  return "M" + l.map((p) => `${f1(p[0])} ${f1(p[1])}`).join("L");
}

function polygonsOf(g: GeoJSON.Geometry): number[][][][] {
  if (g.type === "Polygon") return [g.coordinates as number[][][]];
  if (g.type === "MultiPolygon") return g.coordinates as number[][][][];
  return [];
}
function linesOf(g: GeoJSON.Geometry): number[][][] {
  if (g.type === "LineString") return [g.coordinates as number[][]];
  if (g.type === "MultiLineString") return g.coordinates as number[][][];
  return [];
}

const TOL = 0.33;
const MARGIN = 6;

function areaPath(geoms: GeoJSON.Geometry[], view: MapView, minArea: number, tol = TOL) {
  const parts: string[] = [];
  for (const g of geoms)
    for (const poly of polygonsOf(g))
      for (const ring of poly) {
        const projected = ring.map(([lon, lat]) => toPixel(lat, lon, view));
        const clipped = clipRing(projected, view.width, view.height, MARGIN);
        if (clipped.length < 3) continue;
        const s = simplify([...clipped, clipped[0]], tol).slice(0, -1);
        if (s.length < 3 || area(s) < minArea) continue;
        parts.push(ringPath(s));
      }
  return parts.join("");
}

/** Lines, split where they leave the view, so nothing off-screen is written. */
function linePaths(geoms: GeoJSON.Geometry[], view: MapView, tol: number) {
  const inView = (p: Pt) => p[0] >= -MARGIN && p[0] <= view.width + MARGIN && p[1] >= -MARGIN && p[1] <= view.height + MARGIN;
  const parts: string[] = [];
  for (const g of geoms)
    for (const line of linesOf(g)) {
      const pts = line.map(([lon, lat]) => toPixel(lat, lon, view));
      let run: Pt[] = [];
      const flush = () => { if (run.length > 1) parts.push(linePath(simplify(run, tol))); run = []; };
      for (let i = 0; i < pts.length; i++) {
        const near = inView(pts[i]) || (i > 0 && inView(pts[i - 1])) || (i < pts.length - 1 && inView(pts[i + 1]));
        if (near) run.push(pts[i]); else flush();
      }
      flush();
    }
  return parts.join("");
}

/** The view's lat/lon box, for skipping features nowhere near it. */
function bbox(view: MapView) {
  const [n, w] = toLatLon(-50, -50, view);
  const [s, e] = toLatLon(view.width + 50, view.height + 50, view);
  return { n, s, e, w };
}
function touches(g: GeoJSON.Geometry, b: ReturnType<typeof bbox>) {
  const coords: number[][] = [];
  const walk = (c: unknown): void => {
    if (typeof (c as number[])[0] === "number") coords.push(c as number[]);
    else (c as unknown[]).forEach(walk);
  };
  walk((g as GeoJSON.Polygon).coordinates);
  return coords.some(([lon, lat]) => lon >= b.w && lon <= b.e && lat >= b.s && lat <= b.n);
}

console.log("Reading sources...");
const states = await read("cb_2023_us_state_500k", (p) => ["FL", "GA", "AL", "SC"].includes(p.STUSPS as string));
const counties = await read("cb_2023_us_county_500k", (p) => p.STATEFP === "12");
const roads = await read("tl_2023_us_primaryroads", () => true);
const lakes = [
  ...(await read("ne_10m_lakes", () => true)),
  ...(await read("ne_10m_lakes_north_america", () => true)),
];

mkdirSync("public/maps", { recursive: true });

for (const [name, view] of Object.entries(MAP_VIEWS)) {
  const b = bbox(view);
  const near = <T extends { geometry: GeoJSON.Geometry }>(fs: T[]) => fs.filter((f) => touches(f.geometry, b)).map((f) => f.geometry);
  // Zoomed out, a speck of island is noise; zoomed in to the circuit it is
  // Egmont Key and belongs on the map.
  const minArea = name === "circuit" ? 0.6 : 1.2;

  // Statewide, a unit is about 1.4 km: half a unit of tolerance is still
  // below what the screen shows and halves the file.
  const tol = name in SHADES ? 0.55 : TOL;
  const land = areaPath(near(states), view, minArea, tol);
  const nearStates = states.filter((f) => touches(f.geometry, b));
  const neighbors = areaPath(nearStates.filter((f) => f.properties.STUSPS !== "FL").map((f) => f.geometry), view, minArea, tol);
  const lake = areaPath(near(lakes), view, 4);
  const outline = (gs: GeoJSON.Geometry[]) =>
    gs.flatMap((g) => polygonsOf(g).map((p) => ({ type: "MultiLineString", coordinates: p }) as GeoJSON.Geometry));
  const countyLines = COUNTY_LINES.has(name) ? linePaths(outline(near(counties)), view, tol) : "";
  const shades = (SHADES[name] ?? []).map(({ counties: names, fill }) => {
    const picked = counties.filter((f) => names.includes(f.properties.NAME as string));
    const missing = names.filter((n) => !counties.some((f) => f.properties.NAME === n));
    if (missing.length) throw new Error(`${name}: no Census county named ${missing.join(", ")}`);
    return `<path d="${areaPath(picked.map((f) => f.geometry), view, minArea, tol)}" fill="${fill}" fill-rule="evenodd"/>`;
  });
  const road = linePaths(near(roads), view, 0.6);
  const statewide = name in SHADES;
  const noSea = NO_SEA.has(name);

  const { width: W, height: H } = view;
  // No state line is stroked: on the statewide views the neighbors' fill is a
  // shade off Florida's, which draws the border without tracing the coast.
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" preserveAspectRatio="xMidYMid slice">`,
    noSea ? "" : `<rect width="${W}" height="${H}" fill="${C.water}"/>`,
    `<path d="${land}" fill="${noSea ? HUB.land : C.land}" fill-rule="evenodd"/>`,
    statewide && neighbors ? `<path d="${neighbors}" fill="${noSea ? HUB.neighbor : C.neighbor}" fill-rule="evenodd"/>` : "",
    ...shades,
    countyLines ? `<path d="${countyLines}" fill="none" stroke="${statewide ? "#ffffff" : C.countyLine}" stroke-width="${statewide ? 0.7 : 1}" stroke-linejoin="round"/>` : "",
    `<path d="${road}" fill="none" stroke="${C.road}" stroke-width="${name === "circuit" ? 1.6 : statewide ? 0.8 : 1.2}" stroke-linecap="round" stroke-linejoin="round" opacity="${statewide ? 0.7 : 1}"/>`,
    `<path d="${lake}" fill="${noSea ? HUB.lake : C.water}" fill-rule="evenodd"/>`,
    noSea ? `<path d="${land}" fill="none" stroke="${HUB.coast}" stroke-width="0.9" stroke-linejoin="round"/>` : "",
    `</svg>`,
  ].join("");
  writeFileSync(`public/maps/${name}.svg`, svg + "\n");
  console.log(`  public/maps/${name}.svg  ${(svg.length / 1024).toFixed(0)} KB`);
}
