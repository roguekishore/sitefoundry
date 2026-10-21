import { DaqBackdrop } from "./daq-backdrop";

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <DaqBackdrop />
      <div className="relative flex h-svh items-center px-gutter">
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">Transparent section over the backdrop</p>
      </div>
      <div className="relative h-svh bg-background" />
      <div className="relative h-svh" />
    </div>
  );
}
