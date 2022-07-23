//libraries
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import _ from "lodash/debounce";
//css, utils and components
import "./header.css";
import useMediaQuery from "../../hooks/useMediaQuery";
import NavListMap from "./NavListMap";
import { GiHamburgerMenu } from "react-icons/gi";
import imgFeature from "../../images/transluscent_waves.jpg";

const Header = () => {
  const location = useLocation();
  const windowDimensions = useMediaQuery();
  const [isElementVisible, setIsElementVisible] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [menuClass, setMenuClass] = useState("nav-ul");
  const [isGreaterThan860, setIsGreaterThan860] = useState(true);

  //refs for navivation animation and burger menu responsiveness
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    //track window dimension and set isGreaterThan860. This prevents an unncessary eventlistener in mobile view.
    if (windowDimensions.width > 860) {
      //callback to set the state of isElementVisible. If the bottom of navUlRef is greater than the scrollY, set true else false
      const handleScroll = _(() => {
        if (window.scrollY < navRef.current!.getBoundingClientRect().bottom) {
          setIsElementVisible(true);
        }
        if (window.scrollY > navRef.current!.getBoundingClientRect().bottom) {
          setIsElementVisible(false);
        }
      }, 100);

      setIsGreaterThan860(true);

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsGreaterThan860(false);
    }
  }, [location.pathname, windowDimensions, isGreaterThan860]);

  useEffect(() => {
    //controls the class for the ul element
    if (isGreaterThan860) {
      //desktop class handling
      if (isElementVisible) {
        setMenuClass("nav-ul");
      } else {
        setMenuClass("nav-ul-fixed");
      }
    } else {
      //Mobile class handling
      if (showMenu === false) {
        setMenuClass("nav-ul-fixed");
      } else {
        setMenuClass("nav-ul-fixed displayBlock");
      }
    }
  }, [isElementVisible, isGreaterThan860, showMenu]);

  return (
    <header>
      <nav
        id="navbar"
        style={{ backgroundImage: `url(${imgFeature})` }}
        ref={navRef}
      >
        {!isGreaterThan860 && (
          <button
            type="button"
            id="nav-menuBtn"
            className="navbar-burger"
            onClick={() => setShowMenu((state) => !state)}
          >
            <GiHamburgerMenu
              style={{ width: "auto", height: "3em", textAlign: "center" }}
            />
          </button>
        )}
        <ul className={menuClass}>
          <NavListMap
            isElementVisible={isElementVisible}
            isGreaterThan860={isGreaterThan860}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
