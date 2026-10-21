import { WildAgButton } from "./wild-ag-button";

export default function Demo() {
  return (
    <div className="grid gap-8 bg-background p-10">
      <div className="flex flex-wrap gap-4 rounded-lg bg-linear-15 from-primary to-highlight p-10">
        <WildAgButton href="#work">Selected work</WildAgButton>
        <WildAgButton href="#work" variant="outline" size="sm">
          Project sheet
        </WildAgButton>
      </div>
      <div className="p-10">
        <WildAgButton variant="gradient" type="submit">
          Send message
        </WildAgButton>
      </div>
    </div>
  );
}
