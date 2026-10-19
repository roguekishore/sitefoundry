import { HalodentalVagueFlashHero, type HalodentalVagueFlashHeroProps } from "./halodental-vague-flash-hero";

export const heroSample: HalodentalVagueFlashHeroProps = {
  wordmark: "Sola",
  title: "Clarity In Hand",
  videoCta: {
    label: "Play the video",
    href: "#video",
  },
};

export default function Demo() {
  return <HalodentalVagueFlashHero {...heroSample} />;
}
