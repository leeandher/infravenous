import Nav from "./Nav";
import Footer from "./Footer";
import styled from "styled-components";

function NavPage({ children }) {
  return (
    <BasePage>
      <Nav />
      {children}
      <Footer />
    </BasePage>
  );
}

function NoNavPage({ children }) {
  return (
    <BasePage>
      {children}
      <Footer />
    </BasePage>
  );
}

const BasePage = styled.div`
  height: 100%;
`;

export { NavPage, NoNavPage };
