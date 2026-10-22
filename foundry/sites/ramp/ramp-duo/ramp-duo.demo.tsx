// Sample content lives here (gallery only); the page reuses it.
import { RampDuo, type RampDuoProps } from "./ramp-duo";

export const duoSample: RampDuoProps = {
  lead: "Hire faster.",
  rest: "File less.",
  subtitle: "Your back office ran on forms. Now it runs itself.",
  items: [
    {
      title: "Access that sets itself up.",
      text: "New hires get the right cards, limits and approvals on day one, based on team, office and any field you track.",
      link: { label: "Kestrel for large teams", href: "#" },
    },
    {
      title: "Spend in any country, from one place.",
      text: "Issue cards in 40+ currencies and pay people back in their own, whether that's krona, rand or won.",
      link: { label: "Global spend", href: "#" },
    },
  ],
};

export default function Demo() {
  return <RampDuo {...duoSample} />;
}
