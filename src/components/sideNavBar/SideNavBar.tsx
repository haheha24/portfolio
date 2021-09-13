import "./sidenavbar.css";
import { IhomeSubtitle } from "../pages/home/Home";

const SideNavBar = (
  (props: { navArray: IhomeSubtitle[] }) => {

    return (
      <nav className="sidenav">
        <ul className="sidenav-ul">
          <li className="sidenav-item">Welcome</li>
          {props.navArray.map((navItem: IhomeSubtitle, index) => {
            return (
              
              <li
                key={index}
                className="sidenav-item"
              >
                <a href={`#${navItem.itemId}`}>{navItem.itemName}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
);

export default SideNavBar;
