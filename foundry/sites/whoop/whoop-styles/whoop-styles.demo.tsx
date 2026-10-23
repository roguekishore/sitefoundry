import { WhoopStyles, type WhoopStylesProps } from "./whoop-styles";

export const stylesSample: WhoopStylesProps = {
  heading: "One sensor, a band for every day",
  styles: [
    {
      tab: "Everyday",
      title: "The one you never take off",
      body: "Soft, quick-drying woven strap with a low clasp, made for desks, runs and sleep alike.",
      cta: { label: "Shop now", href: "#" },
    },
    {
      tab: "Training",
      title: "Built for the hard sessions",
      body: "A grippy, sweat-shrugging strap that holds the sensor still through lifts, sprints and swims.",
      cta: { label: "Shop now", href: "#" },
    },
    {
      tab: "Evening",
      title: "Quietly dressed up",
      body: "A fine knit in deep tones that sits under a cuff and goes from dinner straight to bed.",
      cta: { label: "Shop now", href: "#" },
    },
    {
      tab: "Upper arm",
      title: "Off the wrist, on the arm",
      body: "A slim sleeve band for sports where a wrist strap gets in the way.",
      cta: { label: "Shop now", href: "#" },
    },
  ],
  label: "Band styles",
};

export default function Demo() {
  return <WhoopStyles {...stylesSample} />;
}
