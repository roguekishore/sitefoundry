// Sample content (gallery only). The figures are made up.
import { RailwayStats, type RailwayStatsProps } from "./railway-stats";

export const statsSample: RailwayStatsProps = {
  title: "Every month: 212M+ launches, still climbing",
  lead: "Live totals for builders and services, plus the last thirty days of launches, requests and log lines.",
  stats: [
    { label: "Builders", value: "3,904,216" },
    { label: "Services", value: "14,862,031" },
    { label: "Launches", value: "212,407,958" },
    { label: "Requests", value: "298,511,064,372", short: "298.51B" },
    { label: "Log lines", value: "961,305,778,240", short: "961.31B" },
  ],
};

export default function Demo() {
  return <RailwayStats {...statsSample} className="bg-background" />;
}
