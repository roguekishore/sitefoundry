import { LeomeAndPartnersWordReveal } from "./leome-and-partners-word-reveal";

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-section font-sans text-foreground">
      <h2 className="text-[2.75rem] leading-[1.05] font-medium tracking-[-0.02em] lg:text-[4rem]">
        <LeomeAndPartnersWordReveal text="Sound counsel, plainly given" trigger="load" delay={0.2} />
      </h2>
      <div className="h-[70svh]" />
      <p className="max-w-[29em] text-[1.25rem] leading-[1.4] font-medium lg:text-[1.75rem]">
        <LeomeAndPartnersWordReveal text="Good advice should leave you clearer than it found you. We pair long experience with plain language, and every line here rises as it scrolls into view." />
      </p>
      <div className="h-[60svh]" />
    </div>
  );
}
