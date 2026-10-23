import { RaycastPlaceholder } from "./raycast-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-4 bg-background p-6 sm:grid-cols-2">
      <RaycastPlaceholder tone="panel" className="aspect-video rounded-xl" />
      <RaycastPlaceholder tone="dots" className="aspect-video rounded-xl" />
      <RaycastPlaceholder tone="glow" className="aspect-video" />
      <RaycastPlaceholder tone="muted" className="size-16 rounded-full" />
    </div>
  );
}
