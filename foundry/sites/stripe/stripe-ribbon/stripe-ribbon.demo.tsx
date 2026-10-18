// Gallery only.
import { StripeRibbon } from "./stripe-ribbon";

export default function Demo() {
  return (
    <div className="grid gap-4 bg-background p-4 sm:grid-cols-2">
      <div className="relative h-80 overflow-hidden rounded-lg border border-border">
        <StripeRibbon className="absolute inset-0 size-full" />
      </div>
      <div className="dark relative h-80 overflow-hidden rounded-lg bg-background">
        <StripeRibbon shape="arc" className="absolute inset-0 size-full opacity-90" />
      </div>
    </div>
  );
}
