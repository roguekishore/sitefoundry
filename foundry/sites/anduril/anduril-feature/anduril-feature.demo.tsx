// Sample content lives here (gallery only); the page reuses it.
import { AndurilFeature, type AndurilFeatureProps } from "./anduril-feature";

export const featureSample: AndurilFeatureProps = {
  tile: { name: "Foundry Nine", tagline: "Hulls Built by the Hour", href: "#" },
};

export default function Demo() {
  return <AndurilFeature {...featureSample} className="pb-10" />;
}
