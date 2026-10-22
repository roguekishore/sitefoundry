import { AttioBadge } from "./attio-badge";

export default function Demo() {
  return (
    <div className="flex flex-wrap gap-6 bg-background p-8">
      <AttioBadge>Platform</AttioBadge>
      <AttioBadge>Changelog</AttioBadge>
      <div className="dark rounded-lg bg-background p-4">
        <AttioBadge>Signals</AttioBadge>
      </div>
    </div>
  );
}
