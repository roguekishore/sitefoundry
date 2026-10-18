import { HalodentalNewsletter, type HalodentalNewsletterProps } from "./halodental-newsletter";

export const newsletterSample: HalodentalNewsletterProps = {
  title: "Stay connected with our team and clinical trials.",
  emailLabel: "*Email address",
  consentLead:
    "By subscribing to dispatches, I agree to Velo Optics processing my personal data in accordance with the",
  privacyLink: { label: "privacy notice", href: "#privacy" },
  consentMiddle: "and",
  termsLink: { label: "terms of service", href: "#terms" },
  submitLabel: "Keep me posted",
};

export default function Demo() {
  return <HalodentalNewsletter {...newsletterSample} />;
}
