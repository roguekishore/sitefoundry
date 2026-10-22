import { ModerntreasuryMedia } from "./moderntreasury-media";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-2">
      <ModerntreasuryMedia label="Product art" className="aspect-video rounded-lg" />
      <ModerntreasuryMedia label="Rail diagram" className="aspect-[2.76/1]" />
    </div>
  );
}
