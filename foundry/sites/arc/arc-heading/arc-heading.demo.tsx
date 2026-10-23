import { ArcHeading } from "./arc-heading";

export default function Demo() {
  return (
    <div className="space-y-16 bg-background px-gutter py-16 text-foreground">
      <ArcHeading title="Accounts that keep up with your runway" />
      <ArcHeading as="h1" align="center" reveal={false} title="Smarter treasury for venture-backed software teams" />
    </div>
  );
}
