import { HalodentalHero, type HalodentalHeroProps } from "./halodental-hero";

export const heroSample: HalodentalHeroProps = {
  wordmark: "Sola",
  title: "Clarity In Hand",
  videoCta: {
    label: "Play the video",
    href: "#video",
  },
};

export default function Demo() {
  return <HalodentalHero {...heroSample} />;
}
