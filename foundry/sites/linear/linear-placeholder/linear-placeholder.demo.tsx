import { LinearPlaceholder } from "./linear-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-8 bg-background p-8 sm:grid-cols-2">
      <LinearPlaceholder label="Product window" className="aspect-[1.83]" />
      <LinearPlaceholder kind="patch" label="Illustration" className="aspect-[1.1]" />
    </div>
  );
}
