import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav id="navbar" className="navbar-background">
        <ul className="nav-ul nav-left nav-center">
          <li className="nav-li">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-li">
            <Link to="/About" className="nav-link">About Me</Link>
          </li>
          <li className="nav-li">
            <Link to="/Resume" className="nav-link">Resume</Link>
          </li>
          <li className="nav-li">
          <Link to="/GitHubProjects" className="nav-link">GitHub Projects</Link>
          </li>
          <li className="nav-li">
          <Link to="/CodePenProjects" className="nav-link">CodePen Projects</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
