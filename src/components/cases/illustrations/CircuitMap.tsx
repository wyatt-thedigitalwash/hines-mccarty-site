import LocationsMap from "@/components/home/LocationsMap";

/**
 * The state silo illustration: Tampa Bay on a real tile map, with the office.
 *
 * Same component and the same provider as the home page, at a closer view. It
 * used to be generated SVG geometry with the county boundaries drawn in, which
 * was a more interesting drawing and not what was asked for.
 *
 * [OPEN] The generated version tinted Hillsborough and named the surrounding
 * counties, which said something the tiles do not: that state jurisdiction is
 * drawn at county level, which is what the copy beside it is about. Putting
 * that back on top of the tiles means a GeoJSON overlay on the static image.
 * Not built, because it was not asked for.
 */
export default function CircuitMap({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <LocationsMap variant="circuit" />
    </div>
  );
}
