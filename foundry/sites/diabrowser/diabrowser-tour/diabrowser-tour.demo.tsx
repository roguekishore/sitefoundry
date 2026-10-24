// Sample content lives here (gallery only); the page reuses it. Kite and its features are made up.
import { DiabrowserTour, type DiabrowserTourProps } from "./diabrowser-tour";

export const tourSample: DiabrowserTourProps = {
  heading: "Kite keeps up with your tabs",
  items: [
    {
      title: "Walk into Monday already briefed",
      body: "Before your first call, Kite's Daybreak note gathers what changed overnight (threads, docs, the calendar) so nothing ambushes you by ten.",
    },
    {
      title: "Summaries worth forwarding",
      body: "Skip the copy-paste tour of six apps. Ask Kite once and it pulls the pieces from your chat, notes and trackers into a report a teammate will actually read.",
    },
    {
      title: "Answers without a scavenger hunt first",
      body: "Ask in plain words. Kite searches your mail, drives and open tabs together, and replies like a colleague who read every thread.",
    },
  ],
};

export default function Demo() {
  return <DiabrowserTour {...tourSample} />;
}
