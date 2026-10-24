import type { K2spaceCloserProps } from "./k2space-closer";
import { K2spaceCloser } from "./k2space-closer";

export const closerSample: K2spaceCloserProps = {
  title: "Too heavy? Watch us lift it.",
};

export default function Demo() {
  return <K2spaceCloser {...closerSample} />;
}
