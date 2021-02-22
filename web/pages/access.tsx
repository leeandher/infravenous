import Head from "next/head";
import Nav from "../components/Nav";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import styled from "styled-components";

export default function SignInPage() {
  return (
    <div>
      <Head>
        <title>Infravenous</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Layout>
        <SignInForm />
        <SignUpForm />
      </Layout>
    </div>
  );
}

const Layout = styled.main`
  display: flex;
  background: #fff7f8;
  padding: 5rem;
  align-items: center;
  justify-content: space-between;
`;
