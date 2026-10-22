// Sample content (gallery only); the page reuses it. Lathe is a made-up company.
import { WarpCase, type WarpCaseProps } from "./warp-case";

export const caseSample: WarpCaseProps = {
  tag: "Write-up",
  headline: "How our own cost per merge fell from $64 to $22",
  text: "We ran Lathe trials on our own day-to-day engineering jobs to pick models, then cut spend without giving up on quality.",
  cta: { label: "Read the write-up", href: "#" },
  mediaLabel: "Scatter chart of model cost against correctness",
};

export default function Demo() {
  return <WarpCase {...caseSample} />;
}
