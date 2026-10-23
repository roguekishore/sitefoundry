// Sample content lives here (gallery only); the page reuses it. Tessel is made up.
import { OuraringIntro, type OuraringIntroProps } from "./ouraring-intro";

export const introSample: OuraringIntroProps = {
  title: "Notice the small things. Change the big ones.",
  lede: "Tessel turns quiet signals from your body into plain guidance, so every morning starts with a clearer plan.",
  actions: [
    { label: "Why Tessel", href: "#" },
    { label: "The Science", href: "#" },
  ],
};

export default function Demo() {
  return <OuraringIntro {...introSample} />;
}
