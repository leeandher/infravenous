import Link from "next/link";
import styled from "styled-components";
import { Button } from "./base";

function Footer() {
  return (
    <StylishFooter>© 2021 Infravenous. All rights reserved.</StylishFooter>
  );
}

const StylishFooter = styled.footer`
  background: #ffe6e6;
  height: 10%;
  text-align: center;
  padding-top: 2rem;
`;

export default Footer;
