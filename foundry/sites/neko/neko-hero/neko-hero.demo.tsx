// Sample content lives here (gallery only); the page reuses it. Ardent Health is made up.
import { NekoHero, type NekoHeroProps } from "./neko-hero";

export const heroSample: NekoHeroProps = {
  title: "Every part of you, checked in one visit",
  cta: { label: "Explore the Ardent Body Check", href: "#check" },
};

export default function Demo() {
  return <NekoHero {...heroSample} />;
}
