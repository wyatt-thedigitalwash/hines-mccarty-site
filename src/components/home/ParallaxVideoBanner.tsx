"use client";

import { useEffect, useRef } from "react";

// Thin full-bleed video ribbon with a genuine scroll-linked parallax. Note:
// background-attachment: fixed (used for the Testimonials/Tools parallax
// images) only applies to CSS background-image, not <video> elements, so
// that trick doesn't work here. Combining position: fixed with an
// overflow-hidden ancestor also doesn't reliably clip a video to a strip
// (a fixed element's containing block is the viewport, not the ancestor,
// unless the ancestor has a transform, which would remove the fixed
// positioning as well). A small scroll listener translating the oversized
// video by a fraction of scroll distance is the standard, reliable way to
// get this effect for video specifically.
export default function ParallaxVideoBanner() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const update = () => {
      const wrapper = wrapperRef.current;
      const video = videoRef.current;
      if (!wrapper || !video) return;
      const rect = wrapper.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const stripCenter = rect.top + rect.height / 2;
      // Roughly -0.5..0.5 while the strip crosses the viewport.
      const progress = (viewportCenter - stripCenter) / window.innerHeight;
      const shiftPx = progress * 80;
      video.style.transform = `translateY(calc(-50% + ${shiftPx}px))`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative h-48 w-full overflow-hidden bg-navy md:h-64 lg:h-80"
    >
      <video
        ref={videoRef}
        className="absolute inset-x-0 top-1/2 h-[170%] w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/dgbiatexy/video/upload/v1784816947/HinesLaw_Hero2_kqhs7w.mp4"
          type="video/mp4"
        />
      </video>
      <div aria-hidden className="absolute inset-0 bg-navy/40" />
    </div>
  );
}
