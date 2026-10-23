import { SlashPlaceholder } from "./slash-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-4">
      <div className="relative aspect-[16/10] overflow-clip rounded-lg border border-border">
        <SlashPlaceholder tone="lit" className="absolute inset-0" />
      </div>
      <div className="relative aspect-[570/443] overflow-clip rounded-lg border border-border bg-card">
        <SlashPlaceholder tone="card" className="absolute inset-0" />
      </div>
      <SlashPlaceholder tone="dim" className="aspect-[578/350] rounded-xl" />
      <div className="grid place-items-center">
        <SlashPlaceholder tone="chip" className="size-10 rounded-full" />
      </div>
    </div>
  );
}
