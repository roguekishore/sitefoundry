import { HhhusherFooter, type HhhusherFooterProps } from "./hhhusher-footer";

export const footerSample: HhhusherFooterProps = {
  newsletterTitle: "Keep in Touch",
  emailPlaceholder: "Your email",
  subscribeLabel: "Sign up",
  consent: "Yes, Rimlock may email me now and then, and I can unsubscribe whenever I like.",
  columns: [
    [
      { label: "Bandcamp", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    [
      { label: "Write to us", href: "#" },
      { label: "Terms", href: "#terms" },
    ],
  ],
  wordmark: "Rimlock",
};

export default function Demo() {
  return (
    <div>
      <div className="h-[80svh] bg-secondary" />
      <HhhusherFooter {...footerSample} />
    </div>
  );
}
