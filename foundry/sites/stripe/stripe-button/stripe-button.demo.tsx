// Sample content lives here (gallery only).
import { StripeButton } from "./stripe-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-8 bg-background p-8">
      <div className="flex flex-wrap items-center gap-3">
        <StripeButton href="/start">Start for free</StripeButton>
        <StripeButton href="/sign-in" variant="white" size="sm">
          Sign in
        </StripeButton>
        <StripeButton href="/story" variant="outline">
          Read the story
        </StripeButton>
        <StripeButton href="/guides" variant="link">
          Read the guide
        </StripeButton>
      </div>
      <div className="dark flex flex-wrap items-center gap-3 rounded-lg bg-background p-6">
        <StripeButton href="/docs">Open the docs</StripeButton>
        <StripeButton href="/code" variant="ghost" arrow={false}>
          Browse the source
        </StripeButton>
        <StripeButton href="/start" variant="link">
          Get started
        </StripeButton>
      </div>
    </div>
  );
}
