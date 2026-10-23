import { EzraNote, type EzraNoteProps } from "./ezra-note";

export const noteSample: EzraNoteProps = {
  title: "Spread the cost over twelve months",
  body: "Many health savings accounts cover the scan.\nYour plan provider can tell you more.",
};

export default function Demo() {
  return <EzraNote {...noteSample} />;
}
