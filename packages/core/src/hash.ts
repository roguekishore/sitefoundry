import { createHash } from "node:crypto";

/** Line endings are normalised so Windows checkouts hash the same as everywhere else. */
export function normalize(text: string): string {
  return text.replace(/\r\n/g, "\n");
}

export function sha256(content: string | Buffer): string {
  return createHash("sha256")
    .update(typeof content === "string" ? normalize(content) : content)
    .digest("hex");
}

/** An item's identity: its files plus its metadata (except the version itself). */
export function hashItem(meta: object & { version?: string }, files: { path: string; content: string }[]): string {
  const { version: _version, ...rest } = meta;
  const sorted = Object.fromEntries(Object.entries(rest).sort(([a], [b]) => a.localeCompare(b)));
  return hashFiles([...files, { path: "\0meta", content: JSON.stringify(sorted) }]);
}

export function hashFiles(files: { path: string; content: string }[]): string {
  const h = createHash("sha256");
  for (const f of [...files].sort((a, b) => a.path.localeCompare(b.path))) {
    h.update(f.path).update("\0").update(normalize(f.content)).update("\0");
  }
  return h.digest("hex");
}
