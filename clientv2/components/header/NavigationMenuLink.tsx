import NextLink from "next/link";
import { Link } from "@radix-ui/react-navigation-menu";
import { AnchorHTMLAttributes, ReactEventHandler, useState } from "react";

type BaseProps = {
  href: string;
  scroll?: boolean;
  className?: string;
  flex?: boolean;
  onClick?: ReactEventHandler<HTMLAnchorElement>;
  dataActive?: boolean;
  animation?: string;
  onAnimationEnd?: () => void;
  children?: React.ReactNode;
};

export type NavigationMenuLinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>;

const NavigationMenuLink = ({
  href,
  scroll,
  className = "",
  flex = true,
  onPointerDown,
  dataActive,
  animation = "animate-tap transition-transform",
  onAnimationEnd,
  children,
}: NavigationMenuLinkProps) => {
  const [animate, setAnimate] = useState(false);
  const flexProps = "flex items-center justify-center";
  return (
    <NextLink href={href} passHref legacyBehavior scroll={scroll}>
      <Link
        className={`md:px-5 ${
          flex ? flexProps : ""
        } font-medium h-full w-full hover:underline hover:text-purple-primary${
          className ? " " + className : ""
        } ${animate && animation}`}
        data-active={dataActive}
        onPointerDown={(e) => {
          setAnimate(true);
          if (onPointerDown) onPointerDown(e);
        }}
        onAnimationEnd={() => {
          setAnimate(false);
          if (onAnimationEnd) onAnimationEnd();
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default NavigationMenuLink;
