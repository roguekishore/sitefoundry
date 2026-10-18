import type { IndexEntry, ItemType } from "./types.ts";

export interface SearchQuery {
  text?: string;
  type?: ItemType;
  category?: string;
  site?: string;
  source?: string;
  license?: string;
  tag?: string;
}

/** Simple ranked search over names, titles, tags, descriptions and notes. Every word must match. */
export function search(items: IndexEntry[], q: SearchQuery): IndexEntry[] {
  const eq = (value: string | undefined, wanted: string | undefined) =>
    wanted === undefined || (value ?? "").toLowerCase() === wanted.toLowerCase();
  const filtered = items.filter(
    (i) =>
      eq(i.type, q.type) &&
      eq(i.category, q.category) &&
      eq(i.site, q.site) &&
      eq(i.source ?? "foundry", q.source) &&
      eq(i.license, q.license) &&
      (q.tag === undefined || (i.tags ?? []).some((t) => t.toLowerCase() === q.tag!.toLowerCase())),
  );

  const words = (q.text ?? "").toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return filtered.sort((a, b) => a.name.localeCompare(b.name));

  const scored: { item: IndexEntry; score: number }[] = [];
  for (const item of filtered) {
    const fields: [string, number][] = [
      [item.name, 5],
      [item.title, 4],
      [(item.tags ?? []).join(" "), 3],
      [`${item.category ?? ""} ${item.site ?? ""} ${item.source ?? ""} ${item.type}`, 3],
      [item.description ?? "", 2],
      [(item.notes ?? []).join(" "), 1],
    ];
    let score = 0;
    for (const word of words) {
      const best = Math.max(0, ...fields.filter(([text]) => text.toLowerCase().includes(word)).map(([, w]) => w));
      if (!best) { score = 0; break; }
      score += best;
    }
    if (score) scored.push({ item, score });
  }
  return scored.sort((a, b) => b.score - a.score || a.item.name.localeCompare(b.item.name)).map((s) => s.item);
}
