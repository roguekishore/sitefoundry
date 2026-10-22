import { Activity, Brain, HeartPulse } from "lucide-react";
import { PrenuvoPanels, type PrenuvoPanelsProps } from "./prenuvo-panels";

export const panelsSample: PrenuvoPanelsProps = {
  id: "scans",
  panels: [
    {
      title: "The full-body scan",
      body: "Our most thorough MRI gathers over a billion measurements while it checks for hundreds of conditions in every major organ. Nothing injected, nothing radioactive, done within the hour.",
      actions: [
        { label: "Read more", href: "#full-body", variant: "outline" },
        { label: "Reserve", href: "#reserve" },
      ],
      tone: "green",
      backdrop: "teal",
      figureSlot: true,
    },
    {
      title: "Finer detail, smarter reading",
      body: "Focused add-ons go further than the full-body scan, giving each system its own closer look.",
      features: [
        { icon: <Activity strokeWidth={1.5} />, label: "Cleared body composition report" },
        { icon: <Brain strokeWidth={1.5} />, label: "Cleared brain volume study" },
        { icon: <HeartPulse strokeWidth={1.5} />, label: "Cleared heart and vessel study" },
      ],
      actions: [
        { label: "Read more", href: "#add-ons", variant: "outline" },
        { label: "Reserve", href: "#reserve" },
      ],
      tone: "blue",
      backdrop: "sky",
    },
    {
      title: "Seventy-plus markers from one blood draw",
      body: "We read your blood work next to your images, so you get one clear account of how your body is doing.",
      actions: [
        { label: "Read more", href: "#blood", variant: "outline" },
        { label: "Reserve", href: "#reserve" },
      ],
      tone: "lilac",
      backdrop: "crimson",
    },
  ],
};

export default function Demo() {
  return (
    <div className="dark bg-background pt-24">
      <PrenuvoPanels {...panelsSample} />
      <div className="h-svh" />
    </div>
  );
}
