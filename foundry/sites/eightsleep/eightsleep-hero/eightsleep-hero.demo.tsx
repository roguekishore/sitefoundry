// Sample content lives here (gallery only); the page reuses it. Tidewell and the Mantle are made up.
import { EightsleepHero, type EightsleepHeroProps } from "./eightsleep-hero";

export const heroSample: EightsleepHeroProps = {
  eyebrow: "New",
  title: "Mantle 4",
  lede: "The quietest, coolest version of our climate bed yet",
  price: "Now from $2,149",
  cta: { label: "Shop Mantle 4", href: "#" },
  rating: { score: 4.6, caption: "38,000+ reviews of the Mantle", label: "4.6 out of 5 stars" },
};

export default function Demo() {
  return <EightsleepHero {...heroSample} />;
}
