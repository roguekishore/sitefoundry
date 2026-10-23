import { BrexPlaceholder } from "./brex-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-4 bg-background p-8 sm:grid-cols-3">
      <BrexPlaceholder tone="panel" className="aspect-[486/358] rounded-xl" />
      <BrexPlaceholder tone="photo" className="aspect-[416/260] rounded-xl" />
      <BrexPlaceholder tone="flat" className="aspect-[316/178] rounded-md" />
    </div>
  );
}
