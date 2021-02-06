// @ts-nocheck

import "../styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import withData from "../lib/withData";

function InfravenousApp({ Component, pageProps, apollo: client }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
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
