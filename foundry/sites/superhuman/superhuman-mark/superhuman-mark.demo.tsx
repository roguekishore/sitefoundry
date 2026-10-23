import { Compass } from "lucide-react";
import { SuperhumanMark } from "./superhuman-mark";

export default function Demo() {
  return (
    <div className="flex flex-col items-start gap-4 bg-background p-6 text-foreground">
      <SuperhumanMark brand="Wayfinder" product="Pilot" icon={<Compass />} />
      <SuperhumanMark brand="Wayfinder" icon={<Compass />} tile="solid" />
      <div className="rounded-lg bg-chart-2 p-4 text-primary-foreground">
        <SuperhumanMark brand="Wayfinder" icon={<Compass />} tile="light" />
      </div>
    </div>
  );
}
