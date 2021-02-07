import Head from "next/head";
import { Button, Typography } from "antd";
import Nav from "../components/Nav";
import styled from "styled-components";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Infravenous</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <Typography.Title>
          Biometric authentication done right.
        </Typography.Title>
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
      </main>
    </div>
  );
}
