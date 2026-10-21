import { RollersEyebrow } from "./rollers-eyebrow";

export default function Demo() {
  return (
    <div className="flex flex-col items-start gap-6 bg-background p-10 text-foreground">
      <RollersEyebrow>Who we are</RollersEyebrow>
      <div className="dark bg-background p-6">
        <RollersEyebrow>Why Stonebank</RollersEyebrow>
      </div>
    </div>
  );
}
