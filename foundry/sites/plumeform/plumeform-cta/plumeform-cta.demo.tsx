// Sample content lives here (gallery only); the pages reuse it. Tidewell is made up.
import { PlumeformCta, type PlumeformCtaProps } from "./plumeform-cta";

export const ctaSample: PlumeformCtaProps = {
  eyebrow: "Begin",
  title: "Start free. Move to Plus when the class grows.",
  cta: { label: "Try it free", href: "#start" },
  secondary: { label: "Sit the sample quiz", href: "#try" },
  note: "150 answers a month on Free, and no card. Plus is $12 a month for 8,000 answers and up to four teachers.",
};

export const ctaAboutSample: PlumeformCtaProps = {
  eyebrow: "Begin",
  title: "The quiz is only the start.",
  cta: { label: "Sit the sample quiz", href: "#try", arrow: false },
  secondary: { label: "See pricing", href: "#pricing" },
  note: (
    <>
      Start from a template or write your own questions, add hints, and share a link or a class code. The Free plan includes 150
      answers each month, with no card. Read about <a href="#privacy">student privacy</a> or browse the <a href="#help">help pages</a>.
    </>
  ),
};

export default function Demo() {
  return <PlumeformCta {...ctaSample} />;
}
