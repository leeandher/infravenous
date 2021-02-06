import Link from "next/link";
import NavLink from "./NavLink";
import { useUser } from "./User";
import styled from "styled-components";

function Nav() {
  const user = useUser();
  console.log(user);
  return (
    <StylishNav>
      <NavLink href="/">❤</NavLink>
      <div className="link">
        <NavLink href="/about">About</NavLink>
        <NavLink href="/signup">Sign Up</NavLink>
        <NavLink href="/signin">Log In</NavLink>
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
