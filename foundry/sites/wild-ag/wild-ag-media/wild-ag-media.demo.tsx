import { WildAgMedia } from "./wild-ag-media";

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-20">
      <div className="mx-auto grid max-w-page gap-10">
        <WildAgMedia className="aspect-[1.14] w-full max-w-xl rounded-lg" />
        <WildAgMedia fixed tone="soft" className="h-[70svh] w-full rounded-b-[calc(var(--radius)*4.5)]" />
        <div className="h-[80svh]" />
      </div>
    </div>
  );
}
