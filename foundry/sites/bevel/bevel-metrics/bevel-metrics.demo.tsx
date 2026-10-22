// Sample content (gallery only); the page reuses it.
import { BevelMetrics, type BevelMetricsProps } from "./bevel-metrics";

export const metricsSample: BevelMetricsProps = {
  title: (
    <>
      Wake up knowing
      <br />
      where you stand
    </>
  ),
  lead: "Three clear numbers, worked out from what your body tells you overnight.",
  metrics: [
    { title: "Load", text: "One score for how much your training and your day asked of you.", tint: "peach" },
    { title: "Rest", text: "See how long you slept, how deeply, and how much more you need tonight.", tint: "blue" },
    { title: "Readiness", text: "Know whether to push hard today or give your body room to catch up.", tint: "green" },
  ],
};

export default function Demo() {
  return <BevelMetrics {...metricsSample} />;
}
