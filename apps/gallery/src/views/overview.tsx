// The front page: the recreated sites (each opens the site viewer), the library by type and
// source (each opens browse), and what was added last.
import { ArrowUpRight, Box, LayoutTemplate, Palette } from "lucide-react";
import { ItemCard, SiteCard } from "../cards";
import { gallery } from "../catalog";
import { addedAt, library, OTHER_GALLERY, SOURCE_COLOUR, SOURCE_LABEL, SOURCES, siteList, sourceHome, sourceOf } from "../library";

const TYPES = [
  ["block", "Blocks", "Page sections: headers, heroes, pricing, footers…", LayoutTemplate],
  ["component", "Components", "Buttons, cards, effects, form parts", Box],
  ["theme", "Themes", "Colour and type tokens per site", Palette],
] as const;

const count = (f: (i: (typeof library)[number]) => boolean) => library.filter(f).length;

export function Overview() {
  const realSites = siteList.filter((s) => s !== "sample");
  const recent = library
    .filter((i) => i.meta.type !== "theme")
    .sort((a, b) => addedAt(b.name) - addedAt(a.name) || a.name.localeCompare(b.name))
    .slice(0, 8);
  const vault = gallery === "vault";
  const libraries = SOURCES.filter((s) => s !== "foundry");
  return (
    <div className="page">
      <div className="page-head">
        <h1>Overview</h1>
        <p>
          {vault
            ? `${library.filter((i) => sourceOf(i) !== "foundry").length} items mirrored from ${libraries.length} libraries. Browse by type or library; every item installs with \`foundry add\`.`
            : `${library.length} items from ${realSites.length} recreated sites. Pick a site to walk through it, or browse every building block. The mirrored libraries are in the vault.`}
        </p>
      </div>

      {realSites.length > 0 && (
        <>
          <div className="section-head">
            <h2>Recreated sites</h2>
            <a href="#/sites">All sites →</a>
          </div>
          <div className="sites">
            {realSites.map((s) => (
              <SiteCard key={s} site={s} />
            ))}
          </div>
        </>
      )}

      <div className="section-head">
        <h2>Browse the library</h2>
      </div>
      <div className="grid flush" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
        {TYPES.map(([type, label, text, Icon]) => (
          <a key={type} className="panel lib-tile" href={`#/browse?type=${type}`}>
            <span className="icon-btn">
              <Icon className="i" />
            </span>
            <span>
              <b>{label}</b> <span className="muted">{count((i) => i.meta.type === type)}</span>
              <small>{text}</small>
            </span>
          </a>
        ))}
        {libraries.map((s) => (
          <a key={s} className="panel lib-tile" href={`#/browse?source=${s}`}>
            <span className="icon-btn">
              <span className="dot" style={{ background: SOURCE_COLOUR[s] }} />
            </span>
            <span>
              <b>{SOURCE_LABEL[s]}</b> <span className="muted">{count((i) => sourceOf(i) === s)}</span>
              <small>{sourceHome(s)?.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") ?? "Mirrored into the vault"}</small>
            </span>
          </a>
        ))}
        {!vault && (
          <a className="panel lib-tile" href={OTHER_GALLERY.href}>
            <span className="icon-btn">
              <ArrowUpRight className="i" />
            </span>
            <span>
              <b>The vault</b>
              <small>shadcn, React Bits, Aceternity, Magic UI and more, in a gallery of their own</small>
            </span>
          </a>
        )}
      </div>

      <div className="section-head">
        <h2>Recently added</h2>
        <a href={vault ? "#/browse?sort=newest" : "#/browse?source=foundry&sort=newest"}>{vault ? "Everything, newest first →" : "All recreations →"}</a>
      </div>
      <div className="grid flush">
        {recent.map((i) => (
          <ItemCard key={i.name} item={i} />
        ))}
      </div>
    </div>
  );
}

export function Sites() {
  return (
    <div className="page">
      <div className="page-head">
        <h1>Recreated sites</h1>
        <p>Each opens in the site viewer: every page, working links between them, and the block behind each section.</p>
      </div>
      <div className="sites" style={{ marginTop: 20 }}>
        {siteList.map((s) => (
          <SiteCard key={s} site={s} />
        ))}
      </div>
    </div>
  );
}
