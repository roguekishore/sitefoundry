output "preview_ip" {
  description = "The preview's Elastic IP"
  value       = aws_eip.preview.public_ip
}

output "dns_records" {
  description = "Add these by hand in Netlify DNS"
  value = [
    "A  ${var.domain}       ${aws_eip.preview.public_ip}",
    "A  live.${var.domain}  ${aws_eip.preview.public_ip}",
  ]
}

output "preview_instance_id" {
  value = aws_instance.preview.id
}

output "run_instance_id" {
  description = "FOUNDRY_RUN_INSTANCE_ID in the preview's /etc/foundry/server.env"
  value       = aws_instance.run.id
}

output "private_ips" {
  description = "FOUNDRY_SERVER_URL uses the preview's; FOUNDRY_LIVE_TARGET the run's"
  value = {
    preview = aws_instance.preview.private_ip
    run     = aws_instance.run.private_ip
  }
}
