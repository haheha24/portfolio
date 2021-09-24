import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import useMediaQuery from "../hooks/useMediaQuery";
import Navbar from "./nav/Navbar";

const Header = () => {

    console.log(useMediaQuery().width)

    return (
    <header className="header">
      <Navbar />
      
    </header>
  );
};

export default Header;
