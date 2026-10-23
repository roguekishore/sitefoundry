import { FunctionhealthBoard, type FunctionhealthBoardProps } from "./functionhealth-board";

export const boardSample: FunctionhealthBoardProps = {
  title: ["Built with ", { accent: "senior clinicians" }],
  text: "Tidewell’s Medical & Scientific Board",
  nextLabel: "Next members",
  members: [
    { name: "Dr. Elena Marsh", bio: "Former hospital chief of medicine. Co-founder and chief medical officer." },
    { name: "Dr. Tomas Aldrin, PhD", bio: "Director of preventive research at a leading medical school." },
    { name: "Dr. Priya Raman", bio: "Professor of neuroscience. Host of a long-running health podcast." },
    { name: "Dr. Henry Oduya", bio: "Former chief executive of a large hospital network. Heart surgeon." },
    { name: "Dr. Mei-Lin Park", bio: "Endocrinologist and author on metabolic health." },
    { name: "Dr. Samuel Brandt", bio: "Geneticist focused on early detection." },
  ],
};

export default function Demo() {
  return <FunctionhealthBoard {...boardSample} />;
}
