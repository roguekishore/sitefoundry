import { Accessibility } from "lucide-react";
import { HalodentalVagueButton } from "./halodental-vague-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3 bg-background p-8 text-foreground">
      <HalodentalVagueButton variant="primary" href="#">
        View the solution
      </HalodentalVagueButton>
      <HalodentalVagueButton variant="outline" href="#">
        View Media Room
      </HalodentalVagueButton>
      <HalodentalVagueButton variant="muted">Keep me posted</HalodentalVagueButton>
      <HalodentalVagueButton variant="play">Play the video</HalodentalVagueButton>
      <div className="dark flex items-center gap-2.5 rounded-lg bg-background p-4 text-foreground">
        <HalodentalVagueButton variant="contrast" href="#">
          Reserve now
        </HalodentalVagueButton>
        <HalodentalVagueButton variant="ghost-square" href="#">
          Fr
        </HalodentalVagueButton>
        <HalodentalVagueButton variant="ghost-square" ariaLabel="Accessibility">
          <Accessibility className="size-4" strokeWidth={1.5} />
        </HalodentalVagueButton>
      </div>
    </div>
  );
}
