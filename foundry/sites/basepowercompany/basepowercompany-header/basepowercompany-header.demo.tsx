import { Lamp } from "lucide-react";
import { BasepowercompanyHeader, type BasepowercompanyHeaderProps } from "./basepowercompany-header";

export const headerSample: BasepowercompanyHeaderProps = {
  brand: "Porchlight",
  mark: <Lamp />,
  homeHref: "#top",
  links: [
    { label: "The Hub", href: "#hub", hasMenu: true },
    { label: "Rates", href: "#rates", hasMenu: true },
    { label: "Learn", href: "#learn", hasMenu: true },
    { label: "For co-ops", href: "#co-ops" },
    { label: "About us", href: "#about", hasMenu: true },
  ],
  signIn: { label: "Log in", href: "#login" },
  cta: { label: "Sign up", href: "#signup" },
};

export default function Demo() {
  return (
    <div className="min-h-[200vh] bg-background">
      <BasepowercompanyHeader {...headerSample} />
      <div className="dark h-[90svh] bg-background">
        <div className="size-full bg-muted-foreground/40" />
      </div>
    </div>
  );
}
