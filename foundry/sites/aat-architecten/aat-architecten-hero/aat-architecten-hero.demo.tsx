import { AatArchitectenHero, type AatArchitectenHeroProps } from "./aat-architecten-hero";

export const heroSample: AatArchitectenHeroProps = {
  statement:
    "Quiet architecture for town halls, clinics and workshops: plans drawn around daylight, short routes and the people who use them every day.",
  scrollLabel: "scroll",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <AatArchitectenHero {...heroSample} revealDelay={0.2} />
      <div className="h-[60svh]" />
    </div>
  );
}
