import { SlashCapabilities, type SlashCapabilitiesProps } from "./slash-capabilities";

export const capabilitiesSample: SlashCapabilitiesProps = {
  heading: ["Extended with ", { italic: "modern" }, " rails"],
  sub: "Stablecoin rails in and out, an API for developers, and many companies run from a single login.",
  items: [
    { title: "Stablecoin rails.", note: "4", body: "Move between dollars and digital dollars inside Ferro, with no extra spread on top." },
    { title: "Open API.", body: "Every account ships with read and write keys, so the dull parts of finance can run themselves." },
    { title: "Many entities.", body: "Hop between the books of each company you run, as easily as switching chat workspaces." },
  ],
};

export default function Demo() {
  return <SlashCapabilities {...capabilitiesSample} />;
}
