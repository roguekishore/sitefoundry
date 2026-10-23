import { PilotPlaceholder } from "./pilot-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-3">
      <div className="bg-secondary p-6">
        <PilotPlaceholder tone="on-dark" className="aspect-[800/389] rounded-2xl" />
      </div>
      <div className="rounded-lg bg-accent p-6">
        <PilotPlaceholder tone="screen" className="aspect-[456/310] rounded-sm" />
      </div>
      <PilotPlaceholder tone="photo" className="aspect-[360/716]" />
    </div>
  );
}
