// Gallery only: empty slots show the placeholders.
import { CfsMedia } from "./cfs-media";

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-5 bg-background p-10">
      <CfsMedia rule className="aspect-[3/2]" />
      <CfsMedia tone="drawing" className="aspect-[1.37]" />
    </div>
  );
}
