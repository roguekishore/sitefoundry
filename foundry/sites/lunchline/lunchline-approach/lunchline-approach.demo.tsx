import { LunchlineApproach, type LunchlineApproachProps } from "./lunchline-approach";

export const approachSample: LunchlineApproachProps = {
  id: "method",
  eyebrow: "How we work",
  heading: "steady gains from the ferrybank method",
  body: "we look for durable, owner-run companies in crowded local markets, then add what a small team rarely has time to build: better systems, sharper data, and room to hire well. Patient improvements, compounded, are where the real value sits.",
  board: {
    title: "the ferrybank method",
    lines: [
      { text: "grow it (not bolt it on)", kind: "aside" },
      { text: "many small levers", arrow: true },
      { text: "+", kind: "sign" },
      { text: "patient capital", note: "people\n+ process" },
      { text: "=", kind: "sign" },
      { text: "lasting value", underline: true },
    ],
  },
};

export default function Demo() {
  return (
    <>
      <LunchlineApproach {...approachSample} />
      <div className="h-[60vh] bg-background" />
    </>
  );
}
