import { ThirdwayCountPill } from "./thirdway-count-pill";

export default function Demo() {
  return (
    <div className="flex items-center gap-1 bg-background p-8 text-foreground">
      <ThirdwayCountPill value="06" />
      <span className="px-2 text-sm font-medium">Teams</span>
      <ThirdwayCountPill value="16" />
      <ThirdwayCountPill value="09" />
      <ThirdwayCountPill value="2026" />
    </div>
  );
}
