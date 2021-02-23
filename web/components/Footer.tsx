import Link from "next/link";
import styled from "styled-components";
import { Button } from "./base";

function Footer() {
  return (
    <StylishFooter>
      <span>© 2021 Infravenous. All rights reserved.</span>
      <br />
      <small>
        Images:{` `}
        <a href="https://undraw.co/" target="_blank" rel="noopener noreferrer">
          unDraw
        </a>
        {` `}| Icons:{` `}
        <a
          href="https://fontawesome.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          FontAwesome
        </a>
      </small>
    </StylishFooter>
  );
}

const StylishFooter = styled.footer`
  background: #ffe6e6;
  height: 10%;
  text-align: center;
  padding-top: 2rem;
  a {
    color: #8c5e58;
    &:hover {
      color: #8c5e58;
      text-decoration: underline;
    }
  }
`;

export default Footer;
