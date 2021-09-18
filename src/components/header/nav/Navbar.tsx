import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar-background">
      <ul className="nav-ul nav-left nav-center">
        <li className="nav-li">
          <NavLink to="/" id="home" className="nav-link" activeClassName="nav-linkActive" exact={true}>
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
      </ul>
    </nav>
  );
};

export default Navbar;
