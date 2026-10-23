import { Orbit } from "lucide-react";
import { BridgeWordmark } from "./bridge-wordmark";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-12 bg-background p-8">
      <BridgeWordmark name="Orrery" tagline="a Halden company" href="#" layout="inline" icon={<Orbit aria-hidden strokeWidth={2.25} />} />
      <BridgeWordmark name="Orrery" tagline="a Halden company" href="#" layout="stacked" icon={<Orbit aria-hidden strokeWidth={2.25} />} />
    </div>
  );
}
