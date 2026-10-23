import { LevelsHero, type LevelsHeroProps } from "./levels-hero";

export const heroSample: LevelsHeroProps = {
  eyebrow: "Metabolic care people keep coming back to",
  title: "Watch what every meal does to you.",
  lead: "Ballast shows how the way you eat, sleep and move lands in your body, so you can make changes that steady your energy, your hunger and your long-run health.",
  action: { label: "Build my plan", href: "#" },
  mediaLabel: "Film of a person at home with a glucose sensor",
};

export default function Demo() {
  return <LevelsHero {...heroSample} />;
}
