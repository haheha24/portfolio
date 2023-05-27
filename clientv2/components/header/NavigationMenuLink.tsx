import NextLink from "next/link";
import { Link, NavigationMenuLinkProps } from "@radix-ui/react-navigation-menu";
import { useState, PointerEventHandler, AnimationEventHandler } from "react";

type BaseProps = {
  href: string;
  scroll?: boolean;
  className?: string;
  flex?: boolean;
  onPointerDown?: PointerEventHandler;
  onAnimationEnd?: AnimationEventHandler;
  dataActive?: boolean;
  animation?: string;
  children?: React.ReactNode;
};

export type NavMenuLinkProps = BaseProps &
  Omit<NavigationMenuLinkProps, keyof BaseProps>;

const NavigationMenuLink = ({
  href,
  scroll,
  className = "",
  flex = true,
  onPointerDown,
  onAnimationEnd,
  dataActive,
  animation = "animate-tap transition-transform",
  children,
  ...props
}: NavMenuLinkProps) => {
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
        onAnimationEnd={(e) => {
          setAnimate(false);
          if (onAnimationEnd) onAnimationEnd(e);
        }}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default NavigationMenuLink;
