// Sample content (gallery only); the page reuses it. Fernlight is a made-up company.
import { Banknote, FlaskConical } from "lucide-react";
import { GrowthbookV2Cost, type GrowthbookV2CostProps } from "./growthbook-v2-cost";

export const costSample: GrowthbookV2CostProps = {
  title: "More tests,\na smaller bill",
  body: "Fast local flags, quick experiments and analytics that run where your data lives keep up with every team, every agent and every release, without the per-event price tag.",
  action: { label: "Plans and pricing", href: "#" },
  markers: [
    { label: "4x  tests", icon: <FlaskConical /> },
    { label: "60% less spend", icon: <Banknote /> },
  ],
};

export default function Demo() {
  return <GrowthbookV2Cost {...costSample} />;
}
