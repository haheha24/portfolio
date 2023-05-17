"use client";

//libraries
import { useState } from "react";
import _ from "lodash/debounce";
//utils and components
import useHandleNav from "hooks/useHandleNav";
import NavList from "./NavList";
import { StyledNav, StyledNavUl } from "./styles";
import BurgerMenu from "./BurgerMenu";

interface HeaderNavigation {
  viewport: number;
  featureOnly?: boolean;
  fixedOnly?: boolean;
}

export interface IActiveMenu {
  home: boolean;
  about: boolean;
  projects: boolean;
  contact: boolean;
}

const Header = ({
  viewport: viewport,
  featureOnly: featureOnly = false,
  fixedOnly: fixedOnly = false,
}: HeaderNavigation) => {
  const [hidden, setIsHidden] = useState(false);
  const [activeMenu, setActiveMenu] = useState<IActiveMenu>({
    home: true,
    about: false,
    projects: false,
    contact: false,
  });
  const { isElementVisible, isDesktop, navRef } = useHandleNav(
    viewport,
    featureOnly,
    fixedOnly
  );

  return (
    <header id="header">
      <StyledNav id="navbar" ref={navRef} $fixedOnly={fixedOnly}>
        <BurgerMenu isDesktop={isDesktop} setIsHidden={setIsHidden} />
        <StyledNavUl
          id="home"
          animate={{}}
          key={
            isElementVisible && isDesktop ? "StyledNavUl" : "StyledNavUlFixed"
          }
          $fixed={!isElementVisible && isDesktop}
          $hidden={!hidden}
        >
          <NavList
            isFixed={!isElementVisible && isDesktop}
            trackActive={{ activeMenu, setActiveMenu }}
          />
        </StyledNavUl>
      </StyledNav>
    </header>
  );
};

export default Header;
