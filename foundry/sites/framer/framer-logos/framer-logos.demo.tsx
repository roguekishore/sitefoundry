import type { FramerLogosProps } from "./framer-logos";
import { FramerLogos } from "./framer-logos";

export const logosSample: FramerLogosProps = {
  label: "Teams building with Tessel",
  logos: [
    { name: "Orbitly" },
    { name: "KESTREL" },
    { name: "_fernway" },
    { name: "lumen&co" },
    { name: "Pallet.io" },
    { name: "northbeam" },
    { name: "Quarry" },
    { name: "BRISKLY" },
  ],
};

export default function Demo() {
  return <FramerLogos {...logosSample} />;
}
