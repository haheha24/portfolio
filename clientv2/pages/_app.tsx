import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Layout from "components/layout";

//Mocks
if (process.env.NEXT_PUBLIC_API_MOCKING === "true") {
  import("../mocks").then(({ setupMocks }) => {
    setupMocks();
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Adrian Cristallo%apos;s Portfolio</title>
        <meta name="description" content="Adrian Cristallo's Portfolio App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
