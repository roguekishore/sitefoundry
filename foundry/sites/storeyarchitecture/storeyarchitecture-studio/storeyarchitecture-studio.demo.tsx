import { StoreyarchitectureStudio, type StoreyarchitectureStudioProps } from "./storeyarchitecture-studio";

export const studioSample: StoreyarchitectureStudioProps = {
  heading: ["We give", "land a calm", "shape"],
  cta: { label: "Meet the practice", href: "#practice" },
  paragraphs: [
    "A good house makes the ordinary day easier. We aim for rooms that open to the light, stay steady underfoot and look out onto something worth seeing.",
    "Slow planning and well-chosen materials let each house be simple, warm and hard-wearing at once.",
  ],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <div className="h-[50svh]" />
      <StoreyarchitectureStudio {...studioSample} />
      <div className="h-[100svh]" />
    </div>
  );
}
