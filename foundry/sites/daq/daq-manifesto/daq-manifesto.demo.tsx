import { DaqBackdrop } from "@foundry/daq-backdrop";
import { DaqManifesto, type DaqManifestoProps } from "./daq-manifesto";

export const manifestoSample: DaqManifestoProps = {
  label: "Position",
  tags: ["Evidence", "Traceable", "Durable", "Audit-ready"],
  parts: [
    { text: "Decisions deserve " },
    { text: "evidence.", key: true },
    { text: " We turn the sprawl of everyday records into " },
    { text: "traceable,", key: true },
    { text: " " },
    { text: "durable", key: true },
    { text: " signal that feeds " },
    { text: "audit-ready", key: true },
    { text: " models." },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <DaqBackdrop />
      <div className="relative h-[50svh]" />
      <DaqManifesto {...manifestoSample} />
      <div className="relative h-svh bg-background" />
    </div>
  );
}
