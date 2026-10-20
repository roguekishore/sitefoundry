import { Play } from "lucide-react";
import { HhhusherV2Button } from "./hhhusher-v2-button";

export default function Demo() {
  return (
    <div className="space-y-px">
      <div className="flex flex-wrap items-center gap-6 bg-background p-8 text-foreground">
        <HhhusherV2Button>Buy</HhhusherV2Button>
        <HhhusherV2Button variant="link" href="#">Read more</HhhusherV2Button>
        <HhhusherV2Button variant="outline">Subscribe</HhhusherV2Button>
      </div>
      <div className="dark flex flex-wrap items-center gap-2.5 bg-background p-8 text-foreground">
        <HhhusherV2Button variant="soft" size="icon" label="Play the film">
          <Play className="size-4 fill-current" strokeWidth={0} />
        </HhhusherV2Button>
        <HhhusherV2Button variant="glass">Hear the difference</HhhusherV2Button>
        <HhhusherV2Button>Buy</HhhusherV2Button>
        <HhhusherV2Button variant="link" href="#" className="ml-4 text-primary">Read more</HhhusherV2Button>
      </div>
    </div>
  );
}
