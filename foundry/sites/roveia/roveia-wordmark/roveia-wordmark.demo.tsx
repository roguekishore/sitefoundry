import { Plus } from "lucide-react";
import { RoveiaWordmark } from "./roveia-wordmark";

export default function Demo() {
  return (
    <div className="bg-background p-10 text-foreground">
      <RoveiaWordmark name="Northvane" mark={<Plus strokeWidth={2} />} href="#" />
    </div>
  );
}
