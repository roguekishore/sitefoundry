// Sample content (gallery only); the page reuses it. Northvane is a made-up company.
import { Banknote, FlaskConical } from "lucide-react";
import { GrowthbookScale, type GrowthbookScaleProps } from "./growthbook-scale";

export const scaleSample: GrowthbookScaleProps = {
  title: ["More tests, a", "smaller bill"],
  body: "Fast flags, quick experiments and analysis inside your own warehouse keep up as you add teams, agents and releases, without the price climbing with them.",
  cta: { label: "See the plans", href: "#" },
  pins: [
    { label: "4x tests", icon: <FlaskConical strokeWidth={2} />, tone: "primary" },
    { label: "60% less spend", icon: <Banknote strokeWidth={2} />, tone: "highlight" },
  ],
};

export default function Demo() {
  return <GrowthbookScale {...scaleSample} />;
}
