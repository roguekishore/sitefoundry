import { SuperhumanButton } from "./superhuman-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-background p-6">
      <SuperhumanButton label="Try Pages" href="#" />
      <SuperhumanButton label="Try Pages" href="#" size="sm" />
      <div className="flex gap-4 rounded-lg bg-chart-3 p-4">
        <SuperhumanButton label="Request a demo" href="#" variant="secondary" />
        <SuperhumanButton label="Get started" href="#" variant="outline" size="sm" />
      </div>
    </div>
  );
}
