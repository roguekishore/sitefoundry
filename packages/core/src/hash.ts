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

export function hashFiles(files: { path: string; content: string }[]): string {
  const h = createHash("sha256");
  for (const f of [...files].sort((a, b) => a.path.localeCompare(b.path))) {
    h.update(f.path).update("\0").update(normalize(f.content)).update("\0");
  }
  return h.digest("hex");
}
