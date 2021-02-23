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

  const [signOut, { error, loading }] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSignOut() {
    await signOut();
    router.push("/");
  }

  const isAuthenticated = !!user;
  const isInAuthFlow = router.pathname.match(/^\/auth\//gm) !== null;

  return (
    <>
      <StylishNav>
        <Link href="/">
          <img src="/images/logo.png" alt="Infravenous" className="logo" />
        </Link>
        <div className="items">
          {isAuthenticated ? (
            <>
              <Link href="/app/overview">
                <Button className="small simple">Overview</Button>
              </Link>
              <Link href="/app/history">
                <Button className="small simple">History</Button>
              </Link>
              <Link href="/app/profile">
                <Button className="small simple">Profile</Button>
              </Link>
              <Button className="small" onClick={handleSignOut}>
                Log Out
              </Button>
            </>
          ) : !isInAuthFlow ? (
            <>
              <Link href="/about">
                <Button className="small simple">About</Button>
              </Link>
              <Link href="/auth/signin">
                <Button className="small">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="small primary">Sign Up</Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/about">
                <Button className="small simple">About</Button>
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

const Blocker = styled.div`
  margin-top: 6rem;
`;

export default Nav;
