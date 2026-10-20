import { RoveiaButton } from "./roveia-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-background p-10">
      <RoveiaButton href="#">Book a call</RoveiaButton>
      <RoveiaButton href="#" variant="dark" size="sm">
        Book a call
      </RoveiaButton>
      <RoveiaButton href="#" size="sm" arrow="up-right">
        See the full story
      </RoveiaButton>
    </div>
  );
}
