import HeroVisual from "./HeroVisual";
import PreviewMockHeader from "./PreviewMockHeader";
import CTARow from "./CTARow";
import ProofStrip from "./ProofStrip";

// VARIANT C: The trial line (promote the differentiator).
// Headline option rendered below: "Prepared for trial. Every time."
// Alternate headline considered, not rendered:
// "Ready for trial from day one."
//
// Subcopy explains a general negotiation dynamic (trial readiness affects how
// a case is treated) without promising any outcome for the reader's specific
// case, to stay clear of Fla. Bar R. 4-7.13.
//
// [NEEDS: "free consultation" and "24/7" would both plausibly strengthen this
// CTA, but neither claim is confirmed anywhere in the repo or SITE.md, so
// neither appears in the rendered copy below.]
export default function HeroVariantC() {
  return (
    <section>
      <PreviewMockHeader navLabel="Practice Areas" />
      <div className="bg-navy pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col-reverse lg:flex-row-reverse lg:items-stretch">
            <div className="relative z-10 flex w-full flex-col justify-center pb-10 lg:ml-[156px] lg:w-1/2 lg:max-w-[31.8125rem] lg:pb-0">
              <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-linen sm:text-6xl lg:text-7xl">
                Prepared for trial.{" "}
                <span className="text-bronze">Every time.</span>
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-linen/70">
                Prosecutors and opposing counsel handle a case differently
                when they know a firm is ready to take it to trial. That
                readiness shapes how negotiations start, long before a
                courtroom is ever needed. Hines &amp; McCarty prepares every
                state and federal matter the same way, from the first meeting
                forward.
              </p>

              <CTARow
                secondaryLabel="How we defend a case"
                secondaryHref="/capabilities"
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
