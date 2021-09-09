import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar-background">
      <ul className="nav-ul nav-left nav-center">
        <li className="nav-li">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-li">
          <Link to="/Projects" className="nav-link">
            Projects
          </Link>
        </li>
        <li className="nav-li">
          <Link to="/Resume" className="nav-link">
            Resume
          </Link>
        </li>
        <li className="nav-li">
          <Link to="/Contact" className="nav-link">
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
