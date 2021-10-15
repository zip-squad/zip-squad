variable "bucket_name" {
  default = "react-aws-terraform-github-actions"
  description = "The name of the bucket"
}

variable "aws_region" {
  type = string
  default = "us-west-2"
}