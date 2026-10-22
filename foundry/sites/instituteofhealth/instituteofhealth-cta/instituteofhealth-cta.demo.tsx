// Sample content (gallery only); the page reuses it.
import { InstituteofhealthCta, type InstituteofhealthCtaProps } from "./instituteofhealth-cta";

export const ctaSample: InstituteofhealthCtaProps = {
  lead: ["A clear next step usually starts with one honest talk.", "Let's sketch where your practice goes from here."],
  heading: "Your lab skills are only the start",
  action: { label: "Book a free planning call", href: "#" },
};

export default function Demo() {
  return <InstituteofhealthCta {...ctaSample} />;
}
