import { HhhusherV2Footer, type HhhusherV2FooterProps } from "./hhhusher-v2-footer";

export const footerSample: HhhusherV2FooterProps = {
  title: "Hear It First",
  emailPlaceholder: "Your email",
  submitLabel: "Sign up",
  consent: "Yes, Quello may email me now and then, and I can unsubscribe whenever I like.",
  links: [
    { label: "YouTube", href: "#youtube" },
    { label: "Get in touch", href: "#contact" },
    { label: "Instagram", href: "#instagram" },
    { label: "Terms of use", href: "#terms" },
  ],
  wordmark: "QUELLO",
};

export default function Demo() {
  return <HhhusherV2Footer {...footerSample} />;
}
