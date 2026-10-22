import { RadiantnuclearSlot } from "./radiantnuclear-slot";

export default function Demo() {
  return (
    <div className="grid grid-cols-1 gap-6 bg-background p-6 sm:grid-cols-3">
      <RadiantnuclearSlot className="aspect-[1.8]" />
      <RadiantnuclearSlot tone="wash" className="aspect-[1.8]" />
      <RadiantnuclearSlot tone="night" className="aspect-[1.8]" />
    </div>
  );
}
