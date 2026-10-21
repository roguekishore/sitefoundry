import { LedupValues, type LedupValuesProps } from "./ledup-values";

export const valuesSample: LedupValuesProps = {
  items: [
    {
      label: "Innovation",
      title: "For those who ask more of light",
      text: "We turn light into answers that change how a space works. We look ahead, test new technology early and build LED lighting that does what you need today, and what you will need next. Practical, efficient and quietly dependable.",
    },
    {
      label: "Quality",
      title: "Fittings that keep their promise",
      text: "Every luminaire is checked, burned in and measured before it leaves us, so what you specify is exactly what you get on site.",
    },
    {
      label: "Efficiency",
      title: "More light for every watt",
      text: "Careful optics and drivers chosen for the long run keep energy bills down and the light even, year after year.",
    },
    {
      label: "Expertise",
      title: "Advice from people who light rooms",
      text: "Our team has worked on homes, shops and streets; we help you choose the right fitting, not just the one in stock.",
    },
    {
      label: "Sustainability",
      title: "Built to last, made to be repaired",
      text: "Replaceable drivers and modules, recyclable housings and packaging without plastic: less waste over a fitting's whole life.",
    },
  ],
};

export default function Demo() {
  return <LedupValues {...valuesSample} />;
}
