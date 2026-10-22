import { RhoReveal } from "./rho-reveal";

export default function Demo() {
  return (
    <div className="grid gap-5 bg-background px-gutter py-section sm:grid-cols-3">
      {[0, 1, 2].map((step) => (
        <RhoReveal key={step} step={step} className="h-56 rounded-lg bg-card" >
          <span className="sr-only">Card {step + 1}</span>
        </RhoReveal>
      ))}
    </div>
  );
}
