// Sample content (gallery only); the page reuses it. Kestrel Works is made up.
import { ArrowDown, ArrowRight } from "lucide-react";
import { HadrianHero, type HadrianHeroProps } from "./hadrian-hero";

export const heroSample: HadrianHeroProps = {
  title: ["The New Shape of", "Precision Industry"],
  text: "Self-running plants to bring hard making back home.",
  actions: [
    { label: "What we make", href: "#platform", icon: <ArrowDown strokeWidth={1.25} /> },
    { label: "Work at Kestrel", href: "#careers", icon: <ArrowRight strokeWidth={1.25} /> },
  ],
};

export default function Demo() {
  return <HadrianHero {...heroSample} />;
}
