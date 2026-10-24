// Gallery only.
import { ChevronRight, Smartphone } from "lucide-react";
import { MymindPill } from "./mymind-pill";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-background p-10">
      <MymindPill href="#" size="sm">Join free</MymindPill>
      <MymindPill href="#">Get it for iPhone</MymindPill>
      <MymindPill href="#" size="sm" caps trailing={<ChevronRight />}>Step inside</MymindPill>
      <MymindPill href="#" variant="soft" size="lg" icon={<Smartphone className="text-chart-3" />}>Phone app</MymindPill>
    </div>
  );
}
