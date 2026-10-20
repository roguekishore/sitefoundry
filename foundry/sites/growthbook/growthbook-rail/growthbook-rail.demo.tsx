import { GrowthbookRail } from "./growthbook-rail";

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-10">
      <div className="relative mx-auto h-[140svh] max-w-page border-l border-border">
        <GrowthbookRail />
      </div>
      <div className="dark relative mx-auto mt-10 h-64 max-w-md rounded-lg bg-background">
        <GrowthbookRail fixed className="rounded-l-lg" />
      </div>
    </div>
  );
}
