import { WiemerWaitlist, type WiemerWaitlistProps } from "./wiemer-waitlist";

export const waitlistSample: WiemerWaitlistProps = {
  tag: "Arriving 2028",
  title: "Spring 2028",
  text: "Put your name down, with no strings attached, and be first in line the day the Raster ships. The first run is small, so it will not last long.",
  formTitle: "Join the list",
  prices: [
    { price: "€219", name: "Raster side table", note: "VAT and delivery included" },
    { price: "€279", name: "Raster shelf stand", note: "VAT and delivery included" },
  ],
  email: { label: "Email", placeholder: "you@example.com" },
  consent: (
    <>
      By giving my email address I agree that it is stored and used as set out in the <a href="#privacy">privacy notice</a>.
    </>
  ),
  submit: "Join the list",
  action: "#",
};

export default function Demo() {
  return <WiemerWaitlist {...waitlistSample} />;
}
