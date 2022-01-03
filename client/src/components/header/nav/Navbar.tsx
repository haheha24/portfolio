import "./navbar.css";
import { MediaQueryContext } from "../../../App";
import { useEffect, useRef, useContext } from "react";
import NavList from "./NavList";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navMediaQuery = useContext(MediaQueryContext);
  const navUlRef = useRef<HTMLUListElement>(null);
  const navBurgerRef = useRef<HTMLDivElement>(null);

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
      <ul className="nav-ul" ref={navUlRef}>
        <NavList
          liClass="nav-li item-1"
          name="CreativeAge"
          endPoint="/"
          navLinkId="home"
          navLinkClass="nav-link nav-linkMain"
          navLinkActive="nav-linkActive"
        />
        {/* <div className="navList-menu"> */}
          <NavList
            liClass="nav-li item-2"
            name="About"
            endPoint="/about"
            navLinkId="about"
            navLinkClass="nav-link"
            navLinkActive="nav-linkActive"
          />
          <NavList
            liClass="nav-li item-3"
            name="Projects"
            endPoint="/projects"
            navLinkId="projects"
            navLinkClass="nav-link"
            navLinkActive="nav-linkActive"
          />
          <NavList
            liClass="nav-li item-4"
            name="Contact"
            endPoint="/contact"
            navLinkId="contact"
            navLinkClass="nav-link"
            navLinkActive="nav-linkActive"
          />
        {/* </div> */}
      </ul>
    </nav>
  );
};

export default Navbar;
