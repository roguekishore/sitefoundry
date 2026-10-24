// Sample content lives here (gallery only); the page reuses it. Halden Orbital Works is made up.
import type { VardaHeroProps } from "./varda-hero";
import { VardaHero } from "./varda-hero";

export const heroSample: VardaHeroProps = {
  title: ["Grown aloft,", "landed home"],
  lead: "Halden is an orbital chemistry company that grows crystals and tissue in free fall, then flies them back to labs on the ground.",
  links: [
    { label: "Defense", href: "#" },
    { label: "Pharma", href: "#" },
    { label: "Research labs", href: "#" },
  ],
};

export default function Demo() {
  return <VardaHero {...heroSample} />;
}
