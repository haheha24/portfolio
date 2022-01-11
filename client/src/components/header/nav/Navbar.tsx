//libraries
import { useEffect, useRef, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import _ from "lodash/debounce"
//contexts
import { MediaQueryContext } from "../../../App";
//css, utils and components
import "./navbar.css";
import NavListMap from "./NavListMap";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const navMediaQuery = useContext(MediaQueryContext);
  /* const isHome = useContext(IsHomePage); */

  //react-router uselocation hook
  const location = useLocation();

  //refs for navivation animation and burger menu responsiveness
  const navBurgerRef = useRef<HTMLDivElement>(null);
  const navUlRef = useRef<HTMLUListElement>(null);

  //track if element is visible on screen
  const [isElementVisible, setIsElementVisible] = useState(true);
  //track scroll position of Y
  /* const [prevScrollPos, setPrevScrollPos] = useState(0); */
  //track if isHome
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    setIsHome(location.pathname === "/");
    const handleScroll = () => {
      window.scrollY < navUlRef.current!.getBoundingClientRect().bottom
        ? setIsElementVisible(true)
        : setIsElementVisible(false);
    };
    window.addEventListener("scroll", _(handleScroll, 100));
    return () =>
      window.removeEventListener("scroll", _(handleScroll, 100));
  }, [location.pathname]);

  //Tracks the window dimensions of the page to display the ul element
  useEffect(() => {
    let newUlRef = navUlRef;
    let newBurgerRef = navBurgerRef;
    if (navMediaQuery.width <= 860) {
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
  }, [navMediaQuery]);

  return (
    <nav id="navbar">
      <div id="nav-div" ref={navBurgerRef}>
        <GiHamburgerMenu
          className="navbar-burger"
          style={{ width: "5em", height: "3em", color: "white" }}
        />
      </div>
      <ul
        className={isHome && isElementVisible ? "nav-ul" : "nav-ul-fixed"}
        ref={navUlRef}
      >
        <NavListMap isHomePage={isHome} isElementVisible={isElementVisible} />
      </ul>
    </nav>
  );
};

export default Navbar;
