// Sample content (gallery only).
import { FormenergyPlaceholder } from "./formenergy-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-secondary p-8 sm:grid-cols-2">
      <div className="aspect-[628/500] overflow-clip rounded-[6px]">
        <FormenergyPlaceholder />
      </div>
      <div className="dark aspect-[628/500] overflow-clip rounded-[6px]">
        <FormenergyPlaceholder tone="dark" />
      </div>
    </div>
  );
}
