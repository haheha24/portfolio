import { useState } from "react";
import * as RadixDropDownMenu from "@radix-ui/react-dropdown-menu";
import * as RadixNavMenu from "@radix-ui/react-navigation-menu";
import NavigationMenuLink from "./NavigationMenuLink";
import { NavigationMenuActiveProps } from "./NavigationMenu";
import { GiHamburgerMenu } from "react-icons/gi";

const BurgerMenu = () => {
  const [active, setActive] = useState<NavigationMenuActiveProps>({
    home: true,
    about: false,
    projects: false,
    contact: false,
  });
  const ItemProps = "w-full odd:bg-transparent-85 ";
  const LinkProps =
    "flex relative hover:text-purple-primary data-[active=true]:text-purple-primary data-[active=false]:text-white";
  const LinkTextProps = "block w-full py-5 pl-1";
  const [tap, setTap] = useState(false);
  return (
    <RadixDropDownMenu.Root>
      <RadixDropDownMenu.Trigger
        onPointerDown={() => {
          setTap(true);
        }}
        onAnimationEnd={() => {
          setTap(false);
        }}
        className={`fixed bottom-10 right-10 z-30 pointer-events-auto ${
          tap && "animate-tap transition-[scale]"
        }`}
      >
        <GiHamburgerMenu
          size={45}
          className="border-2 border-st border-purple-tertiary rounded-sm text-purple-primary bg-transparent-85"
        />
      </RadixDropDownMenu.Trigger>
      <RadixDropDownMenu.Content
        loop
        data-align="start"
        side="left"
        sideOffset={20}
        align="end"
        className="data-[state=open]:animate-openBurgerContent data-[state=closed]:animate-closeBurgerContent transition-transform z-20 sm:overflow-hidden overflow-y-scroll"
      >
        <div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent-85 w-screen h-screen -z-10 pointer-events-none"
          aria-hidden
        ></div>
        <RadixNavMenu.Root
          id="navbar"
          dir="ltr"
          data-orientation="vertical"
          data-id="Navigation-Root"
          className="bg-black-primary p-[5%] rounded-xl"
        >
          <RadixNavMenu.List
            className="text-white w-full h-full"
            data-orientation="vertical"
          >
            <RadixNavMenu.Item className={`${ItemProps}`}>
              <NavigationMenuLink
                href="/"
                scroll={false}
                className={`${LinkProps}`}
                onSelect={() => {
                  setActive({
                    home: true,
                    about: false,
                    projects: false,
                    contact: false,
                  });
                  window.scroll(0, 0);
                }}
                flex={false}
                dataActive={active.home}
              >
                <span className={`${LinkTextProps}`}>The Creative Age</span>
              </NavigationMenuLink>
            </RadixNavMenu.Item>
            <RadixNavMenu.Item className={`${ItemProps}`}>
              <NavigationMenuLink
                href="/#about"
                scroll={false}
                className={`${LinkProps}`}
                onSelect={() => {
                  setActive({
                    home: false,
                    about: true,
                    projects: false,
                    contact: false,
                  });
                }}
                flex={false}
                dataActive={active.about}
              >
                <span className={`${LinkTextProps}`}>About</span>
              </NavigationMenuLink>
            </RadixNavMenu.Item>
            <RadixNavMenu.Item className={`${ItemProps}`}>
              <NavigationMenuLink
                href="/#projects"
                scroll={false}
                className={`${LinkProps}`}
                onSelect={() => {
                  setActive({
                    home: false,
                    about: false,
                    projects: true,
                    contact: false,
                  });
                }}
                flex={false}
                dataActive={active.projects}
              >
                <span className={`${LinkTextProps}`}>Projects</span>
              </NavigationMenuLink>
            </RadixNavMenu.Item>
            <RadixNavMenu.Item className={`${ItemProps}`}>
              <NavigationMenuLink
                href="/#contact"
                scroll={false}
                className={`${LinkProps}`}
                onSelect={() => {
                  setActive({
                    home: false,
                    about: false,
                    projects: false,
                    contact: true,
                  });
                }}
                flex={false}
                dataActive={active.contact}
              >
                <span className={`${LinkTextProps}`}>Contact</span>
              </NavigationMenuLink>
            </RadixNavMenu.Item>
            <RadixNavMenu.Item className={`${ItemProps}`}>
              Social Container
            </RadixNavMenu.Item>
          </RadixNavMenu.List>
        </RadixNavMenu.Root>
      </RadixDropDownMenu.Content>
    </RadixDropDownMenu.Root>
  );
};

export default BurgerMenu;
