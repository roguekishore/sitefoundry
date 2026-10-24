import type { K2spaceShowcaseProps } from "./k2space-showcase";
import { K2spaceShowcase } from "./k2space-showcase";

export const showcaseSample: K2spaceShowcaseProps = {
  title: "Hecto flies the heaviest\nbuses in service today",
  markers: [
    { x: 29, y: 48, label: "A typical small bus" },
    { x: 66, y: 46, label: "Hecto Atlas class" },
  ],
};

export default function Demo() {
  return <K2spaceShowcase {...showcaseSample} />;
}
