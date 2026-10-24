// Sample content lives here (gallery only); the page reuses it. Aldervane and Kestrel are made up.
import type { HermeusProductProps } from "./hermeus-product";
import { HermeusProduct } from "./hermeus-product";

export const productSample: HermeusProductProps = {
  index: "02",
  label: "Aircraft",
  body: "Kestrel is a reusable high-speed testbed: every sortie feeds its data straight into the next airframe, so each one flies sooner and further than the last.",
  action: { label: "Meet Kestrel", href: "#" },
  backdrop: ["Kestrel", "Testbed"],
  mediaLabel: "Side-on render of the Kestrel testbed",
  hotspots: [
    { x: 2.4, y: 60, label: "Exhaust nozzle" },
    { x: 29.5, y: 77, label: "Ventral fin" },
    { x: 51.3, y: 80, label: "Air intake" },
    { x: 78.9, y: 78, label: "Payload bay" },
    { x: 100.9, y: 60, label: "Sensor nose" },
  ],
  prevLabel: "Previous point",
  nextLabel: "Next point",
};

export default function Demo() {
  return <HermeusProduct {...productSample} />;
}
