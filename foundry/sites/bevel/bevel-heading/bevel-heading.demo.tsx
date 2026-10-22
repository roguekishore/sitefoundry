import { BevelHeading, type BevelHeadingProps } from "./bevel-heading";

export const headingSample: BevelHeadingProps = {
  title: (
    <>
      Begin every morning
      <br />
      knowing where you stand
    </>
  ),
  lead: "Your body's quiet signals, turned into numbers you can act on.",
};

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-20 text-foreground">
      <BevelHeading {...headingSample} />
    </div>
  );
}
