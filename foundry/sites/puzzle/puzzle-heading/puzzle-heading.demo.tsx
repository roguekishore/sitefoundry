import { PuzzleHeading } from "./puzzle-heading";

export default function Demo() {
  return (
    <div className="flex flex-col gap-16 px-gutter py-section">
      <PuzzleHeading
        eyebrow="Two ways to keep your books"
        eyebrowSize="lg"
        title={<>The same ledger underneath.<br />Choose how hands-on you are.</>}
      />
      <div className="rounded-2xl bg-primary px-gutter py-16">
        <PuzzleHeading
          tone="inverse"
          eyebrow="The Oakbook assistant"
          title="Ask a question. Oakbook drafts it. You sign off."
          text="The assistant lives inside your ledger, answering questions about the business and preparing the routine bookkeeping that usually swallows an afternoon."
        />
      </div>
    </div>
  );
}
