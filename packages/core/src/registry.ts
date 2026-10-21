import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { RegistryIndex, RegistryItem } from "./types.ts";
import { SCHEMA } from "./types.ts";

/** Reads a built registry from a folder or an http(s) URL. Same layout either way. */
export interface Registry {
  location: string;
  index(): Promise<RegistryIndex>;
  /** latest version when `version` is omitted */
  item(name: string, version?: string): Promise<RegistryItem>;
}

class NotFound extends Error {}

/**
 * One registry, or several read as one (the foundry's and the vault's): the index lists every
 * item (the first registry wins a name both have), and an item is looked up in each in turn.
 * A comma-separated string is a list too (for --registry and FOUNDRY_REGISTRY).
 */
export function openRegistry(location: string | string[]): Registry {
  const list = (Array.isArray(location) ? location : location.split(",")).map((l) => l.trim()).filter(Boolean);
  if (list.length === 1) return openOne(list[0]);
  const parts = list.map(openOne);
  return {
    location: parts.map((p) => p.location).join(","),
    async index() {
      const indexes = await Promise.all(parts.map((p) => p.index().catch((e: Error) => (e instanceof NotFound ? undefined : Promise.reject(e)))));
      const seen = new Set<string>();
      const items = indexes.flatMap((ix) => ix?.items ?? []).filter((i) => !seen.has(i.name) && seen.add(i.name));
      return { ...(indexes.find(Boolean) ?? { schema: SCHEMA }), items } as RegistryIndex;
    },
    async item(name, version) {
      let last: unknown;
      for (const p of parts) {
        try {
          return await p.item(name, version);
        } catch (e) {
          last = e;
          if (!(e instanceof MissingItem)) throw e;
        }
      }
      throw last;
    },
  };
}

/** An item (or version) a registry doesn't have; the next one in a list is asked. */
class MissingItem extends Error {}

function openOne(location: string): Registry {
  const remote = /^https?:\/\//i.test(location);
  const base = location.replace(/[\\/]+$/, "");

  async function read(rel: string): Promise<unknown> {
    if (remote) {
      const headers: Record<string, string> = {};
      if (process.env.FOUNDRY_TOKEN) headers.Authorization = `Bearer ${process.env.FOUNDRY_TOKEN}`;
      const res = await fetch(`${base}/${rel}`, { headers });
      if (res.status === 404) throw new NotFound(rel);
      if (!res.ok) throw new Error(`registry: ${res.status} ${res.statusText} for ${rel}`);
      return res.json();
    }
    try {
      return JSON.parse(await readFile(join(base, rel), "utf8"));
    } catch (e: any) {
      if (e?.code === "ENOENT") throw new NotFound(rel);
      throw e;
    }
  }

  function checkSchema<T extends { schema: number }>(data: T, what: string): T {
    if (data.schema > SCHEMA) {
      throw new Error(`${what} uses format ${data.schema}; this foundry tool reads up to ${SCHEMA}. Update the tool.`);
    }
    return data;
  }

  return {
    location: base,
    async index() {
      return checkSchema((await read("index.json")) as RegistryIndex, "registry index");
    },
    async item(name, version) {
      const rel = version ? `${name}/${version}.json` : `${name}.json`;
      try {
        return checkSchema((await read(rel)) as RegistryItem, name);
      } catch (e) {
        if (e instanceof NotFound) {
          throw new MissingItem(version ? `no version ${version} of "${name}" in the registry` : `no item "${name}" in the registry`);
        }
        throw e;
      }
    },
  };
}

/** "huly-header@1.2.0" → { name: "huly-header", version: "1.2.0" } */
export function parseSpec(spec: string): { name: string; version?: string } {
  const at = spec.lastIndexOf("@");
  return at > 0 ? { name: spec.slice(0, at), version: spec.slice(at + 1) } : { name: spec };
}
