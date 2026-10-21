import { LunchlineHero, type LunchlineHeroProps } from "./lunchline-hero";

export const heroSample: LunchlineHeroProps = {
  id: "home",
  heading: "patient capital, built to last",
  lead: "a partnership of operators backing and growing small companies for decades, not quarters.",
  scrollHref: "#story",
  scrollLabel: "Scroll to our story",
};

export default function Demo() {
  return <LunchlineHero {...heroSample} />;
}
