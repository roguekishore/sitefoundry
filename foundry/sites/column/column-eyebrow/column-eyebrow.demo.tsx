import { ColumnEyebrow } from "./column-eyebrow";

export default function Demo() {
  return (
    <div className="flex flex-col gap-4 bg-background p-8">
      <div className="flex flex-wrap gap-3">
        <ColumnEyebrow tone="highlight">Proven at volume</ColumnEyebrow>
        <ColumnEyebrow tone="chart-1" cursor>Built for builders</ColumnEyebrow>
        <ColumnEyebrow tone="chart-2" cursor>Made for</ColumnEyebrow>
        <ColumnEyebrow tone="chart-4" cursor>Catalogue</ColumnEyebrow>
      </div>
      <div className="dark rounded-xl bg-background p-6">
        <ColumnEyebrow tone="primary" cursor>Under the hood</ColumnEyebrow>
      </div>
    </div>
  );
}
