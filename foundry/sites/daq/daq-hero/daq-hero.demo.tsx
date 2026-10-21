import { DaqBackdrop } from "@foundry/daq-backdrop";
import { DaqHero, type DaqHeroProps } from "./daq-hero";

export const heroSample: DaqHeroProps = {
  lead: "We engineer",
  payoff: "Clarity.",
  intro: "Pipelines, models and agents. We plan, ship and keep up the systems a business decides with.",
  cta: { label: "See the stack", href: "#core" },
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <DaqBackdrop />
      <DaqHero {...heroSample} />
      <div className="relative h-svh" />
    </div>
  );
}
