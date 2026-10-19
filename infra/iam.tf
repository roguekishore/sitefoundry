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
