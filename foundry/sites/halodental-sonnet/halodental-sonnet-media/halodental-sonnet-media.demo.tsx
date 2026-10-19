import { HalodentalSonnetMedia } from "./halodental-sonnet-media";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-2">
      <HalodentalSonnetMedia ratio="4 / 3" />
      <div className="dark bg-background">
        <HalodentalSonnetMedia ratio="4 / 3" tone="dark" />
      </div>
    </div>
  );
}
