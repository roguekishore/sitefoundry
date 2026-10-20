// Gallery only.
import { PlumeformBadge } from "./plumeform-badge";

export default function Demo() {
  return (
    <div className="flex gap-10">
      <p className="flex items-center gap-2 bg-background p-8 font-semibold text-foreground">Timed rounds <PlumeformBadge>Plus</PlumeformBadge> <PlumeformBadge variant="text">Free</PlumeformBadge></p>
      <p className="dark flex items-center gap-2 bg-background p-8 font-semibold text-foreground">Timed rounds <PlumeformBadge>Plus</PlumeformBadge> <PlumeformBadge variant="text">Free</PlumeformBadge></p>
    </div>
  );
}
