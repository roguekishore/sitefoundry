# The unified deploy (DEPLOY-SPEC.md sections 11 and 17), for both units that live in jk:
# foundry (this repo) and foundry-vault (roguekishore/sitefoundry-vault, which has no
# Terraform of its own).
#
# Per unit:
#   <unit>-deploy-<account>   bucket of releases/<sha12>.tar.gz, written by the deploy workflow
#   <unit>-github-deploy      role GitHub Actions assumes, only from that repo's `deploy` branch
#   <unit>-ops                IAM user for the laptop's `./ops`; its key is made by hand in the
#                             console (~/.ops/<unit>.csv), never in state
#   <unit>-logs, -status      the only commands `./ops logs` and `./ops status` can run
#   /<unit>/instances         name=instance-id pairs for `./ops shell`
# /<unit>/release is not here: the workflow writes it.
#
# The preview instance carries deploy-foundry=true and deploy-foundry-vault=true (both ship
# there). The run instance carries deploy-foundry=boot: never shipped to, it switches to the
# live release at boot (D12), so its role reads foundry's releases too.

locals {
  account_id = data.aws_caller_identity.me.account_id

  deploy_units = {
    foundry = {
      repo      = "sitefoundry"
      services  = ["foundry.service", "foundry-runner.service"]
      instances = "preview=${aws_instance.preview.id},run=${aws_instance.run.id}"
      status = [
        "echo \"current: $(readlink -e /opt/foundry/current || echo none)\"",
        "for s in foundry.service foundry-runner.service; do echo \"$s: $(systemctl is-active $s)\"; done",
        "if systemctl cat foundry.service >/dev/null 2>&1; then if curl -fsS --max-time 2 -o /dev/null http://127.0.0.1:4401/; then echo 'health (preview): ok'; else echo 'health (preview): FAILING'; fi; fi",
        "if systemctl cat foundry-runner.service >/dev/null 2>&1; then if systemctl is-active --quiet foundry-runner.service; then echo 'health (run): ok'; else echo 'health (run): FAILING'; fi; fi",
      ]
    }
    foundry-vault = {
      repo      = "sitefoundry-vault"
      services  = ["foundry.service"]
      instances = "preview=${aws_instance.preview.id}"
      status = [
        "echo \"current: $(readlink -e /opt/foundry-vault/current || echo none)\"",
        "echo \"foundry.service: $(systemctl is-active foundry.service)\"",
        "if curl -fsS --max-time 2 -o /dev/null http://127.0.0.1:4401/; then echo 'health: ok'; else echo 'health: FAILING'; fi",
      ]
    }
  }

  instance_arns = "arn:aws:ec2:${var.region}:${local.account_id}:instance/*"
}

# ---------------------------------------------------------------------------
# Buckets
# ---------------------------------------------------------------------------
resource "aws_s3_bucket" "deploy" {
  for_each = local.deploy_units
  bucket   = "${each.key}-deploy-${local.account_id}"
}

resource "aws_s3_bucket_public_access_block" "deploy" {
  for_each                = aws_s3_bucket.deploy
  bucket                  = each.value.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_server_side_encryption_configuration" "deploy" {
  for_each = aws_s3_bucket.deploy
  bucket   = each.value.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

# ---------------------------------------------------------------------------
# GitHub Actions
# ---------------------------------------------------------------------------
# GitHub's OIDC issuer, one per account. If jk already has one (made by hand or by
# another repo), import it here instead of creating a second.
resource "aws_iam_openid_connect_provider" "github" {
  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1", "1c58a3a8518e8759bf075b76b750d4f2df264fcd"]
}

data "aws_iam_policy_document" "github_trust" {
  for_each = local.deploy_units
  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]
    principals {
      type        = "Federated"
      identifiers = [aws_iam_openid_connect_provider.github.arn]
    }
    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }
    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:sub"
      values   = ["repo:roguekishore/${each.value.repo}:ref:refs/heads/deploy"]
    }
  }
}

resource "aws_iam_role" "github_deploy" {
  for_each           = local.deploy_units
  name               = "${each.key}-github-deploy"
  description        = "${each.key}: the deploy workflow of roguekishore/${each.value.repo}, deploy branch only"
  assume_role_policy = data.aws_iam_policy_document.github_trust[each.key].json
}

data "aws_iam_policy_document" "github_deploy" {
  for_each = local.deploy_units
  statement {
    sid       = "Releases"
    actions   = ["s3:GetObject", "s3:PutObject", "s3:DeleteObject"]
    resources = ["${aws_s3_bucket.deploy[each.key].arn}/releases/*"]
  }
  statement {
    sid       = "ListReleases"
    actions   = ["s3:ListBucket"]
    resources = [aws_s3_bucket.deploy[each.key].arn]
    condition {
      test     = "StringLike"
      variable = "s3:prefix"
      values   = ["releases/*"]
    }
  }
  statement {
    sid       = "RunShellScriptDocument"
    actions   = ["ssm:SendCommand"]
    resources = ["arn:aws:ssm:${var.region}::document/AWS-RunShellScript"]
  }
  statement {
    sid       = "RunOnTheShipInstance"
    actions   = ["ssm:SendCommand"]
    resources = [local.instance_arns]
    condition {
      test     = "StringEquals"
      variable = "ssm:resourceTag/deploy-${each.key}"
      values   = ["true"]
    }
  }
  statement {
    sid       = "WatchCommands" # no resource-level support
    actions   = ["ssm:GetCommandInvocation", "ssm:ListCommandInvocations", "ssm:DescribeInstanceInformation"]
    resources = ["*"]
  }
  statement {
    sid       = "LiveRelease"
    actions   = ["ssm:GetParameter", "ssm:PutParameter"]
    resources = ["${local.parameter_arn}/${each.key}/release"]
  }
}

# Standalone managed policies, never inline (warden's rule).
resource "aws_iam_policy" "github_deploy" {
  for_each    = local.deploy_units
  name        = "${each.key}-github-deploy"
  description = "${each.key}: build into the deploy bucket, activate on the ship instance"
  policy      = data.aws_iam_policy_document.github_deploy[each.key].json
}

resource "aws_iam_role_policy_attachment" "github_deploy" {
  for_each   = local.deploy_units
  role       = aws_iam_role.github_deploy[each.key].name
  policy_arn = aws_iam_policy.github_deploy[each.key].arn
}

# ---------------------------------------------------------------------------
# ./ops
# ---------------------------------------------------------------------------
resource "aws_iam_user" "ops" {
  for_each = local.deploy_units
  name     = "${each.key}-ops"
}

data "aws_iam_policy_document" "ops" {
  for_each = local.deploy_units
  statement {
    sid     = "ReadReleaseAndInstances"
    actions = ["ssm:GetParameter"]
    resources = [
      "${local.parameter_arn}/${each.key}/release",
      "${local.parameter_arn}/${each.key}/instances",
    ]
  }
  statement {
    sid       = "SessionOnUnitInstances"
    actions   = ["ssm:StartSession"]
    resources = [local.instance_arns]
    condition {
      test     = "StringLike"
      variable = "ssm:resourceTag/deploy-${each.key}"
      values   = ["*"]
    }
  }
  statement {
    sid     = "SessionDocuments"
    actions = ["ssm:StartSession"]
    resources = [
      "arn:aws:ssm:${var.region}:${local.account_id}:document/SSM-SessionManagerRunShell",
      "arn:aws:ssm:${var.region}::document/AWS-StartInteractiveCommand",
    ]
  }
  statement {
    sid       = "OwnSessions"
    actions   = ["ssm:TerminateSession", "ssm:ResumeSession"]
    resources = ["arn:aws:ssm:*:*:session/$${aws:username}-*"]
  }
  statement {
    sid       = "LogsAndStatusDocuments"
    actions   = ["ssm:SendCommand"]
    resources = [aws_ssm_document.logs[each.key].arn, aws_ssm_document.status[each.key].arn]
  }
  statement {
    sid       = "LogsAndStatusOnUnitInstances"
    actions   = ["ssm:SendCommand"]
    resources = [local.instance_arns]
    condition {
      test     = "StringLike"
      variable = "ssm:resourceTag/deploy-${each.key}"
      values   = ["*"]
    }
  }
  statement {
    sid       = "WatchCommands"
    actions   = ["ssm:GetCommandInvocation", "ssm:DescribeInstanceInformation"]
    resources = ["*"]
  }
  statement {
    sid       = "ListReleases"
    actions   = ["s3:ListBucket"]
    resources = [aws_s3_bucket.deploy[each.key].arn]
    condition {
      test     = "StringLike"
      variable = "s3:prefix"
      values   = ["releases/*"]
    }
  }
}

resource "aws_iam_policy" "ops" {
  for_each    = local.deploy_units
  name        = "${each.key}-ops"
  description = "${each.key}: ./ops releases, status, logs, shell"
  policy      = data.aws_iam_policy_document.ops[each.key].json
}

resource "aws_iam_user_policy_attachment" "ops" {
  for_each   = local.deploy_units
  user       = aws_iam_user.ops[each.key].name
  policy_arn = aws_iam_policy.ops[each.key].arn
}

resource "aws_ssm_document" "logs" {
  for_each        = local.deploy_units
  name            = "${each.key}-logs"
  document_type   = "Command"
  document_format = "JSON"
  content = jsonencode({
    schemaVersion = "2.2"
    description   = "${each.key}: the last N lines of the services' journal"
    parameters = {
      lines = {
        type           = "String"
        default        = "200"
        allowedPattern = "^[0-9]{1,4}$"
      }
    }
    mainSteps = [{
      action = "aws:runShellScript"
      name   = "logs"
      inputs = {
        runCommand = ["journalctl --no-pager -n {{lines}} ${join(" ", [for s in each.value.services : "-u ${s}"])}"]
      }
    }]
  })
}

resource "aws_ssm_document" "status" {
  for_each        = local.deploy_units
  name            = "${each.key}-status"
  document_type   = "Command"
  document_format = "JSON"
  content = jsonencode({
    schemaVersion = "2.2"
    description   = "${each.key}: current release, service state, health"
    mainSteps = [{
      action = "aws:runShellScript"
      name   = "status"
      inputs = { runCommand = each.value.status }
    }]
  })
}

resource "aws_ssm_parameter" "instances" {
  for_each = local.deploy_units
  name     = "/${each.key}/instances"
  type     = "String"
  value    = each.value.instances
}

# ---------------------------------------------------------------------------
# What the instances read: the releases and the live sha12 (activate.sh and its boot
# catch-up). The preview runs both units; the run instance only foundry.
# ---------------------------------------------------------------------------
data "aws_iam_policy_document" "preview_releases" {
  statement {
    sid       = "Releases"
    actions   = ["s3:GetObject"]
    resources = [for b in aws_s3_bucket.deploy : "${b.arn}/releases/*"]
  }
  statement {
    sid       = "LiveRelease"
    actions   = ["ssm:GetParameter"]
    resources = [for u, _ in local.deploy_units : "${local.parameter_arn}/${u}/release"]
  }
}

data "aws_iam_policy_document" "run_releases" {
  statement {
    sid       = "Releases"
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.deploy["foundry"].arn}/releases/*"]
  }
  statement {
    sid       = "LiveRelease"
    actions   = ["ssm:GetParameter"]
    resources = ["${local.parameter_arn}/foundry/release"]
  }
}

resource "aws_iam_policy" "preview_releases" {
  name        = "FoundryPreviewReleases"
  description = "The foundry preview reads foundry's and foundry-vault's releases"
  policy      = data.aws_iam_policy_document.preview_releases.json
}

resource "aws_iam_policy" "run_releases" {
  name        = "FoundryRunReleases"
  description = "The foundry run instance reads foundry's releases (boot catch-up)"
  policy      = data.aws_iam_policy_document.run_releases.json
}

resource "aws_iam_role_policy_attachment" "preview_releases" {
  role       = aws_iam_role.preview.name
  policy_arn = aws_iam_policy.preview_releases.arn
}

resource "aws_iam_role_policy_attachment" "run_releases" {
  role       = aws_iam_role.run.name
  policy_arn = aws_iam_policy.run_releases.arn
}
