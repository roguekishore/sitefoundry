import { ArcBadge } from "./arc-badge";

export default function Demo() {
  return (
    <div className="flex flex-wrap gap-4 bg-background p-8">
      <ArcBadge label="Operating" />
      <div className="bg-accent p-4">
        <ArcBadge label="Reserve" />
      </div>
      <div className="dark bg-card p-4">
        <ArcBadge label="Venture debt" />
      </div>
    </div>
  );
}
