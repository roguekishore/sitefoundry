// #/devices: the machines allowed to use the foundry MCP at <this address>/mcp. Each gets a
// token of its own, shown once, that goes into a config file on that machine; Claude Code
// reads it with --mcp-config, so nothing is registered in any Claude account.
import { useState, type FormEvent } from "react";
import { Check, Copy, KeyRound, Plus } from "lucide-react";
import type { Device, NewDevice } from "../../../../packages/server/src/shared";
import { useCopy } from "../ui";
import { ago, api, Problem, usePoll } from "./runs";

export function DevicesPage() {
  const devices = usePoll<Device[]>("devices", 0, false);
  const [name, setName] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string>();
  const [made, setMade] = useState<NewDevice>();

  const add = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(undefined);
    try {
      setMade(await api<NewDevice>("devices", { method: "POST", body: { name } }));
      setName("");
      devices.reload();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSending(false);
    }
  };

  const revoke = async (d: Device) => {
    if (!confirm(`Revoke "${d.name}"? Its token stops working at once.`)) return;
    try {
      await api(`devices/${d.id}/revoke`, { method: "POST" });
      if (made?.device.id === d.id) setMade(undefined);
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
          Machines that may use the foundry from Claude Code: search, read items and see screenshots, nothing that writes. Each has a token of its own; revoke one to cut that
          machine off. The token lives in a file on the machine, so nothing is registered in any Claude account.
        </p>
      </div>

      <form className="device-add" onSubmit={add}>
        <label className="run-field">
          <span className="lbl">New device</span>
          <input className="field" required maxLength={60} placeholder="work laptop" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button className="btn primary big" disabled={sending}>
          <Plus className="i" />
          {sending ? "Adding…" : "Add"}
        </button>
      </form>
      {error && <p className="run-bad">{error}</p>}

      {made && <Setup made={made} />}

      {devices.error && <Problem error={devices.error} />}
      {devices.data && !devices.data.length && <div className="empty">No devices yet.</div>}
      {devices.data && devices.data.length > 0 && (
        <div className="run-list device-list">
          {devices.data.map((d) => (
            <div key={d.id} className={`device-row${d.revokedAt ? " revoked" : ""}`}>
              <KeyRound className="i muted" />
              <span className="run-what">
                <b>{d.name}</b>
                <small className="muted">
                  added {ago(d.createdAt)} · {d.lastUsedAt ? `last used ${ago(d.lastUsedAt)}` : "never used"}
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

/** What to do with a new token, shown once. */
function Setup({ made }: { made: NewDevice }) {
  const config = JSON.stringify(
    { mcpServers: { foundry: { type: "http", url: `${location.origin}/mcp`, headers: { Authorization: `Bearer ${made.token}` } } } },
    null,
    2,
  );
  const command = "claude --mcp-config ~/.foundry/mcp.json";
  return (
    <div className="panel device-setup">
      <b>Set up {made.device.name}</b>
      <p className="muted">This is the only time the token is shown. If it's lost, revoke the device and add it again.</p>
      <ol>
        <li>
          On that machine, save this as <code>~/.foundry/mcp.json</code> (or anywhere private: the file is the token).
          <CopyBlock text={config} />
        </li>
        <li>
          Start Claude Code with it:
          <CopyBlock text={command} />
          The foundry's tools then show up as <code>foundry</code> in that session only.
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
