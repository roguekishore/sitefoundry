import { SaronicButton } from "@foundry/saronic-button";
import type { SaronicFeatureProps } from "./saronic-feature";
import { SaronicFeature } from "./saronic-feature";

export const featureYardSample: SaronicFeatureProps = {
  id: "keel-works",
  eyebrow: "Our new shipyard",
  title: "Meet Keel Works",
  lead: "Keel Works is the yard we are raising on the Gulf coast to launch crewless hulls by the dozen, at the pace a long coastline asks for.",
  action: <SaronicButton href="#">Visit Keel Works</SaronicButton>,
  tone: "light",
};

export const featureSoftwareSample: SaronicFeatureProps = {
  id: "helmline",
  eyebrow: "Helmline",
  title: "Every boat. One chart table.",
  lead: "Helmline is the one control layer behind every Ternway hull: plan the route, rehearse it in simulation and sail it, for a single skiff or a whole squadron at once.",
  action: <SaronicButton href="#">Tour Helmline</SaronicButton>,
  tone: "dark",
};

export default function Demo() {
  return (
    <>
      <SaronicFeature {...featureYardSample} />
      <SaronicFeature {...featureSoftwareSample} />
    </>
  );
}
