import { ZettaJoulePlaceholder } from "./zetta-joule-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-4 bg-background p-6 sm:grid-cols-2">
      <ZettaJoulePlaceholder tone="wash" className="aspect-[3/2]" />
      <ZettaJoulePlaceholder tone="panel" className="aspect-[3/2]" />
      <div className="bg-linear-to-b from-glow to-chart-5 p-4">
        <ZettaJoulePlaceholder tone="veil" className="aspect-[3/2]" />
      </div>
      <div className="dark bg-background p-4">
        <ZettaJoulePlaceholder tone="deep" className="aspect-[3/2]" />
      </div>
    </div>
  );
}
