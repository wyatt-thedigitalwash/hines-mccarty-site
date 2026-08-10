import { proofItems } from "./previewData";

// Credential strip directly under the hero copy. Real facts only, thin
// dividers between items. The one item flagged needsConfirmation renders
// visibly (dashed, muted) so a human reviewer sees exactly what to confirm
// before this goes live, per the task's proof-strip rule.
export default function ProofStrip() {
  return (
    <div className="mt-8 flex flex-wrap gap-y-3 divide-x divide-white/15 border-t border-white/10 pt-6">
      {proofItems.map((item) => (
        <span
          key={item.label}
          className={`px-6 text-sm first:pl-0 ${
            item.needsConfirmation
              ? "border-b border-dashed border-bronze/50 pb-0.5 text-bronze/70"
              : "text-linen/70"
          }`}
        >
          {item.needsConfirmation ? `[NEEDS: ${item.label}]` : item.label}
        </span>
      ))}
    </div>
  );
}
