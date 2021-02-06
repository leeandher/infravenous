import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import withApollo from "next-with-apollo";
import { getDataFromTree } from "@apollo/react-ssr";
import { onError } from "@apollo/link-error";

function createClient({ headers, initialState }) {
  return new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
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
      }),
    ]),
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
