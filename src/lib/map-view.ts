/**
 * The fixed map views, and the Web Mercator maths for placing a point on one.
 *
 * Shared by scripts/build-locations-map.mts, which draws the base map for each
 * view, and LocationsMap, which places the pins and labels over it. Both
 * project through `toPixel` below, so a pin lands on the coastline the base
 * map draws; if they ever used different maths every pin would be wrong. One
 * table, one function.
 *
 * D91: these used to be framings for a Mapbox static image. The base maps are
 * now drawn from Census and Natural Earth geometry at build time, so the site
 * needs no map token and makes no request to a map provider.
 */

export type MapView = {
  lat: number;
  lon: number;
  /** Web Mercator zoom on 256px tiles. Fractional zooms are fine. */
  zoom: number;
  /** The view's own units: the SVG viewBox is 0 0 width height. */
  width: number;
  height: number;
};

export const MAP_VIEWS = {
  /**
   * Home, desktop. Framed like the reference: Gainesville at the top, Naples
   * near the bottom, the Gulf on the left where the panel dissolves into the
   * page, the Atlantic coast on the right.
   *
   * WIDER THAN ANY PANEL IT FILLS, on purpose. The map covers its panel
   * (slice), so a panel wider than the map's shape would crop it top and
   * bottom and lose Gainesville and Naples on a wide screen. Drawn at 1400
   * wide, every panel from 1024px to 1920px is narrower in shape than the
   * map, so the full height always shows and a wider screen just shows more
   * Gulf and Atlantic.
   */
  desktop: { lat: 27.85, lon: -81.8, zoom: 7.9, width: 1400, height: 760 },
  /**
   * Home, phone and tablet: tighter on the Gulf coast, Orlando to Naples.
   * Wide for the same reason, for the 30rem-tall panel on a tablet.
   */
  mobile: { lat: 27.15, lon: -81.95, zoom: 7.5, width: 760, height: 480 },
  /**
   * Tampa Bay and the 13th Judicial Circuit, for the state hub illustration,
   * close enough that the county lines the copy describes are legible.
   */
  circuit: { lat: 27.93, lon: -82.36, zoom: 9.35, width: 620, height: 590 },
  /**
   * D96. The whole state, panhandle to Keys, for the federal hub: the Middle
   * District shaded and its five division seats marked. Same box as circuit.
   */
  district: { lat: 27.75, lon: -83.75, zoom: 6.72, width: 620, height: 590 },
  /**
   * D96. The same framing for the white-collar hub, where a case can be
   * charged in either court: the Middle District light, Hillsborough County
   * dark.
   */
  whitecollar: { lat: 27.75, lon: -83.75, zoom: 6.72, width: 620, height: 590 },
} satisfies Record<string, MapView>;

export type MapVariant = keyof typeof MAP_VIEWS;

const TILE = 256;

function mercator(lat: number, lon: number, zoom: number): [number, number] {
  const world = TILE * Math.pow(2, zoom);
  const s = Math.sin((lat * Math.PI) / 180);
  return [
    ((lon + 180) / 360) * world,
    (0.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI)) * world,
  ];
}

/** A lat/lon as x, y in the view's own units (its viewBox). */
export function toPixel(lat: number, lon: number, view: MapView): [number, number] {
  const [x, y] = mercator(lat, lon, view.zoom);
  const [cx, cy] = mercator(view.lat, view.lon, view.zoom);
  return [x - cx + view.width / 2, y - cy + view.height / 2];
}

/** The inverse, for the build script's bounding box. */
export function toLatLon(x: number, y: number, view: MapView): [number, number] {
  const world = TILE * Math.pow(2, view.zoom);
  const [cx, cy] = mercator(view.lat, view.lon, view.zoom);
  const wx = x + cx - view.width / 2;
  const wy = y + cy - view.height / 2;
  const lon = (wx / world) * 360 - 180;
  const lat = (Math.atan(Math.sinh(Math.PI * (1 - (2 * wy) / world))) * 180) / Math.PI;
  return [lat, lon];
}
