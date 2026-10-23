import { Sailboat } from "lucide-react";
import { PlaidWordmark } from "./plaid-wordmark";

export default function Demo() {
  return (
    <div className="flex items-center gap-10 bg-background p-8 text-foreground">
      <PlaidWordmark name="Halyard" href="#" icon={Sailboat} />
      <PlaidWordmark name="Halyard" href="#" icon={Sailboat} markOnly />
    </div>
  );
}
