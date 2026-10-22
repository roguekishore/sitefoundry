import { NekoSlot } from "./neko-slot";

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-4 bg-background p-10 sm:grid-cols-4">
      <NekoSlot className="aspect-[3/4] rounded-[1.8rem]" />
      <NekoSlot tone="lemon" className="aspect-[3/4] rounded-[1.8rem]" />
      <NekoSlot tone="slate" className="aspect-[3/4] rounded-[1.8rem]" />
      <NekoSlot tone="ice" className="aspect-[3/4] rounded-[1.8rem]" />
    </div>
  );
}
