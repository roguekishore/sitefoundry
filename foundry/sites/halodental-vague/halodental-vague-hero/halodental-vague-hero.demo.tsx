import { HalodentalVagueHero, type HalodentalVagueHeroProps } from "./halodental-vague-hero";

export const heroSample: HalodentalVagueHeroProps = {
  wordmark: "Sola",
  title: "Clarity In Hand",
  videoCta: {
    label: "Play the video",
    href: "#video",
  },
};

export default function Demo() {
  return <HalodentalVagueHero {...heroSample} />;
}
