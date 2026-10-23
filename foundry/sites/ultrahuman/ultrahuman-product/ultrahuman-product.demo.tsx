// Sample content lives here (gallery only); the page reuses it. Kinrise is a made-up company.
import { BatteryFull, Database, Feather, HeartPulse, Layers, Shield, Timer, WalletCards } from "lucide-react";
import { UltrahumanProduct, type UltrahumanProductProps } from "./ultrahuman-product";

export const productMaxSample: UltrahumanProductProps = {
  tone: "dark",
  name: "Halo Max",
  tagline: "Built for more",
  statement: "Our most capable band yet: Halo Max brings sharper sensing and a longer charge to every long day you plan.",
  stat: { before: "Up to", value: "40 Days", after: "Of power with the Max charging case" },
  featuresTitle: "Inside Halo Max",
  features: [
    { icon: <BatteryFull />, title: "Up to 12 days per charge", body: "Made to last through long trips and longer weeks, with 12 days on a single charge." },
    { icon: <Database />, title: "Up to 200 days of storage", body: "Keeps your readings safe on the band for up to 200 days between syncs." },
    { icon: <Shield />, title: "Aerospace-grade titanium", body: "A titanium shell built to shrug off knocks, gym bars and years of wear." },
    { icon: <HeartPulse />, title: "Sharper pulse sensing", body: "A redesigned optical sensor reads a cleaner signal through sleep and recovery." },
  ],
  primary: { label: "Buy now", href: "#" },
  secondary: { label: "Learn more", href: "#" },
  mediaLabel: "Video of the band turning slowly on a sand-coloured backdrop",
};

export const productLiteSample: UltrahumanProductProps = {
  tone: "light",
  name: "Halo Lite",
  tagline: "Small band, the full picture",
  statement: "Our lightest band yet: Halo Lite keeps every reading going, all day and all night, in a remarkably slim shape.",
  stat: { before: "As light as", value: "2.6", after: "grams", scale: "xl" },
  featuresTitle: "Inside Halo Lite",
  features: [
    { icon: <Feather />, title: "10x lighter", body: "Than a typical smartwatch, at 2.6g and 2.5mm thin." },
    { icon: <Timer />, title: "Up to 7 days", body: "Five to seven days on a charge, so it stays on through the week." },
    { icon: <WalletCards />, title: "No monthly fee", body: "Every reading and core feature included, with nothing to renew." },
    { icon: <Layers />, title: "Soft inner shell", body: "A smooth, hypoallergenic inside you forget you're wearing." },
  ],
  primary: { label: "Buy now", href: "#" },
  secondary: { label: "Learn more", href: "#" },
  mediaLabel: "Render of the band, tilted, on white",
};

export default function Demo() {
  return (
    <div>
      <UltrahumanProduct {...productMaxSample} />
      <UltrahumanProduct {...productLiteSample} />
    </div>
  );
}
