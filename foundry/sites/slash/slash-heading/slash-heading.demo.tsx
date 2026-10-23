import { SlashHeading, type SlashHeadingProps } from "./slash-heading";

export const headingSample: SlashHeadingProps = {
  parts: ["A ", { italic: "steady" }, " financial footing"],
  sub: "Accounts that earn, cards that pay you back, and financing ready when the next order lands.",
  size: "xl",
};

export default function Demo() {
  return (
    <div className="grid gap-24 bg-background px-gutter py-20">
      <SlashHeading {...headingSample} headingClassName="max-w-[40rem]" />
      <SlashHeading parts={["Questions, ", { italic: "answered" }]} sub="Can't find what you need? Write to us." align="left" size="lg" />
    </div>
  );
}
