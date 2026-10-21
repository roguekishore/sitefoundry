import { KononenkogroupMedia } from "./kononenkogroup-media";

export default function Demo() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-background p-10">
      <KononenkogroupMedia className="aspect-[8/5]" />
      <KononenkogroupMedia className="aspect-[361/525]" />
      <KononenkogroupMedia className="aspect-[549/405]" />
    </div>
  );
}
