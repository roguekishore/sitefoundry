import { RaycastDevelopers, type RaycastDevelopersProps } from "./raycast-developers";

export const developersSample: RaycastDevelopersProps = {
  title: "Craft your own helpers.",
  text: "Our plug-in kit is built so that anyone who has written a web page can add a new power to Tessel.",
  link: { label: "Open the docs", href: "#" },
  figurePrefix: "FIG_",
  features: [
    { title: "Runs anywhere", description: "Write a plug-in once and it is ready for people on both desktop systems.", href: "#" },
    { title: "Ready-made UI", description: "A kit of parts lets you focus on the logic while we take care of the pixels.", href: "#" },
    { title: "Everything in the box", description: "A typed kit, live reload and modern tooling that make building a pleasure.", href: "#" },
    { title: "Share it widely", description: "Send your plug-in to the shop and put it in front of thousands of people.", href: "#" },
  ],
  cta: { label: "Start building", href: "#" },
};

export default function Demo() {
  return <RaycastDevelopers {...developersSample} />;
}
