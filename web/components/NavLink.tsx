import Link from "next/link";
import styled from "styled-components";

interface NavLinkProps {
  children: any;
  href: string | object;
}

function NavLink({ children, href }: NavLinkProps) {
  return (
    <Link href={href || "/"}>
      <StylishNavLink>{children}</StylishNavLink>
    </Link>
  );
}

export const StylishNavLink = styled.div`
  padding: 10px 30px;
  margin: 8px 10px;
  font-style: italic;
  font-weight: bold;
  line-height: 1;
  cursor: pointer;
`;

export default NavLink;
