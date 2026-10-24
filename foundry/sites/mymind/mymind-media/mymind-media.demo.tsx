// Gallery only: three empty slots at the sizes the mymind blocks use.
import { MymindMedia } from "./mymind-media";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-end gap-6 bg-background p-10">
      <MymindMedia className="aspect-[1.41] w-72 rounded-[12px] border border-border" />
      <MymindMedia className="aspect-square w-40 rounded-lg" />
      <div className="rounded-lg bg-foreground p-4">
        <MymindMedia tone="dark" className="aspect-[0.66] w-32 rounded-md" />
      </div>
    </div>
  );
}
