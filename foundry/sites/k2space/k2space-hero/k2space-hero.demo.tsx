import type { K2spaceHeroProps } from "./k2space-hero";
import { K2spaceHero } from "./k2space-hero";

export const heroSample: K2spaceHeroProps = {
  title: "Lift Heavy",
};

export default function Demo() {
  return <K2spaceHero {...heroSample} />;
}
