import { StoreyarchitectureExpertise, type StoreyarchitectureExpertiseProps } from "./storeyarchitecture-expertise";

export const expertiseSample: StoreyarchitectureExpertiseProps = {
  heading: "What we are asked to do",
  intro: "Ashlar takes on new houses, careful alterations and whole interiors, and treats each one as a single piece of work from the boundary wall to the door handles.",
  items: [
    {
      title: "Rooms and interiors",
      text: "We plan interiors as part of the building, not after it: proportion, daylight and joinery worked out together, so a room feels settled the day you move in.",
    },
    {
      title: "New houses",
      text: "Whole houses drawn from the ground up, with plain forms, local materials and a plan that bends around how a household actually spends its days.",
    },
    {
      title: "Land and garden",
      text: "Terraces, walls and planting are drawn with the house, so inside and outside read as one place and the building sits low in its setting.",
    },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <StoreyarchitectureExpertise {...expertiseSample} />
      <div className="h-[100svh]" />
    </div>
  );
}
