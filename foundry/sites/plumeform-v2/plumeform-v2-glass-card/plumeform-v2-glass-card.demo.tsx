import { PlumeformV2GlassCard } from "./plumeform-v2-glass-card";

export default function Demo() {
  return (
    <div className="dark grid gap-4 bg-background p-10 text-foreground sm:grid-cols-2">
      <PlumeformV2GlassCard className="p-8">
        <p className="text-lg font-bold">Pace checks</p>
        <p className="mt-2 text-sm text-muted-foreground">Flag answers given too quickly to be read.</p>
      </PlumeformV2GlassCard>
      <PlumeformV2GlassCard step={1} className="p-8">
        <p className="text-lg font-bold">Answer quotas</p>
        <p className="mt-2 text-sm text-muted-foreground">Close a group once it has enough replies.</p>
      </PlumeformV2GlassCard>
    </div>
  );
}
