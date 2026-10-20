// Sample content lives here (gallery only); the page reuses it. The firm is made up.
import { ReckonerHero, type ReckonerHeroProps } from "./reckoner-hero";

export const heroSample: ReckonerHeroProps = {
  title: "Credit income, held to account",
  actions: [
    { label: "Our approach", href: "#strategies" },
    { label: "Our funds", href: "#funds" },
  ],
  scrollCue: { label: "Scroll", href: "#strategies" },
  sideLabel: "A Fieldstone Holdings company",
};

export default function Demo() {
  return <ReckonerHero {...heroSample} />;
}
