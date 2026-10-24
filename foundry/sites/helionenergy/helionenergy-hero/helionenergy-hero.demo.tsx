import type { HelionenergyHeroProps } from "./helionenergy-hero";
import { HelionenergyHero } from "./helionenergy-hero";

export const heroSample: HelionenergyHeroProps = {
  title: ["A small star", "for every city"],
};

export default function Demo() {
  return <HelionenergyHero {...heroSample} />;
}
