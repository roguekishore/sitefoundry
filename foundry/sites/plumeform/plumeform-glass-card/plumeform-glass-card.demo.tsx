// Gallery only.
import { PlumeformGlassCard } from "./plumeform-glass-card";

export default function Demo() {
  return (
    <div className="dark bg-background p-10 text-foreground">
      <PlumeformGlassCard className="max-w-sm p-8">
        <p className="text-lg font-bold">Timed rounds</p>
        <p className="mt-2 text-sm text-muted-foreground">Each question stays up for as long as you set.</p>
      </PlumeformGlassCard>
    </div>
  );
}
