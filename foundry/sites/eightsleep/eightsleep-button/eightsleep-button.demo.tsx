import { CirclePlay } from "lucide-react";
import { EightsleepButton } from "./eightsleep-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-6 bg-background p-10">
      <EightsleepButton href="#">See how it works</EightsleepButton>
      <EightsleepButton size="lg" href="#">Shop Mantle 4</EightsleepButton>
      <div className="dark flex gap-6 rounded-lg bg-background p-6">
        <EightsleepButton size="lg" icon={<CirclePlay strokeWidth={1.75} />}>Play the film</EightsleepButton>
      </div>
    </div>
  );
}
