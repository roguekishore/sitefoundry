import { LithicPlaceholder } from "./lithic-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-6 p-8 sm:grid-cols-4">
      <div className="dark relative aspect-square overflow-clip rounded-lg bg-background">
        <LithicPlaceholder tone="wash" className="absolute inset-0" />
      </div>
      <div className="grid place-items-center rounded-lg bg-accent p-6">
        <LithicPlaceholder tone="card" className="aspect-[259/139] w-full rounded-[1.35rem]" />
      </div>
      <div className="grid place-items-center rounded-lg bg-secondary p-6">
        <LithicPlaceholder tone="ink" className="aspect-[700/434] w-full rounded-xl" />
      </div>
      <div className="grid place-items-center rounded-lg bg-muted p-6">
        <LithicPlaceholder tone="dim" className="size-12 rounded-full" />
      </div>
    </div>
  );
}
