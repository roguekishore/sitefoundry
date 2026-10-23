import { PuzzleStats, type PuzzleStatsProps } from "./puzzle-stats";

export const statsSample: PuzzleStatsProps = {
  stats: [
    { value: "8,000+", label: "teams keep their books in Oakbook" },
    { value: "4 in 5", label: "bank lines sorted to the right account without a single rule" },
    { value: "2× faster", label: "month-end close, guaranteed or your fees back*", footnote: { label: "How the guarantee works", href: "#" } },
    { value: "11,500+", label: "banks and card issuers linked, plus direct payroll and payments feeds" },
  ],
};

export default function Demo() {
  return (
    <div className="pt-section">
      <PuzzleStats {...statsSample} />
    </div>
  );
}
