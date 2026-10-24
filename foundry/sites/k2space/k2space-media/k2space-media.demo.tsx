import { K2spaceMedia } from "./k2space-media";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-gutter py-[50vh]">
      <K2spaceMedia scrub className="aspect-[2/1] w-full" />
      <K2spaceMedia className="aspect-square w-48 rounded-full" />
    </div>
  );
}
