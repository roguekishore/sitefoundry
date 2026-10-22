import { RampLiveNumber } from "./ramp-live-number";

export default function Demo() {
  return (
    <div className="flex flex-wrap gap-6 bg-background p-8 text-sm">
      <span className="rounded-sm bg-muted px-1.5 py-0.5">
        <RampLiveNumber start={0.6183407} step={0.0000004} decimals={7} suffix="%" every={1200} />
      </span>
      <span className="rounded-sm bg-muted px-1.5 py-0.5">
        <RampLiveNumber start={418204} step={9} />
      </span>
    </div>
  );
}
