"use client";

import ThemeWrapper from "./themeWrapper";
import StyledComponentsRegistry from "./registery";

export default function StyledRegistryWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <ThemeWrapper>{children}</ThemeWrapper>
    </StyledComponentsRegistry>
  );
}
