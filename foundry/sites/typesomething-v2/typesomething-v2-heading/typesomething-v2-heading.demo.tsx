import { TypesomethingV2Wordmark } from "@foundry/typesomething-v2-wordmark";
import { TypesomethingV2Heading } from "./typesomething-v2-heading";

export default function Demo() {
  return (
    <div className="space-y-16 bg-muted px-gutter py-section text-foreground">
      <TypesomethingV2Heading title="Three messages to a finished site" subtitle="From first brief to live pages, all in one thread." subtitleTone="soft" />
      <TypesomethingV2Heading
        title={
          <>
            Inside <TypesomethingV2Wordmark lead="Quiet" tail="page" />
          </>
        }
        subtitle="Everything a small business site needs, and nothing it has to look after."
      />
    </div>
  );
}
