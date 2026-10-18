// Sample content lives here (gallery only); the page reuses it.
import { artSamples } from "../clerk-art/clerk-art.demo";
import { ClerkFeatures, type ClerkFeaturesProps } from "./clerk-features";

export const signInFeatures: ClerkFeaturesProps = {
  id: "sign-in",
  tone: "dark",
  edgeTop: "card",
  edgeBottom: "background",
  heading: {
    eyebrow: "Sign-in",
    align: "center",
    title: "Security that keeps moving",
    text: "Login rules change faster than roadmaps do. Latch follows every new threat and standard, so your sign-in screen is never the weak spot.",
    link: { label: "Tour the sign-in kit", href: "#signin" },
  },
  items: [
    { title: "Two-step codes", text: "Each person picks their own second step, and Latch asks for it at exactly the right moment.", visual: artSamples.codes },
    {
      title: "Session control",
      text: "Every signed-in device in one list, with the power to end any of them from your dashboard or theirs.",
      visual: artSamples.device,
      textFirst: true,
      rows: 2,
      visualClassName: "min-h-[22rem]",
    },
    { title: "Codes by text and email", text: "One-time codes that arrive fast, with rate limits that wear out guessers first.", visual: artSamples.phone },
    {
      title: "Abuse screening",
      text: "Throwaway inboxes, alias tricks and repeat free-trial sign-ups get stopped before they ever reach your database.",
      visual: artSamples.alert,
      textFirst: true,
      rows: 2,
      visualClassName: "min-h-[22rem]",
    },
    {
      title: "One-click email links",
      text: "Passwordless links that lift conversion and quietly filter out junk sign-ups.",
      visual: artSamples.scramble,
      textFirst: true,
      rows: 2,
      visualClassName: "min-h-[22rem]",
    },
    { title: "Social sign-in", text: "Twenty-plus providers, each one a toggle away. Add a new one in minutes.", visual: artSamples.orbit },
    { title: "Audited by default", text: "Independent audits and regular penetration tests, with the reports ready for your security review.", visual: artSamples.fingerprint },
    { title: "Bot filtering", text: "A model trained on millions of sign-ups spots scripted traffic and keeps getting better.", visual: artSamples.radar },
    { title: "Passwords, done right", text: "Leaked-password checks, strength rules and a recovery flow people can actually finish.", visual: artSamples.keyhole },
    {
      title: "Keys for your users",
      text: "Hand every account its own scoped API keys without writing the plumbing or the screens.",
      visual: artSamples.rack,
      textFirst: true,
      cols: 2,
      visualClassName: "min-h-48",
    },
    { title: "Command line", text: "Let your coding agent wire Latch in from the terminal. No dashboard, no copy-pasted secrets.", visual: artSamples.nodes, textFirst: true, visualClassName: "min-h-48" },
  ],
};

export const teamFeatures: ClerkFeaturesProps = {
  id: "teams",
  tone: "light",
  heading: {
    eyebrow: "Teams",
    title: "Everything a B2B app needs on day one",
    text: "Workspaces, invites and permissions for apps that sell to companies, without a quarter spent building them.",
    link: { label: "See team features", href: "#teams" },
    textClassName: "max-w-md",
  },
  items: [
    {
      title: "Roles you define",
      text: "Fine-grained permissions shaped around how your customers actually work.",
      visual: artSamples.roles,
      textFirst: true,
      rows: 2,
      visualClassName: "min-h-[24rem]",
    },
    { title: "Join by domain", text: "New people find and join their company's workspace from their email address.", visual: artSamples.autojoin },
    {
      title: "Workspace screens",
      text: "Ready-made switchers and settings pages for everything a workspace admin needs.",
      visual: artSamples.org,
      textFirst: true,
      rows: 2,
      visualClassName: "min-h-[22rem]",
    },
    { title: "Invites", text: "Growth from the inside: make it effortless for customers to bring their teammates.", visual: artSamples.invite },
  ],
};

export default function Demo() {
  return (
    <div>
      <ClerkFeatures {...signInFeatures} />
      <ClerkFeatures {...teamFeatures} />
    </div>
  );
}
