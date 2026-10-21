import { RollersFleet, type RollersFleetProps } from "./rollers-fleet";

export const fleetSample: RollersFleetProps = {
  items: [
    { title: "Smooth-drum & sheepsfoot compactors", href: "#yard", arrowLabel: "See the compactors" },
    { title: "Water tankers", href: "#yard", arrowLabel: "See the tankers" },
    { title: "Pneumatic-tyred rollers", href: "#yard", arrowLabel: "See the pneumatic rollers" },
    { title: "Site cabins & crib huts", href: "#cabins", arrowLabel: "See the cabins" },
  ],
  action: { label: "Browse the yard", href: "#yard" },
};

export default function Demo() {
  return <RollersFleet {...fleetSample} />;
}
