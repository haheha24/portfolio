import "./navbar.css";
import { MediaQueryContext } from "../../../App";
import { useEffect, useRef, useContext } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navMediaQuery = useContext(MediaQueryContext)
  const navDivRef = useRef<HTMLDivElement>(null);
  const navBurgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let newDivRef = navDivRef;
    let newBurgerRef = navBurgerRef;
    if (navMediaQuery.width <= 860 && newDivRef !== null) {
      newBurgerRef.current?.addEventListener("click", () => {
        newDivRef.current?.classList.toggle("displayBlock");
        return () => newDivRef.current?.classList.toggle("displayBlock");
      });
      return () =>
        newBurgerRef.current?.removeEventListener("click", () => {
          newDivRef.current?.classList.toggle("displayBlock");
          return () => newDivRef.current?.classList.toggle("displayBlock");
        });
    }
  }, [navMediaQuery]);

  return (
    <nav id="navbar" className="navbar-background">
      <ul className="nav-ul nav-center">
        <div id="nav-div" ref={navBurgerRef}>
          <GiHamburgerMenu
            className="navbar-burger"
            style={{ width: "5em", height: "3em" }}
          />
        </div>
        <div className="nav-flex-left nav-center" ref={navDivRef}>
          <li className="nav-li">
            <NavLink
              to="/"
              id="home"
              className="nav-link"
              activeClassName="nav-linkActive"
              exact={true}
            >
              CreativeAge
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              to="/about"
              id="about"
              className="nav-link"
              activeClassName="nav-linkActive"
            >
              About
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              to="/projects"
              id="projects"
              className="nav-link"
              activeClassName="nav-linkActive"
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              to="/contact"
              id="contact"
              className="nav-link"
              activeClassName="nav-linkActive"
            >
              Contact
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
