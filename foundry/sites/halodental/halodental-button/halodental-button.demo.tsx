import { Play } from "lucide-react";
import { HalodentalButton } from "./halodental-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3 bg-background p-8">
      <HalodentalButton>View the solution</HalodentalButton>
      <HalodentalButton variant="outline">View Media Room</HalodentalButton>
      <HalodentalButton variant="secondary">Keep me posted</HalodentalButton>
      <HalodentalButton leadingIcon={<Play className="size-4" strokeWidth={1.75} />}>
        Play the video
      </HalodentalButton>
      <div className="dark flex items-center gap-2 rounded-lg bg-background p-4">
        <HalodentalButton variant="solid-inverse">Reserve now</HalodentalButton>
        <HalodentalButton variant="outline">Discover the Velo Lumen Probe</HalodentalButton>
        <HalodentalButton variant="secondary" size="square" ariaLabel="Switch language">
          Fr
        </HalodentalButton>
      </div>
    </div>
  );
}
