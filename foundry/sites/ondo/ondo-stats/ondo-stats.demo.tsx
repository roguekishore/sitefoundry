import { OndoStats, type OndoStatsProps } from "./ondo-stats";

export const statsSample: OndoStatsProps = {
  lead: "Corvane is laying the rails",
  trail: "for markets that never close.",
  stats: [
    { value: "09", label: "Live\nnetworks" },
    { value: "140", label: "Connected\napps" },
    { value: "$2.84B", label: "Value\nlocked" },
  ],
};

export default function Demo() {
  return <OndoStats {...statsSample} />;
}
