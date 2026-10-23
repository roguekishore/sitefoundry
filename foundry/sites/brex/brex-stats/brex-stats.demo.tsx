import { BrexStats, type BrexStatsProps } from "./brex-stats";

export const statsSample: BrexStatsProps = {
  title: "Keep more, and earn more, with Kiln.",
  stats: [
    { label: "Hours handed back", value: "412 hours", text: "Average time saved each year on expenses and bookkeeping" },
    { label: "Work done for you", value: "64%", text: "of expense reports are completed without a person touching them" },
    { label: "Savings that earn", value: "Up to 4.1%", text: "Same-day access to cash that still pays you" },
  ],
  note: "Figures come from internal data collected in spring 2026 and are illustrative. Past results do not predict future ones.",
};

export default function Demo() {
  return <BrexStats {...statsSample} />;
}
