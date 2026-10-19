import { InfinityIcon } from "lucide-react";
import { HalodentalSonnetButton } from "./halodental-sonnet-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-3 bg-background p-8">
        <HalodentalSonnetButton>View the solution</HalodentalSonnetButton>
        <HalodentalSonnetButton variant="outline">View Media Room</HalodentalSonnetButton>
        <HalodentalSonnetButton variant="outline" disabled>
          Keep me posted
        </HalodentalSonnetButton>
        <HalodentalSonnetButton size="sm">About us</HalodentalSonnetButton>
      </div>
      <div className="dark flex flex-wrap items-center gap-3 bg-background p-8">
        <HalodentalSonnetButton variant="light">Reserve now</HalodentalSonnetButton>
        <HalodentalSonnetButton variant="quiet" label="Language">
          Fr
        </HalodentalSonnetButton>
        <HalodentalSonnetButton variant="quiet" label="Accessibility" className="w-10 px-0">
          <InfinityIcon aria-hidden className="size-4" />
        </HalodentalSonnetButton>
        <HalodentalSonnetButton size="lg">Play the video</HalodentalSonnetButton>
      </div>
    </div>
  );
}
