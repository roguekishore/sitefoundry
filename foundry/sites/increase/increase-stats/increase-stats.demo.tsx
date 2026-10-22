// Sample content lives here (gallery only); the page reuses it. The figures are made up.
import { IncreaseStats, type IncreaseStatsProps } from "./increase-stats";

export const statsSample: IncreaseStatsProps = {
  stats: [
    { value: "$310B+", label: "moved through Cairn each year" },
    { value: "99.998%", label: "API availability since launch" },
    { value: "12M+", label: "requests served every day" },
  ],
};

export default function Demo() {
  return <IncreaseStats {...statsSample} />;
}
