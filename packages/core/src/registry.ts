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

export function openRegistry(location: string): Registry {
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
          throw new Error(version ? `no version ${version} of "${name}" in the registry` : `no item "${name}" in the registry`);
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
