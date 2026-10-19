import { Accessibility } from "lucide-react";
import { HalodentalVagueFlashButton } from "./halodental-vague-flash-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3 bg-background p-8 text-foreground">
      <HalodentalVagueFlashButton variant="primary" href="#">
        View the solution
      </HalodentalVagueFlashButton>
      <HalodentalVagueFlashButton variant="outline" href="#">
        View Media Room
      </HalodentalVagueFlashButton>
      <HalodentalVagueFlashButton variant="muted">Keep me posted</HalodentalVagueFlashButton>
      <HalodentalVagueFlashButton variant="play">Play the video</HalodentalVagueFlashButton>
      <div className="dark flex items-center gap-2.5 rounded-lg bg-background p-4 text-foreground">
        <HalodentalVagueFlashButton variant="contrast" href="#">
          Reserve now
        </HalodentalVagueFlashButton>
        <HalodentalVagueFlashButton variant="ghost-square" href="#">
          Fr
        </HalodentalVagueFlashButton>
        <HalodentalVagueFlashButton variant="ghost-square" ariaLabel="Accessibility">
          <Accessibility className="size-4" strokeWidth={1.5} />
        </HalodentalVagueFlashButton>
      </div>
    </div>
  );
}
