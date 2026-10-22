// Sample content (gallery only); the page reuses it.
import { BevelMoreFeatures, type BevelMoreFeaturesProps } from "./bevel-more-features";

export const moreFeaturesSample: BevelMoreFeaturesProps = {
  title: "Plenty more inside",
  lead: "A few other things Juniper does for you:",
  tabs: [
    { title: "Body Age", text: "A single number for how fast you're ageing, and what moves it." },
    { title: "Cycle Insights", text: "Follow your monthly rhythm and plan training around it." },
    { title: "Lift Log", text: "Record every set and watch your strength build week by week." },
    { title: "Daily Notes", text: "Jot down habits and see which ones change how you feel." },
    { title: "Hydration", text: "Gentle reminders that keep your water on track." },
  ],
};

export default function Demo() {
  return <BevelMoreFeatures {...moreFeaturesSample} />;
}
