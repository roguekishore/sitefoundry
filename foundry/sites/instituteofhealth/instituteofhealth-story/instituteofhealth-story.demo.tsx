// Sample content (gallery only); the page reuses it.
import { InstituteofhealthStory, type InstituteofhealthStoryProps } from "./instituteofhealth-story";

export const storySample: InstituteofhealthStoryProps = {
  steps: [
    { lines: ["Ever finished a consult", "unsure the plan was right?", "Most new practitioners have."] },
    { lines: ["We have guided thousands", "from that doubt to quiet,", "well-reasoned confidence."] },
    {
      tags: ["Unsure", "Stuck", "Overloaded", "Second-guessing", "Alone", "Drained"],
      lines: ["Picture the day a client's", "labs simply make sense."],
    },
  ],
};

export default function Demo() {
  return (
    <div>
      <InstituteofhealthStory {...storySample} />
    </div>
  );
}
