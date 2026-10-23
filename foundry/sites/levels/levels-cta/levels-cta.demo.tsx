import { LevelsCta, type LevelsCtaProps } from "./levels-cta";

export const ctaSample: LevelsCtaProps = {
  eyebrow: "Begin with Ballast",
  title: "Quit wondering. Start knowing.",
  lead: "Learn how meals land in your body, find what suits you, and add sensors, lab work and coaching whenever you want more.",
  action: { label: "Build my plan", href: "#" },
};

export default function Demo() {
  return <LevelsCta {...ctaSample} />;
}
