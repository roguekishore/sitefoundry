import { NewhaloHero, type NewhaloHeroProps } from "./newhalo-hero";

export const heroSample: NewhaloHeroProps = {
  wordmark: "Lumora",
  title: "Every smile, lit",
  play: { label: "Watch the film" },
};

export const productHeroSample: NewhaloHeroProps = {
  wordmark: "Lumen",
  title: "One instrument",
  titleSize: "xl",
  tone: "glow",
};

export default function Demo() {
  return <NewhaloHero {...heroSample} />;
}
