# infra/ — the cloud (phase 7, step C)

Terraform for the two foundry instances in **jk** (`400730734202`, `ap-south-1`). The design
and the reasons are in [`docs/phase-7-cloud.md`](../docs/phase-7-cloud.md).

| File | What |
|---|---|
| `network.tf` | VPC `10.20.0.0/16`, one public subnet in `ap-south-1a`, internet gateway, no NAT, no peering; the two security groups |
| `iam.tf` | `FoundryPreview` (SSM + `FoundryRunSwitch`: start/stop the run instance only) and `FoundryRun` (SSM only) |
| `instances.tf` | preview: t4g.small, `10.20.0.10`, Elastic IP, 20 GB · run: t4g.large, `10.20.0.20`, auto-assigned public IP, 40 GB, standard credits, shutdown = stop |
| `outputs.tf` | the Elastic IP, the DNS records, instance IDs, private IPs |

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
