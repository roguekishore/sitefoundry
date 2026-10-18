// Sample content lives here (gallery only).
import { StripeSegment, type StripeSegmentProps } from "./stripe-segment";

export const segmentSample: StripeSegmentProps = {
  title: "Run a global business on one financial backbone",
  text: "Retailers, airlines and marketplaces use fernpay to open new countries, add payment methods and close the books faster, without a new vendor for each.",
  action: { label: "fernpay for enterprise", href: "/enterprise" },
};

export default function Demo() {
  return (
    <div className="bg-background p-6 lg:p-12">
      <StripeSegment {...segmentSample} />
    </div>
  );
}
