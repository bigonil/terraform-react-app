resource "aws_s3_bucket" "app_bucket" {
  bucket = "my-react-app-bucket-631737274131"
}

resource "aws_cognito_user_pool" "user_pool" {
  name = "my-react-user-pool-631737274131"
}

resource "aws_cognito_user_pool_client" "app_client" {
  name         = "my-app-client-631737274131"
  user_pool_id = aws_cognito_user_pool.user_pool.id
}

resource "aws_appsync_graphql_api" "graphql_api" {
  name                = "myGraphQLAPI-631737274131"
  authentication_type = "AMAZON_COGNITO_USER_POOLS"

  user_pool_config {
    user_pool_id   = aws_cognito_user_pool.user_pool.id
    default_action = "ALLOW"
  }
}
