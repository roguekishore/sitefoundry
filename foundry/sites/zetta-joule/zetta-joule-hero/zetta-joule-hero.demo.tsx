import { ZettaJouleHero, type ZettaJouleHeroProps } from "./zetta-joule-hero";

export const heroSample: ZettaJouleHeroProps = {
  lead: "Heating",
  middle: "all",
  tail: "Industry",
  subtitle: "Steady heat and power to run a world of industry",
};

export default function Demo() {
  return <ZettaJouleHero {...heroSample} />;
}
