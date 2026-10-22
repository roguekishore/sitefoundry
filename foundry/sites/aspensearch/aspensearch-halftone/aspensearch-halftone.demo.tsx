import { AspensearchHalftone } from "./aspensearch-halftone";

export default function Demo() {
  return (
    <div className="grid grid-cols-2 border-b border-border bg-background">
      <div className="h-64 border-r border-border" />
      <AspensearchHalftone className="h-64" />
      <AspensearchHalftone className="h-64 border-r border-border" />
      <div className="h-64 bg-muted" />
    </div>
  );
}
