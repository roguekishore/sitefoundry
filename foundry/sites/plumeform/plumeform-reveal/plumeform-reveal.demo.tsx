// Gallery only: three cards that rise in one after another as they scroll into view.
import { PlumeformReveal } from "./plumeform-reveal";

export default function Demo() {
  return (
    <div className="mx-auto grid max-w-page gap-4 px-gutter py-section sm:grid-cols-3">
      {["First", "Second", "Third"].map((label, i) => (
        <PlumeformReveal key={label} step={i} className="rounded-2xl border border-border bg-card p-8 text-card-foreground">
          {label}
        </PlumeformReveal>
      ))}
    </div>
  );
}
