// Sample content (gallery only); the page reuses it. Fernlight is a made-up company.
import { ChartLine, Flag, FlaskConical } from "lucide-react";
import { GrowthbookV2Platform, type GrowthbookV2PlatformProps } from "./growthbook-v2-platform";

export const platformSample: GrowthbookV2PlatformProps = {
  intro: "One workspace for your people\nand their coding agents",
  rows: [
    {
      eyebrow: "Experiments",
      icon: <FlaskConical />,
      title: "Sharper answers,\nsooner",
      body: "Statisticians at hundreds of companies rely on Fernlight, and it is built so your people and your agents can run careful tests at any scale and act on them quickly.",
      action: { label: "See experiments", href: "#" },
      tone: "violet",
      shot: "card",
    },
    {
      eyebrow: "Release Flags",
      icon: <Flag />,
      title: "Move quickly,\nland softly",
      body: "Agents write code faster than anyone can review it. Staged rollouts, automatic rollbacks and guard metrics mean a bad release turns itself off before your phone rings.",
      action: { label: "See release flags", href: "#" },
      tone: "mint",
      shot: "window",
    },
    {
      eyebrow: "Analytics",
      icon: <ChartLine />,
      title: "From raw events\nto clear next steps",
      body: "Fernlight reads straight from the warehouse you already have, so anyone can follow a trend, compare segments and spot the next thing to try. Ask the built-in analyst, or let your agents dig.",
      action: { label: "See analytics", href: "#" },
      tone: "sky",
      shot: "card",
    },
  ],
};

export default function Demo() {
  return <GrowthbookV2Platform {...platformSample} />;
}
