// Gallery only.
import { MymindEyebrow } from "./mymind-eyebrow";

export default function Demo() {
  return (
    <div className="flex flex-col items-center gap-4 bg-background p-10">
      <MymindEyebrow>What we stand for</MymindEyebrow>
      <MymindEyebrow tone="primary">Built to be quiet</MymindEyebrow>
    </div>
  );
}
