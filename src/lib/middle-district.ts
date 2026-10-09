/**
 * The Middle District of Florida's divisions and counties, D96.
 *
 * Source: M.D. Fla. Local Rule 1.04(a), in the amended Local Rules effective
 * November 1, 2025 (flmd.uscourts.gov/local-rules), checked 2026-10-09.
 * 35 counties in five divisions. Note Hernando is in the Ocala Division, not
 * Tampa.
 *
 * One list, read by the federal hub's division table (site.ts) and by the map
 * build (scripts/build-locations-map.mts), so the table and the shaded map
 * cannot disagree. County names are as the Census files spell them.
 */
export type Division = {
  name: "Tampa" | "Orlando" | "Jacksonville" | "Ocala" | "Fort Myers";
  counties: string[];
  /** The division's seat, for the map marker. City centre. */
  lat: number;
  lon: number;
};

export const middleDistrict: Division[] = [
  {
    name: "Tampa",
    counties: ["Hardee", "Hillsborough", "Manatee", "Pasco", "Pinellas", "Polk", "Sarasota"],
    lat: 27.9506,
    lon: -82.4572,
  },
  {
    name: "Orlando",
    counties: ["Brevard", "Orange", "Osceola", "Seminole", "Volusia"],
    lat: 28.5383,
    lon: -81.3792,
  },
  {
    name: "Jacksonville",
    counties: [
      "Baker", "Bradford", "Clay", "Columbia", "Duval", "Flagler",
      "Hamilton", "Nassau", "Putnam", "St. Johns", "Suwannee", "Union",
    ],
    lat: 30.3322,
    lon: -81.6557,
  },
  {
    name: "Ocala",
    counties: ["Citrus", "Hernando", "Lake", "Marion", "Sumter"],
    lat: 29.1872,
    lon: -82.1401,
  },
  {
    name: "Fort Myers",
    counties: ["Charlotte", "Collier", "DeSoto", "Glades", "Hendry", "Lee"],
    lat: 26.6406,
    lon: -81.8723,
  },
];

export const middleDistrictCounties = middleDistrict.flatMap((d) => d.counties);
