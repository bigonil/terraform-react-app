import Amplify from "aws-amplify";

const awsConfig = {
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_XXXXXXXXX",
    userPoolWebClientId: "XXXXXXXXXXXXXXXXXXXX",
  },
  Storage: {
    bucket: "my-react-app-bucket",
    region: "us-east-1",
  },
  API: {
    endpoints: [
      {
        name: "GraphQLAPI",
        endpoint: "https://XXXXXXXXXXXX.appsync-api.us-east-1.amazonaws.com/graphql",
      },
    ],
  },
};

Amplify.configure(awsConfig);