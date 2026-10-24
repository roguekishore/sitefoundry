import { SaronicPlaceholder } from "./saronic-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-4 bg-background p-8 sm:grid-cols-2">
      <SaronicPlaceholder className="aspect-[4/3] rounded-xl" />
      <div className="dark bg-background p-4">
        <SaronicPlaceholder className="aspect-video rounded-xl" />
      </div>
    </div>
  );
}
