//utils and components
import useHandleNav from "hooks/useHandleNav";
import NavigationMenu from "./NavigationMenu";
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

const Header = ({ viewport: viewport }: HeaderNavigation) => {
  const { isElementVisible, isDesktop, navRef } = useHandleNav(viewport);
  return (
    <header id="header" className="md:mb-16">
      {!isDesktop && <BurgerMenu />}
      {isDesktop && (
        <NavigationMenu
          display={isElementVisible ? "grid" : "fixed"}
          ref={navRef}
        />
      )}
    </header>
  );
};

export default Header;
