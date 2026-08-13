/**
 * The fixed views the map API will serve, and the Web Mercator maths for
 * placing a pin on one.
 *
 * Shared by the API route and the component on purpose: the pins are positioned
 * by projecting lat/lon into the same view the image was rendered at, so if the
 * two ever disagreed every pin would be wrong. One table, one source.
 */

export type MapView = {
  lat: number;
  lon: number;
  zoom: number;
  /** Logical pixels. The provider is asked for @2x of this. */
  width: number;
  height: number;
};

export const MAP_VIEWS = {
  /**
   * Framed to match the reference: the peninsula from roughly Gainesville down
   * to Naples, with the Gulf on the left where the panel dissolves into the
   * page. Tuned against the rendered section.
   */
  desktop: { lat: 27.75, lon: -81.85, zoom: 6.35, width: 900, height: 720 },
  /** Taller and tighter, for the stacked mobile layout. */
  mobile: { lat: 27.4, lon: -82.1, zoom: 6.15, width: 440, height: 420 },
  /**
   * Tampa Bay and the 13th Judicial Circuit, for the state silo illustration.
   * Zoomed enough that the county-level geography the copy describes is
   * actually legible.
   */
  circuit: { lat: 27.95, lon: -82.35, zoom: 8.2, width: 620, height: 590 },
} satisfies Record<string, MapView>;

export type MapVariant = keyof typeof MAP_VIEWS;

const TILE = 256;

/**
 * Project lat/lon to a pixel offset within a view.
 *
 * Standard Web Mercator, which is what the provider renders in, so a pin placed
 * with this lands exactly on the place the tiles draw. Returns percentages
 * rather than pixels so the pins stay correct when the image is scaled to fill
 * a container that is not exactly `width` by `height`.
 */
export function project(
  lat: number,
  lon: number,
  view: MapView,
): { left: number; top: number } {
  const worldSize = TILE * Math.pow(2, view.zoom);

  const x = (lon: number) => ((lon + 180) / 360) * worldSize;
  const y = (lat: number) => {
    const rad = (lat * Math.PI) / 180;
    return (
      (0.5 - Math.log((1 + Math.sin(rad)) / (1 - Math.sin(rad))) / (4 * Math.PI)) *
      worldSize
    );
  };

  const px = x(lon) - x(view.lon) + view.width / 2;
  const py = y(lat) - y(view.lat) + view.height / 2;

  return { left: (px / view.width) * 100, top: (py / view.height) * 100 };
}
