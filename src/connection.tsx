import { GraphQLClient, gql } from "graphql-request";
import { GH_GRAPHQL } from "./configs";

const gqlClient = async (query: string, variables: object) => {
  const client = new GraphQLClient(GH_GRAPHQL);
  const headers = {
    authorization: `token ${window.atob(BASE64_ACCESS_TOKEN)}`,
  };
  const data = await client.request(query, variables, headers);
  console.log(JSON.stringify(data, undefined, 2));
};

const query = gql`
  query ($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      name
      createdAt
      id
      homepageUrl
      description
      descriptionHTML
      object(expression: "master:README.md") {
        ... on Blob {
          text
        }
      }
    }
  }
`;

gqlClient(query, { name: "lyi-cli", owner: "luyi985" });
