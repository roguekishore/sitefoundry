import type { K2spaceIntroProps } from "./k2space-intro";
import { K2spaceIntro } from "./k2space-intro";

export const introSample: K2spaceIntroProps = {
  text: "More mass means more margin. Heavier buses carry wider arrays, deeper tanks and room for the payloads others leave on the ground. Weight is not waste, it’s headroom.",
};

export default function Demo() {
  return <K2spaceIntro {...introSample} />;
}
