// Sample content lives here (gallery only); the page reuses it.
import { dashboardSample } from "../stripe-mock/stripe-mock.demo";
import { StripeShowcase, type StripeShowcaseProps } from "./stripe-showcase";

export const showcaseSample: StripeShowcaseProps = {
  segment: {
    title: "Turn your software into a complete money platform",
    text: "Booking tools, shop builders and practice software add payments, payouts and lending for their customers with fernpay, and earn on every transaction.",
    action: { label: "fernpay for platforms", href: "/platforms" },
  },
  mock: dashboardSample,
};

export default function Demo() {
  return <StripeShowcase {...showcaseSample} />;
}
