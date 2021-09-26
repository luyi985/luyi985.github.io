import { GraphQLClient, gql } from "graphql-request";
import { GH_GRAPHQL } from "@/configs";

export const gqlClient = new GraphQLClient(GH_GRAPHQL, {
  headers: {
    authorization: `token ${window.atob(BASE64_ACCESS_TOKEN)}`,
    accept: "application/json",
    "content-type": "application/json",
  },
});

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

gqlClient
  .request(query, { name: "lyi-cli", owner: "luyi985" })
  .then(console.log);
