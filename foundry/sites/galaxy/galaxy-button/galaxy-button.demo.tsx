import { GalaxyButton } from "./galaxy-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-6 bg-background p-8">
      <GalaxyButton href="#">Read the memo</GalaxyButton>
      <GalaxyButton href="#" variant="outline" tone="chart-1">
        Moving money
      </GalaxyButton>
      <GalaxyButton href="#" variant="outline" tone="chart-2">
        Running compute
      </GalaxyButton>
      <GalaxyButton variant="outline" tone="highlight">
        Shipping code
      </GalaxyButton>
    </div>
  );
}
