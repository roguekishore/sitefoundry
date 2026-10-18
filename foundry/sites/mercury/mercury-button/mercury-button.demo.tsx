import { MercuryButton } from "./mercury-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3 bg-background p-8">
      <MercuryButton>Open an account</MercuryButton>
      <MercuryButton variant="secondary" external>
        Talk to us
      </MercuryButton>
      <MercuryButton variant="glass">Take the tour</MercuryButton>
      <MercuryButton variant="secondary" size="sm">
        See how it works
      </MercuryButton>
      <MercuryButton variant="link" href="#">
        Take the tour
      </MercuryButton>
    </div>
  );
}
