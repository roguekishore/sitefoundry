// Sample content lives here (gallery only); the page reuses it. Tidewell is made up.
import {
  ArrowUpDown,
  Calculator,
  CircleDot,
  Grid3x3,
  Image,
  Layers,
  ListOrdered,
  MapPin,
  Mic,
  PenLine,
  Puzzle,
  SlidersHorizontal,
  Smile,
  Timer,
  Type,
  Upload,
} from "lucide-react";
import { PlumeformTypes, type PlumeformTypesProps } from "./plumeform-types";

export const typesSample: PlumeformTypesProps = {
  eyebrow: "Twenty-eight ways to answer",
  title: "Choose how students answer.",
  body: "The free plan has 19 of the 28 answer types, including the ones teachers reach for most: matching, ordering, fill the gap, number lines and labelled diagrams. Scales can step or slide, ratings come as stars or faces, and dates can ask for a day or a span. Plus adds the deeper tools (timed recall, drag-to-sort, hotspots on an image, sketch answers and spoken answers) and file upload, because files take space.",
  link: { label: "Picking an answer type", href: "#types" },
  groups: [
    {
      label: "Ordering",
      chips: [
        { label: "Put in order", icon: <ArrowUpDown /> },
        { label: "Rank by size", icon: <ListOrdered /> },
        { label: "Sort into groups", icon: <Layers /> },
      ],
    },
    {
      label: "Deeper",
      chips: [
        { label: "Matching", icon: <Puzzle /> },
        { label: "Timed recall", icon: <Timer />, badge: "Plus" },
        { label: "Image hotspot", icon: <MapPin />, badge: "Plus" },
        { label: "Working out", icon: <Calculator />, badge: "Plus" },
      ],
    },
    {
      label: "Scales",
      chips: [
        { label: "Confidence", icon: <SlidersHorizontal /> },
        { label: "Grid", icon: <Grid3x3 /> },
        { label: "Faces", icon: <Smile /> },
      ],
    },
    {
      label: "Choice",
      chips: [
        { label: "Pick one", icon: <CircleDot /> },
        { label: "Picture choice", icon: <Image /> },
      ],
    },
    {
      label: "Writing & more",
      chips: [
        { label: "Short answer", icon: <Type /> },
        { label: "Sketch", icon: <PenLine /> },
        { label: "Spoken answer", icon: <Mic />, badge: "Plus" },
        { label: "File upload", icon: <Upload />, badge: "Plus" },
      ],
    },
  ],
  controls: { previousLabel: "Previous type", nextLabel: "Next type", counter: "1 of 21" },
  note: "Working examples. Nothing you type or draw leaves this page.",
  all: {
    label: "All 28 answer types",
    items: [
      { label: "Pick one" },
      { label: "Pick several" },
      { label: "Short answer" },
      { label: "Long answer" },
      { label: "Star rating" },
      { label: "True or false" },
      { label: "Number line" },
      { label: "Fill the gap" },
      { label: "Dropdown" },
      { label: "Number" },
      { label: "Date" },
      { label: "Matching" },
      { label: "Put in order" },
      { label: "Picture choice" },
      { label: "Grid" },
      { label: "Faces" },
      { label: "Confidence" },
      { label: "Sort into groups" },
      { label: "Labelled diagram" },
      { label: "Timed recall", badge: "Plus" },
      { label: "Drag to sort", badge: "Plus" },
      { label: "Image hotspot", badge: "Plus" },
      { label: "Working out", badge: "Plus" },
      { label: "Highlight text", badge: "Plus" },
      { label: "Sketch", badge: "Plus" },
      { label: "Spoken answer", badge: "Plus" },
      { label: "Code answer", badge: "Plus" },
      { label: "File upload", badge: "Plus" },
    ],
  },
  extra: { lead: "Ready in the picker:", text: "Yes / No, Agree scale, Time, Year group, Subject, Reading level, Times tables, Spelling list, Map pin, Exit ticket." },
};

export default function Demo() {
  return <PlumeformTypes {...typesSample} />;
}
