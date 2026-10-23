import { UnitChip } from "./unit-chip";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-2 bg-background p-8">
      <UnitChip>Pooled balances</UnitChip>
      <UnitChip>Same-day ACH</UnitChip>
      <UnitChip>Instant payouts</UnitChip>
      <UnitChip tone="solid">ISO 27001</UnitChip>
      <UnitChip tone="solid">SOC 1</UnitChip>
    </div>
  );
}
