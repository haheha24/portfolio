//libraries
import { useEffect, useRef, useContext, useState } from "react";
//contexts
import { MediaQueryContext } from "../../../App";
import { IsHomePage } from "../../../App";
//components, utils and css
import "./navbar.css";
import NavListMap from "./NavListMap";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navMediaQuery = useContext(MediaQueryContext);
  const isHome = useContext(IsHomePage);

  //track if observer has triggered
  const [isElementVisible, setIsElementVisible] = useState(true);

  //refs for navivation animation and burger menu responsiveness
  const navBurgerRef = useRef<HTMLDivElement>(null);
  const navUlRef = useRef<HTMLUListElement>(null);

  //tracks the intersection changes of navBarRef the nav element

  useEffect(() => {
    const currentNavUlRef = navUlRef;
    const options = { root: null, rootMargin: "0px", threshold: 1 };
    //interactionObserver callback
    const navBarObserverCallBack = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      //if isIntersecting is not true, ul will be fixed to top
      if (!entry.isIntersecting) {
        console.log("fixed nav");
        entry.target.className = "nav-ul";
        return setIsElementVisible(false);
      }
      //if isIntersecting is true, ul will be grid
      if (entry.time) {
        console.log("grid nav");
        entry.target.className = "nav-ul-grid";
        return setIsElementVisible(true);
      }
    };
    const navObserver = new IntersectionObserver(
      navBarObserverCallBack,
      options
    );
    if (isHome && currentNavUlRef.current) {
      navObserver.observe(currentNavUlRef.current);
      return () => {
        if (currentNavUlRef.current) {
          navObserver.unobserve(currentNavUlRef.current);
        }
      };
    }
  }, [navUlRef, isHome, isElementVisible]);

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
      <ul className="nav-ul-grid" ref={navUlRef}>
        <NavListMap isElementVisible={isElementVisible} />
      </ul>
    </nav>
  );
};

export default Navbar;
