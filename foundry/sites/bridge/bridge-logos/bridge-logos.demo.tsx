import { Anchor, Feather, Gem, Hexagon, Leaf, Mountain, Sun, Waves } from "lucide-react";
import { BridgeLogos, type BridgeLogosProps } from "./bridge-logos";

export const logosSample: BridgeLogosProps = {
  title: "Trusted by the teams rewiring how the world sends and settles money",
  logos: [
    { name: "lumenpay", icon: <Sun aria-hidden strokeWidth={2.25} /> },
    { name: "Corvid", icon: <Feather aria-hidden strokeWidth={2.25} /> },
    { name: "Tidewell", icon: <Waves aria-hidden strokeWidth={2.25} /> },
    { name: "Marlo" },
    { name: "fernbank", icon: <Leaf aria-hidden strokeWidth={2.25} /> },
    { name: "QUILL" },
    { name: "Northgate", icon: <Mountain aria-hidden strokeWidth={2.25} /> },
    { name: "PAXEL" },
    { name: "Ondine" },
    { name: "vessa", icon: <Hexagon aria-hidden strokeWidth={2.25} /> },
    { name: "Harbour", icon: <Anchor aria-hidden strokeWidth={2.25} /> },
    { name: "kitepay" },
    { name: "Garnet", icon: <Gem aria-hidden strokeWidth={2.25} /> },
  ],
  action: { label: "Read customer stories", href: "#" },
};

export default function Demo() {
  return <BridgeLogos {...logosSample} />;
}
