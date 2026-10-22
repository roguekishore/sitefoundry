// Sample content lives here (gallery only); the page reuses it.
import { AnchorageStats, type AnchorageStatsProps } from "./anchorage-stats";

export const statsSample: AnchorageStatsProps = {
  title: "Figures a risk committee can lean on",
  stats: [
    { value: "7+", label: "years under a federal trust charter" },
    { value: "2K+", label: "institutional accounts" },
    { value: "3.1B", label: "in supervised tokens minted" },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background">
      <AnchorageStats {...statsSample} />
    </div>
  );
}
