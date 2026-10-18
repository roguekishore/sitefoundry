import { HalodentalHero, type HalodentalHeroProps } from "./halodental-hero";

export const heroSample: HalodentalHeroProps = {
  displayWordmark: "Velo",
  tagline: "Clarity In Sight",
  videoCta: {
    label: "Watch the film",
    href: "#film",
  },
};

export default function Demo() {
  return <HalodentalHero {...heroSample} />;
}
