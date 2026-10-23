import { BridgeHero, type BridgeHeroProps } from "./bridge-hero";

export const heroSample: BridgeHeroProps = {
  title: "Money without borders",
  subtitle: "One programmable ledger for digital dollars,\nbuilt so payments settle anywhere in minutes.",
  action: { label: "Start building", href: "#" },
};

export default function Demo() {
  return <BridgeHero {...heroSample} />;
}
