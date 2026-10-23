import { PilotBrushNote } from "./pilot-brush-note";

export default function Demo() {
  return (
    <div className="grid gap-16 bg-background px-6 py-16 text-foreground">
      <PilotBrushNote variant="script" stroke="accent" text="Clear numbers. Calm founders. Better calls." />
      <PilotBrushNote variant="script" stroke="glow" align="left" text="Answers in seconds, not at month end." />
      <PilotBrushNote stroke="primary" className="text-primary" text="Growing needs a partner who has read a thousand ledgers and knows which line matters." />
    </div>
  );
}
