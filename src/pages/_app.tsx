import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="description" content="My app description" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
