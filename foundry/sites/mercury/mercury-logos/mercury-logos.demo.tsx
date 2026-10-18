// Sample content lives here (gallery only); other mercury demos reuse it.
import { Bird, Boxes, Feather, Hexagon, Leaf, Orbit, Waves } from "lucide-react";
import { MercuryLogos, type MercuryLogosProps } from "./mercury-logos";

export const logosSample: MercuryLogosProps = {
  logos: [
    { name: "tidewell", icon: <Waves strokeWidth={2.25} /> },
    { name: "Orbitly", icon: <Orbit strokeWidth={2.25} /> },
    { name: "Quillmark", icon: <Feather strokeWidth={2.25} /> },
    { name: "hexforge", icon: <Hexagon strokeWidth={2.25} /> },
    { name: "Fernhouse", icon: <Leaf strokeWidth={2.25} /> },
    { name: "Crateful", icon: <Boxes strokeWidth={2.25} /> },
    { name: "Wrenly", icon: <Bird strokeWidth={2.25} /> },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background py-12">
      <MercuryLogos {...logosSample} />
    </div>
  );
}
