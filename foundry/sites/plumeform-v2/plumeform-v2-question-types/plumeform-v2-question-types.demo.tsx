import {
  ArrowUpDown,
  Calculator,
  Clock,
  FileUp,
  Gauge,
  Grid3x3,
  Image,
  LayoutList,
  ListOrdered,
  MapPin,
  PenLine,
  SlidersHorizontal,
  Smile,
  SplitSquareHorizontal,
  Tags,
  Text,
} from "lucide-react";
import { PlumeformV2QuestionTypes, type PlumeformV2QuestionTypesProps } from "./plumeform-v2-question-types";

const catalogue = [
  "Single choice", "Tick boxes", "Short answer", "Long answer", "Stars", "Loyalty score", "Slider", "Agreement grid",
  "Drop-down", "Email", "Number", "Date", "Phone", "Postal address", "Picture choice", "Rank order", "Most / least",
  "Points split", "Word pairs", "Feature pairs",
].map((label) => ({ label }));
const plus = ["Price ladder", "Head to head", "Card piles", "Topic sort", "Hot spots", "Mark the text", "Trade-off sets", "Speed task"].map(
  (label) => ({ label, badge: "Plus" }),
);

export const questionTypesSample: PlumeformV2QuestionTypesProps = {
  eyebrow: "Twenty-eight ways to ask",
  title: "Pick how people reply.",
  body: "The free plan includes twenty of the twenty-eight question types, among them the ones research leans on: most-least, points split, word pairs, rank order and feature pairs. Sliders move in steps or smoothly, ratings come as stars or faces, and dates take a single day or a range. Plus adds the research tools and file uploads, which can also take a spoken answer.",
  link: { label: "Picking the right question", href: "#types" },
  selected: "Most / least",
  groups: [
    {
      label: "Trade-offs",
      chips: [
        { label: "Most / least", icon: <ArrowUpDown /> },
        { label: "Points split", icon: <Calculator /> },
        { label: "Rank order", icon: <ListOrdered /> },
      ],
    },
    {
      label: "Research",
      chips: [
        { label: "Feature pairs", icon: <SplitSquareHorizontal /> },
        { label: "Price ladder", icon: <Tags />, badge: "Plus" },
        { label: "Speed task", icon: <Clock />, badge: "Plus" },
      ],
    },
    {
      label: "Scales",
      chips: [
        { label: "Loyalty score", icon: <Gauge /> },
        { label: "Agreement grid", icon: <Grid3x3 /> },
        { label: "Slider", icon: <SlidersHorizontal /> },
        { label: "Stars", icon: <Smile /> },
      ],
    },
    {
      label: "Choice",
      chips: [
        { label: "Single choice", icon: <LayoutList /> },
        { label: "Picture choice", icon: <Image /> },
      ],
    },
    {
      label: "Words & more",
      chips: [
        { label: "Long answer", icon: <Text /> },
        { label: "Postal address", icon: <MapPin /> },
        { label: "Sketch", icon: <PenLine /> },
        { label: "File upload", icon: <FileUp />, badge: "Plus" },
      ],
    },
  ],
  previous: { label: "Previous type", href: "#prev" },
  next: { label: "Next type", href: "#next" },
  counter: "1 of 24",
  note: "Real examples. Nothing you enter or draw leaves this page.",
  catalogue: { label: "All 28 question types", items: [...catalogue, ...plus] },
  footnote: (
    <>
      <strong>Ready to drop in:</strong> Yes / No, Web address, Time, Date range, Country, Region, Faces, Staff loyalty score,
      First click, Quick pairing, Voice reply.
    </>
  ),
};

export default function Demo() {
  return <PlumeformV2QuestionTypes {...questionTypesSample} />;
}
