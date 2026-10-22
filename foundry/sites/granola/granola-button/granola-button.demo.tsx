import { ArrowDown, MonitorDown, Smartphone } from "lucide-react";
import { GranolaButton } from "./granola-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-8 bg-background p-8 text-foreground">
      <div className="flex flex-wrap items-center gap-4">
        <GranolaButton href="#get" variant="brand" size="lg" trailingIcon={<ArrowDown />}>
          Get it free
        </GranolaButton>
        <GranolaButton href="#get" trailingIcon={<ArrowDown />}>
          Get it free
        </GranolaButton>
        <GranolaButton href="#plans" variant="outline">
          See plans
        </GranolaButton>
        <GranolaButton href="#phone" icon={<Smartphone />}>
          Get the phone app
        </GranolaButton>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <GranolaButton href="#talk" variant="soft" size="sm">
          Talk to us
        </GranolaButton>
        <GranolaButton href="#download" variant="brand" size="sm" icon={<MonitorDown />}>
          Download
        </GranolaButton>
      </div>
    </div>
  );
}
