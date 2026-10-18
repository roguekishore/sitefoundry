// Sample content lives here (gallery only); the page reuses it.
import { StripeBanner, type StripeBannerProps } from "./stripe-banner";

export const bannerSample: StripeBannerProps = {
  title: "The money layer for the next wave of software",
  action: { label: "Watch the keynote", href: "/keynote" },
  mark: { bold: "fernpay", light: "summit" },
};

export default function Demo() {
  return <StripeBanner {...bannerSample} />;
}
