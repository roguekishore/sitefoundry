// Checks a foundry MCP over HTTP the way a client would: lists the tools, then calls search,
// get and preview. Exits non-zero on any failure.
//   node packages/mcp/smoke.mjs https://foundry.themaverick.tech/mcp fdy_…
//   (or FOUNDRY_MCP_TOKEN=fdy_… instead of the second argument, to keep it out of the history)
import { writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

const [url, token = process.env.FOUNDRY_MCP_TOKEN] = process.argv.slice(2);
if (!url || !token) {
  console.error("usage: node packages/mcp/smoke.mjs <url ending in /mcp> <device token>");
  process.exit(2);
}

const client = new Client({ name: "foundry-smoke", version: "1.0.0" });
await client.connect(new StreamableHTTPClientTransport(new URL(url), { requestInit: { headers: { Authorization: `Bearer ${token}` } } }));
const textOf = (r) => r.content.filter((c) => c.type === "text").map((c) => c.text).join("\n");
const check = (ok, what) => {
  console.log(`${ok ? "ok  " : "FAIL"} ${what}`);
  if (!ok) process.exitCode = 1;
};

const tools = (await client.listTools()).tools.map((t) => t.name).sort();
check(tools.join(",") === "get,preview,search", `tools: ${tools.join(", ")}`);
console.log(`     instructions: ${client.getInstructions()}`);

const found = await client.callTool({ name: "search", arguments: { type: "block", limit: 3 } });
const first = textOf(found).match(/^- ([^@\s]+)@/m)?.[1];
check(!found.isError && first, `search: ${textOf(found).split("\n")[0]}`);

const item = await client.callTool({ name: "get", arguments: { name: first, code: false } });
check(!item.isError && textOf(item).startsWith(first), `get ${first}: ${textOf(item).split("\n")[0]}`);

const t0 = Date.now();
const shot = await client.callTool({ name: "preview", arguments: { name: first, fresh: true } });
const image = shot.content.find((c) => c.type === "image");
check(!shot.isError && image, `preview ${first}: ${shot.isError ? textOf(shot) : `${Math.round((image.data.length * 3) / 4 / 1024)} KB PNG in ${((Date.now() - t0) / 1000).toFixed(1)} s`}`);
if (image) {
  const file = join(tmpdir(), `foundry-smoke-${first}.png`);
  writeFileSync(file, Buffer.from(image.data, "base64"));
  console.log(`     saved ${file}`);
}

await client.close();
