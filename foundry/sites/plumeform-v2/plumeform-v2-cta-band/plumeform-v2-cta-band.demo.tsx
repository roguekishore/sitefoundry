import { PlumeformV2CtaBand, type PlumeformV2CtaBandProps } from "./plumeform-v2-cta-band";

export const ctaSample: PlumeformV2CtaBandProps = {
  eyebrow: "Begin",
  title: "Start free. Move up when you need to.",
  cta: { label: "Try it free", href: "#start" },
  secondary: { label: "Open the live demo", href: "#demo" },
  note: "150 replies a month on Free, and no card. Plus is $12 a month for 8,000 replies and up to five team members.",
};

export const aboutCtaSample: PlumeformV2CtaBandProps = {
  eyebrow: "Begin",
  title: "The questionnaire is only the beginning.",
  cta: { label: "Open the live demo", href: "#demo" },
  secondary: { label: "Compare plans", href: "#plans" },
  note: (
    <>
      Begin from a draft or write your own questions, add branches, and share a link or embed it. Free includes 150 replies
      a month with no card needed. Read about <a href="#security">privacy and security</a> or visit the{" "}
      <a href="#help">help pages</a>.
    </>
  ),
};

export default function Demo() {
  return <PlumeformV2CtaBand {...ctaSample} />;
}
