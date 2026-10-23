import { Orbit } from "lucide-react";
import { EzraLockup } from "./ezra-lockup";

export default function Demo() {
  return (
    <div className="flex flex-col items-start gap-8 bg-background p-10 text-foreground">
      <EzraLockup partner="Alder" name="kestrel" mark={<Orbit aria-hidden className="size-[1em]" strokeWidth={2.25} />} />
      <EzraLockup name="kestrel" className="text-3xl" />
    </div>
  );
}
