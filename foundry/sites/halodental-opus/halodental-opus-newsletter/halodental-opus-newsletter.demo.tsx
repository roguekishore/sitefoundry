// Sample content lives here (gallery only); the page reuses it.
import { HalodentalOpusNewsletter, type HalodentalOpusNewsletterProps } from "./halodental-opus-newsletter";

export const newsletterSample: HalodentalOpusNewsletterProps = {
  title: "Hear from us when something new lights up.",
  email: { label: "*Your email" },
  consent: (
    <>
      Yes, send me the Lumen newsletter. I agree that Lumen may use my details as set out in the <a href="#">privacy notice</a> and the{" "}
      <a href="#">site terms</a>.
    </>
  ),
  submit: "Sign me up",
};

export default function Demo() {
  return <HalodentalOpusNewsletter {...newsletterSample} />;
}
