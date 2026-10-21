import { StoreyarchitectureIntro, type StoreyarchitectureIntroProps } from "./storeyarchitecture-intro";

export const introSample: StoreyarchitectureIntroProps = {
  statements: [
    "A house should settle into its ground and stay there quietly. We draw homes that feel unhurried, built to last, and shaped around the people inside them.",
    "Every commission starts with the site and a long conversation. What follows is careful drawing, honest materials and detail that keeps its edge for decades.",
  ],
  preview: { label: "Point and click to open the houses", href: "#houses" },
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <div className="h-[60svh]" />
      <StoreyarchitectureIntro {...introSample} />
      <div className="h-[100svh]" />
    </div>
  );
}
