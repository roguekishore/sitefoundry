import { AspensearchLabel } from "./aspensearch-label";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8 text-foreground">
      <AspensearchLabel>About the firm</AspensearchLabel>
      <AspensearchLabel className="text-muted-foreground">Who we hire for</AspensearchLabel>
    </div>
  );
}
