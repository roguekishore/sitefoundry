import { AnchorageCount } from "./anchorage-count";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-baseline gap-12 bg-background p-10 font-display text-6xl font-light text-foreground">
      <AnchorageCount value="7+" />
      <AnchorageCount value="2K+" />
      <AnchorageCount value="3.1B" />
      <AnchorageCount value="$218,450.06" from={0.25} className="font-sans text-3xl" />
    </div>
  );
}
