import "./navbar.css";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navMediaQuery = useMediaQuery().width;
  const navDivRef = useRef<HTMLDivElement>(null);
  const navBurgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let newDivRef = navDivRef;
    let newBurgerRef = navBurgerRef;
    if (navMediaQuery <= 860 && newDivRef !== null) {
      newBurgerRef.current?.addEventListener("click", () => {
        newDivRef.current?.classList.toggle("displayBlock");
        return () => newDivRef.current?.classList.toggle("displayBlock");
      });
      return () =>
        newBurgerRef.current?.addEventListener("click", () => {
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
              Home
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              to="/Projects"
              id="projects"
              className="nav-link"
              activeClassName="nav-linkActive"
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              to="/Contact"
              id="contact"
              className="nav-link"
              activeClassName="nav-linkActive"
            >
              Contact Me
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
