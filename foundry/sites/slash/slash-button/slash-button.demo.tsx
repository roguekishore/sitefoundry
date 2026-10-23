import { SlashButton } from "./slash-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-background p-10">
      <SlashButton href="#" variant="outline" size="sm">Open account</SlashButton>
      <SlashButton href="#" variant="outline" className="w-64">Start free</SlashButton>
      <SlashButton href="#" className="w-64">Get Plus</SlashButton>
    </div>
  );
}
