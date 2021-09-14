import "./sidenavbar.css";
import { IhomeSubtitle } from "../pages/home/Home";
import { Link } from "react-scroll";

const SideNavBar = (props: {
  navArray: IhomeSubtitle[];
  sideNavTitle?: string;
}) => {
  return (
    <nav className="sidenav">
      <ul className="sidenav-ul">
        {props.sideNavTitle ? <li className="sidenav-item">{props.sideNavTitle}</li> : <></>}
        {props.navArray.map((navItem: IhomeSubtitle, index) => {
          return (
            <li key={index} className="sidenav-item">
              <Link
                activeClass="sidenav-current"
                className="sidenav-item-anchor"
                to={navItem.itemId}
                spy={true}
                offset={-77.5}
              >
                {navItem.itemName}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideNavBar;
