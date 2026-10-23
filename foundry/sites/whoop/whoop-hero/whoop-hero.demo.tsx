import { WhoopHero, type WhoopHeroProps } from "./whoop-hero";

export const heroSample: WhoopHeroProps = {
  badge: { title: "Give someone a stronger year", brand: "Kairos" },
  href: "#",
  label: "See the autumn membership offer",
};

export default function Demo() {
  return <WhoopHero {...heroSample} />;
}
