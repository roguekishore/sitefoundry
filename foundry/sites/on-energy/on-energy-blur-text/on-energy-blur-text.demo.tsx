import { OnEnergyBlurText } from "./on-energy-blur-text";

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-[70vh] text-foreground">
      <OnEnergyBlurText text={"Built for one load:\nthe compute campus."} className="font-display text-[1.8rem]/[1.15] font-light tracking-[-0.04em] lg:text-4xl/[1.17]" />
      <OnEnergyBlurText as="p" text="Field notes" className="mt-[40vh] font-display text-5xl font-light tracking-[-0.04em]" />
    </div>
  );
}
