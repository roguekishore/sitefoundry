// Sample content (gallery only); the page reuses it.
import { BevelPrivacy, type BevelPrivacyProps } from "./bevel-privacy";

export const privacySample: BevelPrivacyProps = {
  title: "Private by design",
  text: "What you log stays yours. It is never sold, and it is locked down with bank-grade encryption.",
};

export default function Demo() {
  return <BevelPrivacy {...privacySample} />;
}
