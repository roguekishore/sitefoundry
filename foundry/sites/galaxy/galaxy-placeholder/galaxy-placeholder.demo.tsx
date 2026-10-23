import { GalaxyPlaceholder } from "./galaxy-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-2">
      <div className="aspect-[2/1] overflow-clip rounded-lg">
        <GalaxyPlaceholder label="Article image" />
      </div>
      <div className="aspect-[2/1] border border-border">
        <GalaxyPlaceholder tone="glow" label="Animated backdrop" />
      </div>
    </div>
  );
}
