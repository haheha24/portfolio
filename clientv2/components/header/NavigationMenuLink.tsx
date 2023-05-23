import NextLink from "next/link";
import { Link as NavLink } from "@radix-ui/react-navigation-menu";
import { ComponentPropsWithoutRef, useState } from "react";

type NavigationMenuLinkProps = {
  href: string;
  scroll?: boolean;
  className?: string;
  flex?: boolean;
  onSelect?: () => void;
  dataActive?: boolean;
  animation?: string;
  onAnimationEnd?: () => void;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"a">;

const NavigationMenuLink = ({
  href,
  scroll,
  className = "",
  flex = true,
  onSelect,
  dataActive,
  animation = "animate-tap transition-transform",
  onAnimationEnd,
  children,
}: NavigationMenuLinkProps) => {
  const [animate, setAnimate] = useState(false);
  const flexProps = "flex items-center justify-center";
  return (
    <NextLink href={href} passHref legacyBehavior scroll={scroll}>
      <NavLink
        className={`${className} md:px-5 ${
          flex ? flexProps : ""
        } font-medium h-full w-full hover:underline hover:text-purple-primary ${
          animate && animation
        }`}
        data-active={dataActive}
        onSelect={() => {
          setAnimate(true);
          if (onSelect) onSelect();
        }}
        onAnimationEnd={() => {
          setAnimate(false);
          if (onAnimationEnd) onAnimationEnd();
        }}
      >
        {children}
      </NavLink>
    </NextLink>
  );
};

export default NavigationMenuLink;
