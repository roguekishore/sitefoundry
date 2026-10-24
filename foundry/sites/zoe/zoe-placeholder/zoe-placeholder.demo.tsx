import { ZoePlaceholder } from "./zoe-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-3">
      <ZoePlaceholder tone="photo" fade className="aspect-square rounded-lg" />
      <div className="overflow-clip rounded-2xl bg-card">
        <ZoePlaceholder tone="soft" className="aspect-[600/465]" />
      </div>
      <ZoePlaceholder tone="ink" className="aspect-[648/658] rounded-2xl" />
      <div className="rounded-lg bg-primary p-6">
        <ZoePlaceholder tone="glass" className="aspect-[600/700] rounded-[2rem]" />
      </div>
      <ZoePlaceholder tone="sun" className="aspect-square rounded-lg" />
    </div>
  );
}
