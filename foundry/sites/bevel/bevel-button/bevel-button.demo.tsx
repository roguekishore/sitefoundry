import { Smartphone } from "lucide-react";
import { BevelButton } from "./bevel-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-6 bg-background p-10">
      <BevelButton label="Get the app" href="#" icon={<Smartphone strokeWidth={2.25} />} />
      <BevelButton label="Get the app" href="#" icon={<Smartphone strokeWidth={2.25} />} size="sm" />
    </div>
  );
}
