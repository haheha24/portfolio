import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme.darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
