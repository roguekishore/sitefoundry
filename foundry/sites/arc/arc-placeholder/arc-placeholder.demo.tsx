import { ArcPlaceholder } from "./arc-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-3">
      <ArcPlaceholder tone="card" className="aspect-[1137/652] rounded-lg" />
      <div className="bg-accent p-6">
        <ArcPlaceholder tone="wash" className="aspect-[363/221]" />
      </div>
      <ArcPlaceholder tone="muted" className="aspect-[322/358] rounded-[calc(var(--radius)+2px)]" />
    </div>
  );
}
