// Sample content (gallery only); the page reuses it. Fernlight is a made-up company.
import { ChartLine, Flag, FlaskConical } from "lucide-react";
import { GrowthbookV2Hero, type GrowthbookV2HeroProps } from "./growthbook-v2-hero";

export const heroSample: GrowthbookV2HeroProps = {
  title: "Test boldly. Release calmly.\nLearn as fast as you code.",
  subtitle: "The warehouse-first platform product teams use for experiments, gradual releases and product analytics.",
  actions: [
    { label: "Talk to us", href: "#", variant: "outline" },
    { label: "Try it free", href: "#", variant: "primary" },
  ],
  tabs: [
    { label: "Experiments", icon: <FlaskConical /> },
    { label: "Release flags", icon: <Flag /> },
    { label: "Analytics", icon: <ChartLine /> },
  ],
};

export default function Demo() {
  return <GrowthbookV2Hero {...heroSample} />;
}
