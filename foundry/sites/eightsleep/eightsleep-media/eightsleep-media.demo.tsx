import { EightsleepMedia } from "./eightsleep-media";

export default function Demo() {
  return (
    <div className="grid gap-4 bg-background p-10 sm:grid-cols-2">
      <EightsleepMedia className="aspect-[4/3] rounded-2xl" />
      <EightsleepMedia tone="sky" className="dark aspect-[4/3] rounded-2xl" />
      <EightsleepMedia tone="night" className="dark aspect-[4/3] rounded-2xl" />
      <div className="dark rounded-2xl bg-background p-6">
        <EightsleepMedia tone="faint" className="aspect-[4/3] rounded-lg" />
      </div>
    </div>
  );
}
