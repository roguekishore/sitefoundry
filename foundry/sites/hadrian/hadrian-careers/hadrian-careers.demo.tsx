// Sample content (gallery only); the page reuses it. Kestrel Works is made up.
import { HadrianCareers, type HadrianCareersProps } from "./hadrian-careers";

export const careersSample: HadrianCareersProps = {
  id: "careers",
  slogan: "Build what comes next with Kestrel",
  title: "Come Build the Next Plant",
  text: "Kestrel is hiring machinists, controls engineers, software developers, quality leads and the people who keep fast teams moving.",
  action: { label: "See open positions", href: "#roles" },
};

export default function Demo() {
  return <HadrianCareers {...careersSample} />;
}
