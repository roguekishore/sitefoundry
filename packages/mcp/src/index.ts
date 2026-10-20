// The foundry as MCP tools, over stdio. Same core as the `foundry` CLI.
//   claude mcp add foundry -s user -- node D:/PROJECTS/SITEFOUNDRY/packages/mcp/dist/mcp.mjs
// The foundry server offers the read-only tools over HTTP too, for other machines (http.ts).
import { join } from "node:path";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { openRegistry } from "@foundry/core";
import { ROOT, createPreviewer } from "./preview.ts";
import { registerTools } from "./tools.ts";

const REGISTRY = process.env.FOUNDRY_REGISTRY ?? join(ROOT, "public", "r");
const previews = createPreviewer();

const server = new McpServer({ name: "foundry", version: "1.0.0" });
registerTools(server, { registry: openRegistry(REGISTRY), registryLocation: REGISTRY, previews });

// Exit with the client, taking the preview browser and any gallery we started with us.
const shutdown = () => previews.close().finally(() => process.exit(0));
const transport = new StdioServerTransport();
transport.onclose = shutdown;
process.stdin.on("close", shutdown);
for (const signal of ["SIGINT", "SIGTERM"] as const) process.on(signal, shutdown);
await server.connect(transport);
