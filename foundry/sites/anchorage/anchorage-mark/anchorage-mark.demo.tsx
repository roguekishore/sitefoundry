// Sample content lives here (gallery only); other anchorage demos reuse it.
import { Layers } from "lucide-react";
import { AnchorageMark, type AnchorageMarkProps } from "./anchorage-mark";

export const markSample: AnchorageMarkProps = {
  emblem: <Layers strokeWidth={1.75} />,
  lines: ["strata", "reserve"],
  label: "Strata Reserve",
  href: "#",
};

export default function Demo() {
  return (
    <div className="flex items-center gap-10 bg-background p-10">
      <AnchorageMark {...markSample} />
      <AnchorageMark {...markSample} lines={[]} />
    </div>
  );
}
