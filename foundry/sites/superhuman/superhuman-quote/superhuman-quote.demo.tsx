import { SuperhumanQuote, type SuperhumanQuoteProps } from "./superhuman-quote";

export const quoteSample: SuperhumanQuoteProps = {
  quote: (
    <>
      “Pilot keeps me in one window and I <strong>finally close the loop</strong>. I used to hop between a dozen tools, and it cost me whole afternoons.”
    </>
  ),
  name: "Marta Okafor",
  role: "Operations Lead, Regional Logistics Group",
  link: { label: "View all customer stories", href: "#" },
};

export default function Demo() {
  return <SuperhumanQuote {...quoteSample} />;
}
