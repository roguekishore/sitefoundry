import { ChevronUp } from "lucide-react";
import { WarpButton } from "./warp-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8">
      <div className="flex flex-wrap items-center gap-4">
        <WarpButton href="#">Join the beta</WarpButton>
        <WarpButton href="#" variant="outline">Get the desktop app</WarpButton>
        <WarpButton href="#" variant="outline" arrow>Read more</WarpButton>
        <WarpButton href="#" variant="blue">Get the desktop app</WarpButton>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <WarpButton href="#" size="sm" variant="citron">Talk to us</WarpButton>
        <WarpButton href="#" size="sm" icon={<ChevronUp aria-hidden className="size-3.5" strokeWidth={2.25} />}>Start free</WarpButton>
        <WarpButton href="#" size="lg" className="w-64">Install</WarpButton>
      </div>
      <div className="flex flex-wrap items-center gap-4 bg-primary p-6">
        <WarpButton href="#" variant="inverse">Read the write-up</WarpButton>
      </div>
    </div>
  );
}
