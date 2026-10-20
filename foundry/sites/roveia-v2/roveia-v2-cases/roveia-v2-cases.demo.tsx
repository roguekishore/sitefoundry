// Sample content lives here (gallery only); the page reuses it. Every client is made up.
import { RoveiaV2Cases, type RoveiaV2CasesProps } from "./roveia-v2-cases";

export const casesSample: RoveiaV2CasesProps = {
  pillLabel: "Read the story",
  cases: [
    {
      title: "Quietroot",
      description:
        "Quietroot's focus drink is plant-based and steady, with no afternoon crash. To grow past word of mouth, the team asked Halden to rebuild their paid social, tidy their ad accounts and set up testing that showed which stories actually sold.",
    },
    {
      title: "Fernwell",
      description: "Fernwell runs a clinician-led weight programme with coaching and labs, delivered entirely online to members across the country.",
    },
    {
      title: "Pellum",
      description:
        "Pellum's online weight care was growing fast, and they needed booked visits without the cost per patient climbing. Together we built an acquisition engine around short quizzes and plain, review-safe creative.",
    },
    {
      title: "Kindred",
      description: "Kindred wanted its online check-in to convert better and cost less per new patient. We rebuilt the funnel from the first ad to the confirmation screen.",
    },
    {
      title: "Northbay",
      description:
        "Northbay offers longevity programmes with labs and a care team. Halden launched their first paid campaigns, then scaled the ones that filled consult calendars across three service lines.",
    },
  ],
};

export default function Demo() {
  return <RoveiaV2Cases {...casesSample} />;
}
