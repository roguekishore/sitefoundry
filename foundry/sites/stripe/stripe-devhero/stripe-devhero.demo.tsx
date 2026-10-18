// Sample content lives here (gallery only); the page reuses it.
import { StripeDevhero, type StripeDevheroProps } from "./stripe-devhero";

export const devheroSample: StripeDevheroProps = {
  title: "Dependable infrastructure for any stack.",
  rest: "Shape fernpay around your business with integrations that bend instead of break.",
  primary: { label: "Read the docs", href: "/docs" },
  secondary: { label: "Browse our open source", href: "/open-source" },
};

export default function Demo() {
  return <StripeDevhero {...devheroSample} />;
}
