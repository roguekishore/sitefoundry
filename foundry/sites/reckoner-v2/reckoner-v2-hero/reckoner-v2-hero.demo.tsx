// Sample content (gallery only); the page reuses it. The company is made up.
import { ReckonerV2Hero, type ReckonerV2HeroProps } from "./reckoner-v2-hero";

export const heroSample: ReckonerV2HeroProps = {
  title: "Patient credit, clearly reasoned",
  actions: [
    { label: "Our funds", href: "#funds", variant: "outline" },
    { label: "How we invest", href: "#approach", variant: "tint" },
  ],
  news: { label: "Caldergrove opens its second listed income fund", href: "#news" },
  scrollCue: { label: "Scroll", href: "#approach" },
  aside: "A Thornfield Holdings company",
};

export default function Demo() {
  return <ReckonerV2Hero {...heroSample} />;
}
