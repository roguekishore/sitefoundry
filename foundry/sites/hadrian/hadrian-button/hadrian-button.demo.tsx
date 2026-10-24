// Sample content (gallery only).
import { ArrowDown, ArrowRight } from "lucide-react";
import { HadrianButton } from "./hadrian-button";

export default function Demo() {
  return (
    <div className="flex flex-col items-start gap-4 bg-background p-8 text-foreground">
      <HadrianButton label="Menu" size="sm" />
      <HadrianButton label="See open positions" variant="solid" href="#roles" />
      <div className="flex w-full max-w-3xl flex-col gap-2 lg:flex-row lg:gap-4">
        <HadrianButton label="What we make" size="lg" href="#make" icon={<ArrowDown strokeWidth={1.25} />} />
        <HadrianButton label="Work at Kestrel" size="lg" href="#work" icon={<ArrowRight strokeWidth={1.25} />} />
      </div>
    </div>
  );
}
