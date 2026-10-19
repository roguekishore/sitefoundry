import { Accessibility } from "lucide-react";
import { HalodentalButton } from "./halodental-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3 bg-background p-8 text-foreground">
      <HalodentalButton variant="primary" href="#">
        View the solution
      </HalodentalButton>
      <HalodentalButton variant="outline" href="#">
        View Media Room
      </HalodentalButton>
      <HalodentalButton variant="muted">Keep me posted</HalodentalButton>
      <HalodentalButton variant="play">Play the video</HalodentalButton>
      <div className="dark flex items-center gap-2.5 rounded-lg bg-background p-4 text-foreground">
        <HalodentalButton variant="contrast" href="#">
          Reserve now
        </HalodentalButton>
        <HalodentalButton variant="ghost-square" href="#">
          Fr
        </HalodentalButton>
        <HalodentalButton variant="ghost-square" ariaLabel="Accessibility">
          <Accessibility className="size-4" strokeWidth={1.5} />
        </HalodentalButton>
      </div>
    </div>
  );
}
