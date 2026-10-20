import { WiemerV2SmoothScroll } from "./wiemer-v2-smooth-scroll";

const rows = Array.from({ length: 12 }, (_, i) => i + 1);

export default function Demo() {
  return (
    <div className="bg-background p-8 text-foreground">
      <WiemerV2SmoothScroll />
      {rows.map((n) => (
        <div key={n} className="mb-4 h-40 rounded-xl bg-muted" />
      ))}
    </div>
  );
}
