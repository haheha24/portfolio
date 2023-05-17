import { FC, useState } from "react";
import Link from "next/link";
import { Root, Trigger, Content } from "@radix-ui/react-dropdown-menu";
import { Root as NavRoot, Item } from "@radix-ui/react-navigation-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavigationMenuActiveProps } from "./NavigationMenu";

interface BurgerMenuProps {}

const BurgerMenu: FC<BurgerMenuProps> = ({}) => {
  const [active, setActive] = useState<NavigationMenuActiveProps>({
    home: true,
    about: false,
    projects: false,
    contact: false,
  });
  return (
    <Root dir="ltr">
      <Trigger
        className={"md:hidden fixed top-5 left-10 z-50"}
        title="Navigation Menu"
      >
        <GiHamburgerMenu size={"2em"} className="rounded-t-md rounded-b-sm" />
      </Trigger>

      <Content>
        <NavRoot
          id="navbar"
          dir="ltr"
          data-id="Root"
          className="bg-hero bg-100% h-full w-screen overflow-hidden"
        >
          <ul>
            <Item>
              <Link href={"/"} passHref legacyBehavior scroll={false}>
                <a
                  className={""}
                  onClick={() => {
                    setActive({
                      home: true,
                      about: false,
                      projects: false,
                      contact: false,
                    });
                    window.scroll(0, 0);
                  }}
                >
                  The Creative Age
                </a>
              </Link>
            </Item>
            <Item>
              <Link href={"/#about"} passHref legacyBehavior>
                <a
                  className={""}
                  onClick={() => {
                    setActive({
                      home: false,
                      about: true,
                      projects: false,
                      contact: false,
                    });
                  }}
                >
                  About
                </a>
              </Link>
            </Item>
            <Item>
              <Link href={"/#projects"} passHref legacyBehavior>
                <a
                  className={""}
                  onClick={() => {
                    setActive({
                      home: false,
                      about: false,
                      projects: true,
                      contact: false,
                    });
                  }}
                >
                  Projects
                </a>
              </Link>
            </Item>
            <Item>
              <Link href={"/#contact"} passHref legacyBehavior>
                <a
                  className={""}
                  onClick={() => {
                    setActive({
                      home: false,
                      about: false,
                      projects: false,
                      contact: true,
                    });
                  }}
                >
                  Contact
                </a>
              </Link>
            </Item>
            <Item>Social Container</Item>
          </ul>
        </NavRoot>
      </Content>
    </Root>
  );
};

export default BurgerMenu;
