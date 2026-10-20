import { PlumeformV2Backdrop } from "./plumeform-v2-backdrop";

export default function Demo() {
  return (
    <div className="dark relative isolate h-[28rem] text-foreground">
      <PlumeformV2Backdrop entrance="load" veil />
    </div>
  );
}
