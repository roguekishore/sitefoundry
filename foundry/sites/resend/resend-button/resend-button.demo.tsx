import { ResendButton } from "./resend-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-background p-10">
      <ResendButton href="#start">Start sending</ResendButton>
      <ResendButton href="#docs" variant="ghost">Read the docs</ResendButton>
      <ResendButton href="#start" chevron>Start sending</ResendButton>
      <ResendButton href="#start" size="sm">Start sending</ResendButton>
      <ResendButton href="#stack" variant="pill" chevron>Pair it with Astro</ResendButton>
    </div>
  );
}
