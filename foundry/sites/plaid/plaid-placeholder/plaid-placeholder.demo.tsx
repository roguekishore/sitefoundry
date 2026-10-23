import { PlaidPlaceholder } from "./plaid-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-2">
      <div className="rounded-lg bg-linear-to-br from-foreground/75 via-glow to-highlight p-6">
        <PlaidPlaceholder tone="art" className="aspect-[944/736]" />
      </div>
      <div className="rounded-lg bg-linear-to-b from-highlight/15 via-secondary to-accent/70 p-6">
        <PlaidPlaceholder tone="panel" className="aspect-square rounded-[1.25rem]" />
      </div>
      <PlaidPlaceholder tone="photo" className="aspect-[420/250] rounded-[1.25rem]" />
      <div className="rounded-lg bg-foreground p-6">
        <PlaidPlaceholder tone="deep" className="aspect-[2/1] rounded-lg" />
      </div>
    </div>
  );
}
