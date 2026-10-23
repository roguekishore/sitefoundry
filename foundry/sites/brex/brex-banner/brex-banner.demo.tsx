import { BrexBanner, type BrexBannerProps } from "./brex-banner";

export const bannerSample: BrexBannerProps = {
  text: "Autumn is our biggest release yet: twelve new tools for finance teams.",
  link: { label: "See what's new", href: "#" },
};

export default function Demo() {
  return <BrexBanner {...bannerSample} />;
}
