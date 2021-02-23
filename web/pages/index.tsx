import styled from "styled-components";
import { NavPage } from "../components/Page";
import { BaseText, NavHero, TitleText } from "../components/base";

export default function HomePage() {
  return (
    <NavPage>
      <HomeHero>
        <TitleText className="title">
          Biometric authentication done right.
        </TitleText>
        <img src="/images/secure-login.svg" alt="secure login" />
      </HomeHero>
    </NavPage>
  );
}

const HomeHero = styled(NavHero)`
  background: #ffffff;
  align-items: flex-start;
  justify-content: center;
  .title {
    text-align: right;
    flex: 1;
    max-width: 300px;
    display: block;
  }
  img {
    flex: 1;
    max-height: 500px;
  }
`;
