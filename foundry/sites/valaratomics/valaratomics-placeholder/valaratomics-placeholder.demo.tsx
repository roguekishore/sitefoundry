// Sample content (gallery only).
import { ValaratomicsPlaceholder } from "./valaratomics-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-4 bg-background p-8 sm:grid-cols-2">
      <div className="dark aspect-video">
        <ValaratomicsPlaceholder />
      </div>
      <ValaratomicsPlaceholder tone="flat" className="aspect-video" />
    </div>
  );
}
