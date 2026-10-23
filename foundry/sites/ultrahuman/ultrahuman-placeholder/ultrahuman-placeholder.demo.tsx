import { UltrahumanPlaceholder } from "./ultrahuman-placeholder";

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-4 bg-background p-8 sm:grid-cols-4">
      <UltrahumanPlaceholder className="aspect-[3/4] rounded-lg" label="Photo" />
      <UltrahumanPlaceholder tone="warm" className="aspect-[3/4] rounded-lg" />
      <UltrahumanPlaceholder tone="soft" className="aspect-[3/4] rounded-lg" />
      <UltrahumanPlaceholder tone="glow" className="aspect-[3/4] rounded-lg" />
    </div>
  );
}
