// Sample content lives here (gallery only); the page reuses it. Corvane Energy is made up.
import { RadiantnuclearIntro, type RadiantnuclearIntroProps } from "./radiantnuclear-intro";

export const introSample: RadiantnuclearIntroProps = {
  statements: [
    "Power you can park right next to the work, so the people who run it set their own energy bill.",
    "Tessera is a 1.2 MW fission\ncell that ships on a flatbed,\na barge or a cargo jet and\nstarts running where it lands.",
    "The same unit for city utilities\n& defence sites.",
    "One Tessera keeps 1,200\nhomes lit for six years.",
  ],
};

export default function Demo() {
  return (
    <div className="bg-background">
      <div className="h-[60svh]" />
      <RadiantnuclearIntro {...introSample} />
      <div className="h-[60svh]" />
    </div>
  );
}
