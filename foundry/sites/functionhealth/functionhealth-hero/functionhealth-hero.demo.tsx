import { FunctionhealthHero, type FunctionhealthHeroProps } from "./functionhealth-hero";

export const heroSample: FunctionhealthHeroProps = {
  badge: "HSA/FSA ready",
  title: "Know your body.",
  text: "Each year, 140+ markers read by clinicians who explain every line. $420 a year, about $1.15 a day.",
  actions: [
    { label: "Begin testing", href: "#begin" },
    { label: "How it works", href: "#how" },
  ],
  stats: [
    { value: "140+ markers", label: "Checked every year" },
    { value: "Two full draws", label: "A year, on your schedule" },
    { value: "$1.15 a day", label: "$420 billed yearly" },
  ],
};

export default function Demo() {
  return <FunctionhealthHero {...heroSample} />;
}
