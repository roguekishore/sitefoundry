import { ZoeHero, type ZoeHeroProps } from "./zoe-hero";

export const heroSample: ZoeHeroProps = {
  titleLines: ["Feed your gut.", "Feel better."],
  subtitle: "Eat more of what you love and feel lighter for it.",
  cta: { label: "Start now", href: "#" },
};

export default function Demo() {
  return <ZoeHero {...heroSample} />;
}
