import { RailwayPanel } from "./railway-panel";

export default function Demo() {
  return (
    <div className="grid gap-4 bg-background p-4">
      {(["chart-5", "chart-2", "highlight", "none"] as const).map((tint) => (
        <RailwayPanel key={tint} tint={tint} className="h-48" />
      ))}
    </div>
  );
}
