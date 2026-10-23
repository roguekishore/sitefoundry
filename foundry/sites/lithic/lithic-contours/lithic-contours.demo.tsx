import { LithicContours } from "./lithic-contours";

export default function Demo() {
  return (
    <div className="grid gap-6 p-8 sm:grid-cols-3">
      <div className="relative h-56 overflow-clip rounded-lg bg-muted">
        <LithicContours at="85% 0%" className="text-highlight/25" />
      </div>
      <div className="relative h-56 overflow-clip rounded-lg bg-secondary">
        <LithicContours shape="ellipse" gap={14} className="text-chart-2/35" />
      </div>
      <div className="dark relative h-56 overflow-clip rounded-lg bg-background">
        <LithicContours at="30% 60%" gap={36} className="text-highlight/30" />
      </div>
    </div>
  );
}
