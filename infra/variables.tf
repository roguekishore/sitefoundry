variable "credentials" {
  description = <<-EOT
    jk's root credentials, supplied by bootstrap.sh as TF_VAR_credentials. Read from
    ~/Downloads/jk.csv at runtime and never written to disk.
  EOT
  type = object({
    access_key = string
    secret_key = string
  })
  sensitive = true
}

variable "region" {
  type    = string
  default = "ap-south-1"
}

variable "zone" {
  type    = string
  default = "ap-south-1a"
}

variable "domain" {
  description = "The preview's hostname; live.<domain> is the run's live gallery. DNS is in Netlify, by hand."
  type        = string
  default     = "foundry.themaverick.tech"
}

variable "vpc_cidr" {
  type    = string
  default = "10.20.0.0/16"
}

variable "subnet_cidr" {
  type    = string
  default = "10.20.0.0/24"
}

# Fixed private IPs: the runner calls the server at the preview's address, and the
# server proxies live.<domain> to the run instance's gallery.
variable "preview_ip" {
  type    = string
  default = "10.20.0.10"
}

variable "run_ip" {
  type    = string
  default = "10.20.0.20"
}
