// Sample content lives here (gallery only); the page reuses it.
import { RampPinned, type RampPinnedProps } from "./ramp-pinned";

export const pinnedSample: RampPinnedProps = {
  before: {
    title: "Six tools, zero answers",
    subtitle: "Here is what paying back one hotel night takes across six disconnected apps.",
  },
  after: {
    title: "One quiet workflow",
    subtitle: "Kestrel puts every step in a single place. Nobody has to chase anything.",
  },
  topOffset: "0px",
};

export default function Demo() {
  return <RampPinned {...pinnedSample} />;
}
