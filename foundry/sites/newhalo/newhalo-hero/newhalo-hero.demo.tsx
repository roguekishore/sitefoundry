import { NewhaloHero, type NewhaloHeroProps } from "./newhalo-hero";

export const heroSample: NewhaloHeroProps = {
  wordmark: "Brio",
  title: "Every smile, lit",
  play: { label: "Watch the film" },
};

export const productHeroSample: NewhaloHeroProps = {
  wordmark: "Brio",
  title: "One instrument",
  titleSize: "xl",
  tone: "warm",
};

export default function Demo() {
  return <NewhaloHero {...heroSample} />;
}
