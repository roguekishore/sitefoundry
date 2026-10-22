import { SharplinkLabel } from "./sharplink-label";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-10">
      <SharplinkLabel>From the journal</SharplinkLabel>
      <SharplinkLabel tone="muted">Stewardship</SharplinkLabel>
      <div className="dark bg-background p-6">
        <SharplinkLabel>Why the network, why now</SharplinkLabel>
      </div>
    </div>
  );
}
