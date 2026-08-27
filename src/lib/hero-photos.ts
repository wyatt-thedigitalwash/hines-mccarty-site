import type { HeroPhoto } from "@/components/HeroPhotoLayer";
import type { InjuryPage } from "@/lib/site";

/**
 * Which photograph each hero carries.
 *
 * ONE MODULE RATHER THAN A LITERAL PER PAGE so that replacing an image, or
 * splitting one that is currently shared, is an edit here and not a search.
 *
 * THE CRIMINAL SIDE IS STILL ON STOCK, and it is the same picture on every one
 * of its pages. SITE_HERO_PHOTO is /backgrounds/yes3.jpg, the downtown Tampa
 * skyline. It is the one being used because the other four files in that folder
 * are a shelf of GERMAN statute books (NJW, BGB, StGB, ZPO) and the gilded
 * Justice on the Old Bailey in London, which are stock photographs of a
 * different country's legal system. This one is at least the city the firm
 * practises in. It is a placeholder until real photography arrives, not a
 * choice anyone made.
 *
 * THE PERSONAL INJURY PAGES ARE NOT. Those three are the client's own files,
 * one per subject, delivered 2026-08-27.
 */

/** The shared placeholder on the criminal-side and firm pages. */
export const SITE_HERO_PHOTO: HeroPhoto = { src: "/backgrounds/yes3.jpg" };

/** The personal injury hub. */
export const INJURY_HUB_PHOTO: HeroPhoto = {
  src: "/personal-injury/HinesMcCarty_PersonalInjury.jpg",
};

/**
 * Keyed by PILLAR slug only. Spokes resolve through their parent below, so a
 * page about FMCSA violations gets the truck photograph without needing its own
 * entry, and adding a spoke never means remembering to add an image with it.
 */
const INJURY_PILLAR_PHOTOS: Record<string, HeroPhoto> = {
  "car-accidents": {
    src: "/personal-injury/HinesMcCarty_CarAccidentClaims.jpg",
  },
  "truck-accidents": {
    src: "/personal-injury/HinesMcCarty_TruckCommercialAccidentClaims.jpg",
  },
};

/**
 * A spoke inherits its pillar's photograph; anything unmatched falls back to
 * the hub's. The fallback is the reason this returns a HeroPhoto rather than
 * `HeroPhoto | undefined`: a new injury page should arrive with a picture in
 * its hero, not a bare navy rectangle nobody notices for a month.
 */
export function injuryHeroPhoto(page: InjuryPage): HeroPhoto {
  return (
    INJURY_PILLAR_PHOTOS[page.slug] ??
    (page.parent ? INJURY_PILLAR_PHOTOS[page.parent] : undefined) ??
    INJURY_HUB_PHOTO
  );
}
