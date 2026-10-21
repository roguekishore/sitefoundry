import { DaqCore, type DaqCoreProps } from "./daq-core";

export const coreSample: DaqCoreProps = {
  eyebrow: "01 / How it flows",
  title: "The Signal Path.",
  steps: [
    { name: "Capture", description: "Every feed arrives untouched and on the record. Nothing dropped, nothing assumed.", status: "Feeds attached" },
    { name: "Shape", description: "Matched, cleaned and modelled once, into one vocabulary every team reads the same way.", status: "Model layer" },
    { name: "Publish", description: "Measures and features served to dashboards, apps and agents from a single contract.", status: "Serving layer" },
    { name: "Guard", description: "Lineage and policy run alongside every job. Each change is reviewed, each run replayable.", status: "Stack online" },
  ],
  panelTitle: "Unified Signal",
  panelTitleMuted: "Stack",
  legend: ["Control layer", "Flow layer"],
  caption: "Point at a stage for detail",
  captionTouch: "Tap a stage for detail",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <DaqCore {...coreSample} />
      <div className="h-[50svh]" />
    </div>
  );
}
