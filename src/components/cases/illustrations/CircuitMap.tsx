import LocationsMap from "@/components/home/LocationsMap";
import type { MapVariant } from "@/lib/map-view";

/**
 * The forum illustrations on the three criminal-defense hubs (D91, D96, D97):
 * the same drawn map as the home page, at three framings.
 *
 *   state         Tampa Bay, county lines and names: state jurisdiction is
 *                 drawn at county level.
 *   federal       The whole state, the Middle District's 35 counties shaded,
 *                 its five division courthouses marked.
 *   white-collar  The whole state, the Middle District light and
 *                 Hillsborough dark, because these cases are charged in
 *                 either court.
 *
 * Shapes. `bleed`, below lg (D99): first in the section, edge to edge, fading
 * into the page above and below, the key under it, like the home map on a
 * phone. `box`: the whole view in a fixed 21:20 box, every edge fading. `panel`, from lg: the view filling the right
 * half of the section to the window edge, anchored right, dissolving into the
 * copy on its left and fading at top and bottom against the white sections
 * around it, the way the home map fills its side (client direction, D97).
 */
const fade = (mask: string) => ({ WebkitMaskImage: mask, maskImage: mask, WebkitMaskComposite: "source-in", maskComposite: "intersect" }) as const;

const BOX = fade(
  "linear-gradient(to right, transparent, black 7%, black 93%, transparent), linear-gradient(to bottom, transparent, black 7%, black 93%, transparent)",
);
const PANEL = fade(
  "linear-gradient(to right, transparent, black 14%), linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
);

type Props = { className?: string; shape?: "box" | "panel" | "bleed" };

/** D99: the phone map, edge to edge, fading into the page above and below. */
const BLEED = fade("linear-gradient(to bottom, transparent, black 12%, black 82%, transparent)");

/**
 * The key for the statewide maps. HTML rather than part of the drawing, so a
 * panel's crop can never cut it off: a small card in the panel's bottom-right
 * corner, under the box on a phone. Swatch colors match
 * scripts/build-locations-map.mts.
 */
const KEYS: Partial<Record<MapVariant, { swatch?: string; dot?: string; label: string }[]>> = {
  district: [
    { swatch: "#d6dde9", label: "Middle District of Florida" },
    { dot: "#101933", label: "Division courthouse" },
  ],
  whitecollar: [
    { swatch: "#b4c0d5", label: "Hillsborough County, state court" },
    { swatch: "#e1e6ef", label: "Middle District, federal court" },
  ],
};

function Key({ variant, className }: { variant: MapVariant; className: string }) {
  const items = KEYS[variant];
  if (!items) return null;
  return (
    <ul className={`space-y-2 font-heading text-xs text-navy/75 ${className}`}>
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-2.5">
          {item.swatch ? (
            <span className="h-3.5 w-3.5 shrink-0 border border-navy/15" style={{ background: item.swatch }} />
          ) : (
            <span className="h-3 w-3 shrink-0 rounded-full border-2 border-white" style={{ background: item.dot }} />
          )}
          {item.label}
        </li>
      ))}
    </ul>
  );
}

function ForumMap({ variant, className = "", shape = "box" }: Props & { variant: MapVariant }) {
  if (shape === "panel") {
    return (
      <div className={`relative ${className}`}>
        <div className="h-full w-full" style={PANEL}>
          <LocationsMap variant={variant} anchor="right" />
        </div>
        <Key variant={variant} className="absolute bottom-16 right-10 bg-white/85 px-4 py-3" />
      </div>
    );
  }
  if (shape === "bleed") {
    return (
      <div className={className}>
        <div className="h-[26rem] w-full sm:h-[44rem]" style={BLEED}>
          <LocationsMap variant={variant} />
        </div>
        <Key variant={variant} className="mt-2 px-6" />
      </div>
    );
  }
  return (
    <div className={className}>
      <div className="aspect-[21/20] w-full" style={BOX}>
        <LocationsMap variant={variant} />
      </div>
      <Key variant={variant} className="mt-4" />
    </div>
  );
}

export default function CircuitMap(props: Props) {
  return <ForumMap variant="circuit" {...props} />;
}

export function DistrictMap(props: Props) {
  return <ForumMap variant="district" {...props} />;
}

export function WhiteCollarMap(props: Props) {
  return <ForumMap variant="whitecollar" {...props} />;
}
