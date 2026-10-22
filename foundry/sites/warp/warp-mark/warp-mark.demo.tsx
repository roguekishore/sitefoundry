import { WarpMark } from "./warp-mark";

export default function Demo() {
  return (
    <div className="flex items-center gap-10 bg-background p-8">
      <WarpMark name="lathe" />
      <WarpMark name="lathe" iconOnly />
    </div>
  );
}
