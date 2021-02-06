import Head from "next/head";
import Nav from "../components/Nav";

export default function SignUpPage() {
  return (
    <div>
      <Head>
        <title>Infravenous</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>SignUp Page</main>
    </div>
  );
}
