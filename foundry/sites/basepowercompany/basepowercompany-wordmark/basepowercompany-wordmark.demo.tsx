import { Lamp } from "lucide-react";
import { BasepowercompanyWordmark } from "./basepowercompany-wordmark";

export default function Demo() {
  return (
    <div className="p-8">
      <BasepowercompanyWordmark name="Porchlight" mark={<Lamp />} href="#top" />
    </div>
  );
}
