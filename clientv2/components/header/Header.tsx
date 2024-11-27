import { useRef } from "react";
//utils and components
import useElementVisibility from "hooks/useElementVisibility";
import NavigationMenu from "./NavigationMenu";
import BurgerMenu from "./BurgerMenu";
import Image from "next/image";
import FeatureImg from "../../public/images/transluscent_waves.jpg";

interface HeaderNavigation {
  viewport: number;
}

export interface IActiveMenu {
  home: boolean;
  about: boolean;
  projects: boolean;
  contact: boolean;
}

const Header = ({ viewport: viewport }: HeaderNavigation) => {
  const featureRef = useRef<HTMLImageElement>(null);
  const { isElementVisible, isDesktop } = useElementVisibility(
    viewport,
    featureRef,
    70
  );

  return (
    <header id="header" className="md:mb28 relative">
      <div
        id="feature-image-container"
        className="w-full relative md:max-h-[62.5rem]"
      >
        <Image
          src={FeatureImg}
          alt="Feature Image"
          priority
          ref={featureRef}
          className="max-h-[1000px]"
        />
        {!isDesktop && (
          <h1 className="w-[80%] leading-[3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 align-baseline text-center text-dynamic-4xl text-purple-primary bg-transparent-85 rounded-xl">
            The Creative Age
          </h1>
        )}
      </div>
      {isDesktop && (
        <NavigationMenu display={isElementVisible ? "grid" : "fixed"} />
      )}
      {!isDesktop && <BurgerMenu />}
    </header>
  );
};

export default Header;
