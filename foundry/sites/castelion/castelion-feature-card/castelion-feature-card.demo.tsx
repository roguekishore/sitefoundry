// Sample content lives here (gallery only); the page reuses it. Pellworth is made up.
import type { CastelionFeatureCardProps } from "./castelion-feature-card";
import { CastelionFeatureCard } from "./castelion-feature-card";

export const featureCardSample: CastelionFeatureCardProps = {
  title: ["Airframes", "Drawn for", "the Factory", "Floor"],
  lead: "Pellworth gives the services the hardware they ask for, at a price that lets them buy it by the crate. Every part is chosen for cost, for how fast a line can make it and for how quickly it can be fielded, because a deterrent only works when there is enough of it.",
  mediaLabel: "Photo of a test vehicle climbing on a column of smoke",
};

export default function Demo() {
  return <CastelionFeatureCard {...featureCardSample} />;
}
