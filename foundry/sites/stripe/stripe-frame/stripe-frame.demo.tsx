// Sample content lives here (gallery only).
import { StripeFrame } from "./stripe-frame";

export default function Demo() {
  return (
    <div>
      <StripeFrame innerClassName="py-16">
        <p className="font-light text-muted-foreground">A framed column: the faint lines at the sides run through every section.</p>
      </StripeFrame>
      <StripeFrame rule="dashed" innerClassName="py-16">
        <p className="font-light text-muted-foreground">A second section, divided from the first by a dashed hairline.</p>
      </StripeFrame>
    </div>
  );
}
