import LocationsMap from "@/components/home/LocationsMap";

/**
 * The state silo illustration: Tampa Bay and the counties around it, with the
 * office (D91).
 *
 * Same component as the home page map, at a closer view. The base map is
 * drawn from Census geometry at build time, with the county lines in and the
 * counties named, because state jurisdiction is drawn at county level and
 * that is what the copy beside it is about.
 */
export default function CircuitMap({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <LocationsMap variant="circuit" />
    </div>
  );
}
