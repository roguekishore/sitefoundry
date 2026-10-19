// Sample content lives here (gallery only).
import { Accessibility, ArrowUpRight, Play } from "lucide-react";
import { HalodentalOpusButton } from "./halodental-opus-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-3 p-6">
        <HalodentalOpusButton>Meet the Beacon</HalodentalOpusButton>
        <HalodentalOpusButton variant="outline">Press room</HalodentalOpusButton>
        <HalodentalOpusButton variant="card" ariaLabel="Read the story">
          <ArrowUpRight aria-hidden className="size-4" strokeWidth={1.5} />
        </HalodentalOpusButton>
      </div>
      <div className="dark flex flex-wrap items-center gap-3 rounded-lg bg-card p-6 text-card-foreground">
        <HalodentalOpusButton variant="light">Book a demo</HalodentalOpusButton>
        <HalodentalOpusButton variant="tile">En</HalodentalOpusButton>
        <HalodentalOpusButton variant="tile" ariaLabel="Accessibility options">
          <Accessibility aria-hidden className="size-4" strokeWidth={1.5} />
        </HalodentalOpusButton>
        <HalodentalOpusButton lead={<Play aria-hidden className="size-4" strokeWidth={1.5} />}>Watch the film</HalodentalOpusButton>
      </div>
    </div>
  );
}
