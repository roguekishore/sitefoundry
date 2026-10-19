# Everything here lives in jk (400730734202). Credentials arrive from bootstrap.sh via
# TF_VAR_credentials and exist only for the life of the process.

provider "aws" {
  region              = var.region
  access_key          = var.credentials.access_key
  secret_key          = var.credentials.secret_key
  allowed_account_ids = ["400730734202"]

  # warden finds the foundry instances by this tag, in whatever account they live.
  default_tags {
    tags = {
      "warden:app" = "foundry"
    }
  }
}
