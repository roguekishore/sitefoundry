import { ZettaJouleWorkforce, type ZettaJouleWorkforceProps } from "./zetta-joule-workforce";

export const workforceSample: ZettaJouleWorkforceProps = {
  heading: "Training the Next\nGeneration of Operators",
  body: "Through our training arm, Hearthgrid Operations, we recruit locally, regionally and nationally to find students and trainees for careers as reactor engineers, plant operators and technicians.",
  cta: { label: "Contact Us to Learn More", href: "#" },
  photos: [{}, { wide: true }, {}, { wide: true }, {}, { wide: true }, {}, { wide: true }, {}, { wide: true }],
};

export default function Demo() {
  return <ZettaJouleWorkforce {...workforceSample} />;
}
