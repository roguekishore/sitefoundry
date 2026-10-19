# One role and instance profile per instance. Both carry AmazonSSMManagedInstanceCore:
# that is how the instances are reached (no SSH), and it is all warden's install button
# needs from an instance that already has a profile of its own.

data "aws_iam_policy_document" "ec2_assume" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["ec2.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "preview" {
  name               = "FoundryPreview"
  description        = "foundry preview instance: SSM, and switching the run instance on and off"
  assume_role_policy = data.aws_iam_policy_document.ec2_assume.json
}

resource "aws_iam_role" "run" {
  name               = "FoundryRun"
  description        = "foundry run instance: SSM only"
  assume_role_policy = data.aws_iam_policy_document.ec2_assume.json
}

resource "aws_iam_role_policy_attachment" "preview_ssm" {
  role       = aws_iam_role.preview.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}

resource "aws_iam_role_policy_attachment" "run_ssm" {
  role       = aws_iam_role.run.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}

# The server's on/off switch (packages/server/src/machine.ts, Ec2Machine): start and
# stop the run instance and nothing else. DescribeInstances has no resource-level form.
data "aws_iam_policy_document" "run_switch" {
  statement {
    sid       = "SwitchTheRunInstance"
    actions   = ["ec2:StartInstances", "ec2:StopInstances"]
    resources = [aws_instance.run.arn]
  }
  statement {
    sid       = "SeeInstances"
    actions   = ["ec2:DescribeInstances"]
    resources = ["*"]
  }
}

# Standalone managed policy, never inline (warden's rule).
resource "aws_iam_policy" "run_switch" {
  name        = "FoundryRunSwitch"
  description = "Start and stop the foundry run instance"
  policy      = data.aws_iam_policy_document.run_switch.json
}

resource "aws_iam_role_policy_attachment" "preview_run_switch" {
  role       = aws_iam_role.preview.name
  policy_arn = aws_iam_policy.run_switch.arn
}

resource "aws_iam_instance_profile" "preview" {
  name = "FoundryPreview"
  role = aws_iam_role.preview.name
}

resource "aws_iam_instance_profile" "run" {
  name = "FoundryRun"
  role = aws_iam_role.run.name
}

# Secrets live in Parameter Store under /foundry/. AmazonSSMManagedInstanceCore already
# allows ssm:GetParameter* on everything, so "each instance reads only its own" needs an
# explicit Deny (a Deny beats any Allow). /foundry/shared/ (the runner token) is open to both.
#   /foundry/preview/*  the login (passphrase hash, TOTP secret): the agent on the run
#                       instance must never read it
#   /foundry/run/*      the Vertex key and the Claude token: the internet-facing preview
#                       must never hold them
data "aws_caller_identity" "me" {}

locals {
  parameter_arn = "arn:aws:ssm:${var.region}:${data.aws_caller_identity.me.account_id}:parameter"
}

data "aws_iam_policy_document" "run_denied" {
  statement {
    sid       = "NotThePreviewsSecrets"
    effect    = "Deny"
    actions   = ["ssm:GetParameter", "ssm:GetParameters", "ssm:GetParametersByPath", "ssm:DescribeParameters"]
    resources = ["${local.parameter_arn}/foundry/preview/*", "${local.parameter_arn}/foundry/preview"]
  }
}

data "aws_iam_policy_document" "preview_denied" {
  statement {
    sid       = "NotTheRunInstancesSecrets"
    effect    = "Deny"
    actions   = ["ssm:GetParameter", "ssm:GetParameters", "ssm:GetParametersByPath", "ssm:DescribeParameters"]
    resources = ["${local.parameter_arn}/foundry/run/*", "${local.parameter_arn}/foundry/run"]
  }
}

resource "aws_iam_policy" "run_denied" {
  name        = "FoundryRunDenied"
  description = "The foundry run instance cannot read the preview's secrets"
  policy      = data.aws_iam_policy_document.run_denied.json
}

resource "aws_iam_policy" "preview_denied" {
  name        = "FoundryPreviewDenied"
  description = "The foundry preview instance cannot read the run instance's secrets"
  policy      = data.aws_iam_policy_document.preview_denied.json
}

resource "aws_iam_role_policy_attachment" "run_denied" {
  role       = aws_iam_role.run.name
  policy_arn = aws_iam_policy.run_denied.arn
}

resource "aws_iam_role_policy_attachment" "preview_denied" {
  role       = aws_iam_role.preview.name
  policy_arn = aws_iam_policy.preview_denied.arn
}
