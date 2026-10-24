import { CursorMedia } from "./cursor-media";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-2">
      <CursorMedia label="Product window over a painted backdrop" className="aspect-[1.24] rounded-lg" />
      <CursorMedia tone="plain" label="Team photo" className="aspect-[1.6] rounded-lg" />
    </div>
  );
}
