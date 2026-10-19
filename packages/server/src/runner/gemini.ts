// Gemini: the Gemini CLI, headless and --yolo, talking to a local forwarder instead of Google.
// The forwarder is the one from tools/gemini-run/run.mjs (see there for why each part exists):
//  - sends each request to Vertex's global endpoint (Argon isn't reachable through the API key's
//    automatic region) and removes any tier header (Standard only);
//  - keeps long thinks alive with blank lines, and moves screenshots a tool returns inside the
//    tool's answer, where Argon accepts them;
//  - reads the usage of every answer, which becomes one call row.
// With FOUNDRY_VERTEX_KEY set (the cloud) the forwarder adds the key itself, so the CLI and the
// agent only ever see a placeholder.
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import http from "node:http";
import https from "node:https";
import { homedir } from "node:os";
import { join } from "node:path";
import { costOf } from "../prices.ts";
import type { Call } from "../shared.ts";
import { eachLine, exited, killTree, start, stripAnsi } from "./proc.ts";
import type { Agent, AgentRun } from "./agent.ts";

export interface GeminiSettings {
  project: string;
  location: string;
  /** the Vertex API key, added by the forwarder; null = the CLI's own (~/.gemini/.env) is passed through */
  key: string | null;
}

/** Problems that stop a Gemini run before it starts. */
export function geminiProblems(): string[] {
  const problems: string[] = [];
  const settingsFile = join(homedir(), ".gemini/settings.json");
  const settings = existsSync(settingsFile) ? JSON.parse(readFileSync(settingsFile, "utf8")) : {};
  const tier = settings.billing?.vertexAi?.sharedRequestType;
  if (tier) problems.push(`~/.gemini/settings.json sets billing.vertexAi.sharedRequestType = "${tier}". Remove it for a Standard run.`);
  if (!existsSync(geminiJs())) problems.push(`The Gemini CLI isn't installed (looked for ${geminiJs()}).`);
  return problems;
}

let cachedJs: string | undefined;
function geminiJs(): string {
  cachedJs ??= join(spawnSync("npm root -g", { shell: true, encoding: "utf8" }).stdout.trim(), "@google/gemini-cli/bundle/gemini.js");
  return cachedJs;
}

/** The usage block of a response: the last one in a stream, or the only one in a plain reply. */
function usageOf(body: string): Record<string, number> | undefined {
  const chunks: Record<string, unknown>[] = [];
  if (/^data:/m.test(body)) {
    for (const line of body.split(/\r?\n/)) {
      if (!line.startsWith("data:")) continue;
      try {
        chunks.push(JSON.parse(line.slice(5)));
      } catch {
        // a partial line; the next one carries the usage again
      }
    }
  } else {
    try {
      const json = JSON.parse(body);
      chunks.push(...(Array.isArray(json) ? json : [json]));
    } catch {
      return undefined;
    }
  }
  return chunks.reverse().find((c) => c?.usageMetadata)?.usageMetadata as Record<string, number> | undefined;
}

/** Google's error as the one JSON object the CLI's stream reader recognises. */
function errorObject(status: number, body: string): string {
  try {
    const json = JSON.parse(body);
    const error = (Array.isArray(json) ? json[0] : json)?.error;
    if (error?.code) return JSON.stringify({ error });
  } catch {
    // not JSON
  }
  return JSON.stringify({ error: { code: status, status: "UNAVAILABLE", message: `foundry forwarder: ${body.slice(0, 300) || "no body"}` } });
}

/** Moves images a tool returned (sent after the tool's answer) inside that answer. Returns how many moved. */
function nestToolImages(request: { contents?: { parts?: Record<string, unknown>[] }[] }): number {
  let moved = 0;
  for (const content of request.contents ?? []) {
    if (!Array.isArray(content.parts)) continue;
    const parts: Record<string, unknown>[] = [];
    let answer: { parts?: unknown[] } | undefined;
    for (const part of content.parts) {
      if (part.functionResponse) {
        answer = part.functionResponse as { parts?: unknown[] };
        parts.push(part);
      } else if (answer && (part.inlineData || part.fileData)) {
        (answer.parts ??= []).push(part);
        moved++;
      } else {
        answer = undefined;
        parts.push(part);
      }
    }
    content.parts = parts;
  }
  return moved;
}

async function startForwarder(settings: GeminiSettings, onCall: (c: Omit<Call, "attempt">) => void, note: (msg: string) => void) {
  const record = (path: string, status: number, body: string, ms: number) => {
    const model = path.match(/models\/([^:/?]+)/)?.[1] ?? "?";
    const u = usageOf(body);
    if (!u) {
      if (status >= 400) onCall({ at: new Date().toISOString(), model, status, input: 0, cached: 0, cacheWrite: 0, output: 0, thoughts: 0, usd: 0, ms });
      return;
    }
    const cached = u.cachedContentTokenCount ?? 0;
    const tokens = {
      input: (u.promptTokenCount ?? 0) + (u.toolUsePromptTokenCount ?? 0) - cached,
      cached,
      cacheWrite: 0,
      output: u.candidatesTokenCount ?? 0,
      thoughts: u.thoughtsTokenCount ?? 0,
    };
    onCall({ at: new Date().toISOString(), model, status, ...tokens, usd: costOf(model, tokens), ms });
  };

  let requestNo = 0;
  const server = http.createServer((req, res) => {
    const no = ++requestNo;
    const t0 = Date.now();
    const chunks: Buffer[] = [];
    req.on("data", (c) => chunks.push(c));

    // The CLI asks for /v1/publishers/...; the global endpoint wants /v1/projects/<p>/locations/global/publishers/...
    let path = (req.url ?? "").replace(/^\/(v1[a-z0-9]*)\/publishers\//, `/$1/projects/${settings.project}/locations/${settings.location}/publishers/`);
    const headers: http.OutgoingHttpHeaders = { ...req.headers };
    delete headers.host;
    delete headers.connection;
    delete headers["accept-encoding"]; // plain text back, so the usage can be read
    delete headers["x-vertex-ai-llm-shared-request-type"]; // Standard tier only
    delete headers["x-vertex-ai-llm-request-type"];
    if (settings.key) {
      headers["x-goog-api-key"] = settings.key;
      path = path.replace(/([?&])key=[^&]*/, `$1key=${encodeURIComponent(settings.key)}`);
    }

    // Streamed answers start at once, and a blank line every 20 s keeps the CLI waiting while
    // the model thinks (it gives up after 60 s without a first byte).
    const streaming = /:streamGenerateContent\b/.test(path) && /[?&]alt=sse\b/.test(path);
    let atEventBoundary = true;
    let ping: NodeJS.Timeout | undefined;
    if (streaming) {
      res.writeHead(200, { "content-type": "text/event-stream" });
      ping = setInterval(() => atEventBoundary && res.write("\n"), 20e3);
    }
    const done = () => clearInterval(ping);

    const upstream = https.request({ host: "aiplatform.googleapis.com", path, method: req.method, headers }, (up) => {
      let body = "";
      up.setEncoding("utf8");
      const failed = (up.statusCode ?? 500) >= 400;
      if (!streaming) {
        const { connection: _c, "keep-alive": _k, "transfer-encoding": _t, ...upHeaders } = up.headers;
        res.writeHead(up.statusCode ?? 502, upHeaders);
      }
      up.on("data", (chunk: string) => {
        body += chunk;
        if (streaming && failed) return;
        res.write(chunk);
        atEventBoundary = /\r?\n\r?\n$/.test(body);
      });
      up.on("end", () => {
        done();
        if (streaming && failed) {
          note(`#${no} Google answered ${up.statusCode} after ${Date.now() - t0} ms: ${body.slice(0, 200).replace(/\s+/g, " ")}`);
          res.end(errorObject(up.statusCode ?? 500, body));
        } else res.end();
        record(path, up.statusCode ?? 0, body, Date.now() - t0);
      });
    });
    upstream.on("error", (e: NodeJS.ErrnoException) => {
      done();
      note(`#${no} Google connection error ${e.code ?? e.message} after ${Date.now() - t0} ms`);
      record(path, 502, "", Date.now() - t0);
      if (!res.headersSent) {
        res.writeHead(502, { "content-type": "application/json" });
        res.end(errorObject(502, e.message));
      } else if (atEventBoundary) res.end(errorObject(503, e.message)); // the CLI retries a 503
      else res.destroy(e);
    });
    res.on("close", () => {
      done();
      if (!res.writableFinished) upstream.destroy();
    });
    req.on("end", () => {
      let body = Buffer.concat(chunks);
      if (/:(stream)?generateContent\b/i.test(path) && !headers["content-encoding"]) {
        try {
          const request = JSON.parse(body.toString("utf8"));
          if (nestToolImages(request) > 0) body = Buffer.from(JSON.stringify(request), "utf8");
        } catch {
          // not JSON: send it as it came
        }
      }
      upstream.removeHeader("transfer-encoding");
      upstream.setHeader("content-length", body.length);
      upstream.end(body);
    });
  });
  // The CLI reuses its connection between turns; Node's 5 s idle close broke the first real run.
  server.keepAliveTimeout = 3600e3;
  server.headersTimeout = 3601e3;
  server.requestTimeout = 0;
  server.on("clientError", (e: NodeJS.ErrnoException, socket) => {
    if (e.code !== "ECONNRESET") note(`client error ${e.code ?? e.message}`);
    socket.destroy();
  });
  await new Promise<void>((ok) => server.listen(0, "127.0.0.1", ok));
  const port = (server.address() as { port: number }).port;
  return { url: `http://127.0.0.1:${port}`, close: () => server.close() };
}

export function geminiAgent(settings: GeminiSettings): Agent {
  return {
    async run({ cwd, prompt, model, attempt, report }): Promise<AgentRun> {
      const forwarder = await startForwarder(
        settings,
        (c) => report.call({ ...c, attempt }),
        (msg) => report.event("warn", `forwarder: ${msg}`),
      );
      const env: NodeJS.ProcessEnv = { ...process.env, GOOGLE_VERTEX_BASE_URL: forwarder.url };
      if (settings.key) {
        env.GOOGLE_GENAI_USE_VERTEXAI = "true";
        env.GOOGLE_API_KEY = "added-by-the-forwarder";
      }
      const child = start(process.execPath, [geminiJs(), "-m", model, "--yolo", "--skip-trust", "-p", prompt], { cwd, env });
      for (const stream of [child.stdout!, child.stderr!]) eachLine(stream, (line) => line.trim() && report.event("out", stripAnsi(line)));
      return {
        stop: () => killTree(child),
        done: exited(child).then((code) => {
          forwarder.close();
          return { code };
        }),
      };
    },
  };
}
