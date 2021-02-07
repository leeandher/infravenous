import Link from "next/link";
import NavLink, { StylishNavLink } from "./NavLink";
import { CURRENT_USER_QUERY, useUser } from "./User";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";

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
    <StylishNav>
      <NavLink href="/">❤</NavLink>
      <div className="link">
        <NavLink href="/about">About</NavLink>
        {!user ? (
          <>
            <NavLink href="/signup">Sign Up</NavLink>
            <NavLink href="/signin">Log In</NavLink>
          </>
        ) : (
          <StylishNavLink onClick={handleSignOut}>Log Out</StylishNavLink>
        )}
      </div>
    </StylishNav>
  );
}

const StylishNav = styled.nav`
  display: flex;
  justify-content: space-between;
  .logo {
  }
  .link {
    display: flex;
    justify-content: flex-end;
  }
`;

export default Nav;
