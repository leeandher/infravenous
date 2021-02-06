import Head from "next/head";
import Button from "../components/Button";
import Nav from "../components/Nav";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Infravenous</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <StylishHero>
        <StylishTitle>Biometric authentication done right.</StylishTitle>
        <p>
          Compared to conventional fingerprint authentication, vein pattern
          technology is more accurate, requires less maintenance, and is
          unaffected by interference on the skin surface. Infravenous is a
          versatile, compact, and cost-effective biometric authentication
          device. To authenticate users, the device uses infrared light to image
          their finger vein pattern. Our imaging processing pipeline then
          extracts key features from the pattern and uses a machine learning
          model to identify the user. This device can integrate with both
          digital and physical systems, meaning Infravenous’ applications span
          from physical locks to mobile apps. Ultimately, Infravenous makes
          cutting-edge biometric technology easily accessible and affordable.
        </p>
        <Button type="internal" href="/signup">
          Sign Up
        </Button>
        <Button type="internal" href="/signin">
          Sign In
        </Button>
      </StylishHero>
    </div>
  );
}
const StylishHero = styled.main`
  max-width: 1024px;
  margin: 5rem auto;
`;
const StylishTitle = styled.h1`
  font-size: 8rem;
`;
