import { SaronicButton } from "@foundry/saronic-button";
import type { SaronicFleetProps } from "./saronic-fleet";
import { SaronicFleet } from "./saronic-fleet";

export const fleetSample: SaronicFleetProps = {
  id: "fleet",
  eyebrow: "The hulls",
  title: "Made for two missions",
  lead: "Every hull we launch can patrol for a coast guard or haul for a shipping line, on the same autopilot.",
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
