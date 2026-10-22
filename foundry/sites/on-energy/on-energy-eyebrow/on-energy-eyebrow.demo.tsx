import { OnEnergyEyebrow } from "./on-energy-eyebrow";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-card p-8 text-card-foreground">
      <OnEnergyEyebrow label="What we build" />
      <OnEnergyEyebrow label="Field record" className="text-muted-foreground" />
    </div>
  );
}
