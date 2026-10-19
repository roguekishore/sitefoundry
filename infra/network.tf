# A VPC of its own: one public subnet, an internet gateway, no NAT, no peering
# (jk's other VPC is peered to clasher's database; this one stays apart).

locals {
  server_port  = 4401 # the foundry server on the preview (Caddy in front of it for the internet)
  gallery_port = 4410 # a run's live gallery on the run instance
}

resource "aws_vpc" "foundry" {
  cidr_block           = var.vpc_cidr
  enable_dns_support   = true
  enable_dns_hostnames = true
  tags                 = { Name = "foundry" }
}

resource "aws_internet_gateway" "foundry" {
  vpc_id = aws_vpc.foundry.id
  tags   = { Name = "foundry" }
}

resource "aws_subnet" "public" {
  vpc_id            = aws_vpc.foundry.id
  cidr_block        = var.subnet_cidr
  availability_zone = var.zone
  tags              = { Name = "foundry-public" }
}

resource "aws_route_table" "public" {
  vpc_id = aws_vpc.foundry.id
  tags   = { Name = "foundry-public" }

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.foundry.id
  }
}

resource "aws_route_table_association" "public" {
  subnet_id      = aws_subnet.public.id
  route_table_id = aws_route_table.public.id
}

# Security groups. No SSH anywhere: access is SSM. Outbound is open on both (git,
# packages, Let's Encrypt, the EC2 API, Vertex, Anthropic).

resource "aws_security_group" "preview" {
  name        = "foundry-preview"
  description = "foundry preview: web from anywhere, the server port from the run instance"
  vpc_id      = aws_vpc.foundry.id
  tags        = { Name = "foundry-preview" }
}

resource "aws_security_group" "run" {
  name        = "foundry-run"
  description = "foundry run: the live gallery from the preview instance only"
  vpc_id      = aws_vpc.foundry.id
  tags        = { Name = "foundry-run" }
}

resource "aws_vpc_security_group_ingress_rule" "preview_http" {
  security_group_id = aws_security_group.preview.id
  description       = "Caddy: HTTP (redirect and ACME)"
  ip_protocol       = "tcp"
  from_port         = 80
  to_port           = 80
  cidr_ipv4         = "0.0.0.0/0"
}

resource "aws_vpc_security_group_ingress_rule" "preview_https" {
  security_group_id = aws_security_group.preview.id
  description       = "Caddy: HTTPS"
  ip_protocol       = "tcp"
  from_port         = 443
  to_port           = 443
  cidr_ipv4         = "0.0.0.0/0"
}

resource "aws_vpc_security_group_ingress_rule" "preview_server_from_run" {
  security_group_id            = aws_security_group.preview.id
  description                  = "the runner calls the foundry server"
  ip_protocol                  = "tcp"
  from_port                    = local.server_port
  to_port                      = local.server_port
  referenced_security_group_id = aws_security_group.run.id
}

resource "aws_vpc_security_group_ingress_rule" "run_gallery_from_preview" {
  security_group_id            = aws_security_group.run.id
  description                  = "the server proxies live.<domain> to the run's gallery"
  ip_protocol                  = "tcp"
  from_port                    = local.gallery_port
  to_port                      = local.gallery_port
  referenced_security_group_id = aws_security_group.preview.id
}

resource "aws_vpc_security_group_egress_rule" "preview_all" {
  security_group_id = aws_security_group.preview.id
  ip_protocol       = "-1"
  cidr_ipv4         = "0.0.0.0/0"
}

resource "aws_vpc_security_group_egress_rule" "run_all" {
  security_group_id = aws_security_group.run.id
  ip_protocol       = "-1"
  cidr_ipv4         = "0.0.0.0/0"
}
