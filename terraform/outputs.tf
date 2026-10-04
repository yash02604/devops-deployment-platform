output "instance_id" {
  description = "EC2 instance ID"
  value       = aws_instance.devops_server.id
}

output "public_ip" {
  description = "Public IP address of the DevOps server"
  value       = aws_instance.devops_server.public_ip
}

output "security_group_id" {
  description = "Security group ID"
  value       = aws_security_group.devops_server.id
}