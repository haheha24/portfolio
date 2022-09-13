import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";

//Mocks
if (process.env.NEXT_PUBLIC_API_MOCKING === "true") {
  import("../mocks").then(({ setupMocks }) => {
    setupMocks();
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme.darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
