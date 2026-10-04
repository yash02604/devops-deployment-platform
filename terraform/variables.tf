variable "aws_region" {
  description = "AWS region where the infrastructure is deployed"
  type        = string
  default     = "ap-south-1"
}

variable "ami_id" {
  description = "AMI ID for the DevOps server"
  type        = string
  default     = "ami-01a00762f46d584a1"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "c7i-flex.large"
}

variable "server_name" {
  description = "Name tag for the EC2 instance"
  type        = string
  default     = "terraform"
}