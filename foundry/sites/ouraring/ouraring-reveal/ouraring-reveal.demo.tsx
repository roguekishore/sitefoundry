import { OuraringReveal } from "./ouraring-reveal";

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-[60vh] text-center text-foreground">
      <OuraringReveal className="font-display text-[56px] leading-[1.1] tracking-[-0.03em]">Small signals, clearer days</OuraringReveal>
      <OuraringReveal step={1} className="mt-6 text-[20px]">Each line follows the one before it by a beat.</OuraringReveal>
      <OuraringReveal kind="blur" step={2} className="mx-auto mt-16 aspect-[16/9] max-w-xl bg-muted" />
    </div>
  );
}
