import { WarpMedia } from "./warp-media";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-2">
      <WarpMedia label="Customer photo" className="aspect-square" />
      <WarpMedia label="Benchmark chart" className="aspect-[1.6/1] border border-border" />
    </div>
  );
}
