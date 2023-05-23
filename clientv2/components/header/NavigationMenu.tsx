import { useState, forwardRef } from "react";
import { Root, Item, Indicator } from "@radix-ui/react-navigation-menu";
import NavigationMenuLink from "./NavigationMenuLink";

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

    const ListProps = {
      grid: "will-change-transform md:grid md:grid-cols-nav md:grid-rows-nav md:gap-y-2.5 md:gap-x-2.5 md:justify-center md:w-full md:bg-transparent",
      fixed:
        "data-[grid=false]:animate-menuSlideDown w-screen md:flex md:fixed md:bg-black-primary md:shadow-lg",
    };
    const ItemProps = {
      general: {
        grid: "block rounded-0",
        fixed: "block rounded-0",
      },
      one: {
        grid: "data-[grid=true]:animate-menuSlideDown-itemone md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-2 md:mx-5 md:flex md:justify-center md:items-center md:text-center md:bg-transparent-85 md:rounded-xl lg:text-dynamic-xl md:text-dynamic-lg",
        fixed:
          "md:py-5 md: md:text-center md:bg-transparent md:rounded-0 3xl:text-dynamic-lg lg:text-dynamic-base",
      },
      two: {
        grid: "data-[grid=true]:animate-menuSlideDown-itemtwo md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3 md:mx-5 md:flex md:justify-center md:items-center md:text-center md:bg-transparent-85 md:rounded-xl lg:text-dynamic-xl md:text-dynamic-lg",
        fixed:
          "md:py-5 md: md:text-center md:bg-transparent md:rounded-0 3xl:text-dynamic-lg lg:text-dynamic-base",
      },
      three: {
        grid: "data-[grid=true]:animate-menuSlideDown-itemthree md:col-start-3 md:col-end-5 md:row-start-2 md:row-end-3 md:mx-5 md:flex md:justify-center md:items-center md:text-center md:bg-transparent-85 md:rounded-xl lg:text-dynamic-xl md:text-dynamic-lg",
        fixed:
          "md:py-5 md: md:text-center md:bg-transparent md:rounded-0 3xl:text-dynamic-lg lg:text-dynamic-base",
      },
      four: {
        grid: "data-[grid=true]:animate-menuSlideDown-itemfour md:col-start-5 md:col-end-7 md:row-start-2 md:row-end-3 md:mx-5 md:flex md:justify-center md:items-center md:text-center md:bg-transparent-85 md:rounded-xl lg:text-dynamic-xl md:text-dynamic-lg",
        fixed:
          "md:py-5 md: md:text-center md:bg-transparent md:rounded-0 3xl:text-dynamic-lg lg:text-dynamic-base",
      },
      five: {
        grid: "data-[grid=true]:animate-menuSlideDown-itemfive md:col-start-3 md:col-end-5 md:row-start-3 md:row-end-4 md:mx-5 md:flex md:justify-center md:items-center md:text-center md:bg-transparent-85 md:rounded-xl lg:text-dynamic-xl md:text-dynamic-lg",
        fixed:
          "md:py-5 md: md:text-center md:bg-transparent md:rounded-0 3xl:text-dynamic-lg lg:text-dynamic-base",
      },
    };
    const LinkProps = {
      grid: "py-10 data-[active=true]:text-purple-primary text-white",
      fixed: "md:py-0 data-[active=true]:text-purple-primary text-white",
    };
    return (
      <Root
        id="navbar"
        dir="ltr"
        data-id="Root"
        className="md:block data-[grid=true]:md:absolute data-[grid=true]:top-1/2 data-[grid=true]:left-1/2 data-[grid=true]:md:-translate-x-1/2 data-[grid=true]:md:-translate-y-1/2 w-full data-[grid=false]:md:fixed data-[grid=false]:md:top-0 data-[grid=false]:md:left-0 data-[grid=false]:md:transform-none"
        ref={ref}
        data-grid={display === "grid" ? true : false}
      >
        <ul
          id="navbarlist"
          aria-orientation="horizontal"
          data-orientation="horizontal"
          dir="ltr"
          data-grid={display === "grid" ? true : false}
          className={`${ListProps[display]}`}
        >
          <Item
            id="site-title"
            className={`${ItemProps.general[display]} ${ItemProps.one[display]}`}
            key={"the creative age"}
            data-grid={display === "grid" ? true : false}
          >
            <NavigationMenuLink
              href="/"
              scroll={false}
              className={`${LinkProps[display]} ${
                display === "grid" ? "md:text-dynamic-2xl" : ""
              }`}
              onSelect={() => {
                setActive({
                  home: true,
                  about: false,
                  projects: false,
                  contact: false,
                });
                window.scroll(0, 0);
              }}
              dataActive={active.home}
            >
              <h1>The Creative Age</h1>
            </NavigationMenuLink>
          </Item>
          <Item
            className={`${ItemProps.general[display]} ${ItemProps.two[display]}`}
            key={"about"}
            data-grid={display === "grid" ? true : false}
          >
            <NavigationMenuLink
              href="/#about"
              scroll={false}
              className={`${LinkProps[display]}`}
              onSelect={() => {
                setActive({
                  home: false,
                  about: true,
                  projects: false,
                  contact: false,
                });
              }}
              dataActive={active.about}
            >
              About
            </NavigationMenuLink>
          </Item>
          <Item
            className={`${ItemProps.general[display]} ${ItemProps.three[display]}`}
            key={"projects"}
            data-grid={display === "grid" ? true : false}
          >
            <NavigationMenuLink
              href="/#projects"
              scroll={false}
              className={`${LinkProps[display]}`}
              onSelect={() => {
                setActive({
                  home: false,
                  about: false,
                  projects: true,
                  contact: false,
                });
              }}
              dataActive={active.projects}
            >
              Projects
            </NavigationMenuLink>
          </Item>
          <Item
            className={`${ItemProps.general[display]} ${ItemProps.four[display]}`}
            key={"contact"}
            data-grid={display === "grid" ? true : false}
          >
            <NavigationMenuLink
              href="/#contact"
              scroll={false}
              className={`${LinkProps[display]}`}
              onSelect={() => {
                setActive({
                  home: false,
                  about: false,
                  projects: false,
                  contact: true,
                });
              }}
              dataActive={active.contact}
            >
              Contact
            </NavigationMenuLink>
          </Item>
          <Item
            className={`${ItemProps.general[display]} ${
              ItemProps.five[display]
            } ${
              display === "fixed"
                ? "md:static md:right-0 md:ml-auto md:mr-20"
                : "md:relative"
            }`}
            data-grid={display === "grid" ? true : false}
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
