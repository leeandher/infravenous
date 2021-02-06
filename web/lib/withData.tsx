import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import withApollo from "next-with-apollo";
import { getDataFromTree } from "@apollo/react-ssr";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/link-error";
import { endpoint, prodEndpoint } from "../config";

const linkErrorHandler = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[🌸 GraphQL Error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }
  if (networkError) {
    console.error(
      `[🌐 Network Error]: ${networkError}. Backend is unreachable. Is it running?`
    );
  }
});

function createClient({ headers, initialState }) {
  const link = ApolloLink.from([
    linkErrorHandler,
    // Creates an HTTPLink capable of file upload
    createUploadLink({
      uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint,
      fetchOptions: {
        credentials: "include",
      },
      headers,
    }),
  ]);
  return new ApolloClient({
    link,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {},
        },
      },
    }).restore(initialState || {}),
  });
}

// @ts-ignore: Conflicting typings
export default withApollo(createClient, { getDataFromTree });
