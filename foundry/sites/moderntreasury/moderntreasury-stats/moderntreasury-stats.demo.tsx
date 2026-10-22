import { ModerntreasuryStats, type ModerntreasuryStatsProps } from "./moderntreasury-stats";

export const statsSample: ModerntreasuryStatsProps = {
  items: [
    { value: "$410 Billion", label: "Moved Through Kestrel" },
    { value: "99.995%", label: "API Availability" },
    { value: "Nine Rails", label: "Bank Networks and Stablecoins" },
  ],
};

export default function Demo() {
  return <ModerntreasuryStats {...statsSample} />;
}
