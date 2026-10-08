"use client";

import { useEffect } from "react";

/**
 * Opens and scrolls to the <details> element named by the URL fragment (a
 * common question linked from site search, D76), on arrival and on a jump
 * within the page. Renders nothing.
 */
export default function OpenFromHash() {
  useEffect(() => {
    const fromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const el = id ? document.getElementById(id) : null;
      if (!(el instanceof HTMLDetailsElement)) return;
      el.open = true;
      window.requestAnimationFrame(() => el.scrollIntoView({ block: "start" }));
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    window.addEventListener("site:hash", fromHash);
    return () => {
      window.removeEventListener("hashchange", fromHash);
      window.removeEventListener("site:hash", fromHash);
    };
  }, []);
  return null;
}
