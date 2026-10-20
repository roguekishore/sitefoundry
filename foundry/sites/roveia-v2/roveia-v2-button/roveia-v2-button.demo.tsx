import { RoveiaV2Button } from "./roveia-v2-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-6 bg-background p-10">
      <RoveiaV2Button href="#">Book a call</RoveiaV2Button>
      <RoveiaV2Button href="#" variant="ink" size="sm">
        Book a call
      </RoveiaV2Button>
      <div className="w-full max-w-[22rem]">
        <RoveiaV2Button href="#" block>
          Book a call
        </RoveiaV2Button>
      </div>
    </div>
  );
}
