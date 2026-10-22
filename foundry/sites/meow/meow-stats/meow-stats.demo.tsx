// Sample content lives here (gallery only); the page reuses it. Tallyhold is made up.
import { MeowStats, type MeowStatsProps } from "./meow-stats";

export const statsSample: MeowStatsProps = {
  title: "Tallyhold, counted",
  stats: [
    { value: "$ 3B+", label: "Held for customers" },
    { value: "$ 900M", label: "Stablecoin payments a year" },
    { value: "12,000+", label: "Companies with a funded account" },
  ],
};

export default function Demo() {
  return <MeowStats {...statsSample} />;
}
