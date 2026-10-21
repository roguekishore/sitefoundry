import { DaqEyebrow } from "./daq-eyebrow";

export default function Demo() {
  return (
    <div className="flex flex-col gap-10 bg-background p-10 text-foreground">
      <DaqEyebrow label="01 / How it flows" />
      <DaqEyebrow label="Position" strong rule="fill" />
      <DaqEyebrow label="02 / What we build" rule="short" ruleFillClassName="scale-x-50" />
    </div>
  );
}
