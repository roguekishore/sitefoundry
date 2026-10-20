import { PlumeformV2Hero, type PlumeformV2HeroProps } from "./plumeform-v2-hero";

export const heroSample: PlumeformV2HeroProps = {
  title: "Ask questions people want to finish.",
  lead: "Write a questionnaire for your customers, your staff or your next study. Begin from a draft, branch where it matters, and watch replies come in as they happen.",
  cta: { label: "Try it free", href: "#start" },
  frameLabel: "A live questionnaire",
  frameNote: "Demo · replies are kept",
};

export default function Demo() {
  return <PlumeformV2Hero {...heroSample} />;
}
