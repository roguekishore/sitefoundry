import { SuperpowerButton } from "./superpower-button";

export default function Demo() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-4 bg-background p-8 text-foreground">
        <SuperpowerButton size="sm">Join Kestrel</SuperpowerButton>
        <SuperpowerButton>Start your membership</SuperpowerButton>
        <SuperpowerButton variant="brand">Book your first test</SuperpowerButton>
      </div>
      <div className="dark flex flex-wrap items-center gap-4 bg-background p-8 text-foreground">
        <SuperpowerButton>Get going</SuperpowerButton>
        <SuperpowerButton variant="glass">Browse the panel</SuperpowerButton>
      </div>
      <div className="bg-background p-8">
        <SuperpowerButton size="lg" block>
          Claim your first panel
        </SuperpowerButton>
      </div>
    </div>
  );
}
