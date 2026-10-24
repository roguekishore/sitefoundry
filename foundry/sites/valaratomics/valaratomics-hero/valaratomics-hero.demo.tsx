// Sample content (gallery only); the page reuses it. Tallgrass Fission is made up.
import { ValaratomicsHero, type ValaratomicsHeroProps } from "./valaratomics-hero";

export const heroSample: ValaratomicsHeroProps = {
  title: ["Power from", "the prairie"],
  body: "Tallgrass Fission builds small salt-cooled reactors that sell steam heat and power to farms, mines and fertiliser plants.",
  cta: { label: "Talk to us", href: "#contact" },
};

export default function Demo() {
  return <ValaratomicsHero {...heroSample} />;
}
