// Sample content lives here (gallery only); the page reuses it. Sorrel Power is made up.
import { OnEnergyHero, type OnEnergyHeroProps } from "./on-energy-hero";

export const heroSample: OnEnergyHeroProps = {
  title: "Steady Power for\nthe Compute Age.",
  lede: "Keel is a medium-voltage power buffer that keeps compute campuses calm through grid faults, and keeps the grid calm through compute surges.",
  promo: {
    label: "Meet Keel",
    text: "One cabinet between the substation and the racks, rated for the whole campus.",
    href: "#",
  },
};

export default function Demo() {
  return (
    <div className="bg-background">
      <OnEnergyHero {...heroSample} />
      <div className="h-svh bg-primary" />
    </div>
  );
}
