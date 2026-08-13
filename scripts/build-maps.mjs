/**
 * Generates the map geometry used by the forum illustrations on the silo hubs.
 *
 *   node scripts/build-maps.mjs
 *
 * Source is us-atlas, which is pre-built TopoJSON from the U.S. Census Bureau
 * cartographic boundary files. Public-domain geometry with a citable origin, in
 * the spirit of done-criterion C12: fetched from an official source, never
 * recalled or hand-drawn.
 *
 * Output is src/components/cases/generated/map-paths.ts. That file is GENERATED.
 * Never hand-edit it. Change this script and rerun; the output is deterministic,
 * so the same inputs produce byte-identical paths.
 *
 * The script fails rather than emitting a subtly wrong shape. See CHECKS below.
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { createRequire } from "node:module";
import * as topojson from "topojson-client";
import { geoAlbers, geoAlbersUsa, geoPath } from "d3-geo";

const require = createRequire(import.meta.url);
const atlas = (f) =>
  JSON.parse(readFileSync(require.resolve(`us-atlas/${f}`), "utf8"));

// ---------------------------------------------------------------------------
// Budgets and checks. Tightening these is fine; loosening them needs a reason.
// ---------------------------------------------------------------------------
/**
 * Two different things, previously conflated under one budget.
 *
 * FORWARD deviation (original -> simplified) measures how much real coastline
 * detail we dropped. That is a DESIGN CHOICE, not a defect. These render at
 * roughly 480px, where Tampa Bay's mouth, the barrier islands, and every inlet
 * are sub-pixel noise. Holding forward deviation tight forced the outline to
 * keep detail it cannot express, which is what produced the hairy west coast.
 * A generalized silhouette is the goal, so this budget is deliberately loose.
 *
 * REVERSE deviation (simplified -> original) measures geometry we INVENTED:
 * spikes and hairs jutting into water where no coastline exists. That is always
 * a defect, at any size, so this budget is tight and is the real gate.
 */
/**
 * Forward deviation: how far the outline strays from the official Census
 * geometry. Tight, because the shape has to stay recognisably itself.
 *
 * HISTORY, so this is not re-attempted. An earlier pass added a feature-collapse
 * operator that closed any coastal excursion narrower or smaller than a
 * threshold, to kill the hairy look on Florida's Gulf coast. It removed the
 * hairs and it also stopped looking like Florida: bays filled, headlands shaved.
 *
 * The hairs were never the mainland outline. They were the barrier islands,
 * thin slivers at this scale, rendered as separate rings. Raising the ring-area
 * filter fixes the appearance without touching the coastline at all. If the
 * coast ever looks wrong again, check the ring filter before the simplifier.
 */
const MAX_GENERALIZATION_PCT = 0.45; // subject: Florida. Near-exact.
/**
 * Context shapes get a looser worst-point budget. The US max is set by one deep
 * inlet; its p95 is 0.19%, so the outline is faithful. Buying that last fraction
 * would cost roughly double the points for detail nobody can see at hairline
 * weight.
 */
const CONTEXT_GENERALIZATION_PCT = 0.9;
const SUBJECT_SHAPES = new Set(["florida"]);
const MAX_INVENTION_PCT = 0.2; // reverse: spikes. Never acceptable.


// Integer coordinates on an 800-unit viewBox give 0.6px precision at the ~480px
// render size, well under the stroke width, and roughly halve the byte count
// versus two decimals. The savings buy the point counts these need to stay
// inside the deviation budget.
const POINT_BUDGET = { florida: 520, usa: 760 };

// Locator coordinates, [longitude, latitude].
// Hillsborough County is the 13th Judicial Circuit.
// [VERIFY per C12: that the M.D. Fla. divisions marked below are Tampa,
// Orlando, and Fort Myers, against flmd.uscourts.gov, before these ship.]
//
// brandon is the firm's only published office. Everything from stPete down is a
// SERVICE AREA, not an office, and the locations section must not present them
// as one. See docs/build/LOCATIONS-MAP-PLAN.md Section 2 and Rule 4-7.12.
const PLACES = {
  hillsborough: [-82.35, 27.99],
  tampa: [-82.4572, 27.9506],
  orlando: [-81.3792, 28.5383],
  fortMyers: [-81.8723, 26.6406],
  brandon: [-82.2859, 27.9378],
  stPete: [-82.6403, 27.7676],
  sarasota: [-82.5307, 27.3364],
  naples: [-81.7948, 26.142],
};

/**
 * Context labels. NOT places the firm claims anything about.
 *
 * The reference design reads as a map rather than as a diagram partly because
 * it is covered in faint place names that came with the tiles. Ours has to
 * place them deliberately. They are drawn in light grey, well below the marker
 * labels, and exist only to give the shape a sense of scale and inhabitation.
 */
const CONTEXT_PLACES = {
  gainesville: [-82.3248, 29.6516],
  ocala: [-82.1401, 29.1872],
  daytonaBeach: [-81.0228, 29.2108],
  deltona: [-81.2637, 28.9005],
  kissimmee: [-81.4076, 28.292],
  lakeland: [-81.9498, 28.0395],
  palmBay: [-80.5887, 28.0345],
  portStLucie: [-80.3582, 27.273],
  capeCoral: [-81.9495, 26.5629],
  westPalmBeach: [-80.0534, 26.7153],
  bocaRaton: [-80.0831, 26.3683],
  clearwater: [-82.8001, 27.9659],
  bradenton: [-82.5748, 27.4989],
  portCharlotte: [-82.0906, 26.9762],
  seboring: [-81.4409, 27.4956],
};

/**
 * Crop for the locations map, in the same 800x620 projected space as `florida`.
 *
 * The full state does not work here. The seven markers span 98 of 800
 * horizontal units, so at full extent they crowd into a tenth of the frame with
 * the panhandle empty beside them, and Tampa sits 22 units from St. Pete, which
 * collides at any usable label size. The reference design has the same problem
 * and solves it the same way: its map has no panhandle at all.
 *
 * Verified below against the projected markers, so a coordinate change that
 * pushes a city out of frame fails the build instead of shipping cropped.
 *
 * The west edge sits well out into the Gulf on purpose. St. Pete is the
 * westernmost marker and its label is centred beneath it, so the frame needs
 * open water to the left of it for the left-edge dissolve to have somewhere to
 * happen without washing that label out.
 */
const LOCATIONS_VIEW = { x: 380, y: 165, w: 375, h: 355 };

/**
 * Crop for the state silo illustration: the 13th Judicial Circuit and the
 * counties around it.
 *
 * The state page is about county-level jurisdiction, so it zooms to where that
 * is legible instead of drawing the whole state with one county tinted, which
 * at section size is a 40px smudge.
 */
const CIRCUIT_VIEW = { x: 428, y: 208, w: 210, h: 200 };

/** Counties named on the circuit map. Centroids are computed, not guessed. */
const CIRCUIT_COUNTIES = {
  "12057": "Hillsborough",
  "12103": "Pinellas",
  "12101": "Pasco",
  "12105": "Polk",
  "12081": "Manatee",
  "12053": "Hernando",
};
const LOCATIONS_MARGIN = 24; // min projected units between a marker and an edge

/** Point budget for the county mesh. Measured: 1210 raw commands, 4.5KB. */
const COUNTY_POINT_BUDGET = 700;

// ---------------------------------------------------------------------------
// Geometry helpers
// ---------------------------------------------------------------------------

/** Perpendicular distance from p to segment ab. */
function pointToSegment(p, a, b) {
  const [px, py] = p;
  const [ax, ay] = a;
  const [bx, by] = b;
  const dx = bx - ax;
  const dy = by - ay;
  const lenSq = dx * dx + dy * dy;
  if (lenSq === 0) return Math.hypot(px - ax, py - ay);
  let t = ((px - ax) * dx + (py - ay) * dy) / lenSq;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

function segmentsIntersect(p1, p2, p3, p4) {
  const d = (a, b, c) =>
    (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  const d1 = d(p3, p4, p1);
  const d2 = d(p3, p4, p2);
  const d3 = d(p1, p2, p3);
  const d4 = d(p1, p2, p4);
  return (
    ((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) &&
    ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))
  );
}



const triArea = (a, b, c) =>
  Math.abs(
    (a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1])) / 2,
  );

/**
 * Visvalingam-Whyatt simplification to a target point count.
 *
 * Chosen over Douglas-Peucker deliberately. DP keeps the points furthest from a
 * chord, which at aggressive reduction produces spiky outlines and readily
 * self-intersects on convoluted coastlines. Visvalingam drops the points that
 * contribute least area, which degrades gracefully and keeps a coastline
 * looking like a coastline.
 *
 * Targeting a point count rather than a tolerance gives direct control of the
 * inline byte budget, which is the constraint that actually binds here.
 */
function simplifyRing(points, targetPoints) {
  if (points.length <= targetPoints || points.length < 5) return points;

  const alive = points.map((p, i) => ({ p, prev: i - 1, next: i + 1 }));
  alive[0].prev = -1;
  alive[alive.length - 1].next = -1;
  let count = points.length;

  const areaOf = (i) => {
    const n = alive[i];
    if (n.prev < 0 || n.next < 0) return Infinity; // pin endpoints
    return triArea(alive[n.prev].p, n.p, alive[n.next].p);
  };

  const areas = alive.map((_, i) => areaOf(i));
  const removed = new Uint8Array(points.length);

  while (count > targetPoints) {
    let min = Infinity;
    let idx = -1;
    for (let i = 0; i < alive.length; i++) {
      if (!removed[i] && areas[i] < min) {
        min = areas[i];
        idx = i;
      }
    }
    if (idx === -1) break;

    const node = alive[idx];

    // Topology guard. Visvalingam optimises for area, not validity, so on a
    // convoluted outline collapsing a narrow feature can make the replacement
    // segment cross another part of the ring. Verified against the source:
    // the unsimplified geometry is clean, so any crossing is introduced here.
    // Reject the removal and pin the point rather than emitting a bad shape.
    if (node.prev >= 0 && node.next >= 0) {
      const a = alive[node.prev].p;
      const b = alive[node.next].p;
      let crosses = false;
      for (let i = 0; alive[i] && alive[i].next >= 0; i = alive[i].next) {
        const j = alive[i].next;
        if (i === idx || j === idx || i === node.prev || j === node.prev) continue;
        if (i === node.next || j === node.next) continue;
        if (segmentsIntersect(a, b, alive[i].p, alive[j].p)) {
          crosses = true;
          break;
        }
      }
      if (crosses) {
        areas[idx] = Infinity; // pin permanently
        continue;
      }
    }

    removed[idx] = 1;
    count--;
    if (node.prev >= 0) alive[node.prev].next = node.next;
    if (node.next >= 0) alive[node.next].prev = node.prev;
    if (node.prev >= 0) areas[node.prev] = areaOf(node.prev);
    if (node.next >= 0) areas[node.next] = areaOf(node.next);
    areas[idx] = Infinity;
  }

  return points.filter((_, i) => !removed[i]);
}

/**
 * Distance from every ORIGINAL vertex to the simplified outline.
 *
 * Reports a distribution, not just the max. On a convoluted coastline the max
 * is set by one or two extreme features (a deep inlet, a spit) whose loss is
 * invisible at render size, so judging the whole shape by it is misleading.
 * p95 describes how faithful the outline actually looks.
 */
function oneWay(from, to) {
  return from.map((p) => {
    let best = Infinity;
    for (let i = 0; i < to.length - 1; i++) {
      const d = pointToSegment(p, to[i], to[i + 1]);
      if (d < best) best = d;
      if (best === 0) break;
    }
    return best;
  });
}

/**
 * SYMMETRIC deviation. Measured in both directions, and the reverse direction
 * is the one that matters most.
 *
 * Measuring only original-to-simplified is blind to the defect that actually
 * shows up on screen: a spike, where the simplified outline juts out into
 * water no original vertex is near. Every original point can still sit close to
 * some part of the outline while the outline grows hairs. The reverse pass,
 * simplified-to-original, catches exactly that.
 */
function deviationStats(original, simplified) {
  const fwd = oneWay(original, simplified);
  const rev = oneWay(simplified, original);
  const all = fwd.concat(rev).sort((a, b) => a - b);
  const at = (q) => all[Math.min(all.length - 1, Math.floor(all.length * q))];
  return {
    max: all[all.length - 1],
    maxForward: Math.max(...fwd),
    maxReverse: Math.max(...rev),
    p95: at(0.95),
  };
}

function ringArea(ring) {
  let a = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    a += (ring[j][0] + ring[i][0]) * (ring[j][1] - ring[i][1]);
  }
  return Math.abs(a / 2);
}

/** True if any two non-adjacent segments of a ring cross. */
function selfIntersects(ring) {
  for (let i = 0; i < ring.length - 1; i++) {
    for (let j = i + 2; j < ring.length - 1; j++) {
      if (i === 0 && j === ring.length - 2) continue; // shared endpoint
      if (segmentsIntersect(ring[i], ring[i + 1], ring[j], ring[j + 1])) {
        return true;
      }
    }
  }
  return false;
}

const fmt = (n) => Math.round(n);
const ringToPath = (ring) =>
  ring.map((p, i) => `${i ? "L" : "M"}${p[0]} ${p[1]}`).join("") + "Z";
/** Same, for an OPEN polyline. County borders are lines, not rings. */
const lineToPath = (line) =>
  line.map((p, i) => `${i ? "L" : "M"}${p[0]} ${p[1]}`).join("");

/** Ray casting. Used to prove a marker landed on land, not in the water. */
function pointInRing(pt, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if (
      yi > pt[1] !== yj > pt[1] &&
      pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi
    ) {
      inside = !inside;
    }
  }
  return inside;
}

// ---------------------------------------------------------------------------
// Build one shape: project, simplify, verify.
// ---------------------------------------------------------------------------
function buildShape({ name, feature, projection, width, height, padding }) {
  const proj = projection.fitExtent(
    [
      [padding, padding],
      [width - padding, height - padding],
    ],
    feature,
  );

  // Project every ring of the (Multi)Polygon into screen space.
  const geom = feature.geometry ?? feature;
  const polygons =
    geom.type === "MultiPolygon" ? geom.coordinates : [geom.coordinates];

  const projected = [];
  for (const poly of polygons) {
    for (const ring of poly) {
      const pts = [];
      for (const coord of ring) {
        const p = proj(coord);
        if (p && Number.isFinite(p[0]) && Number.isFinite(p[1])) pts.push(p);
      }
      if (pts.length >= 4) projected.push(pts);
    }
  }

  // Drop specks, but keep anything big enough to read as land at render size.
  // Drop by ABSOLUTE projected area, not relative. A ring under ~40 square
  // units is roughly 4px across at render size: too small to read as land, but
  // big enough to survive as a sliver or a hair once simplified. Relative
  // thresholds kept these and they became the artifacts on the coastline.
  const projectedAreas = projected.map(ringArea);
  const kept = projected.filter((_, i) => projectedAreas[i] >= 220);

  // Recompute over `kept`, since filtering shifted every index. Indexing the
  // pre-filter array here silently compared the wrong ring against the wrong
  // simplification and reported a deviation of 0.000%.
  const keptAreas = kept.map(ringArea);
  const mainIndex = keptAreas.indexOf(Math.max(...keptAreas));

  // Allocate the point budget across rings by perimeter, so the mainland gets
  // the detail and the small islands get enough to stay recognizable.
  const budget = POINT_BUDGET[name];
  const perimeters = kept.map((r) =>
    r.reduce(
      (sum, p, i) => (i ? sum + Math.hypot(p[0] - r[i - 1][0], p[1] - r[i - 1][1]) : 0),
      0,
    ),
  );
  const totalPerimeter = perimeters.reduce((a, b) => a + b, 0);
  const simplified = kept
    .map((ring, i) =>
      simplifyRing(
        ring,
        Math.max(24, Math.round((perimeters[i] / totalPerimeter) * budget)),
      ),
    )
    // Round here, not at emit time, so the deviation check below measures the
    // geometry that actually ships rather than a more precise intermediate.
    .map((ring) => ring.map((p) => [fmt(p[0]), fmt(p[1])]));

  // CHECKS ------------------------------------------------------------------
  const problems = [];
  const mainOriginal = kept[mainIndex];
  const mainSimplified = simplified[mainIndex];

  const dev = deviationStats(mainOriginal, mainSimplified);
  const pct = (v) => (v / width) * 100;
  const deviationPct = pct(dev.max);
  const p95Pct = pct(dev.p95);

  const forwardPct = pct(dev.maxForward);
  const reversePct = pct(dev.maxReverse);

  const forwardBudget = SUBJECT_SHAPES.has(name)
    ? MAX_GENERALIZATION_PCT
    : CONTEXT_GENERALIZATION_PCT;
  if (forwardPct > forwardBudget) {
    problems.push(
      `dropped too much detail: forward ${forwardPct.toFixed(2)}% exceeds ${forwardBudget}%`,
    );
  }
  if (reversePct > MAX_INVENTION_PCT) {
    problems.push(
      `INVENTED geometry (spikes): reverse ${reversePct.toFixed(2)}% exceeds ${MAX_INVENTION_PCT}%`,
    );
  }

  const points = simplified.reduce((n, r) => n + r.length, 0);
  if (budget && points > budget * 1.1) {
    problems.push(`${points} points exceeds budget ${budget}`);
  }

  simplified.forEach((ring, i) => {
    if (selfIntersects(ring)) problems.push(`ring ${i} self-intersects`);
  });

  return {
    name,
    paths: simplified.map(ringToPath),
    // The point arrays, not just the path strings, so callers can run
    // point-in-polygon against the geometry that actually ships.
    ringsPts: simplified,
    rings: simplified.length,
    points,
    deviationPct,
    p95Pct,
    dev,
    project: proj,
    problems,
    bytes: simplified.reduce((n, r) => n + ringToPath(r).length, 0),
  };
}

/**
 * Project a feature through an already-fitted projection, so the result
 * overlays another shape built with that same projection exactly. Used to draw
 * Florida inside the US frame on the federal illustration.
 */
function projectWith(feature, proj, targetPoints) {
  const geom = feature.geometry ?? feature;
  const polygons =
    geom.type === "MultiPolygon" ? geom.coordinates : [geom.coordinates];
  const rings = [];
  for (const poly of polygons) {
    for (const ring of poly) {
      const pts = [];
      for (const coord of ring) {
        const p = proj(coord);
        if (p && Number.isFinite(p[0]) && Number.isFinite(p[1])) pts.push(p);
      }
      if (pts.length >= 4) rings.push(pts);
    }
  }
  const areas = rings.map(ringArea);
  const biggest = Math.max(...areas);
  return rings
    .filter((_, i) => areas[i] >= biggest * 0.01)
    .map((r) => simplifyRing(r, targetPoints).map((q) => [fmt(q[0]), fmt(q[1])]))
    .map(ringToPath);
}

// ---------------------------------------------------------------------------
// Inputs
// ---------------------------------------------------------------------------
const statesTopo = atlas("states-10m.json");
const nationTopo = atlas("nation-10m.json");
// Build-time only. 0.8MB of TopoJSON that never reaches the client; what ships
// is the simplified mesh below, measured at roughly 2.5KB.
const countiesTopo = atlas("counties-10m.json");

const states = topojson.feature(statesTopo, statesTopo.objects.states);
const florida = states.features.find((f) => f.id === "12");
if (!florida) throw new Error("Florida (FIPS 12) not found in states-10m");

const nation = topojson.feature(nationTopo, nationTopo.objects.nation)
  .features[0];


const W = 800;

const shapes = [
  buildShape({
    name: "florida",
    feature: florida,
    // Albers conic tuned to Florida's latitudes; plate carree would stretch it.
    projection: geoAlbers().rotate([84, 0]).center([0, 27.8]).parallels([25, 30]),
    width: W,
    height: 620,
    padding: 18,
  }),
  buildShape({
    name: "usa",
    feature: nation,
    projection: geoAlbersUsa(),
    width: W,
    height: 500,
    padding: 12,
  }),
];

// Florida-specific protected features. A generic simplifier eats the Keys and
// blunts the panhandle, which are the two things that make Florida read as
// Florida. Compare simplified extents against the source.
const fl = shapes[0];
{
  const flPath = geoPath(fl.project);
  const srcBounds = flPath.bounds(florida);
  const all = fl.paths
    .join("")
    .match(/-?\d+(\.\d+)?/g)
    .map(Number);
  const xs = all.filter((_, i) => i % 2 === 0);
  const ys = all.filter((_, i) => i % 2 === 1);
  const west = Math.min(...xs);
  const south = Math.max(...ys);
  const tol = W * 0.004;

  if (Math.abs(west - srcBounds[0][0]) > tol) {
    fl.problems.push(
      `panhandle west extent lost: ${west.toFixed(1)} vs source ${srcBounds[0][0].toFixed(1)}`,
    );
  }
  if (Math.abs(south - srcBounds[1][1]) > tol) {
    fl.problems.push(
      `southern tip / Keys extent lost: ${south.toFixed(1)} vs source ${srcBounds[1][1].toFixed(1)}`,
    );
  }
  if (fl.rings < 2) {
    fl.problems.push(`Keys dropped entirely: only ${fl.rings} ring(s) kept`);
  }
}

// ---------------------------------------------------------------------------
// Locations map extras: county mesh, Hillsborough, marker verification.
// All projected with fl.project, so they register exactly over the state.
// ---------------------------------------------------------------------------

/**
 * Florida's 67 county borders as ONE path.
 *
 * topojson.mesh with an a !== b filter returns interior borders only, so each
 * shared edge is emitted once rather than twice. Measured: 23.1KB as 67
 * polygons, 9.1KB as a raw mesh, and roughly 2.5KB simplified.
 *
 * These are not decoration on a criminal defense site. County lines are the
 * jurisdictional unit of the state courts, and a judicial circuit is a group of
 * counties. The reference design draws roads, which tell a defendant nothing.
 */
const flCountyGeoms = countiesTopo.objects.counties.geometries.filter((g) =>
  String(g.id).padStart(5, "0").startsWith("12"),
);
if (flCountyGeoms.length !== 67) {
  throw new Error(`expected 67 Florida counties, got ${flCountyGeoms.length}`);
}
const countyMesh = topojson.mesh(
  countiesTopo,
  { type: "GeometryCollection", geometries: flCountyGeoms },
  (a, b) => a !== b,
);

const countyLines = countyMesh.coordinates
  .map((line) =>
    line
      .map((c) => fl.project(c))
      .filter((q) => q && Number.isFinite(q[0]) && Number.isFinite(q[1])),
  )
  .filter((line) => line.length >= 2);

const lineLengths = countyLines.map((l) =>
  l.reduce((sum, p, i) => (i ? sum + Math.hypot(p[0] - l[i - 1][0], p[1] - l[i - 1][1]) : 0), 0),
);
const totalLineLength = lineLengths.reduce((a, b) => a + b, 0);
const countyPath = countyLines
  .map((line, i) =>
    simplifyRing(
      line,
      Math.max(2, Math.round((lineLengths[i] / totalLineLength) * COUNTY_POINT_BUDGET)),
    ).map((p) => [fmt(p[0]), fmt(p[1])]),
  )
  // Rounding collapses adjacent points on short borders. Drop the duplicates
  // rather than emitting zero-length segments.
  .map((line) => line.filter((p, i, a) => i === 0 || p[0] !== a[i - 1][0] || p[1] !== a[i - 1][1]))
  .filter((line) => line.length >= 2)
  .map(lineToPath)
  .join("");

/**
 * Centroids for the counties named on the circuit map.
 *
 * geoPath().centroid gives the area centroid of the projected polygon, which
 * for these compact counties lands where a label should sit. Computed here so
 * the label positions come from the same geometry as the borders rather than
 * being nudged by hand until they look right.
 */
const circuitCentroids = {};
{
  const cPath = geoPath(fl.project);
  for (const [fips, label] of Object.entries(CIRCUIT_COUNTIES)) {
    const f = topojson
      .feature(countiesTopo, countiesTopo.objects.counties)
      .features.find((x) => String(x.id) === fips);
    if (!f) throw new Error(`county ${fips} (${label}) not found`);
    const c = cPath.centroid(f);
    if (!Number.isFinite(c[0])) throw new Error(`bad centroid for ${label}`);
    circuitCentroids[fips] = { label, at: [fmt(c[0]), fmt(c[1])] };
  }
}

/** Hillsborough County, FIPS 12057. The 13th Judicial Circuit. */
const counties = topojson.feature(countiesTopo, countiesTopo.objects.counties);
const hillsboroughFeature = counties.features.find((f) => String(f.id) === "12057");
if (!hillsboroughFeature) throw new Error("Hillsborough (FIPS 12057) not found");
const hillsboroughPath = projectWith(hillsboroughFeature, fl.project, 70).join("");

/**
 * Every marker must land on land, and inside the locations crop.
 *
 * Neither was checked before. A marker that falls in the Gulf after
 * simplification is exactly the class of defect this pipeline exists to catch,
 * and a marker outside the crop would silently vanish from the section.
 */
const LOCATION_KEYS = [
  "brandon",
  "tampa",
  "stPete",
  "sarasota",
  "fortMyers",
  "naples",
  "orlando",
];
{
  const v = LOCATIONS_VIEW;
  for (const key of LOCATION_KEYS) {
    const p = fl.project(PLACES[key]);
    if (!p) {
      fl.problems.push(`marker ${key} failed to project`);
      continue;
    }
    const rounded = [fmt(p[0]), fmt(p[1])];
    if (!fl.ringsPts.some((ring) => pointInRing(rounded, ring))) {
      fl.problems.push(
        `marker ${key} at [${rounded}] is not on land in the simplified outline`,
      );
    }
    const m = LOCATIONS_MARGIN;
    if (
      rounded[0] < v.x + m ||
      rounded[0] > v.x + v.w - m ||
      rounded[1] < v.y + m ||
      rounded[1] > v.y + v.h - m
    ) {
      fl.problems.push(
        `marker ${key} at [${rounded}] is outside the locations crop ` +
          `[${v.x},${v.y} ${v.w}x${v.h}] with ${m}u margin`,
      );
    }
  }
}

console.log(
  `\ncounty mesh: ${countyLines.length} borders, ${(countyPath.length / 1024).toFixed(1)} KB` +
    `   hillsborough: ${(hillsboroughPath.length / 1024).toFixed(1)} KB`,
);

// ---------------------------------------------------------------------------
// Report and emit
// ---------------------------------------------------------------------------
console.log("\nshape             rings  points   max dev   p95 dev   inline");
console.log("---------------------------------------------------------------");
for (const s of shapes) {
  console.log(
    `${s.name.padEnd(17)} ${String(s.rings).padStart(5)}  ${String(s.points).padStart(6)}` +
      `  ${s.deviationPct.toFixed(3).padStart(7)}%  ${s.p95Pct.toFixed(3).padStart(7)}%` +
      `  fwd ${((s.dev.maxForward / 800) * 100).toFixed(2)}% rev ${((s.dev.maxReverse / 800) * 100).toFixed(2)}%` +
      `  ${(s.bytes / 1024).toFixed(1).padStart(5)} KB`,
  );
}

const failed = shapes.filter((s) => s.problems.length);
if (failed.length) {
  console.error("\nFAILED CHECKS");
  for (const s of failed) {
    for (const p of s.problems) console.error(`  ${s.name}: ${p}`);
  }
  process.exit(1);
}

const marker = (shape, place) => {
  const p = shape.project(PLACES[place]);
  return p ? `[${fmt(p[0])}, ${fmt(p[1])}]` : "null";
};

const contextMarker = (shape, place) => {
  const p = shape.project(CONTEXT_PLACES[place]);
  return p ? `[${fmt(p[0])}, ${fmt(p[1])}]` : "null";
};

const out = `// GENERATED FILE. Do not edit.
// Run: node scripts/build-maps.mjs
//
// Geometry from us-atlas, pre-built TopoJSON from the U.S. Census Bureau
// cartographic boundary files (public domain). Projected with d3-geo Albers,
// simplified with Douglas-Peucker, and verified against a deviation budget of
// a ${MAX_GENERALIZATION_PCT}% generalization budget and a ${MAX_INVENTION_PCT}%
// invention budget, plus protected-feature checks.

export type MapShape = {
  viewBox: string;
  paths: string[];
  markers: Record<string, [number, number] | null>;
  /** Interior county borders as one path. Florida only. */
  counties?: string;
  /** Hillsborough County, the 13th Judicial Circuit. Florida only. */
  hillsborough?: string;
  /** Faint context place names. Florida only. */
  context?: Record<string, [number, number] | null>;
};

/** Florida, Albers conic tuned to the state's latitudes. */
export const florida: MapShape = {
  viewBox: "0 0 ${W} 620",
  paths: ${JSON.stringify(shapes[0].paths, null, 2)},
  /**
   * All 67 county borders as one path, interior edges drawn once each.
   *
   * Lives on \`florida\` rather than on the locations crop because it is a
   * property of the state, not of that framing, and both the locations section
   * and the state silo illustration draw it. Same projection as \`paths\`, so it
   * registers exactly against any viewBox cut from this space.
   */
  counties: ${JSON.stringify(countyPath)},
  hillsborough: ${JSON.stringify(hillsboroughPath)},
  /** Faint place names for scale. Not claims. See CONTEXT_PLACES. */
  context: {
${Object.keys(CONTEXT_PLACES)
  .map((k) => `    ${k}: ${contextMarker(shapes[0], k)},`)
  .join("\n")}
  },
  markers: {
    hillsborough: ${marker(shapes[0], "hillsborough")},
    tampa: ${marker(shapes[0], "tampa")},
    orlando: ${marker(shapes[0], "orlando")},
    fortMyers: ${marker(shapes[0], "fortMyers")},
  },
};

/**
 * Florida drawn in the US frame, so it registers exactly over \`usa\`.
 * Lets the federal illustration locate the state without a second projection.
 */
export const floridaInUsa: string[] = ${JSON.stringify(
  projectWith(florida, shapes[1].project, 90),
  null,
  2,
)};

/**
 * The locations map: same projection and same outline as \`florida\`, cropped to
 * the peninsula so the markers are legible.
 *
 * IMPORTANT. These are SERVICE AREAS, not offices. The firm has one published
 * office, Brandon, which is why it is emitted separately. A section that
 * presents the other six as offices violates Rule 4-7.12. See
 * docs/build/LOCATIONS-MAP-PLAN.md Section 2.
 */
export const floridaLocations = {
  viewBox: "${LOCATIONS_VIEW.x} ${LOCATIONS_VIEW.y} ${LOCATIONS_VIEW.w} ${LOCATIONS_VIEW.h}",
  /** The state outline, identical to \`florida.paths\`, just framed differently. */
  paths: florida.paths,
  counties: florida.counties,
  hillsborough: florida.hillsborough,
  /** The firm's only published office. */
  office: ${marker(shapes[0], "brandon")} as [number, number],
  /** Service areas. Keys join to \`serviceAreas\` in src/lib/site.ts. */
  places: {
${LOCATION_KEYS.filter((k) => k !== "brandon")
  .map((k) => `    ${k}: ${marker(shapes[0], k)} as [number, number],`)
  .join("\n")}
  },
};

/**
 * The circuit map: same projection and outline, cropped to the 13th Judicial
 * Circuit and its neighbours, for the state silo illustration.
 */
export const floridaCircuit = {
  viewBox: "${CIRCUIT_VIEW.x} ${CIRCUIT_VIEW.y} ${CIRCUIT_VIEW.w} ${CIRCUIT_VIEW.h}",
  paths: florida.paths,
  counties: florida.counties,
  hillsborough: florida.hillsborough,
  office: ${marker(shapes[0], "brandon")} as [number, number],
  /** County labels, at projected area centroids. */
  labels: [
${Object.values(circuitCentroids)
  .map((c) => `    { label: ${JSON.stringify(c.label)}, at: [${c.at[0]}, ${c.at[1]}] as [number, number] },`)
  .join("\n")}
  ],
};

/** United States including Alaska and Hawaii as Albers USA insets. */
export const usa: MapShape = {
  viewBox: "0 0 ${W} 500",
  paths: ${JSON.stringify(shapes[1].paths, null, 2)},
  markers: {
    tampa: ${marker(shapes[1], "tampa")},
    orlando: ${marker(shapes[1], "orlando")},
    fortMyers: ${marker(shapes[1], "fortMyers")},
  },
};

`;

mkdirSync("src/components/cases/generated", { recursive: true });
writeFileSync("src/components/cases/generated/map-paths.ts", out);

// Raw source geometry, for the preview overlay ONLY. Projected and rounded,
// but never simplified and never ring-filtered. This is the ground truth the
// shipped paths are checked against, so any distortion is visible rather than
// argued about. Not imported by any shipped component.
const rawRings = (feature, proj) => {
  const geom = feature.geometry ?? feature;
  const polys = geom.type === "MultiPolygon" ? geom.coordinates : [geom.coordinates];
  const out = [];
  for (const poly of polys) {
    for (const ring of poly) {
      const pts = [];
      for (const c of ring) {
        const q = proj(c);
        if (q && Number.isFinite(q[0]) && Number.isFinite(q[1]))
          pts.push([fmt(q[0]), fmt(q[1])]);
      }
      if (pts.length >= 4) out.push(ringToPath(pts));
    }
  }
  return out;
};

const rawFl = rawRings(florida, shapes[0].project);
const rawUs = rawRings(nation, shapes[1].project);

writeFileSync(
  "src/components/cases/generated/map-source.ts",
  `// GENERATED. Unsimplified, unfiltered source geometry from us-atlas.
// Preview overlay only. Never import this into a shipped component.
export const rawFlorida: string[] = ${JSON.stringify(rawFl, null, 2)};
export const rawUsa: string[] = ${JSON.stringify(rawUs, null, 2)};
`,
);
console.log(
  `raw source: florida ${rawFl.length} rings, usa ${rawUs.length} rings`,
);
console.log("\nwrote src/components/cases/generated/map-paths.ts");
console.log("all checks passed\n");
