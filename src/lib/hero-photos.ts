import type { HeroPhoto } from "@/components/HeroPhotoLayer";
import type { InjuryPage } from "@/lib/site";

/**
 * Which photograph each hero carries.
 *
 * ONE MODULE RATHER THAN A LITERAL PER PAGE so that replacing an image, or
 * splitting one that is currently shared, is an edit here and not a search.
 *
 * TWO PAGES ARE STILL ON STOCK. SITE_HERO_PHOTO is /backgrounds/yes3.jpg, the downtown Tampa
 * skyline. It is the one being used because the other four files in that folder
 * are a shelf of GERMAN statute books (NJW, BGB, StGB, ZPO) and the gilded
 * Justice on the Old Bailey in London, which are stock photographs of a
 * different country's legal system. This one is at least the city the firm
 * practises in. It is a placeholder until real photography arrives, not a
 * choice anyone made.
 *
 * THE REST ARE NOT. Seven of the client's own files, one per subject: three
 * for personal injury, one for the criminal hub, and one each for case
 * results, resources and the about page. All delivered 2026-08-27.
 */

/**
 * The shared placeholder, now down to two pages: /attorneys and /contact.
 * Still waiting on real photography.
 */
export const SITE_HERO_PHOTO: HeroPhoto = { src: "/backgrounds/yes3.jpg" };

/**
 * The criminal defence hub at /criminal-defense.
 *
 * WHICH PAGE THIS IS. The file arrived named CriminalTrial and no route on the
 * site is called that, so this is the reading rather than a certainty: it is
 * the criminal counterpart to the personal injury hub, which is the page that
 * had just been given its own photograph. If the state silo at
 * /criminal-defense/state was meant instead, moving it is this one constant.
 */
export const CRIMINAL_HUB_PHOTO: HeroPhoto = {
  src: "/criminal-trial/HinesMcCarty_CriminalTrial.jpg",
};

/**
 * /about. It lives under public/team because that is the folder it arrived in,
 * alongside the two mock team photographs it is nothing like.
 */
export const ABOUT_PHOTO: HeroPhoto = {
  src: "/team/HinesMcCarty_About.jpg",
};

/** /results. */
export const CASE_RESULTS_PHOTO: HeroPhoto = {
  src: "/case-results/HinesMcCarty_CaseResults.jpg",
};

/** /resources. */
export const RESOURCES_PHOTO: HeroPhoto = {
  src: "/resources/HinesMcCarty_Resources.jpg",
};

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

/**
 * D112. The three criminal hubs' hero photographs, one per court. Empty until
 * the client supplies them (search terms given 2026-10-12: the Edgecomb
 * Courthouse for state, the Gibbons Courthouse for federal, a Tampa office
 * tower or documents for white-collar). A hub with none renders the plain
 * navy hero. Add a file under public/ and set `src` here; nothing else moves.
 */
export const SILO_HERO_PHOTOS: Partial<Record<"state" | "federal" | "white-collar", HeroPhoto>> = {};

/**
 * D121. The home hero's background video, and the still that shows first and
 * stays for anyone who has asked for reduced motion. The old Cloudinary clip
 * returned 401 (2026-10-13), so the slot is empty until the client's new clip
 * is ready: put an .mp4 under public/ (muted, 10 to 20 seconds, about 3 to 5
 * MB at 1080p) and set `src`; a `poster` frame from it is worth adding too.
 * With no video the hero is the navy gradient alone.
 */
export const HOME_HERO_VIDEO: { src?: string; poster?: string } = {};
