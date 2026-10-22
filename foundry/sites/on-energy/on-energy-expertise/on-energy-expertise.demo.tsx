// Sample content lives here (gallery only); the page reuses it. Sorrel Power is made up.
import { OnEnergyExpertise, type OnEnergyExpertiseProps } from "./on-energy-expertise";

export const expertiseSample: OnEnergyExpertiseProps = {
  eyebrow: "What we build",
  title: "Built for one load:\nthe compute campus.",
  lead: "Cabinet and control software designed together as one machine, so there is no seam between vendors and no guesswork when the grid misbehaves.",
  cards: [{ title: "Compute Campuses", text: "Clean, steady supply for dense racks that cannot blink", href: "#" }],
  arrowLabel: "Open",
};

export default function Demo() {
  return <OnEnergyExpertise {...expertiseSample} />;
}
