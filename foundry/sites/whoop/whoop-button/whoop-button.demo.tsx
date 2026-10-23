import { ShoppingBag } from "lucide-react";
import { WhoopButton } from "./whoop-button";

export default function Demo() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <div className="flex flex-col items-start gap-4 bg-background p-8">
        <WhoopButton href="#">Shop the band</WhoopButton>
        <WhoopButton href="#" shape="block" icon={<ShoppingBag aria-hidden className="size-5" />}>
          Get Apex
        </WhoopButton>
        <WhoopButton href="#" shape="outline">
          See details
        </WhoopButton>
      </div>
      <div className="flex flex-col items-start gap-4 bg-foreground p-8">
        <WhoopButton href="#" tone="inverse">
          Shop the band
        </WhoopButton>
        <WhoopButton href="#" shape="outline" tone="inverse">
          See details
        </WhoopButton>
      </div>
    </div>
  );
}
