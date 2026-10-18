// Sample content lives here (gallery only); the page reuses it.
import { Building2, KeyRound } from "lucide-react";
import { ClerkAuthCard } from "@foundry/clerk-auth-card";
import { signInSample, signUpSample } from "../clerk-auth-card/clerk-auth-card.demo";
import { commandSample } from "../clerk-command/clerk-command.demo";
import { ClerkHero, type ClerkHeroProps } from "./clerk-hero";

export const heroSample: ClerkHeroProps = {
  title: ["Sign-in, accounts and teams,", "done before lunch"],
  text: "Drop-in screens and APIs for every person who uses your app.",
  command: commandSample,
  tabs: [
    {
      label: "Sign-in kit",
      views: [
        { label: "Sign up & sign in", content: <ClerkAuthCard {...signUpSample} /> },
        { label: "Returning users", content: <ClerkAuthCard {...signInSample} /> },
        {
          label: "Two-step check",
          content: (
            <ClerkAuthCard
              title="Check your phone"
              subtitle="We sent a six-digit code to the number ending 0427."
              fields={[{ label: "Code", placeholder: "••••••", value: "418 263", typing: true }]}
              submit="Verify"
              footer={{ text: "No code yet?", link: "Send again" }}
            />
          ),
        },
      ],
    },
    {
      label: "Teams",
      views: [
        {
          label: "New workspace",
          content: (
            <ClerkAuthCard
              title="Start a workspace"
              subtitle="Bring your team in once it's set up."
              fields={[
                { label: "Workspace name", placeholder: "Acme", value: "Fieldnote Studio", typing: true },
                { label: "Address", placeholder: "fieldnote" },
              ]}
              submit="Create workspace"
            />
          ),
        },
      ],
    },
    {
      label: "Company sign-on",
      views: [
        {
          label: "Work email",
          content: (
            <ClerkAuthCard
              title="Sign in with your company"
              subtitle="We'll send you to your identity provider."
              providers={[{ label: "Continue with company login", icon: <Building2 strokeWidth={1.75} /> }]}
              divider="or"
              fields={[{ label: "Work email", placeholder: "you@company.com", value: "r.haddad@northpier.co", typing: true }]}
              submit="Continue"
            />
          ),
        },
      ],
    },
    {
      label: "Agent access",
      views: [
        {
          label: "Approve",
          content: (
            <ClerkAuthCard
              title="Let this agent in?"
              subtitle="It will act on your behalf with the scopes below."
              providers={[{ label: "Read projects · Write drafts", icon: <KeyRound strokeWidth={1.75} /> }]}
              fields={[{ label: "Agent", placeholder: "Agent name", value: "release-notes-bot" }]}
              submit="Allow access"
              footer={{ text: "Not you?", link: "Deny" }}
            />
          ),
        },
      ],
    },
  ],
};

export default function Demo() {
  return <ClerkHero {...heroSample} />;
}
