import { Anchor, Feather, Gem, Hexagon, Orbit, Sparkle } from "lucide-react";
import { RhoLogos, type RhoLogosProps } from "./rho-logos";

export const logosSample: RhoLogosProps = {
  label: "Banking for teams from first hire to fiftieth office",
  logos: [
    { name: "Northvale", icon: <Hexagon strokeWidth={2.25} /> },
    { name: "quillmark" },
    { name: "Tessellate", icon: <Sparkle strokeWidth={2.25} /> },
    { name: "Brightfold", icon: <Orbit strokeWidth={2} /> },
    { name: "FERRO" },
    { name: "Kitebase", icon: <Feather strokeWidth={2} /> },
    { name: "Gemline", icon: <Gem strokeWidth={2} /> },
    { name: "Harborly", icon: <Anchor strokeWidth={2} /> },
  ],
};

export default function Demo() {
  return <RhoLogos {...logosSample} />;
}
