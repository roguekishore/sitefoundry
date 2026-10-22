// Sample content lives here (gallery only); the page reuses it. Tessel is a made-up CRM.
import { AttioPlatform, type AttioPlatformProps } from "./attio-platform";

export const platformSample: AttioPlatformProps = {
  badge: "Product",
  lead: "A CRM that keeps working after you log off.",
  rest: "It spots buyers overnight, flags accounts going quiet, and has the numbers ready before the meeting starts.",
  navLabel: "Product chapters",
  chapters: [
    {
      id: "find-buyers",
      label: "Find buyers",
      lead: "Your reps, multiplied.",
      rest: "Agents watch the market and open the conversation the moment an account starts shopping.",
      mediaLabel: "A ranked list of accounts with an email being drafted",
      features: [
        { title: "Less admin, more selling.", text: "Agents do the digging and the data entry. Reps spend the day on calls.", mediaLabel: "A prompt asking for this week's targets" },
        { title: "The research is done.", text: "Every lead arrives scored and annotated, with a reason to reach out now.", mediaLabel: "Signals orbiting a lead" },
      ],
    },
    {
      id: "qualify",
      label: "Qualify leads",
      lead: "First to reply, every time.",
      rest: "Fresh sign-ups are researched, scored and handed to the right owner within minutes.",
      mediaLabel: "A routing workflow from trigger to sequence",
    },
    {
      id: "close-deals",
      label: "Close deals",
      lead: "Your process, not ours.",
      rest: "Pipelines shaped to how you sell, with agents writing the prep and nudging stalled deals.",
      mediaLabel: "A deal board grouped by stage",
      features: [
        { title: "Know what moved.", text: "New contacts, rival quotes and quiet weeks show up before your next call.", mediaLabel: "A contact card with recent changes" },
        { title: "Walk in prepared.", text: "Coverage, velocity and the deals at risk, laid out before the review.", mediaLabel: "An agent summarising pipeline risk" },
      ],
    },
    {
      id: "forecast",
      label: "Forecast",
      lead: "Built for whoever carries the number.",
      rest: "Ask about the quarter in plain words and get the query, the table and the answer.",
      mediaLabel: "A question answered with a generated query",
    },
    {
      id: "grow-accounts",
      label: "Grow accounts",
      lead: "Keep the customers you won.",
      rest: "Agents read the whole book so you can rescue the slipping and expand the thriving.",
      mediaLabel: "Revenue and account health charts",
      features: [
        { title: "See it coming.", text: "Usage dips and surges surface weeks before the renewal lands.", mediaLabel: "A feed of account signals" },
        { title: "The play is drafted.", text: "Upsell, save or renew: agents write the email, you approve and send.", mediaLabel: "Suggested emails waiting for approval" },
      ],
    },
  ],
};

export default function Demo() {
  return <AttioPlatform {...platformSample} />;
}
