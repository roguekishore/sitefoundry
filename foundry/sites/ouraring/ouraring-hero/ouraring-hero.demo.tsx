// Sample content lives here (gallery only); the page reuses it. Tessel is made up.
import { OuraringHero, type OuraringHeroProps } from "./ouraring-hero";

export const heroSample: OuraringHeroProps = {
  title: "Listen to\nyour body",
  lede: "Follow your sleep, energy and recovery with a ring thinner than a coin.",
  cta: { label: "Shop the Loop", href: "#" },
};

export default function Demo() {
  return <OuraringHero {...heroSample} />;
}
