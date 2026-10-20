// #/devices: the machines logged in to the foundry MCP at <this address>/mcp. A machine logs
// itself in: Claude Code opens the browser at this server's MCP login page, which asks for the
// passphrase (see packages/server/src/oauth.ts). Revoking one cuts that machine off at once.
import { Check, Copy, Laptop } from "lucide-react";
import type { Device } from "../../../../packages/server/src/shared";
import { useCopy } from "../ui";
import { ago, api, Problem, usePoll } from "./runs";

export function DevicesPage() {
  const devices = usePoll<Device[]>("devices", 0, false);

  const revoke = async (d: Device) => {
    if (!confirm(`Revoke "${d.name}"? It is logged out at once and has to log in again to use the MCP.`)) return;
    try {
      await api(`devices/${d.id}/revoke`, { method: "POST" });
      devices.reload();
    } catch (err) {
      alert((err as Error).message);
    }
  };

  return (
    <div className="page runs">
      <div className="page-head">
        <h1>Devices</h1>
        <p>
          Machines logged in to the foundry from Claude Code: search, read items and see screenshots, nothing that writes. Each logs in once with the passphrase; revoke one to cut that
          machine off. Nothing is registered in any Claude account.
        </p>
      </div>

      <Setup />

      {devices.error && <Problem error={devices.error} />}
      {devices.data && !devices.data.length && <div className="empty">No devices yet.</div>}
      {devices.data && devices.data.length > 0 && (
        <div className="run-list device-list">
          {devices.data.map((d) => (
            <div key={d.id} className={`device-row${d.revokedAt ? " revoked" : ""}`}>
              <Laptop className="i muted" />
              <span className="run-what">
                <b>{d.name}</b>
                <small className="muted">
                  {d.app && d.app !== d.name ? `${d.app} · ` : ""}logged in {ago(d.createdAt)} · {d.lastUsedAt ? `last used ${ago(d.lastUsedAt)}` : "not used yet"}
                </small>
              </span>
              {d.revokedAt ? (
                <span className="badge run-stopped">Revoked {ago(d.revokedAt)}</span>
              ) : (
                <button className="btn sm" onClick={() => revoke(d)}>
                  Revoke
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/** How a machine gets the MCP: add it once, then log in from Claude Code. */
function Setup() {
  const command = `claude mcp add --transport http foundry ${location.origin}/mcp -s user`;
  const config = JSON.stringify({ mcpServers: { foundry: { type: "http", url: `${location.origin}/mcp` } } }, null, 2);
  return (
    <div className="panel device-setup">
      <b>Add a machine</b>
      <ol>
        <li>
          Add the foundry to Claude Code on that machine, once:
          <CopyBlock text={command} />
          or put this in a project's <code>.mcp.json</code>:
          <CopyBlock text={config} />
        </li>
        <li>
          In Claude Code type <code>/mcp</code>, pick <code>foundry</code> and choose Authenticate. The browser opens this site's MCP login: name the machine, type the passphrase,
          Allow. Claude Code keeps the login on that machine and renews it by itself.
        </li>
      </ol>
    </div>
  );
}

function CopyBlock({ text }: { text: string }) {
  const [copied, copy] = useCopy();
  return (
    <div className="copy-block">
      <pre className="code">{text}</pre>
      <button className="btn sm" onClick={() => copy(text)} aria-label="Copy">
        {copied ? <Check className="i" /> : <Copy className="i" />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
