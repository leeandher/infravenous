// @ts-nocheck

import "../styles/globals.css";
import "antd/dist/antd.css";

import { ApolloProvider } from "@apollo/client";
import withData from "../lib/withData";
import Head from "next/head";

function InfravenousApp({ Component, pageProps, apollo: client }) {
  return (
    <>
      <Head>
        <title>Infravenous</title>
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

InfravenousApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(InfravenousApp);
