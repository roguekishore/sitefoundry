import { EzraPlaceholder } from "./ezra-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-3">
      <EzraPlaceholder tone="wash" className="mx-auto aspect-[366/662] w-40" />
      <EzraPlaceholder tone="photo" className="aspect-[794/538] w-full" />
      <EzraPlaceholder tone="icon" className="size-32 rounded-lg" />
    </div>
  );
}
