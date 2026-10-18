import { IconBrandGithub } from "@tabler/icons-react";
import { ClerkButton } from "./clerk-button";

export default function Demo() {
  return (
    <div className="space-y-px">
      <div className="flex flex-wrap items-center gap-3 bg-card p-8">
        <ClerkButton caret>Continue</ClerkButton>
        <ClerkButton variant="outline" icon={<IconBrandGithub stroke={1.75} />}>
          Continue with GitHub
        </ClerkButton>
        <ClerkButton variant="primary" size="lg">
          Start building
        </ClerkButton>
        <ClerkButton size="sm">Get started</ClerkButton>
      </div>
      <div className="dark flex flex-wrap items-center gap-3 bg-background p-8 text-foreground">
        <ClerkButton caret>Continue</ClerkButton>
        <ClerkButton variant="outline">Read the docs</ClerkButton>
      </div>
    </div>
  );
}
