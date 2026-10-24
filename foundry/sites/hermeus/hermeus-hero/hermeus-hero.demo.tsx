// Sample content lives here (gallery only); the page reuses it. Aldervane is made up.
import type { HermeusHeroProps } from "./hermeus-hero";
import { HermeusHero } from "./hermeus-hero";

export const heroSample: HermeusHeroProps = {
  headline: "Making Speed Ordinary. Soon.",
  mediaLabel: "Render of the test aircraft's tail and engine",
};

export default function Demo() {
  return <HermeusHero {...heroSample} />;
}
