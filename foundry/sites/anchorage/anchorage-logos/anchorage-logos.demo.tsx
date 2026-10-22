// Sample content lives here (gallery only); the page reuses both rows.
import { AnchorageLogos, type AnchorageLogosProps } from "./anchorage-logos";

export const backersSample: AnchorageLogosProps = {
  title: "Backed by",
  logos: [
    { name: "Halberd", look: "plain" },
    { name: "Quill Partners", look: "stacked" },
    { name: "Norvane", look: "spaced" },
    { name: "Torq", look: "heavy" },
    { name: "fieldgrain", look: "plain" },
    { name: "Ostrander", look: "spaced" },
  ],
};

export const clientsSample: AnchorageLogosProps = {
  title: "Trusted by",
  logos: [
    { name: "Pellmark Hale", look: "stacked" },
    { name: "Vantor", look: "heavy" },
    { name: "Wexley Union", look: "stacked" },
    { name: "Greystead", look: "spaced" },
    { name: "Blackfen", look: "plain" },
    { name: "tidal.", look: "heavy" },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background">
      <AnchorageLogos {...backersSample} />
    </div>
  );
}
