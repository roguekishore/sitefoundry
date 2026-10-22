// Sample content lives here (gallery only); the page reuses it.
import { LinearIntro, type LinearIntroProps } from "./linear-intro";

export const introSample: LinearIntroProps = {
  lead: "Planning, rebuilt from scratch.",
  rest: "Made for teams who work beside agents, Kestrel keeps every plan, issue and review moving as fast as you think.",
};

export default function Demo() {
  return <LinearIntro {...introSample} className="pt-section" />;
}
