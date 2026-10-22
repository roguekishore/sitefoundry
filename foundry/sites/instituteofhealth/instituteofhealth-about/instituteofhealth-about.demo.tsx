// Sample content (gallery only); the page reuses it.
import { InstituteofhealthAbout, type InstituteofhealthAboutProps } from "./instituteofhealth-about";

export const aboutSample: InstituteofhealthAboutProps = {
  heading: "Made for people who refuse to give half-answers.",
  chips: ["Lasting Change", "Calm Experts", "Think It Through"],
  body: "At Calder, training is not about memorising lists or copying templates. It is about reasoning from first principles, speaking with authority, and building a practice that is still standing in ten years.",
  action: { label: "Our story", href: "#" },
};

export default function Demo() {
  return <InstituteofhealthAbout {...aboutSample} />;
}
