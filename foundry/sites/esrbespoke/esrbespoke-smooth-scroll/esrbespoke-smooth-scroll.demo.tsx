import { EsrbespokeSmoothScroll } from "./esrbespoke-smooth-scroll";

const rows = Array.from({ length: 12 }, (_, i) => i + 1);

export default function Demo() {
  return (
    <div className="bg-background p-8 text-foreground">
      <EsrbespokeSmoothScroll />
      {rows.map((n) => (
        <div key={n} className="mb-6 h-40 bg-muted" />
      ))}
    </div>
  );
}
