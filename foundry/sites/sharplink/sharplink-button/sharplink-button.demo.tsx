import { SharplinkButton } from "./sharplink-button";

export default function Demo() {
  return (
    <div>
      <div className="dark flex flex-wrap items-start gap-4 bg-background p-10">
        <div className="inline-flex flex-col gap-1">
          <SharplinkButton href="#" fullWidth>Open the ledger</SharplinkButton>
          <SharplinkButton href="#" variant="tint" fullWidth>Shareholder center</SharplinkButton>
        </div>
        <SharplinkButton href="#" variant="tint" arrow>Read the thesis</SharplinkButton>
      </div>
      <div className="flex flex-wrap items-center gap-4 bg-background p-10">
        <SharplinkButton href="#" variant="tint" arrow>All articles</SharplinkButton>
        <SharplinkButton href="#">Contact us</SharplinkButton>
      </div>
    </div>
  );
}
