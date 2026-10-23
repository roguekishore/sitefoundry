import { ArcButton } from "./arc-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-muted p-8">
      <ArcButton href="#">Open an account</ArcButton>
      <ArcButton href="#" variant="outline">
        Talk to us
      </ArcButton>
      <ArcButton href="#" variant="outline" size="sm">
        Open an account
      </ArcButton>
      <div className="dark flex gap-4 bg-background p-6">
        <ArcButton href="#">Open an account</ArcButton>
      </div>
    </div>
  );
}
