import { FramerPlaceholder } from "./framer-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-8 bg-background p-8 sm:grid-cols-2">
      <div className="aspect-[1.78] overflow-clip rounded-2xl border border-border">
        <FramerPlaceholder tone="panel" label="Product video" />
      </div>
      <div className="aspect-[1.9] overflow-clip rounded-2xl">
        <FramerPlaceholder label="Agent at work" />
      </div>
      <div className="h-56 overflow-clip rounded-xl">
        <FramerPlaceholder tone="panel" fade="right" label="CMS table" />
      </div>
      <div className="h-56 p-6">
        <FramerPlaceholder tone="glow" className="rounded-2xl" label="Canvas panel" />
      </div>
    </div>
  );
}
