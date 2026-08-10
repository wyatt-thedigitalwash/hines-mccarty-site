// Preview-only copy of the live Hero.tsx visual block (arch-mask skyline
// video). Extracted so all three variants share the exact same imagery
// treatment without touching the live Hero.tsx or globals.css. Per the task
// spec this is a copy/structure/conversion exercise, not a restyle.
export default function HeroVisual() {
  return (
    <div className="relative w-full lg:flex lg:w-1/2 lg:justify-end">
      <div className="arch-mask arch-mask-flip video-fade relative -ml-6 aspect-[7/6] w-screen overflow-hidden lg:ml-0 lg:mr-[-2vw] lg:aspect-[100/59] lg:w-[56vw] lg:shrink-0">
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-navy via-charcoal to-bronze-soft/50" />
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
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
      </div>
    </div>
  );
}
