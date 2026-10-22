// Sample content lives here (gallery only); the page reuses it.
import { AnchorageCta, type AnchorageCtaProps } from "./anchorage-cta";

export const ctaSample: AnchorageCtaProps = {
  title: "Bring your balance sheet on-chain, steadily.",
  body: "Our coverage team will map out what fits your institution.",
  cta: { label: "Talk to us", href: "#" },
};

export default function Demo() {
  return (
    <div className="bg-background">
      <AnchorageCta {...ctaSample} />
    </div>
  );
}
