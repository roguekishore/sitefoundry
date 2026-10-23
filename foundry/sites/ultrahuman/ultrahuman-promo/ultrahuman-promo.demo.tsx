// Sample content lives here (gallery only); the page reuses it. Kinrise is a made-up company.
import { UltrahumanPromo, type UltrahumanPromoProps } from "./ultrahuman-promo";

export const promoSample: UltrahumanPromoProps = {
  eyebrow: "Halo Lite",
  title: ["40% off.", "At your door tonight."],
  body: "In selected cities, for orders placed before 6PM.",
  action: { label: "Shop now", href: "#" },
  mediaLabel: "Photo of a hand wearing the band, resting on linen",
  readouts: [
    { value: "82", label: "Readiness" },
    { value: "14%", label: "REM sleep" },
    { value: "61 ms", label: "HRV" },
  ],
};

export default function Demo() {
  return <UltrahumanPromo {...promoSample} />;
}
