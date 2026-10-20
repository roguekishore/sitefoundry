import { WiemerV2Waitlist, type WiemerV2WaitlistProps } from "./wiemer-v2-waitlist";

export const waitlistSample: WiemerV2WaitlistProps = {
  id: "reserve",
  tag: "Pre-order",
  heading: "Spring 2027",
  text: "Reserve a place now, free and without obligation, and be first in line when Ilse ships. The first batch is small: forty of each.",
  formTitle: "Reserve your place",
  prices: [
    { price: "€189", label: "Ilse side table", note: "Incl. VAT and delivery" },
    { price: "€239", label: "Ilse shelf", note: "Incl. VAT and delivery" },
  ],
  fields: [{ name: "email", label: "Email", type: "email", placeholder: "you@domain.com", required: true }],
  consent: (
    <>
      I agree that Ostrand may keep my email address to tell me when Ilse ships, as set out in the <a href="#privacy">privacy notice</a>.
    </>
  ),
  submitLabel: "Reserve my place",
};

export default function Demo() {
  return <WiemerV2Waitlist {...waitlistSample} />;
}
