// Sample content (gallery only).
import { StokespacePlaceholder } from "./stokespace-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-5 bg-background p-gutter py-10 sm:grid-cols-2">
      <div className="aspect-[4/3]">
        <StokespacePlaceholder />
      </div>
      <div className="aspect-[7/3]">
        <StokespacePlaceholder tone="sky" />
      </div>
    </div>
  );
}
