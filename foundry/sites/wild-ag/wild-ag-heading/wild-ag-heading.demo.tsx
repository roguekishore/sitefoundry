import { WildAgHeading } from "./wild-ag-heading";

export default function Demo() {
  return (
    <div className="grid gap-10 bg-background">
      <div className="px-gutter py-section">
        <WildAgHeading>About.</WildAgHeading>
      </div>
      <div className="bg-linear-15 from-primary to-highlight px-gutter py-section">
        <WildAgHeading tone="light">Method.</WildAgHeading>
      </div>
    </div>
  );
}
