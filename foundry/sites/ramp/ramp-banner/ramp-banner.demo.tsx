// Sample content lives here (gallery only); the page reuses it.
import { RampBanner, type RampBannerProps } from "./ramp-banner";

export const bannerSample: RampBannerProps = {
  title: "Find out what your agents could take on.",
  text: "A tailored tour of the chores Kestrel can lift off your team this quarter.",
  cta: { label: "Book a tour", href: "#" },
};

export default function Demo() {
  return (
    <div className="bg-background py-12">
      <RampBanner {...bannerSample} />
    </div>
  );
}
