import { SuperhumanPlaceholder } from "./superhuman-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-4 bg-background p-6 text-foreground sm:grid-cols-3">
      <SuperhumanPlaceholder tone="wash" className="aspect-[3/2] rounded-lg" />
      <SuperhumanPlaceholder tone="panel" className="aspect-[3/2] rounded-lg" />
      <div className="rounded-lg bg-chart-2 p-4 text-primary-foreground">
        <SuperhumanPlaceholder tone="tint" className="aspect-[3/2] rounded-lg" />
      </div>
    </div>
  );
}
