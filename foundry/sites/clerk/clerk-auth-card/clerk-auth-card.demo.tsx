// Sample content lives here (gallery only); the hero reuses it.
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { ClerkAuthCard, type ClerkAuthCardProps } from "./clerk-auth-card";

export const signUpSample: ClerkAuthCardProps = {
  title: "Make your account",
  subtitle: "Good to see you. A few details and you're in.",
  providers: [
    { label: "Continue with Google", icon: <IconBrandGoogle stroke={2} />, badge: "Last used" },
    { label: "Continue with GitHub", icon: <IconBrandGithub stroke={2} /> },
  ],
  divider: "or",
  fields: [
    { label: "Email", placeholder: "you@company.com", value: "mara.okafor@fieldnote.io", typing: true },
    { label: "Password", placeholder: "Choose a password" },
  ],
  submit: "Continue",
  footer: { text: "Have an account already?", link: "Sign in" },
};

export const signInSample: ClerkAuthCardProps = {
  title: "Welcome back",
  subtitle: "Sign in to pick up where you left off.",
  providers: [
    { label: "Continue with Google", icon: <IconBrandGoogle stroke={2} />, badge: "Last used" },
    { label: "Continue with GitHub", icon: <IconBrandGithub stroke={2} /> },
  ],
  divider: "or",
  fields: [{ label: "Email", placeholder: "you@company.com" }],
  submit: "Continue",
  footer: { text: "New here?", link: "Create an account" },
};

export default function Demo() {
  return (
    <div className="flex justify-center bg-card px-gutter py-12">
      <ClerkAuthCard {...signUpSample} />
    </div>
  );
}
