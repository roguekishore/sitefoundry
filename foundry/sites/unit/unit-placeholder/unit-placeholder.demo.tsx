import { UnitPlaceholder } from "./unit-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-4 bg-background p-8 sm:grid-cols-3">
      <UnitPlaceholder tone="fade" className="aspect-[626/398]" />
      <UnitPlaceholder tone="accent" className="aspect-[522/480] rounded-sm" />
      <UnitPlaceholder tone="muted" className="aspect-[347/229] rounded-lg" />
      <div className="relative h-48 overflow-clip sm:col-span-3">
        <UnitPlaceholder tone="aurora" className="absolute -inset-8" />
      </div>
    </div>
  );
}
