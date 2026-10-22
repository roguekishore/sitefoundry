import { AspensearchRevealText } from "./aspensearch-reveal-text";

export default function Demo() {
  return (
    <div className="bg-background px-5 py-[60vh] text-foreground">
      <AspensearchRevealText as="h2" variant="display" text="FINDING" className="font-display text-[20vw]/[0.95] tracking-[-0.04em] lg:text-[10vw]" />
      <AspensearchRevealText as="h2" variant="display" delay={6} text="OUTLIERS." className="font-display text-[20vw]/[0.95] tracking-[-0.04em] lg:text-[10vw]" />
      <AspensearchRevealText
        className="mt-10 max-w-[42rem] font-sans text-2xl/[1.1] tracking-[-0.04em] lg:text-[2.375rem]/[1.1]"
        text="The people worth hiring rarely answer job posts. They change seats once every few years, and they want that talk to be with someone who has sat at the desk, knows the stack and can tell a team that will stretch them from one that will stall them."
      />
    </div>
  );
}
