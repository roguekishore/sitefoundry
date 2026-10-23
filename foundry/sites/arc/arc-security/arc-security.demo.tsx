import { ArcSecurity, type ArcSecurityProps } from "./arc-security";

export const securitySample: ArcSecurityProps = {
  heading: "Bank-grade safeguards and people who pick up the phone",
  items: [
    {
      title: "Locked down by default",
      body: "Hardware keys, per-person limits and approval chains keep every account and payment in the right hands.",
    },
    {
      title: "Open in an afternoon",
      body: "Apply in about ten minutes; once approved, every account, card and transfer lives in one place.",
    },
    {
      title: "A banker who knows you",
      body: "A named relationship lead answers within the hour and helps you plan the next raise.",
    },
  ],
};

export default function Demo() {
  return <ArcSecurity {...securitySample} />;
}
