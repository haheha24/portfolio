"use client";

import { Dispatch, SetStateAction } from "react";
import { StyledNavBurger } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";

interface BurgerMenu {
  isDesktop: boolean;
  setIsHidden: Dispatch<SetStateAction<boolean>>;
}

const BurgerMenu = ({ isDesktop, setIsHidden }: BurgerMenu) => {
  return (
    <>
      {!isDesktop && (
        <StyledNavBurger onClick={() => setIsHidden((state) => !state)}>
          <GiHamburgerMenu
            style={{ width: "auto", height: "3em" /* textAlign: "center" */ }}
          />
        </StyledNavBurger>
      )}
    </>
  );
};

export default BurgerMenu;
