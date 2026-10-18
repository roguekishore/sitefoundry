// Sample content lives here (gallery only); the page reuses it.
import { StripeHeader, type StripeHeaderProps } from "./stripe-header";

export const headerSample: StripeHeaderProps = {
  brand: "fernpay",
  links: [
    { label: "Platform", href: "/platform", hasMenu: true },
    { label: "Use cases", href: "/use-cases", hasMenu: true },
    { label: "Build", href: "/build", hasMenu: true },
    { label: "Learn", href: "/learn", hasMenu: true },
    { label: "Plans", href: "/plans" },
  ],
  secondary: { label: "Log in", href: "/login" },
  primary: { label: "Talk to us", href: "/talk" },
};

export default function Demo() {
  return (
    <div className="min-h-96 bg-muted">
      <StripeHeader {...headerSample} />
    </div>
  );
}
