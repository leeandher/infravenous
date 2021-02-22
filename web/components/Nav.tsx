import Link from "next/link";
import { CURRENT_USER_QUERY, useUser } from "../lib/useUser";
import { gql, useMutation } from "@apollo/client";
import styled from "styled-components";
import { Button } from "./base";

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    endSession
  }
`;

function Nav() {
  const user = useUser();

  const [signOut, { error, loading }] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSignOut() {
    await signOut();
  }

  return (
    <div>
      <Link href="/">
        <Logo>Infravenous</Logo>
      </Link>
      <>
        {!user ? (
          <>
            <Link href="/access">
              <Button>Log In</Button>
            </Link>
            <Link href="/access">
              <Button type="primary">Sign Up</Button>
            </Link>
          </>
        ) : (
          <Button onClick={handleSignOut}>Log Out</Button>
        )}
      </>
    </div>
  );
}

const Logo = styled.p`
  margin: 0;
  font-weight: bold;
  font-style: italic;
`;

export default Nav;
