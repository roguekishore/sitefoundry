// Sample content (gallery only); the page reuses it. Tallgrass Fission is made up.
import { ValaratomicsCore, type ValaratomicsCoreProps } from "./valaratomics-core";

export const coreSample: ValaratomicsCoreProps = {
  title: "A plain old reactor",
  body: "Ours is a molten-salt design run hot and at low pressure, the kind national labs ran for years in the sixties. Nothing in it has to be invented, only built well, over and over.",
  items: [
    { eyebrow: "Fuel", name: "Pebble" },
    { eyebrow: "Reflector", name: "Beryllia" },
    { eyebrow: "Coolant", name: "Fluoride" },
  ],
};

export default function Demo() {
  return <ValaratomicsCore {...coreSample} />;
}
