import { GalaxyHero, type GalaxyHeroProps } from "./galaxy-hero";

export const heroSample: GalaxyHeroProps = {
  lines: [
    [{ text: "Money moves " }, { tile: true }, { text: " at the" }],
    [{ text: "speed of " }, { tile: true }, { text: " " }, { text: "software", tone: "highlight" }],
  ],
  mobileLines: [
    [{ text: "Money " }, { tile: true }, { text: " moves" }],
    [{ text: "at the speed" }],
    [{ text: "of " }, { tile: true }, { text: " " }, { text: "software.", tone: "highlight" }],
  ],
  lead: "Brightrail builds and backs the two systems the next economy runs on: settlement that clears onchain in moments, and the compute capacity that keeps AI models fed.",
  actions: [
    { label: "Clearing money", href: "#", tone: "chart-1" },
    { label: "Running compute", href: "#", tone: "chart-2" },
  ],
};

export default function Demo() {
  return <GalaxyHero {...heroSample} />;
}
