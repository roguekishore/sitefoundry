import { SuperhumanBanner, type SuperhumanBannerProps } from "./superhuman-banner";

export const bannerSample: SuperhumanBannerProps = {
  text: "Looking for Wayfinder Post?",
  link: { label: "Learn more", href: "#" },
};

export default function Demo() {
  return <SuperhumanBanner {...bannerSample} />;
}
