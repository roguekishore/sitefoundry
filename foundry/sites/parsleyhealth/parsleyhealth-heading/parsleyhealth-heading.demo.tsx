import { ParsleyhealthHeading } from "./parsleyhealth-heading";

export default function Demo() {
  return (
    <div className="flex flex-col gap-12 bg-background p-8">
      <ParsleyhealthHeading as="h1" size="hero" title="Care that starts with the question why" />
      <ParsleyhealthHeading eyebrow="Covered care" title="Root-cause medicine, now on your insurance card." align="phone-center" />
      <ParsleyhealthHeading eyebrow="Ongoing care" size="card" title="Full Circle Membership" />
      <div className="bg-primary p-8 text-primary-foreground">
        <ParsleyhealthHeading eyebrow="Two doors in" title="Pick how you begin" align="center" tone="inherit" />
      </div>
    </div>
  );
}
