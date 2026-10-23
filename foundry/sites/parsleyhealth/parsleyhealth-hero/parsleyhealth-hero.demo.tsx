import type { ParsleyhealthHeroProps } from "./parsleyhealth-hero";
import { ParsleyhealthHero } from "./parsleyhealth-hero";

export const heroSample: ParsleyhealthHeroProps = {
  title: "Doctors who follow your symptoms back to the start",
  body: "Long visits, deep lab work and one care team that stays with you until you feel like yourself again.",
  primary: { label: "Start today", href: "#" },
  secondary: { label: "See plans", href: "#" },
  mediaLabel: "Portrait of a member",
};

export default function Demo() {
  return <ParsleyhealthHero {...heroSample} />;
}
