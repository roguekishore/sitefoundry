import { RollersRise } from "./rollers-rise";

const lines = [
  "Every machine leaves the yard serviced, fuelled and with its paperwork in the cab.",
  "Our operators hold their tickets and know a compaction curve when they see one.",
];

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-[70vh] text-foreground">
      <div className="grid gap-8 md:grid-cols-2">
        {lines.map((line, i) => (
          <RollersRise key={line} step={i}>
            <p className="text-[1.125rem] leading-[1.5]">{line}</p>
          </RollersRise>
        ))}
      </div>
      <RollersRise from="right" className="mt-10 inline-block">
        <span className="inline-flex h-12 items-center rounded-lg bg-primary px-7 text-primary-foreground">→</span>
      </RollersRise>
    </div>
  );
}
