// Sample content lives here (gallery only); the page reuses it.
import { StripeScale, type StripeScaleProps } from "./stripe-scale";

export const scaleSample: StripeScaleProps = {
  title: "Stay calm at peak.",
  rest: "Take thousands of payments a second at the same speed, even on your busiest sale day.",
  metrics: [
    { value: "620m+", label: "API calls a day" },
    { value: "14k+", label: "API calls a second" },
    { value: "180k+", label: "payments a minute" },
  ],
};

export default function Demo() {
  return <StripeScale {...scaleSample} />;
}
