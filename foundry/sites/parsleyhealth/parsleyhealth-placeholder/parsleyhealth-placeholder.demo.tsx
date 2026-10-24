import { ParsleyhealthPlaceholder } from "./parsleyhealth-placeholder";

export default function Demo() {
  return (
    <div className="grid grid-cols-3 gap-6 bg-background p-8">
      <ParsleyhealthPlaceholder className="aspect-square" label="Photo" />
      <ParsleyhealthPlaceholder className="aspect-[221/393]" label="Video still" />
      <div className="bg-card p-6">
        <ParsleyhealthPlaceholder tone="tint" className="aspect-[3/4]" label="Cut-out portrait" />
      </div>
    </div>
  );
}
