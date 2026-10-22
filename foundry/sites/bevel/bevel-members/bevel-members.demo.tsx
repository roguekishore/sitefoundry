// Sample content (gallery only); the page reuses it. The awards are made up.
import { Sparkle } from "lucide-react";
import { BevelMembers, type BevelMembersProps } from "./bevel-members";

export const membersSample: BevelMembersProps = {
  awards: [
    {
      icon: <Sparkle strokeWidth={2.5} />,
      label: (
        <>
          Editors&apos;
          <br />
          Pick
        </>
      ),
    },
    {
      icon: <Sparkle strokeWidth={2.5} />,
      label: (
        <>
          Best of the
          <br />
          Year
        </>
      ),
    },
  ],
  title: "1.9 million people already feeling the difference",
};

export default function Demo() {
  return <BevelMembers {...membersSample} />;
}
