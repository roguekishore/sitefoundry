// The read-only foundry tools over MCP's HTTP transport, for the foundry server to answer at
// /mcp (packages/server checks the OAuth access token first). Stateless: every request gets a fresh
// MCP server, so nothing is kept between calls and a restart loses nothing.
import type { IncomingMessage, ServerResponse } from "node:http";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { openRegistry } from "@foundry/core";
import { createPreviewer, type PreviewerOptions } from "./preview.ts";
import { registerTools } from "./tools.ts";

export interface RemoteMcpOptions {
  /** the built registry folders (public/r): the foundry's, and the vault's */
  registryDir: string | string[];
  /** how screenshots reach the server's own galleries */
  previews: PreviewerOptions;
}

const INSTRUCTIONS =
  "The foundry's catalog, read-only: search it, read an item's props and code, and see screenshots. " +
  "Installing into a project is done on a computer with the foundry repo (its CLI or local MCP), not here.";

export function createRemoteMcp({ registryDir, previews: previewOptions }: RemoteMcpOptions) {
  const registry = openRegistry(registryDir);
  const previews = createPreviewer(previewOptions);

  /** Answers one HTTP request to /mcp; `body` is the parsed JSON of a POST. */
  async function handle(req: IncomingMessage, res: ServerResponse, body: unknown) {
    const server = new McpServer({ name: "foundry", version: "1.0.0" }, { instructions: INSTRUCTIONS });
    registerTools(server, { registry, registryLocation: registryDir, previews, readOnly: true });
    const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined, enableJsonResponse: true });
    res.on("close", () => {
      void transport.close();
      void server.close();
    });
    await server.connect(transport);
    await transport.handleRequest(req, res, body);
  }

  return { handle, close: () => previews.close() };
}
