// Sends a run's events and calls to the server every 2 seconds, in batches. Nothing is lost
// if the server is briefly unreachable: a failed batch is kept and sent with the next one.
// The server's answer says whether someone pressed Stop.
import type { Call, EventKind, Report, ReportReply, RunEvent } from "../shared.ts";

export class Reporter {
  private events: RunEvent[] = [];
  private calls: Call[] = [];
  private patch: Report = {};
  private timer: NodeJS.Timeout | null = null;
  private sending: Promise<void> | null = null;
  private stopAsked = false;
  /** Every call so far, kept for the usage record the run commits. */
  readonly allCalls: Call[] = [];
  usd = 0;

  constructor(
    private serverUrl: string,
    private token: string,
    private runId: number,
    private onStop: () => void,
  ) {}

  event(kind: EventKind, text: string) {
    this.events.push({ at: new Date().toISOString(), kind, text });
    console.log(`[run ${this.runId}] ${kind === "out" ? "" : `${kind}: `}${text}`);
  }

  call(c: Call) {
    this.calls.push(c);
    this.allCalls.push(c);
    this.usd += c.usd;
  }

  /** State or fields to change on the server with the next batch. */
  set(patch: Report) {
    Object.assign(this.patch, patch);
  }

  start() {
    this.timer = setInterval(() => void this.flush(), 2000);
  }

  async flush() {
    if (this.sending) return this.sending;
    // Always send something: an empty report still tells the server the runner is alive.
    const body: Report = { ...this.patch, events: this.events, calls: this.calls };
    this.patch = {};
    this.events = [];
    this.calls = [];
    this.sending = (async () => {
      try {
        const res = await fetch(`${this.serverUrl}/api/runner/runs/${this.runId}/report`, {
          method: "POST",
          headers: { "content-type": "application/json", authorization: `Bearer ${this.token}` },
          body: JSON.stringify(body),
          signal: AbortSignal.timeout(20e3),
        });
        if (!res.ok) throw new Error(`server answered ${res.status}`);
        const reply = (await res.json()) as ReportReply;
        if (reply.stop && !this.stopAsked) {
          this.stopAsked = true;
          this.onStop();
        }
      } catch (e) {
        // Put the batch back in front of whatever came in meanwhile.
        const { events = [], calls = [], ...fields } = body;
        this.events = [...events, ...this.events];
        this.calls = [...calls, ...this.calls];
        this.patch = { ...fields, ...this.patch };
        console.error(`[run ${this.runId}] couldn't report: ${(e as Error).message}`);
      } finally {
        this.sending = null;
      }
    })();
    return this.sending;
  }

  /** The last batch; tries for up to a minute. */
  async close() {
    if (this.timer) clearInterval(this.timer);
    for (let i = 0; i < 12; i++) {
      await this.flush();
      if (!this.events.length && !this.calls.length && !Object.keys(this.patch).length) return;
      await new Promise((ok) => setTimeout(ok, 5000));
    }
  }
}
