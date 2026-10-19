// The run instance's on/off switch. Two kinds behind one interface:
//   local  the runner is a child process of this server (the laptop)
//   ec2    the runner is a systemd service on an EC2 instance that is started and stopped
//          through the EC2 API, with the preview instance's own role (allowed for that one
//          instance only)
import { spawn, type ChildProcess } from "node:child_process";
import { DescribeInstancesCommand, EC2Client, StartInstancesCommand, StopInstancesCommand } from "@aws-sdk/client-ec2";
import type { MachineState } from "./shared.ts";

export interface Machine {
  readonly kind: "local" | "ec2";
  state(): Promise<MachineState>;
  start(): Promise<void>;
  stop(): Promise<void>;
}

export class LocalMachine implements Machine {
  readonly kind = "local";
  private child: ChildProcess | null = null;

  /** `command` and `args` start the runner; `env` is added to this process's environment. */
  constructor(
    private command: string,
    private args: string[],
    private env: Record<string, string>,
    private log: (line: string) => void,
  ) {}

  async state(): Promise<MachineState> {
    return this.child && this.child.exitCode === null ? "on" : "off";
  }

  async start() {
    if (await this.state() === "on") return;
    const child = spawn(this.command, this.args, { env: { ...process.env, ...this.env }, stdio: ["ignore", "pipe", "pipe"] });
    for (const stream of [child.stdout!, child.stderr!]) stream.on("data", (d) => String(d).split(/\r?\n/).filter(Boolean).forEach((l) => this.log(`[runner] ${l}`)));
    child.on("exit", (code) => this.log(`[runner] exited with code ${code}`));
    this.child = child;
  }

  async stop() {
    const child = this.child;
    if (!child || child.exitCode !== null) return;
    // The runner stops its own children (the agent, the gallery) on SIGTERM. On Windows there is
    // no SIGTERM, so the whole tree goes.
    if (process.platform === "win32") spawn("taskkill", ["/pid", String(child.pid), "/T", "/F"], { stdio: "ignore" });
    else child.kill("SIGTERM");
  }
}

export class Ec2Machine implements Machine {
  readonly kind = "ec2";
  private ec2: EC2Client;

  constructor(
    private instanceId: string,
    region: string,
  ) {
    this.ec2 = new EC2Client({ region });
  }

  async state(): Promise<MachineState> {
    try {
      const out = await this.ec2.send(new DescribeInstancesCommand({ InstanceIds: [this.instanceId] }));
      const name = out.Reservations?.[0]?.Instances?.[0]?.State?.Name;
      if (name === "running") return "on";
      if (name === "pending") return "starting";
      if (name === "stopping" || name === "shutting-down") return "stopping";
      if (name === "stopped") return "off";
      return "unknown";
    } catch {
      return "unknown";
    }
  }

  async start() {
    await this.ec2.send(new StartInstancesCommand({ InstanceIds: [this.instanceId] }));
  }

  async stop() {
    await this.ec2.send(new StopInstancesCommand({ InstanceIds: [this.instanceId] }));
  }
}
