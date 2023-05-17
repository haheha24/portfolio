import { useState, forwardRef, useEffect } from "react";
import Link from "next/link";
import { Root, Item, Indicator } from "@radix-ui/react-navigation-menu";

type NavigationMenuProps = {
  display: "grid" | "fixed";
};
export type NavigationMenuActiveProps = {
  home: boolean;
  about: boolean;
  projects: boolean;
  contact: boolean;
};

const NavigationMenu = forwardRef<HTMLElement, NavigationMenuProps>(
  ({ display }, ref) => {
    const [active, setActive] = useState<NavigationMenuActiveProps>({
      home: true,
      about: false,
      projects: false,
      contact: false,
    });
    const [dropDown, setDropDown] = useState(false);
    const [tap, setTap] = useState({
      home: false,
      about: false,
      projects: false,
      contact: false,
    });

    useEffect(() => {
      if (display === "fixed") {
        setDropDown(true);
      }
    }, []);

    const ListProps = {
      grid: "will-change-transform md:grid md:grid-cols-nav md:grid-rows-nav md:gap-y-2.5 md:gap-x-5 md:justify-center md:w-full md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:bg-transparent",
      fixed:
        "w-screen md:flex md:justify-center md:fixed md:bg-black-primary md:shadow-lg",
    };
    const ItemProps = {
      grid: "md:flex md:justify-center md:items-center md:text-center md:bg-transparent-85 md:rounded-xl md:text-dynamic-lg",
      fixed:
        "md:py-5 md:text-center md:bg-transparent md:rounded-0 md:text-dynamic-base",
    };
    const activeBtn = {
      active: "text-purple-primary",
      inActive: "text-white",
    };
    const AnchorProps =
      "md:px-5 flex items-center justify-center font-medium h-full w-full hover:underline hover:text-purple-primary";
    return (
      <Root
        id="navbar"
        dir="ltr"
        data-id="Root"
        className={`hidden fixed md:block md:static md:bg-hero md:bg-100% md:max-h-[62.5rem] md:h-screen overflow-hidden`}
        onAnimationEnd={() => setDropDown(false)}
        ref={ref}
      >
        <ul
          id="navbarlist"
          aria-orientation="horizontal"
          data-orientation="horizontal"
          dir="ltr"
          className={`${ListProps[display]}`}
        >
          <Item
            className={`block ${
              active.home ? activeBtn.active : activeBtn.inActive
            } rounded-0 ${
              ItemProps[display]
            } md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-2`}
            key={"the creative age"}
          >
            <Link href={"/"} passHref legacyBehavior scroll={false}>
              <a
                className={`${AnchorProps} ${
                  display === "grid" ? "md:text-dynamic-2xl" : ""
                } ${tap.home && "animate-tap transition-all"}`}
                onClick={() => {
                  setActive({
                    home: true,
                    about: false,
                    projects: false,
                    contact: false,
                  });
                  setTap((state) => ({ ...state, home: true }));
                  window.scroll(0, 0);
                }}
                onAnimationEnd={() =>
                  setTap((state) => ({ ...state, home: false }))
                }
              >
                The Creative Age
              </a>
            </Link>
          </Item>
          <Item
            className={`block ${
              active.about ? activeBtn.active : activeBtn.inActive
            } rounded-0 ${
              ItemProps[display]
            } md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3`}
            key={"about"}
          >
            <Link href={"/#about"} passHref legacyBehavior scroll={false}>
              <a
                className={`${AnchorProps} ${
                  tap.about && "animate-tap transition-all"
                }`}
                onClick={() => {
                  setActive({
                    home: false,
                    about: true,
                    projects: false,
                    contact: false,
                  });
                  setTap((state) => ({ ...state, about: true }));
                }}
                onAnimationEnd={() =>
                  setTap((state) => ({ ...state, about: false }))
                }
              >
                About
              </a>
            </Link>
          </Item>
          <Item
            className={
              "block " +
              (active.projects ? activeBtn.active : activeBtn.inActive) +
              " rounded-0 " +
              ItemProps[display] +
              " md:col-start-3 md:col-end-5 md:row-start-2 md:row-end-3"
            }
            key={"projects"}
          >
            <Link href={"/#projects"} passHref legacyBehavior scroll={false}>
              <a
                className={`${AnchorProps} ${
                  tap.projects && "animate-tap transition-all"
                }`}
                onClick={() => {
                  setActive({
                    home: false,
                    about: false,
                    projects: true,
                    contact: false,
                  });
                  setTap((state) => ({ ...state, projects: true }));
                }}
                onAnimationEnd={() =>
                  setTap((state) => ({ ...state, projects: false }))
                }
              >
                Projects
              </a>
            </Link>
          </Item>
          <Item
            className={
              "block " +
              (active.contact ? activeBtn.active : activeBtn.inActive) +
              " rounded-0 " +
              ItemProps[display] +
              " md:col-start-5 md:col-end-7 md:row-start-2 md:row-end-3"
            }
            key={"contact"}
          >
            <Link href={"/#contact"} passHref legacyBehavior scroll={false}>
              <a
                className={`${AnchorProps} ${
                  tap.contact && "animate-tap transition-all"
                }`}
                onClick={() => {
                  setActive({
                    home: false,
                    about: false,
                    projects: false,
                    contact: true,
                  });
                  setTap((state) => ({ ...state, contact: true }));
                }}
                onAnimationEnd={() =>
                  setTap((state) => ({ ...state, contact: false }))
                }
              >
                Contact
              </a>
            </Link>
          </Item>
          <Item
            className={
              "block static right-0 rounded-0 " +
              ItemProps[display] +
              " md:col-start-3 md:col-end-5 md:row-start-3 md:row-end-4 " +
              (display === "fixed" ? "md:ml-auto md:mr-20" : "md:relative")
            }
            key={"socials"}
          >
            Socials Container
          </Item>
        </ul>
        <Indicator />
      </Root>
    );
  }
);

export default NavigationMenu;
