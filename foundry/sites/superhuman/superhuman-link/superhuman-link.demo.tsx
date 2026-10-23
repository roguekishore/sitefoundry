import { SuperhumanLink } from "./superhuman-link";

export default function Demo() {
  return (
    <div className="flex gap-6 bg-background p-6">
      <SuperhumanLink label="Learn more" href="#" />
      <div className="rounded-lg bg-chart-3 p-4">
        <SuperhumanLink label="Learn more" href="#" tone="soft" />
      </div>
    </div>
  );
}
