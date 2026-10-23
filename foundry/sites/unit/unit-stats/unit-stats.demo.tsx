import { UnitStats, type UnitStatsProps } from "./unit-stats";

export const statsSample: UnitStatsProps = {
  heading: "Proven in production",
  stats: [
    { value: "$62B+", label: "moved every year" },
    { value: "$2.4B+", label: "held in balances", footnote: "1" },
    { value: "3.8M+", label: "open accounts" },
    { value: "99.99%", label: "availability", href: "#" },
  ],
  statement: { lead: "Straight-through connections", rest: "to the payment rails, the card schemes, and our partner banks." },
  badges: ["ISO 27001", "SOC 1 Type 2"],
};

export default function Demo() {
  return <UnitStats {...statsSample} />;
}
