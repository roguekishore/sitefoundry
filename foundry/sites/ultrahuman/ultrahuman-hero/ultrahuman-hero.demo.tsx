// Sample content lives here (gallery only); the page reuses it. Kinrise is a made-up company.
import { UltrahumanHero, type UltrahumanHeroProps } from "./ultrahuman-hero";

export const heroSample: UltrahumanHeroProps = {
  eyebrow: "Halo Max",
  title: "Quiet Force.",
  body: "Our strongest sensor and longest charge, in one band.",
  primary: { label: "Buy now", href: "#" },
  secondary: { label: "See more", href: "#" },
  mediaLabel: "Video of the band hovering over its charging case",
};

export default function Demo() {
  return <UltrahumanHero {...heroSample} />;
}
