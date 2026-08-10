import HeroVisual from "./HeroVisual";
import PreviewMockHeader from "./PreviewMockHeader";
import CTARow from "./CTARow";
import ProofStrip from "./ProofStrip";

// VARIANT B: The moment (accessible urgency, kept classy).
// Headline option rendered below: "When the charge is serious, the next
// call matters."
// Alternate headline considered, not rendered:
// "The next call you make can shape everything that follows."
//
// [NEEDS: "free consultation" and "24/7" would both plausibly strengthen this
// CTA, but neither claim is confirmed anywhere in the repo or SITE.md, so
// neither appears in the rendered copy below.]
export default function HeroVariantB() {
  return (
    <section>
      <PreviewMockHeader navLabel="Practice Areas" />
      <div className="bg-navy pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col-reverse lg:flex-row-reverse lg:items-stretch">
            <div className="relative z-10 flex w-full flex-col justify-center pb-10 lg:ml-[156px] lg:w-1/2 lg:max-w-[31.8125rem] lg:pb-0">
              <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-linen sm:text-6xl lg:text-7xl">
                When the charge is serious,{" "}
                <span className="text-bronze">the next call matters.</span>
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-linen/70">
                Hines &amp; McCarty defends state and federal criminal charges
                across Greater Tampa Bay from Brandon. Four attorneys, each
                focused on their own area, take every call directly.
              </p>

              <CTARow
                secondaryLabel="What happens next"
                secondaryHref="/guides/first-appearance-hillsborough-county"
              />
              <ProofStrip />
            </div>

            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
