import { KononenkogroupLink } from "./kononenkogroup-link";

export default function Demo() {
  return (
    <div className="flex gap-6 bg-background p-10 font-sans text-sm tracking-[-0.02em] text-foreground">
      <KononenkogroupLink href="#" active>Index</KononenkogroupLink>
      <KononenkogroupLink href="#">Projects</KononenkogroupLink>
      <KononenkogroupLink href="#">Studio</KononenkogroupLink>
      <KononenkogroupLink href="#">All projects</KononenkogroupLink>
    </div>
  );
}
