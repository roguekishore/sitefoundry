import { PrenuvoArc } from "./prenuvo-arc";

export default function Demo() {
  return (
    <div>
      <div className="dark h-64 bg-background" />
      <PrenuvoArc className="bg-muted px-gutter py-section text-foreground">
        <div className="mx-auto h-48 max-w-page rounded-lg border border-dashed border-border" />
      </PrenuvoArc>
      <PrenuvoArc className="dark bg-card px-gutter py-section text-foreground">
        <div className="mx-auto h-48 max-w-page rounded-lg border border-dashed border-border" />
      </PrenuvoArc>
    </div>
  );
}
