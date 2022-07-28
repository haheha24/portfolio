import { render, RenderOptions } from "@testing-library/react";
import type { FC, ReactElement, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme.darkTheme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
