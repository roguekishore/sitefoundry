import { existsSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";

/**
 * The vault repo (mirrored third-party items) that goes with a foundry repo: FOUNDRY_VAULT, or a
 * folder named like the foundry one plus "-vault" next to it (SITEFOUNDRY → SITEFOUNDRY-VAULT,
 * sitefoundry → sitefoundry-vault). Undefined when there is none: everything works without it.
 */
export function findVault(mainRoot: string): string | undefined {
  if (process.env.FOUNDRY_VAULT) {
    const dir = resolve(process.env.FOUNDRY_VAULT);
    return existsSync(join(dir, "vault")) ? dir : undefined;
  }
  const name = basename(mainRoot);
  // the suffix in the folder name's own case first (Windows finds either, and keeps what it is given)
  const suffixes = name === name.toUpperCase() ? ["-VAULT", "-vault"] : ["-vault", "-VAULT"];
  for (const candidate of [...suffixes.map((s) => name + s), "SITEFOUNDRY-VAULT", "sitefoundry-vault"]) {
    const dir = join(dirname(mainRoot), candidate);
    if (existsSync(join(dir, "vault"))) return dir;
  }
  return undefined;
}

/** A repo's built registry folder (`public/r`), the one the CLI and MCP read. */
export const registryDirOf = (repoRoot: string) => join(repoRoot, "public", "r");
