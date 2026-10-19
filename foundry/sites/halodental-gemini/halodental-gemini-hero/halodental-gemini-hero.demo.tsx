import { HalodentalGeminiHero, type HalodentalGeminiHeroProps } from "./halodental-gemini-hero";

export const heroSample: HalodentalGeminiHeroProps = {
  displayWordmark: "Velo",
  tagline: "Clarity In Sight",
  videoCta: {
    label: "Watch the film",
    href: "#film",
  },
};

export default function Demo() {
  return <HalodentalGeminiHero {...heroSample} />;
}
