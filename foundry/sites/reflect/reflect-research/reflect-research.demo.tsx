import { MonitorSmartphone, ShieldCheck } from "lucide-react";
import type { ReflectResearchProps } from "./reflect-research";
import { ReflectResearch } from "./reflect-research";

const icon = { strokeWidth: 1.25, "aria-hidden": true } as const;

export const researchSample: ReflectResearchProps = {
  eyebrow: "Reading and research",
  title: "Keep every find",
  lead: "Save links, quotes and screen grabs from your browser in one click.",
  mediaLabel: "Radar sweeping a half disc",
  emblemLabel: "The Nocturne mark",
  items: [
    {
      icon: <MonitorSmartphone {...icon} />,
      title: "On every screen you own",
      text: "Write on laptop, phone and tablet alike.\nSync through your own drive or a Git remote.",
    },
    {
      icon: <ShieldCheck {...icon} />,
      title: "Remember where it came from",
      text: "Each clip keeps the page it was taken from.",
    },
  ],
};

export default function Demo() {
  return <ReflectResearch {...researchSample} />;
}
