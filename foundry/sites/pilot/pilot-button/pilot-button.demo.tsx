import { Play } from "lucide-react";
import { PilotButton } from "./pilot-button";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8">
      <div className="flex flex-wrap items-center gap-4">
        <PilotButton href="#" variant="sun" size="lg">Get going</PilotButton>
        <PilotButton href="#" variant="solid" size="sm">Read the case</PilotButton>
        <PilotButton href="#" variant="outline" size="sm" icon={<Play aria-hidden className="fill-current" />}>
          Play the film
        </PilotButton>
      </div>
      <div className="flex flex-wrap items-center gap-4 bg-secondary p-6">
        <PilotButton href="#" variant="sun">Get going</PilotButton>
        <PilotButton href="#" variant="outline-light">Try it free</PilotButton>
      </div>
    </div>
  );
}
