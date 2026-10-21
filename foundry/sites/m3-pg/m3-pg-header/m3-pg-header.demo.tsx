import { M3PgHeader, type M3PgHeaderProps } from "./m3-pg-header";

export const headerSample: M3PgHeaderProps = {
  brand: "Steinach Architekten",
  mark: "St/A",
  homeHref: "#top",
  links: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Studio", href: "#studio" },
    { label: "Journal", href: "#journal" },
    { label: "Contact", href: "#contact" },
  ],
  language: { label: "DE", href: "#de" },
  menuLabel: "Menu",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <M3PgHeader {...headerSample} />
      <div className="mx-auto h-[150svh] max-w-page px-gutter pt-10">
        <div className="h-80 bg-muted" />
      </div>
    </div>
  );
}
