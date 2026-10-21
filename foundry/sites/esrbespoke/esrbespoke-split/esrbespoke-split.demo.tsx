import { EsrbespokeSplit, type EsrbespokeSplitProps } from "./esrbespoke-split";

export const offerSample: EsrbespokeSplitProps = {
  id: "offer",
  heading: "What we do",
  body: [
    "Marlowe repairs and restores the coachwork of the world's most carefully built cars and nothing else. From hand-built grand tourers to the fastest road cars of the big European houses, our people are trained to the makers' own methods, use the tools those methods call for and finish every car without shortcuts. The styles listed here are the kind of cars our workshop is set up and certified to take in.",
  ],
};

export const standardSample: EsrbespokeSplitProps = { heading: "How we work" };

export const enquiriesSample: EsrbespokeSplitProps = {
  id: "enquiries",
  heading: "Enquiries",
  rows: [
    { label: "Phone", value: ["(08) 6100 4420"], href: "tel:+61861004420" },
    { label: "Email", value: ["desk@marlowe.example"], href: "mailto:desk@marlowe.example" },
    { label: "Hours", value: ["7:30am – 4:30pm", "Monday to Friday"] },
    { label: "After hours", value: ["Someone answers the workshop line", "every day of the year, day or night."] },
  ],
};

export const visitSample: EsrbespokeSplitProps = {
  heading: "Come and see",
  body: ["Both of our buildings are fitted out with the jigs, booths and measuring rigs the makers specify, so even the most involved structural work stays in house."],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <EsrbespokeSplit {...offerSample} />
      <EsrbespokeSplit {...enquiriesSample} />
      <EsrbespokeSplit {...standardSample} />
    </div>
  );
}
