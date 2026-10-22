// Sample content lives here (gallery only); the page reuses it.
import { Scan } from "lucide-react";
import { ApexspaceFactory, type ApexspaceFactoryProps } from "./apexspace-factory";

export const factorySample: ApexspaceFactoryProps = {
  title: "The Hangar",
  icon: <Scan strokeWidth={2} />,
  paragraphs: [
    "Our production hall in Columbus, Ohio already builds buses at rate and is laid out for up to 140 a year. Its 120,000 square feet hold research benches, sub-assembly cells, the main integration line, an environmental test bay and the room where we fly customer missions.",
    "Every station was planned for repeat work rather than one-off builds. Harnesses, panels and propulsion modules are made in their own cells and arrive at the line as kits; a thermal-vacuum chamber and a shaker table next door let a finished bus go from last bolt to signed-off test report in days.",
    "Behind it all runs Loom, our own factory software: parts, schedules and work instructions live in one place and re-plan themselves when an order changes.",
  ],
  cta: { label: "Tour the hangar", href: "#" },
};

export default function Demo() {
  return <ApexspaceFactory {...factorySample} />;
}
