import { BasepowercompanySwash } from "./basepowercompany-swash";

export default function Demo() {
  return (
    <div className="flex flex-col gap-10 p-10">
      <h2 className="font-display text-[2.5rem] leading-[1.1] font-semibold tracking-[-0.02em] text-primary">
        <BasepowercompanySwash>Steady power</BasepowercompanySwash> starts at the Hub
      </h2>
      <div className="dark bg-background p-8">
        <h2 className="font-display text-[2.5rem] leading-[1.1] font-semibold tracking-[-0.02em] text-foreground">
          <BasepowercompanySwash tone="accent">The whole street switched</BasepowercompanySwash>
        </h2>
      </div>
    </div>
  );
}
