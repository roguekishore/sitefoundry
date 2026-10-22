import { WarpPlate } from "./warp-plate";

export default function Demo() {
  return (
    <div className="grid gap-8 bg-background p-6 lg:p-10">
      <WarpPlate caption="fig. 2 · a sample plate" rules>
        <p className="text-sm text-muted-foreground">Anything can sit inside the white card.</p>
      </WarpPlate>
      <WarpPlate caption="fig. 3 · plain dot grid" card={false} innerClassName="h-32" />
    </div>
  );
}
