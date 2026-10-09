import LocationsMap from "@/components/home/LocationsMap";
import type { MapVariant } from "@/lib/map-view";

/**
 * The forum illustrations on the three criminal-defense hubs (D91, D96): the
 * same drawn map as the home page, at three framings.
 *
 *   state         Tampa Bay, county lines and names: state jurisdiction is
 *                 drawn at county level.
 *   federal       The whole state, the Middle District's 35 counties shaded,
 *                 its five division courthouses marked.
 *   white-collar  The whole state, the Middle District light and
 *                 Hillsborough dark, because these cases are charged in
 *                 either court.
 *
 * The edges fade into the page (client direction) rather than ending in a
 * box: two gradients, one per axis, intersected.
 */
const FADE = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 7%, black 93%, transparent), linear-gradient(to bottom, transparent, black 7%, black 93%, transparent)",
  maskImage:
    "linear-gradient(to right, transparent, black 7%, black 93%, transparent), linear-gradient(to bottom, transparent, black 7%, black 93%, transparent)",
  WebkitMaskComposite: "source-in",
  maskComposite: "intersect",
} as const;

function ForumMap({ variant, className = "" }: { variant: MapVariant; className?: string }) {
  return (
    <div className={className} style={FADE}>
      <LocationsMap variant={variant} />
    </div>
  );
}

export default function CircuitMap({ className }: { className?: string }) {
  return <ForumMap variant="circuit" className={className} />;
}

export function DistrictMap({ className }: { className?: string }) {
  return <ForumMap variant="district" className={className} />;
}

export function WhiteCollarMap({ className }: { className?: string }) {
  return <ForumMap variant="whitecollar" className={className} />;
}
