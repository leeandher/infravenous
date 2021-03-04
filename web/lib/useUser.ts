import { gql, useQuery } from "@apollo/client";
const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    authenticatedItem {
      ... on User {
        id
        email
        name
      }
    }
  }
`;

function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
}

export { useUser, CURRENT_USER_QUERY };
