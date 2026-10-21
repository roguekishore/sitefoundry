import { MarryandbrideHero, type MarryandbrideHeroProps } from "./marryandbride-hero";

export const heroSample: MarryandbrideHeroProps = {
  eyebrow: "Knitted by hand for the aisle",
  title: "Warm hands, soft vows",
  cta: { label: "Shop now", href: "#shop" },
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <MarryandbrideHero {...heroSample} />
      <div className="relative z-10 h-svh bg-background" />
    </div>
  );
}
