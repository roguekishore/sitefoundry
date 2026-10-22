// Sample content (gallery only); the page reuses it. All figures are invented.
import { ColumnScale, type ColumnScaleProps } from "./column-scale";

export const scaleSample: ColumnScaleProps = {
  eyebrow: "Proven at volume",
  titleStrong: "Settling billions every week",
  titleSoft: "for the most demanding software companies and lenders anywhere.",
  body: "As the ledger underneath ambitious fintech teams, we give you direct rails, real-time control and a charter you can build on.",
  action: { label: "How the bank works", href: "#" },
  stats: [
    { value: "$3.1T+", label: "Moved through our rails each year" },
    { value: "99.995%", label: "Core availability, measured monthly" },
    { value: "Top 3", label: "Sender of instant payments nationwide" },
    { value: "$80B+", label: "Cross-border volume settled yearly" },
  ],
};

export default function Demo() {
  return <ColumnScale {...scaleSample} />;
}
