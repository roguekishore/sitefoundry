import { Banknote, Coins, Gauge, TrendingUp } from "lucide-react";
import { PilotInsights, type PilotInsightsProps } from "./pilot-insights";

export const insightsSample: PilotInsightsProps = {
  title: "Not ready for a call?\nTake the free playbooks\nthat change the math.",
  lede: "No recycled small-business tips. These are the moves we've learned from closing the books for thousands of growing companies.",
  items: [
    { icon: <Banknote aria-hidden strokeWidth={1.25} />, title: "Plan your cash runway", text: "Reach cash-flow positive sooner and lean less on outside money.", cta: "Read more", href: "#" },
    { icon: <Coins aria-hidden strokeWidth={1.25} />, title: "Trim your costs", text: "Cut spending without stalling the growth you've earned.", cta: "Read more", href: "#" },
    { icon: <Gauge aria-hidden strokeWidth={1.25} />, title: "Track the right numbers", text: "The handful of metrics that matter as you scale.", cta: "Read more", href: "#" },
    { icon: <TrendingUp aria-hidden strokeWidth={1.25} />, title: "Get ready to raise", text: "What your books need to show before the first investor meeting.", cta: "Read more", href: "#" },
  ],
};

export default function Demo() {
  return <PilotInsights {...insightsSample} />;
}
