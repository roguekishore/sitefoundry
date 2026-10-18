import { MercuryHeading } from "./mercury-heading";

export default function Demo() {
  return (
    <div className="space-y-12 bg-background px-gutter py-12">
      <MercuryHeading as="h1" size="hero" align="center" title="Banking that stays out of your way" />
      <MercuryHeading size="statement" align="center" title={["Built for the long haul,", "like the companies we serve."]} />
      <MercuryHeading rule title="Money admin was a chore. Now it runs itself." />
      <MercuryHeading size="sub" title={["Every account and card.", "One calm dashboard."]} />
      <MercuryHeading as="h3" size="card" title="Larkspur raises its Series B" />
    </div>
  );
}
