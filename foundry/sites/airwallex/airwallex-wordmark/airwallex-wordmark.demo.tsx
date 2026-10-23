import { Sprout } from "lucide-react";
import { AirwallexWordmark } from "./airwallex-wordmark";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-10 bg-background p-8">
      <AirwallexWordmark name="Fernhold" mark={<Sprout aria-hidden />} href="#" />
      <AirwallexWordmark name="Fernhold" mark={<Sprout aria-hidden />} size="lg" />
    </div>
  );
}
