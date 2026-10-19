// How items and sites appear in lists: a card (grid), a row (list), a mini row (side rails), and
// a site card. All show still thumbnails; nothing here opens a live preview.
import { Eye } from "lucide-react";
import type { Item } from "./catalog";
import { pagesOf, siteItems, siteLabel, siteOrigin, themeChoice, themeOf } from "./library";
import { openOverlay } from "./state";
import { Badges, CopyAddButton, JsBadge, preferredShot, Swatches, Thumb } from "./ui";

const thumbKey = (item: Item) => `items/${item.name}`;

export function ItemCard({ item }: { item: Item }) {
  return (
    <article className="card">
      <a className="cover" href={`#/item/${item.name}`} aria-label={item.meta.title} />
      <Thumb thumbKey={thumbKey(item)} prefer={preferredShot(item)} label={item.name} />
      {item.meta.hydrate && (
        <span className="js-chip">
          <JsBadge />
        </span>
      )}
      <div className="hover-actions">
        {(item.hasDemo || item.meta.type === "theme") && (
          <button className="btn sm" onClick={() => openOverlay({ kind: "quick", name: item.name })}>
            <Eye className="i" />
            Quick look
          </button>
        )}
        <CopyAddButton item={item} />
      </div>
      <div className="card-body">
        <div className="card-title">{item.meta.title}</div>
        <div className="card-name mono">{item.name}</div>
        <div className="card-meta">
          <Badges item={item} />
        </div>
      </div>
    </article>
  );
}

export function ItemRow({ item }: { item: Item }) {
  return (
    <a className="row" href={`#/item/${item.name}`}>
      <div className="mini">
        <Thumb thumbKey={thumbKey(item)} prefer={preferredShot(item)} label="" />
      </div>
      <div style={{ minWidth: 0 }}>
        <div className="card-title">{item.meta.title}</div>
        <div className="card-name mono">{item.name}</div>
      </div>
      <div className="desc">{item.meta.description}</div>
      <div className="c4">
        <Badges item={item} />
      </div>
      <div className="c5 muted mono">{item.meta.version}</div>
    </a>
  );
}

export function MiniItem({ item, sub }: { item: Item; sub?: string }) {
  return (
    <a className="mini-item" href={`#/item/${item.name}`}>
      <div className="mini">
        <Thumb thumbKey={thumbKey(item)} prefer={preferredShot(item)} label="" />
      </div>
      <div style={{ minWidth: 0 }}>
        <div className="t">{item.meta.title}</div>
        <div className="s mono">{sub ?? item.name}</div>
      </div>
    </a>
  );
}

export function SiteCard({ site }: { site: string }) {
  const pages = pagesOf(site).length;
  const from = siteOrigin(site);
  return (
    <a className="site-card" href={`#/site/${site}`}>
      <Thumb thumbKey={`sites/${site}/landing`} aspect={16 / 9.5} label={`${site} landing`} />
      <div className="body">
        <div style={{ minWidth: 0 }}>
          <h3>{siteLabel(site)}</h3>
          <div className="sub">
            {from ? `from ${from} · ` : ""}
            {pages} page{pages > 1 ? "s" : ""} · {siteItems(site).length} items
          </div>
        </div>
        <Swatches sw={themeChoice(themeOf(site) ?? "none")?.light} />
      </div>
    </a>
  );
}
