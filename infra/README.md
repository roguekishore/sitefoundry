# infra/ — the cloud (phase 7, steps C to E)

Terraform for the two foundry instances in **jk** (`400730734202`, `ap-south-1`). The design
and the reasons are in [`docs/phase-7-cloud.md`](../docs/phase-7-cloud.md).

| File | What |
|---|---|
| `network.tf` | VPC `10.20.0.0/16`, one public subnet in `ap-south-1a`, internet gateway, no NAT, no peering; the two security groups |
| `iam.tf` | `FoundryPreview` (SSM + `FoundryRunSwitch`: start/stop the run instance only) and `FoundryRun` (SSM only) |
| `deploy.tf` | the unified deploy for **foundry** and **foundry-vault**: buckets `<unit>-deploy-<account>`, the GitHub OIDC provider, roles `<unit>-github-deploy` (the `deploy` branch only), users `<unit>-ops`, documents `<unit>-logs` / `<unit>-status`, `/<unit>/instances`, and what each instance reads of the releases |
| `instances.tf` | preview: t4g.small, `10.20.0.10`, Elastic IP, 20 GB, tags `deploy-foundry=true`, `deploy-foundry-vault=true` · run: m7g.large, `10.20.0.20`, auto-assigned public IP, 40 GB, shutdown = stop, tag `deploy-foundry=boot` |
| `outputs.tf` | the Elastic IP, the DNS records, instance IDs, private IPs |
| `aws.sh` | `aws` as jk with the root-key CSV, never a profile |
| `ssm.sh` | runs scripts on an instance over SSM and prints their output |
| `secrets.sh` | puts the login, runner token, Vertex key and Claude token into Parameter Store |
| `provision/` | `common.sh` + `preview.sh` / `run.sh` set an instance up (safe to rerun). They install no code: releases come from `./ops ship` |

Every resource is tagged `warden:app = foundry`. No SSH: both instances are reached over SSM.

## Rules (warden's, they apply here too)

- **The operator applies.** An agent writes the change and the operator makes and applies a
  saved plan with `!` (bash, forward slashes). Root keys are only ever the operator's to use.
- **Auth is jk's root-key CSV**, `~/Downloads/jk.csv`, read by `bootstrap.sh` at runtime.
  Nothing goes into `~/.aws`. Never run `aws` bare (the default profile is the work account).
- **`tfplan` contains the root keys.** Gitignored; delete it after the apply.
- **State is local only** (`terraform.tfstate`, gitignored). Copy it somewhere safe before
  every apply: it is the only record of what Terraform owns here.
- A plan must never replace `aws_instance.preview` (that means a new instance, a new
  database, a new login). AMI and user-data changes are ignored for that reason.
- Terraform does not hold the run instance's on/off state: the foundry server switches it.

## Plan and apply

```bash
cd D:/PROJECTS/SITEFOUNDRY/infra
./bootstrap.sh init
TF_CLI_EXTRA='-out=tfplan' ./bootstrap.sh plan
terraform show tfplan          # read it: only what you meant to change
terraform apply tfplan
rm -f tfplan
terraform output
```

## DNS (by hand, in Netlify)

After the first apply, `terraform output dns_records` prints two A records:
`foundry.themaverick.tech` and `live.foundry.themaverick.tech`, both to the Elastic IP.
Add them in Netlify DNS before step D (Caddy needs them to get its certificates).

## Provision (step D)

These use jk's root keys, so the operator runs them with `!` (except `secrets.sh`, which asks
for input and runs in your own terminal).

```bash
cd D:/PROJECTS/SITEFOUNDRY/infra
./secrets.sh                                                  # once; your own terminal
./ssm.sh preview provision/common.sh provision/preview.sh     # set up (rerun after a fix)
./ssm.sh run provision/common.sh provision/run.sh             # ends by activating the live release
```

## Ship: `./ops ship`

The same pipeline as every other unit (`DEPLOY-SPEC.md` in the workspace root). From the repo
root, `./ops ship` pushes the commit to the `deploy` branch; GitHub Actions
(`.github/workflows/deploy.yml`) runs `deploy/build.sh` (server bundle, gallery, `git archive`,
`.release-commit`) into `foundry-deploy-<account>/releases/<sha12>.tar.gz`, then
`deploy/activate.sh` on the preview over SSM: `install.sh` (pnpm install, Chromium), switch
`/opt/foundry/current`, `after-switch.sh` (the `WorkingDirectory` drop-in), restart, health check
on `:4401`, switch back on failure. `./ops rollback`, `releases`, `status`, `logs`, `shell`
use the `foundry-ops` key in `~/.ops/foundry.csv`.

The run instance is never shipped to. At every boot `foundry-catchup.service` switches it to
`/foundry/release` before the runner starts. The runner's own git workspace
(`/home/runner/sitefoundry`, its worktrees, the vault checkout) stays git.

The vault (`roguekishore/sitefoundry-vault`) is its own unit with its own `./ops ship`; its
resources are in `deploy.tf` here.

### Cutover (once, operator)

1. Apply (plan and apply above). If jk already had a GitHub OIDC provider, import it first:
   `terraform import aws_iam_openid_connect_provider.github <arn>`.
2. Make the `foundry-ops` and `foundry-vault-ops` access keys in the console, into
   `~/.ops/foundry.csv` and `~/.ops/foundry-vault.csv`. Set the repository variable
   `AWS_ACCOUNT_ID` in both repos (and the vault's `BUILD_SSH_KEY` secret).
3. `./ops ship` here: the preview moves to `/opt/foundry/current` through the drop-in.
4. `./ssm.sh run provision/common.sh provision/run.sh` once: the run instance gets the catch-up.
