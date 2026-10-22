import { GranolaMedia } from "./granola-media";

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-4 bg-background p-8 sm:grid-cols-5">
      <GranolaMedia className="aspect-square rounded-2xl" />
      <GranolaMedia tone="oat" className="aspect-[4/6] rounded-2xl" />
      <GranolaMedia tone="glow" className="aspect-square rounded-2xl" />
      <GranolaMedia tone="ink" className="aspect-[4/6] rounded-xl" />
      <GranolaMedia tone="field" className="aspect-video rounded-sm" />
    </div>
  );
}
