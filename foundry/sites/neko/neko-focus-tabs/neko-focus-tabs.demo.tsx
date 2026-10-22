// Sample content lives here (gallery only); the page reuses it. Ardent Health is made up.
import { NekoFocusTabs, type NekoFocusTabsProps } from "./neko-focus-tabs";

export const focusTabsSample: NekoFocusTabsProps = {
  tabs: [
    {
      tab: "Skin",
      title: "Every freckle, mapped and remembered",
      body: "Our booth takes thousands of sharp photographs of your skin and lines them up visit after visit, so a change never goes unseen.",
      link: { label: "See how it works", href: "#skin" },
    },
    {
      tab: "Heart",
      title: "A closer listen to how your heart works",
      body: "An ultrasound sensor and a twelve-lead trace show how your heart pumps, and how supple your arteries really are.",
      link: { label: "See how it works", href: "#heart" },
    },
    {
      tab: "Blood",
      title: "Lab results while your tea is still warm",
      body: "We test your sample in the lab next door, so the numbers are ready to talk through before you head home.",
      link: { label: "See how it works", href: "#blood" },
    },
    {
      tab: "Strength",
      title: "A truer measure of what you are made of",
      body: "Muscle, fat and grip strength without a hospital scanner: the readings that say most about ageing well.",
      link: { label: "See how it works", href: "#strength" },
    },
  ],
};

export default function Demo() {
  return <NekoFocusTabs {...focusTabsSample} />;
}
