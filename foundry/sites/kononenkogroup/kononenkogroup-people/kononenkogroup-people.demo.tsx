import { KononenkogroupPeople, type KononenkogroupPeopleProps } from "./kononenkogroup-people";

export const peopleSample: KononenkogroupPeopleProps = {
  label: "Studio & Method",
  text: "A team held together by candour, craft and a shared patience for getting things right.",
  heading: ["Since 2009", "in Practice"],
  notes: [
    "Passive design first: orientation, thermal mass and natural air before machines.",
    "Buildings planned for their whole life, easy to run, repair and adapt.",
  ],
  photos: 12,
};

export default function Demo() {
  return <KononenkogroupPeople {...peopleSample} />;
}
