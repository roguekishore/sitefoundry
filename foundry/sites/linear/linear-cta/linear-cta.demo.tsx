// Sample content lives here (gallery only); the page reuses it.
import { LinearCta, type LinearCtaProps } from "./linear-cta";

export const ctaSample: LinearCtaProps = {
  title: <>Made for tomorrow.<br />Yours right now.</>,
  primary: { label: "Start building", href: "#start" },
  secondary: { label: "Talk to us", href: "#talk" },
};

export default function Demo() {
  return <LinearCta {...ctaSample} className="pt-section" />;
}
