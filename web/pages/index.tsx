import styled from "styled-components";
import { NavPage } from "../components/Page";
import {
  BaseText,
  Card,
  HeadingText,
  NavHero,
  TitleText,
} from "../components/base";

export default function HomePage() {
  return (
    <NavPage>
      <HomeHero>
        <Card className="title">
          <TitleText className="title-text">
            Biometric authentication done right.
          </TitleText>
        </Card>
        <img
          className="header-image"
          src="/images/secure-login.svg"
          alt="secure login"
        />
      </HomeHero>
      {/* <SectionHero>
        <Card className="item">
          <HeadingText>
            
          </HeadingText>
        </Card>
        <div className="side-image">
          <img src="/images/authentication.svg" alt="secure login" />
        </div>
      </SectionHero> */}
      <SectionHero>
        <Card className="item">
          <HeadingText>1. Register your device</HeadingText>
          <BaseText>
            You're already here! Just make an account, and you'll be able to
            pair the Infravenous device with your account. You'll get access to
            all your security needs right here in the cloud.
          </BaseText>
        </Card>
        <Card className="item">
          <HeadingText>2. Scan your vein</HeadingText>
          <BaseText>
            A few scans of your finger and the device will be able to recognize
            your digits through cuts/scrapes some skin coverings. All completely
            contactless!
          </BaseText>
        </Card>
        <Card className="item">
          <HeadingText>3. Sign-in to your compatible app</HeadingText>
          <BaseText>
            Open your favourite Infravenous compatable app and you'll be able to
            login using your finger veins! Just re-scan your finger and once the
            device authenticates you, you're good to go!
          </BaseText>
        </Card>
      </SectionHero>
    </NavPage>
  );
}

const HomeHero = styled.main`
  background: #ffffff;
  padding-top: 12rem;
  align-items: center;
  flex-direction: column;
  min-height: 100%;
  display: flex;
  .title {
    background: #fff7f8;
    .title-text {
      margin: 0;
    }
    margin-bottom: 3rem;
  }
  .header-image {
    max-height: 500px;
  }
`;

const SectionHero = styled.section`
  display: flex;
  background: #fff7f8;
  padding: 5rem;
  align-items: flex-start;
  justify-content: center;
  flex-flow: wrap;
  .item {
    flex: 1;
    max-width: 500px;
    min-width: 300px;
    margin: 1.5rem;
  }
`;
