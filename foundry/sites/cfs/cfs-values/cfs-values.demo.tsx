// Sample content lives here (gallery only); the page reuses it. All copy is ours.
import { Quote } from "lucide-react";
import { CfsValues, type CfsValuesProps } from "./cfs-values";

export const valuesSample: CfsValuesProps = {
  title: "Held together by how we choose to work",
  quote: {
    text: "Every week someone on this crew solves a problem I was told would take a decade. That is what happens when people who care about the climate get the tools to act on it.",
    name: "Ines Varga-Holm",
    role: "Head of Magnet Engineering",
    mark: <Quote strokeWidth={1} />,
  },
  values: [
    { label: "Pace", text: "Ship the next step this month. Momentum is a habit." },
    { label: "Candour", text: "Measure first, argue openly, and change course when the data says so." },
    { label: "Care", text: "Honest numbers, safe sites, and colleagues treated as people." },
    { label: "Reach", text: "Clean, firm power that a utility can afford, while it still matters." },
  ],
  link: { label: "Meet the crew", href: "#" },
};

export default function Demo() {
  return <CfsValues {...valuesSample} />;
}
