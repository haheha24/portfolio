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
    1
  );

  return (
    <header id="header" className="md:mb-28 relative">
      <div
        id="feature-image-container"
        className="w-full relative md:max-h-[62.5rem]"
      >
        <Image
          src={FeatureImg}
          alt="Feature Image"
          priority
          ref={featureRef}
          style={{ maxHeight: "100vh" }}
        />
        {!isDesktop && (
          <div
            id="heading-bg"
            className="w-[80%] h-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-dynamic-2xl text-center text-purple-primary bg-transparent-85 rounded-xl"
          >
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-dynamic-2xl text-dynamic-lg text-purple-primary">
              The Creative Age
            </h1>
          </div>
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
