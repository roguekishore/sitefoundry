import { VastspacePlaceholder } from "./vastspace-placeholder";

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-4 bg-background p-6">
      <VastspacePlaceholder className="aspect-square" />
      <VastspacePlaceholder className="aspect-[1084/701] rounded-sm" />
    </div>
  );
}
