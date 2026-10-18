// Sample content lives here (gallery only).
import { StripeHeading } from "./stripe-heading";

export default function Demo() {
  return (
    <div className="flex flex-col gap-10 bg-background p-8">
      <StripeHeading
        as="h1"
        size="hero"
        lead="Money infrastructure for ambitious teams."
        rest="Take payments, pay out and keep the books, all from one quiet API."
      />
      <StripeHeading
        lead="Built for every way you sell."
        rest="Pick the pieces you need, or run the whole stack together."
        className="max-w-2xl"
      />
      <StripeHeading size="sub" lead="Launch in new markets without new paperwork" />
      <StripeHeading stacked lead="Latest from the studio" rest="Field notes, launches and letters." />
    </div>
  );
}
