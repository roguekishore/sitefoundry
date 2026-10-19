import { HalodentalVagueFlashNewsletter, type HalodentalVagueFlashNewsletterProps } from "./halodental-vague-flash-newsletter";

export const newsletterSample: HalodentalVagueFlashNewsletterProps = {
  title: "Keep connected to our team and progress.",
  emailLabel: "*Email address",
  consentPrefix:
    "By signing up to the newsletter, I agree to Sola processing my personal data in line with the",
  privacyLink: { label: "privacy policy", href: "#privacy" },
  termsLink: { label: "terms of use", href: "#terms" },
  submitLabel: "Keep me posted",
};

export default function Demo() {
  return <HalodentalVagueFlashNewsletter {...newsletterSample} />;
}
