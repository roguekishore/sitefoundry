import { GrowthbookV2Panel } from "./growthbook-v2-panel";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-2 lg:grid-cols-3">
      <GrowthbookV2Panel tone="violet" grid className="aspect-square" />
      <GrowthbookV2Panel tone="mint" grid className="aspect-square" />
      <GrowthbookV2Panel tone="sky" grid className="aspect-square" />
      <GrowthbookV2Panel tone="navy" className="aspect-[4/5]" />
      <GrowthbookV2Panel tone="teal" className="aspect-[4/5]" />
      <GrowthbookV2Panel tone="violet" grid className="flex aspect-square items-center justify-center p-8">
        <div className="aspect-[3/2] w-full rounded-lg bg-card shadow-[0_4px_20px_color-mix(in_oklab,var(--foreground)_10%,transparent)]" />
      </GrowthbookV2Panel>
    </div>
  );
}
