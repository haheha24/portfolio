import { useState, useEffect } from "react";
import type { ReactChild } from "react";
import NavList from "./NavList";
import Socials from "../../reusable/Socials";

interface INavListMapProps {
  isGreaterThan860: boolean;
  isElementVisible: boolean;
}

interface INavListArray {
  styles: { grid: string; fixed: string };
  listName: string | ReactChild;
  isString: boolean;
  endPoint: string;
  navLinkId: string;
  navLinkClass: string;
  navLinkActive: string;
}

const NavListMap = ({
  isGreaterThan860,
  isElementVisible,
}: INavListMapProps) => {
  const [socialContainer, setSocialContainer] = useState<string>(
    "nav-social-container"
  );

  const navListArray: INavListArray[] = [
    {
      styles: { grid: "nav-li item-1", fixed: "nav-li nav-li-fixed" },
      listName: "CreativeAge",
      isString: false,
      endPoint: "/",
      navLinkId: "home",
      navLinkClass: "nav-link nav-linkMain",
      navLinkActive: "nav-linkActive",
    },
    {
      styles: { grid: "nav-li item-2", fixed: "nav-li nav-li-fixed" },
      listName: "About",
      isString: false,
      endPoint: "/about",
      navLinkId: "about",
      navLinkClass: "nav-link",
      navLinkActive: "nav-linkActive",
    },
    {
      styles: { grid: "nav-li item-3", fixed: "nav-li nav-li-fixed" },
      listName: "Projects",
      isString: false,
      endPoint: "/projects",
      navLinkId: "projects",
      navLinkClass: "nav-link",
      navLinkActive: "nav-linkActive",
    },
    {
      styles: { grid: "nav-li item-4", fixed: "nav-li nav-li-fixed" },
      listName: "Contact",
      isString: false,
      endPoint: "/contact",
      navLinkId: "contact",
      navLinkClass: "nav-link",
      navLinkActive: "nav-linkActive",
    },
    {
      styles: { grid: "nav-li item-5", fixed: "nav-li nav-li-fixed" },
      listName: (
        <Socials
          classContainer={socialContainer}
          classIcon="social-icon"
          github={true}
          linkedin={true}
          vertAlign="top"
        />
      ),
      isString: true,
      endPoint: "",
      navLinkId: "",
      navLinkClass: "nav-link",
      navLinkActive: "nav-linkActive",
    },
  ];

  //Manages socials container class when transitioning from the two types of navs
  useEffect(() => {
    //for grid layout
    const isVisible860 = isGreaterThan860 && isElementVisible;
    //for the fixed layout after scrolling
    const isVisibleScrolled860 = isGreaterThan860 && isElementVisible === false;

    if (isVisible860) {
      setSocialContainer("nav-social-container");
    } else if (isVisibleScrolled860) {
      setSocialContainer("nav-social-container-fixed");
    }
  }, [isGreaterThan860, isElementVisible]);

  //handle the styles and return the desired style
  const handleStyles = (match: INavListArray) => {
    //for grid layout
    const isVisible860 = isGreaterThan860 && isElementVisible;
    //for the fixed layout after scrolling
    const isVisibleScrolled860 = isGreaterThan860 && isElementVisible === false;

    if (isVisible860) {
      return match.styles.grid;
    } else if (isVisibleScrolled860) {
      return match.styles.fixed;
    } else {
      return match.styles.fixed;
    }
  };
  return (
    <>
      {navListArray.map((navItem, index) => {
        const {
          listName,
          isString,
          endPoint,
          navLinkId,
          navLinkClass,
          navLinkActive,
        } = navItem;
        return (
          <NavList
            key={index}
            liClass={handleStyles(navItem)}
            listName={listName}
            isString={isString}
            endPoint={endPoint}
            navLinkId={navLinkId}
            navLinkClass={navLinkClass}
            navLinkActive={navLinkActive}
          />
        );
      })}
    </>
  );
};

export default NavListMap;
