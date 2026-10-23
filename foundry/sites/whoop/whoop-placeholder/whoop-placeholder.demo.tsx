import { WhoopPlaceholder } from "./whoop-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-3">
      <WhoopPlaceholder tone="warm" className="aspect-[390/693]" />
      <WhoopPlaceholder tone="photo" className="aspect-square rounded-[1.875rem]" />
      <WhoopPlaceholder tone="shade" className="aspect-[229/150] rounded-[0.6875rem]" />
      <div className="rounded-3xl bg-linear-to-br from-muted to-chart-1 p-6">
        <WhoopPlaceholder tone="glass" className="aspect-[302/168] rounded-lg" />
      </div>
      <div className="bg-foreground p-6 dark:bg-card">
        <WhoopPlaceholder tone="band" className="aspect-square rounded-[1.0625rem]" />
      </div>
    </div>
  );
}
