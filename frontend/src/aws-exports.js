import Amplify from "aws-amplify";

const awsConfig = {
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_itRijY08z",
    userPoolWebClientId: "1cljes4s7rha2jgrinupv69irb",
  },
  Storage: {
    bucket: "my-react-app-bucket-631737274131",
    region: "us-east-1",
  },
  API: {
    endpoints: [
      {
        name: "GraphQLAPI",
        endpoint: "https://pvb4mws2vvfdhfdygu2ss3pz3i.appsync-api.us-east-1.amazonaws.com/graphql",
      },
    ],
  },
};

Amplify.configure(awsConfig);