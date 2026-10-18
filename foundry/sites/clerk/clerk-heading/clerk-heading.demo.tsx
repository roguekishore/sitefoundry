import { ClerkHeading } from "./clerk-heading";

export default function Demo() {
  return (
    <div className="space-y-px">
      <div className="bg-card px-gutter py-14">
        <ClerkHeading as="h1" size="hero" title={["Sign-in that ships", "on day one"]} text="Accounts, sessions and teams, ready before lunch." />
      </div>
      <div className="bg-background px-gutter py-14">
        <ClerkHeading
          eyebrow="Teams"
          title="Workspaces for every customer"
          text="Invite flows, roles and per-team settings that your B2B app would otherwise spend a quarter building."
          link={{ label: "See team features", href: "#teams" }}
        />
      </div>
      <div className="dark bg-background px-gutter py-14">
        <ClerkHeading
          align="center"
          fadeText
          eyebrow="Sign-in"
          title="Security that keeps moving"
          text="New attack patterns show up every month. Latch tracks them so your login screen never falls behind."
          link={{ label: "Tour the sign-in kit", href: "#signin" }}
        />
      </div>
    </div>
  );
}
