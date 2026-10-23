import { OndoPlaceholder } from "./ondo-placeholder";

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-4 bg-background p-8 sm:grid-cols-4">
      <OndoPlaceholder className="aspect-square rounded-2xl" label="Photo" />
      <OndoPlaceholder tone="deep" className="aspect-square rounded-2xl" />
      <OndoPlaceholder tone="photo" className="aspect-square rounded-2xl" />
      <OndoPlaceholder tone="faint" className="aspect-square rounded-2xl" />
    </div>
  );
}
