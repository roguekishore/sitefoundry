import { SaronicButton } from "@foundry/saronic-button";
import type { SaronicFleetProps } from "./saronic-fleet";
import { SaronicFleet } from "./saronic-fleet";

export const fleetSample: SaronicFleetProps = {
  id: "fleet",
  eyebrow: "The hulls",
  title: "Built for two kinds of work",
  lead: "Every hull we launch is designed to patrol for coast guards and to haul for shipping lines, with the same autopilot aboard.",
  action: <SaronicButton href="#">Compare the hulls</SaronicButton>,
  vessels: [
    { name: "Petrel", linkLabel: "Hull details", href: "#" },
    { name: "Skua", linkLabel: "Hull details", href: "#" },
    { name: "Albatross", linkLabel: "Hull details", href: "#", wide: true },
  ],
};

export default function Demo() {
  return <SaronicFleet {...fleetSample} />;
}
