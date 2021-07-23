import "./navbar.css";
/* import Menu from "../buttons/Menu"; */
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav id="navbar">
        <ul className="nav-ul nav-right">
          <li className="nav-li">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-li">
            <Link to="/About">About Me</Link>
          </li>
          <li className="nav-li">
            <Link to="/Projects">Projects</Link>
          </li>
          <li className="nav-li">
            <Link to="/Resume">Resume</Link>
          </li>
          <li className="nav-li">
          <Link to="/GitHubProjects">GitHub Projects</Link>
          </li>
          <li className="nav-li">
          <Link to="/CodePenProjects">CodePen Projects</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
