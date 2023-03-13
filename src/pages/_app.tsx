import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { Provider, webLightTheme } from "@cebus/react-components";
import { AppContainer } from "../components/index";

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="description" content="My app description" />
      </Head>
      {isMounted && (
        <Provider theme={webLightTheme}>
          <AppContainer>
            <Component {...pageProps} />
          </AppContainer>
        </Provider>
      )}
    </>
  );
}

export default MyApp;
