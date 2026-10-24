// Sample content (gallery only); the page reuses it. Tern is a made-up mail API.
import { ResendHeader, type ResendHeaderProps } from "./resend-header";

export function TernWordmark() {
  return <span className="font-display text-[1.625rem] leading-none font-bold tracking-[-0.06em]">tern</span>;
}

export const headerSample: ResendHeaderProps = {
  brand: "Tern",
  logo: <TernWordmark />,
  links: [
    { label: "Product", href: "#product", hasMenu: true },
    { label: "About", href: "#about", hasMenu: true },
    { label: "Scale", href: "#scale", hasMenu: true },
    { label: "Support", href: "#support", hasMenu: true },
    { label: "Guides", href: "#guides", hasMenu: true },
    { label: "Agents", href: "#agents", hasMenu: true },
    { label: "Plans", href: "#plans" },
  ],
  secondary: { label: "Sign in", href: "#sign-in" },
  cta: { label: "Start free", href: "#start" },
};

export default function Demo() {
  return (
    <div className="min-h-[60vh] bg-background">
      <ResendHeader {...headerSample} />
    </div>
  );
}
