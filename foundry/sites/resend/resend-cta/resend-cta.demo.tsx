// Sample content (gallery only); the page reuses it.
import { ResendCta, type ResendCtaProps } from "./resend-cta";

export const ctaSample: ResendCtaProps = {
  title: ["Your next send", "starts here."],
  action: { label: "Start free", href: "#start" },
  wordmark: "tern",
};

export default function Demo() {
  return <ResendCta {...ctaSample} />;
}
