import type { SaronicHeroProps } from "./saronic-hero";
import { SaronicHero } from "./saronic-hero";

export const heroSample: SaronicHeroProps = {
  eyebrow: "Autonomy for open water",
  title: "Building crewless vessels that keep watch on every coast, in any weather.",
  wordmark: "Ternway",
  actions: [
    { label: "What they do", href: "#fleet" },
    { label: "Hull specs", shortLabel: "Specs", href: "#" },
  ],
};

export default function Demo() {
  return <SaronicHero {...heroSample} />;
}
