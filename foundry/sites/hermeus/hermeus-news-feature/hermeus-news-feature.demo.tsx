// Sample content lives here (gallery only); the page reuses it. Aldervane is made up.
import type { HermeusNewsFeatureProps } from "./hermeus-news-feature";
import { HermeusNewsFeature } from "./hermeus-news-feature";

export const newsFeatureSample: HermeusNewsFeatureProps = {
  index: "03",
  label: "Dispatch",
  mediaLabel: "Photo: the new engine test cell at dusk",
  title: "Aldervane Opens a Second Engine Test Cell at Its Mojave Flight Line, Doubling Ground Runs",
  body: "The new cell lets the team run two engines side by side through full afterburner sweeps, cutting the wait between a design change and its first hot fire from weeks to days.",
  action: { label: "Read the story", href: "#" },
};

export default function Demo() {
  return <HermeusNewsFeature {...newsFeatureSample} />;
}
