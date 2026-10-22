import { BevelPlaceholder } from "./bevel-placeholder";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-end gap-6 bg-card p-10">
      <BevelPlaceholder tone="phone" className="aspect-[338/689] w-40 rounded-[2rem]" />
      <BevelPlaceholder tone="muted" className="aspect-[236/420] w-32 rounded-lg" />
      <BevelPlaceholder tone="glow" className="size-28 rounded-full" />
      <BevelPlaceholder tone="tile" className="size-16 rounded-2xl" />
      <BevelPlaceholder tone="panel" className="h-40 w-56 rounded-lg" />
    </div>
  );
}
