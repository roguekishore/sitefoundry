import { PlaidButton } from "./plaid-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-8 bg-background p-8">
      <div className="flex flex-wrap items-center gap-4">
        <PlaidButton href="#">Start a project</PlaidButton>
        <PlaidButton href="#" variant="sky">Create a key</PlaidButton>
        <PlaidButton href="#" variant="aqua">Speak with sales</PlaidButton>
        <PlaidButton href="#" variant="outline" size="md">Sign in</PlaidButton>
        <PlaidButton href="#" size="md">Talk to us</PlaidButton>
      </div>
      <div className="flex flex-wrap items-center gap-4 rounded-lg bg-linear-to-br from-foreground/75 via-glow to-highlight p-8">
        <PlaidButton href="#" variant="mint">Speak with sales</PlaidButton>
        <PlaidButton href="#" variant="paper">Explore applied AI</PlaidButton>
      </div>
    </div>
  );
}
