import { AatArchitectenAbout, type AatArchitectenAboutProps } from "./aat-architecten-about";

export const aboutSample: AatArchitectenAboutProps = {
  id: "studio",
  text: "For us a building works when people hardly notice it: the stair is where the hand expects it, daylight reaches the desk at the right hour, and the budget still holds at handover. More and more we build with reused brick, timber frames and roofs that keep their own rainwater, and we leave the plan open enough to change with the people inside.",
  linkLabel: "About the studio",
  linkHref: "#studio",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <div className="h-[70svh]" />
      <AatArchitectenAbout {...aboutSample} />
    </div>
  );
}
