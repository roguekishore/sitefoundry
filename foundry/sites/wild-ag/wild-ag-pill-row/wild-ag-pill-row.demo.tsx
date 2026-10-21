import { WildAgPillRow } from "./wild-ag-pill-row";

export default function Demo() {
  return (
    <div className="grid gap-10 bg-background p-6 lg:grid-cols-2 lg:p-12">
      <div className="grid gap-3">
        <WildAgPillRow number={1} label="Site development" href="#one" />
        <WildAgPillRow number={2} label="Funding" href="#two" />
      </div>
      <div className="grid gap-3 rounded-lg bg-linear-15 from-primary to-highlight p-6">
        <WildAgPillRow number={1} label="Survey" href="#one" tone="band" />
        <WildAgPillRow number={2} label="Design" href="#two" tone="band" />
      </div>
    </div>
  );
}
