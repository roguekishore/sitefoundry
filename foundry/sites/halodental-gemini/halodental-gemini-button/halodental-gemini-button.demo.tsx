import { Play } from "lucide-react";
import { HalodentalGeminiButton } from "./halodental-gemini-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3 bg-background p-8">
      <HalodentalGeminiButton>View the solution</HalodentalGeminiButton>
      <HalodentalGeminiButton variant="outline">View Media Room</HalodentalGeminiButton>
      <HalodentalGeminiButton variant="secondary">Keep me posted</HalodentalGeminiButton>
      <HalodentalGeminiButton leadingIcon={<Play className="size-4" strokeWidth={1.75} />}>
        Play the video
      </HalodentalGeminiButton>
      <div className="dark flex items-center gap-2 rounded-lg bg-background p-4">
        <HalodentalGeminiButton variant="solid-inverse">Reserve now</HalodentalGeminiButton>
        <HalodentalGeminiButton variant="outline">Discover the Velo Lumen Probe</HalodentalGeminiButton>
        <HalodentalGeminiButton variant="secondary" size="square" ariaLabel="Switch language">
          Fr
        </HalodentalGeminiButton>
      </div>
    </div>
  );
}
