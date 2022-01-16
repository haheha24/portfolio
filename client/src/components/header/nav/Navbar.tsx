//libraries
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import _ from "lodash/debounce";
//css, utils and components
import "./navbar.css";
import useMediaQuery from "../../../utilities/hooks/useMediaQuery";
import NavListMap from "./NavListMap";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  //react-router uselocation hook
  const location = useLocation();
  const windowDimensions = useMediaQuery();

  //refs for navivation animation and burger menu responsiveness
  const navBurgerRef = useRef<HTMLDivElement>(null);
  const navUlRef = useRef<HTMLUListElement>(null);

  //track if element is visible on screen
  const [isElementVisible, setIsElementVisible] = useState(true);

  //track if on the home page
  //track if the window width is greater than 860 which is the first CSS breakpoint
  const [isGreaterThan860, setIsGreaterThan860] = useState(true);

  useEffect(() => {
    //sets the isHome
    //callback to set the state of isElementVisible. If the bottom of navUlRef is greater than the scrollY, set true else false
    const handleScroll = _(() => {
      window.scrollY < navUlRef.current!.getBoundingClientRect().bottom
        ? setIsElementVisible(true)
        : setIsElementVisible(false);
    }, 100);
    //this checks if the window width is greater than 860 - the first css breakpoint
    //sets the state of isGreaterThan860, which will help with conditionally rendering the ul and li classes in the render
    //also adds the scroll event to the window if the width is greater than 860, else removes it if not.
    if (windowDimensions.width > 860) {
      setIsGreaterThan860(true);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else if (windowDimensions.width < 860) {
      setIsGreaterThan860(false);
      return window.removeEventListener("scroll", handleScroll);
    }
  }, [location.pathname, windowDimensions, isGreaterThan860]);

  //Tracks the window dimensions of the page to display the ul element
  useEffect(() => {
    let newUlRef = navUlRef;
    let newBurgerRef = navBurgerRef;
    if (windowDimensions.width <= 860) {
      newBurgerRef.current?.addEventListener("click", () => {
        newUlRef.current?.classList.toggle("displayBlock");
        return () => newUlRef.current?.classList.toggle("displayBlock");
      });
      return () =>
        newBurgerRef.current?.removeEventListener("click", () => {
          newUlRef.current?.classList.toggle("displayBlock");
          return () => newUlRef.current?.classList.toggle("displayBlock");
        });
    }
  }, [windowDimensions]);

  /**
   * conditionally renders the class of the Ul element. This relies on the state of isHome, isElementVisible and isGreaterThan860
   * @returns "nav-ul" | "nav-ul-fixed"
   */
  const handleUlClass = () => {
    //isVisible860 is met when all 3 states are true
    const isVisible860 = isGreaterThan860 && isElementVisible;
    //isVisibleNot860 is met when all but isGreaterThan860 is true.
    const isVisibleNot860 = isGreaterThan860 === false && isElementVisible;
    if (isVisible860) {
      return "nav-ul";
    } else if (isVisibleNot860) {
      return "nav-ul-fixed";
    } else {
      return "nav-ul-fixed";
    }
  };

  return (
    <nav id="navbar">
      <div id="nav-div" ref={navBurgerRef}>
        <GiHamburgerMenu
          className="navbar-burger"
          style={{ width: "5em", height: "3em", color: "white" }}
        />
      </div>
      {/* <BurgerMenu props={props} ref={navBurgerRef} /> */}
      <ul className={handleUlClass()} ref={navUlRef}>
        <NavListMap
          isElementVisible={isElementVisible}
          isGreaterThan860={isGreaterThan860}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
