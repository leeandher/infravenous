import Head from "next/head";
import Nav from "../components/Nav";
import SignInForm from "../components/SignInForm";

export default function SignInPage() {
  return (
    <div>
      <Head>
        <title>Infravenous</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>Sign In Page</main>
      <SignInForm />
    </div>
  );
}
