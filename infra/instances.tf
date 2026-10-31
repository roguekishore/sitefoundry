# Amazon Linux 2023, arm64 (Graviton). The AMI is read once: a later AMI release must
# not replace an instance, so ami and user_data are ignored after creation.
# Provisioning is not here: it is step D, scripts run over SSM.

data "aws_ssm_parameter" "al2023_arm64" {
  name = "/aws/service/ami-amazon-linux-latest/al2023-ami-kernel-default-arm64"
}

# Always on: Caddy, the foundry server, the built gallery, the runs database.
resource "aws_instance" "preview" {
  ami                         = data.aws_ssm_parameter.al2023_arm64.value
  instance_type               = "t4g.small"
  subnet_id                   = aws_subnet.public.id
  private_ip                  = var.preview_ip
  associate_public_ip_address = true # replaced by the Elastic IP once it is attached
  vpc_security_group_ids      = [aws_security_group.preview.id]
  iam_instance_profile        = aws_iam_instance_profile.preview.name

  metadata_options {
    http_tokens = "required" # IMDSv2 only
  }

  root_block_device {
    volume_type = "gp3"
    volume_size = 20
    encrypted   = true
    tags        = { Name = "foundry-preview", "warden:app" = "foundry" }
  }

  # Both units ship here (`./ops ship` in sitefoundry and in sitefoundry-vault).
  tags = { Name = "foundry-preview", "deploy-foundry" = "true", "deploy-foundry-vault" = "true" }

  lifecycle {
    ignore_changes = [ami, user_data]
  }
}

# On only while there is work: the server starts it when a run is queued and stops it
# when idle; the runner shuts it down itself as a backstop. Shutdown means stop, never
# terminate. No Elastic IP: an auto-assigned public address for outbound traffic, and
# nothing reaches it from the internet.
#
# Terraform does not manage its on/off state, so a plan never fights the server's switch.
# It is running when created (step D provisions it then).
resource "aws_instance" "run" {
  ami                                  = data.aws_ssm_parameter.al2023_arm64.value
  instance_type                        = "m7g.large"
  subnet_id                            = aws_subnet.public.id
  private_ip                           = var.run_ip
  associate_public_ip_address          = true
  vpc_security_group_ids               = [aws_security_group.run.id]
  iam_instance_profile                 = aws_iam_instance_profile.run.name
  instance_initiated_shutdown_behavior = "stop"

  metadata_options {
    http_tokens = "required"
  }

  root_block_device {
    volume_type = "gp3"
    volume_size = 40
    encrypted   = true
    tags        = { Name = "foundry-run", "warden:app" = "foundry" }
  }

  # Never shipped to: it switches to the live release at boot (D12).
  tags = { Name = "foundry-run", "deploy-foundry" = "boot" }

  lifecycle {
    # The public IP is released while the instance is stopped, so Terraform would read
    # it as false and want to replace the instance.
    ignore_changes = [ami, user_data, associate_public_ip_address]
  }
}

resource "aws_eip" "preview" {
  domain = "vpc"
  tags   = { Name = "foundry-preview" }

  depends_on = [aws_internet_gateway.foundry]
}

resource "aws_eip_association" "preview" {
  instance_id   = aws_instance.preview.id
  allocation_id = aws_eip.preview.id
}
