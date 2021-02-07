import Head from "next/head";
import Nav from "../components/Nav";
import SignUpForm from "../components/SignUpForm";

export default function SignUpPage() {
  return (
    <div>
      <Head>
        <title>Infravenous</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <h2>Sign Up</h2>
        <SignUpForm />
      </main>
    </div>
  );
}
