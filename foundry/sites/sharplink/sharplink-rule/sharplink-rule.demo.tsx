import { SharplinkRule } from "./sharplink-rule";

export default function Demo() {
  return (
    <div className="grid gap-10 bg-background p-10">
      <SharplinkRule />
      <SharplinkRule mark={false} />
      <div className="dark bg-background p-6">
        <SharplinkRule markTone="foreground" />
      </div>
    </div>
  );
}
