import { ArcFeatureCopy } from "./arc-feature-copy";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-2">
      <div className="rounded-[calc(var(--radius)+12px)] bg-secondary p-10">
        <ArcFeatureCopy
          badge="Reserve"
          title="Put idle runway to work"
          body="Ladder short-dated Treasuries automatically and keep same-day access to every dollar you might need."
          linkLabel="Learn more"
        />
      </div>
      <div className="dark rounded-[calc(var(--radius)+12px)] bg-card p-10">
        <ArcFeatureCopy
          badge="Venture debt"
          title="Raise a credit line in weeks, not quarters"
          body="We run the process across our lender bench and hand you term sheets side by side."
          linkLabel="Learn more"
        />
      </div>
    </div>
  );
}
