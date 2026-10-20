import { initBotId } from "botid/client/core";

/**
 * D139: Vercel BotID on every page that carries a contact form. The forms
 * post (as Next.js server actions) to the page they are on, so these are the
 * paths to protect; the server action calls checkBotId().
 */
initBotId({
  protect: [
    "/contact",
    "/criminal-defense/state",
    "/criminal-defense/federal",
    "/criminal-defense/white-collar",
    "/personal-injury/car-accidents",
    "/personal-injury/truck-accidents",
  ].map((path) => ({ path, method: "POST" as const })),
});
