import { PuzzlePlaceholder } from "./puzzle-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-6 p-8 sm:grid-cols-3">
      <PuzzlePlaceholder className="aspect-[1.67] rounded-xl" />
      <div className="rounded-2xl bg-primary p-6">
        <PuzzlePlaceholder tone="powder" className="aspect-[1.13] rounded-sm" />
      </div>
      <PuzzlePlaceholder tone="photo" className="aspect-[0.79] rounded-xl" />
    </div>
  );
}
