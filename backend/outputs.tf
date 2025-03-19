output "user_pool_id" {
  value = aws_cognito_user_pool.user_pool.id
}

output "s3_bucket_name" {
  value = aws_s3_bucket.app_bucket.id
}

output "graphql_api_url" {
  value = aws_appsync_graphql_api.graphql_api.uris["GRAPHQL"]
}