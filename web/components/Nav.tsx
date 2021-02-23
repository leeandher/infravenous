import Link from "next/link";
import { CURRENT_USER_QUERY, useUser } from "../lib/useUser";
import { gql, useMutation } from "@apollo/client";
import styled from "styled-components";
import { Button } from "./base";
import { useRouter } from "next/router";

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    endSession
  }
`;

function Nav() {
  const user = useUser();
  const router = useRouter();
  console.log(router);

  const [signOut, { error, loading }] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSignOut() {
    await signOut();
  }

  return (
    <>
      <StylishNav>
        {!user ? (
          <Link href="/">
            <img src="/images/logo.png" alt="Infravenous" className="logo" />
          </Link>
        ) : (
          <Link href="/app/overview">
            <img src="/images/logo.png" alt="Infravenous" className="logo" />
          </Link>
        )}
        <div className="items">
          {!user ? (
            <>
              <Link href="/auth/signin">
                <NavButton>Sign In</NavButton>
              </Link>
              <Link href="/auth/signup">
                <NavButton className="primary">Sign Up</NavButton>
              </Link>
            </>
          ) : (
            <>
              <Link href="/app/history">
                <NavLink>History</NavLink>
              </Link>
              <Link href="/app/overview">
                <NavLink>Overview</NavLink>
              </Link>
              <Link href="/app/profile">
                <NavLink>Profile</NavLink>
              </Link>
              <Link href="/">
                <NavButton onClick={handleSignOut}>Log Out</NavButton>
              </Link>
            </>
          )}
        </div>
      </StylishNav>
    </>
  );
}

const StylishNav = styled.nav`
  background: #ffffff;
  width: 100%;
  position: fixed;
  top: 0;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    margin: 0;
    height: 3.5rem;
    margin-left: 3rem;
    cursor: pointer;
  }
  .items {
    display: flex;
    justify-content: flex-end;
  }
`;

const NavButton = styled(Button)`
  margin: 1rem 2rem 1rem 0;
  &.primary {
    background: #ffa69e;
    color: #ffffff;
  }
`;

const NavLink = styled(Button)`
  margin: 1rem 2rem 1rem 0;
  background: transparent;
  border-radius: 0px;
  &:hover {
    box-shadow: 0 0.25rem #ff7e6b;
  }
`;

const Blocker = styled.div`
  margin-top: 6rem;
`;

export default Nav;
