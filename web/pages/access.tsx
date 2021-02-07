import Head from "next/head";
import Nav from "../components/Nav";
import { Layout, Row } from "antd";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

export default function SignInPage() {
  return (
    <div>
      <Head>
        <title>Infravenous</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <Layout>
          <Row justify="space-around" align="top">
            <SignInForm />
            <SignUpForm />
          </Row>
        </Layout>
      </main>
    </div>
  );
}
