import { ModerntreasuryButton } from "./moderntreasury-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-background p-8">
      <ModerntreasuryButton href="#" arrow>
        Book a call
      </ModerntreasuryButton>
      <ModerntreasuryButton href="#" variant="outline" arrow>
        Read the docs
      </ModerntreasuryButton>
      <ModerntreasuryButton href="#" variant="outline" size="sm">
        Sign in
      </ModerntreasuryButton>
      <ModerntreasuryButton href="#" size="xs" arrow>
        See the case study
      </ModerntreasuryButton>
      <ModerntreasuryButton href="#" variant="link" arrow>
        Explore payouts
      </ModerntreasuryButton>
    </div>
  );
}
