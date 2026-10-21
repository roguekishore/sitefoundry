import { RollersWords } from "./rollers-words";

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-[70vh] text-foreground">
      <RollersWords
        className="max-w-[64rem] font-display text-[2.05rem] leading-[1.1] font-medium md:text-[4.25rem]"
        segments={[
          { text: "Heavy plant for civil work," },
          { text: "run by crews who have done the job.", tone: "accent", newLine: true },
        ]}
      />
    </div>
  );
}
