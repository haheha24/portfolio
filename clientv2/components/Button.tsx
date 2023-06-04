import {
  useState,
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  PointerEventHandler,
  AnimationEventHandler,
} from "react";
import Link from "next/link";

type BaseProps<T> = {
  className?: string;
  children?: ReactNode;
  onPointerDown?: PointerEventHandler<T>;
  onAnimationEnd?: AnimationEventHandler<T>;
  tapAnimation?: boolean;
};

type ButtonProps = BaseProps<HTMLButtonElement> &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof BaseProps<HTMLButtonElement>
  > & {
    as?: "button";
  };

type AnchorProps = BaseProps<HTMLAnchorElement> &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof BaseProps<HTMLAnchorElement>
  > & {
    as: "a";
    href: string;
    scroll?: boolean;
  };

type LinkProps = ButtonProps | AnchorProps;

/**
 * Defaults to a button element. Built in tap animation with tailwind css
 * use the "as" prop to render an anchor element instead.
 *
 * eg. <Button as="a" href="#" />
 */
const Button = (props: LinkProps) => {
  const [tap, setTap] = useState(false);
  if (props.as === "a") {
    const {
      className,
      as,
      href,
      scroll,
      onPointerDown,
      onAnimationEnd,
      tapAnimation = true,
      ...rest
    } = props;
    return (
      <Link href={href} legacyBehavior passHref scroll={scroll}>
        <a
          className={`${tap && "animate-tap"}${
            className ? " " + className : ""
          }`}
          target="_blank"
          rel="noopener noreferrer"
          onPointerDown={(e) => {
            if (tapAnimation) setTap(true);
            if (onPointerDown) onPointerDown(e);
          }}
          onAnimationEnd={(e) => {
            if (tapAnimation) setTap(false);
            if (onAnimationEnd) onAnimationEnd(e);
          }}
          {...rest}
        >
          {props.children}
        </a>
      </Link>
    );
  }

  const {
    className,
    as,
    onPointerDown,
    onAnimationEnd,
    tapAnimation = true,
    ...rest
  } = props;
  return (
    <button
      className={`${tap && "animate-tap"}${className ? " " + className : ""}`}
      onPointerDown={(e) => {
        if (tapAnimation) setTap(true);
        if (onPointerDown) onPointerDown(e);
      }}
      onAnimationEnd={(e) => {
        if (tapAnimation) setTap(false);
        if (onAnimationEnd) onAnimationEnd(e);
      }}
      {...rest}
    />
  );
};

export default Button;
