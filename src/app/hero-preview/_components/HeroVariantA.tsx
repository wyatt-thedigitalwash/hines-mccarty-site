import HeroVisual from "./HeroVisual";
import PreviewMockHeader from "./PreviewMockHeader";
import CTARow from "./CTARow";
import ProofStrip from "./ProofStrip";

// VARIANT A: Institutional (refine what exists).
// Bets on the upmarket, discreet, federal-and-white-collar reader. Keeps the
// current headline; paragraph tightened to fit 3 lines on desktop.
//
// [NEEDS: "free consultation" and "24/7" would both plausibly strengthen this
// CTA, but neither claim is confirmed anywhere in the repo or SITE.md, so
// neither appears in the rendered copy below.]
export default function HeroVariantA() {
  return (
    <section>
      <PreviewMockHeader navLabel="Capabilities" />
      <div className="bg-navy pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col-reverse lg:flex-row-reverse lg:items-stretch">
            <div className="relative z-10 flex w-full flex-col justify-center pb-10 lg:ml-[156px] lg:w-1/2 lg:max-w-[31.8125rem] lg:pb-0">
              <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-linen sm:text-6xl lg:text-7xl">
                Serious charges.{" "}
                <span className="text-bronze">Serious defense.</span>
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-linen/70">
                Hines &amp; McCarty defends state and federal criminal charges
                across Greater Tampa Bay from Brandon. Four attorneys, each
                focused on their own area, prepared to take a case to trial
                when that is what it requires.
              </p>

              <CTARow secondaryLabel="Meet the attorneys" secondaryHref="/attorneys" />
              <ProofStrip />
            </div>

            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
