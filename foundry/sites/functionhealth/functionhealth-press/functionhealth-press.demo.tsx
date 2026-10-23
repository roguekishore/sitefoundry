import { FunctionhealthPress, type FunctionhealthPressProps } from "./functionhealth-press";

export const pressSample: FunctionhealthPressProps = {
  title: ["The new standard ", { accent: "for health" }],
  text: "Care for a younger, pickier generation",
  columns: [
    [
      { kind: "award", name: "Hearth & Home", detail: "Wellness awards 2025" },
      { kind: "quote", quote: "“I truly believe in what this team is building.”", name: "Rohan Mistry" },
    ],
    [
      { kind: "quote", quote: "“I have been so impressed by the care.”", name: "Daniel Kessler" },
      { kind: "award", name: "Fast Cadence", detail: "Most inventive 2024" },
    ],
    [
      { kind: "award", name: "The Century 100", detail: "Most influential firms" },
      { kind: "quote", quote: "“I recommend it to every woman, every year of her life.”", name: "Dr. Mara Ellison" },
    ],
    [
      { kind: "quote", quote: "“It helped me understand my own biology.”", name: "Lena Voss" },
      { kind: "award", name: "Top Startups", detail: "Network list 2025" },
    ],
  ],
};

export default function Demo() {
  return <FunctionhealthPress {...pressSample} />;
}
