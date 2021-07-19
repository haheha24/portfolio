import "./navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <ul className="nav-ul nav-left">
        <li className="nav-li">
          <a
            href="https://github.com/haheha24"
            id="profile-link"
            className="nav-link"
            target="_blank"
          >
            GitHub Profile
          </a>
        </li>
        <li className="nav-li">
          <a
            href="https://codepen.io/haheha24"
            id="profile-link"
            className="nav-link"
            target="_blank"
          >
            Codepen Profile
          </a>
        </li>
      </ul>
      <ul className="nav-ul nav-right">
        <li className="nav-li">
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
