import { BridgePlaceholder } from "./bridge-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-2">
      <BridgePlaceholder tone="sky" className="h-64 mask-b-from-40% mask-b-to-100%" />
      <BridgePlaceholder tone="flat" className="h-64 rounded-sm" />
    </div>
  );
}
