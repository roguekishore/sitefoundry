// #/passkeys: the passkeys that can log in to the foundry server instead of the passphrase and
// code. Adding one asks for the authenticator code again; the passphrase login always stays.
//
// A passkey is a key pair made by the phone or laptop (or a password manager that syncs it). The
// private half never leaves the device; the server keeps the public half and, to log in, asks the
// device to sign a fresh challenge, which it does after a fingerprint, face or PIN check.
import { useState, type FormEvent } from "react";
import { KeyRound, Plus, Trash2 } from "lucide-react";
import type { Options, Passkey } from "../../../../packages/server/src/shared";
import { ago, api, Field, Problem, usePoll } from "./runs";

// The browser hands WebAuthn bytes over as ArrayBuffers; the server speaks base64url JSON.
const bytes = (s: string) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));
const text = (b: ArrayBuffer) => btoa(String.fromCharCode(...new Uint8Array(b))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

/** A first guess at a name for this device's passkey. */
function deviceName(): string {
  const ua = navigator.userAgent;
  if (/iPhone/.test(ua)) return "iPhone";
  if (/iPad/.test(ua)) return "iPad";
  if (/Android/.test(ua)) return "Android phone";
  if (/Macintosh/.test(ua)) return "Mac";
  if (/Windows/.test(ua)) return "Windows laptop";
  return "";
}

export function PasskeysPage() {
  const options = usePoll<Options>("options", 0, false);
  const passkeys = usePoll<Passkey[]>(options.data?.auth ? "passkeys" : null, 0, false);
  const [removing, setRemoving] = useState<string>();
  const [error, setError] = useState<string>();

  const remove = async (p: Passkey) => {
    if (!confirm(`Remove the passkey "${p.name}"? It won't log in any more; the device may still list it until you delete it there too.`)) return;
    setRemoving(p.id);
    setError(undefined);
    try {
      await api(`passkeys/${p.id}`, { method: "DELETE" });
      passkeys.reload();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setRemoving(undefined);
    }
  };

  const o = options.data;
  return (
    <div className="page runs">
      <div className="page-head">
        <h1>Passkeys</h1>
        <p>Log in with a fingerprint, face or PIN instead of the passphrase and code. The passphrase and code keep working too.</p>
      </div>
      {options.error && <Problem error={options.error} />}
      {o && !o.auth && (
        <div className="panel run-problem">
          <b>This server has no login.</b>
          <p className="muted">It's the one on this computer, which only this computer can reach. Passkeys are for the cloud address, where the login is on.</p>
        </div>
      )}
      {o?.auth && (
        <>
          {passkeys.error && <Problem error={passkeys.error} />}
          {passkeys.data && !passkeys.data.length && <div className="empty">No passkeys yet.</div>}
          {passkeys.data && passkeys.data.length > 0 && (
            <div className="run-list passkey-list">
              {passkeys.data.map((p) => (
                <div key={p.id} className="passkey-row">
                  <KeyRound className="i" />
                  <span className="run-what">
                    <b>{p.name}</b>
                    <small className="muted">
                      added {ago(p.createdAt)} · {p.lastUsedAt ? `last used ${ago(p.lastUsedAt)}` : "not used yet"}
                    </small>
                  </span>
                  <button className="btn sm" disabled={removing === p.id} onClick={() => remove(p)}>
                    <Trash2 className="i" />
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
          {error && <p className="run-bad">{error}</p>}
          {passkeys.data && <AddPasskey onAdded={passkeys.reload} />}
        </>
      )}
    </div>
  );
}

function AddPasskey({ onAdded }: { onAdded: () => void }) {
  const [name, setName] = useState(deviceName);
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string>();
  const [added, setAdded] = useState<string>();

  if (!window.PublicKeyCredential) {
    return <p className="muted passkey-note">This browser can't make passkeys. Open this page in a current Safari, Chrome, Edge or Firefox.</p>;
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(undefined);
    setAdded(undefined);
    try {
      // 1. The code again; the server answers with what the device needs to make a passkey.
      const o = await api<PublicKeyCredentialCreationOptionsJSON>("passkeys/options", { method: "POST", body: { code } });
      // 2. The device asks for a fingerprint, face or PIN and makes the key pair.
      const cred = (await navigator.credentials.create({
        publicKey: {
          ...o,
          challenge: bytes(o.challenge),
          user: { ...o.user, id: bytes(o.user.id) },
          excludeCredentials: (o.excludeCredentials ?? []).map((c) => ({ ...c, id: bytes(c.id) })),
        } as PublicKeyCredentialCreationOptions,
      })) as PublicKeyCredential;
      const r = cred.response as AuthenticatorAttestationResponse;
      // 3. The server checks it and keeps the public half.
      await api("passkeys", {
        method: "POST",
        body: {
          name,
          response: {
            id: cred.id,
            rawId: text(cred.rawId),
            type: cred.type,
            authenticatorAttachment: cred.authenticatorAttachment ?? undefined,
            clientExtensionResults: cred.getClientExtensionResults(),
            response: { clientDataJSON: text(r.clientDataJSON), attestationObject: text(r.attestationObject), transports: r.getTransports?.() ?? [] },
          },
        },
      });
      setAdded(name);
      setCode("");
      onAdded();
    } catch (err) {
      const n = (err as Error).name;
      setError(
        n === "NotAllowedError"
          ? "Cancelled, or the device said no. Try again (the code may need refreshing)."
          : n === "InvalidStateError"
            ? "This device already holds a passkey for this site."
            : (err as Error).message,
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className="run-form" onSubmit={submit}>
      <h2 className="passkey-h">Add a passkey on this device</h2>
      <Field label="Name" hint="To tell your passkeys apart here, like Phone or Laptop">
        <input className="field" required maxLength={60} value={name} onChange={(e) => setName(e.target.value)} />
      </Field>
      <Field label="Code from your authenticator" hint="Asked again so that a session alone can't add a passkey">
        <input className="field" required inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} value={code} onChange={(e) => setCode(e.target.value)} />
      </Field>
      {error && <p className="run-bad">{error}</p>}
      {added && <p className="muted">Added "{added}". Next time, choose "Log in with a passkey" on the login page.</p>}
      <div>
        <button className="btn primary big" disabled={busy}>
          <Plus className="i" />
          {busy ? "Waiting for the device…" : "Add a passkey"}
        </button>
      </div>
    </form>
  );
}
