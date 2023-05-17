"use client";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globals";
import { theme } from "./theme";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme.DarkTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
