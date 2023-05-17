import { Metadata } from "next";
import StyledRegistryWrapper from "./(styles)/styledRegistryWrapper";

interface Layout {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Adrian Cristallo's Portfolio",
  description: "Adrian Cristallo's Portfolio",
  icons: "/favicon.ico",
};

export default function RootLayout({ children }: Layout) {
  return (
    <html>
      <body>
        <StyledRegistryWrapper>{children}</StyledRegistryWrapper>
      </body>
    </html>
  );
}
