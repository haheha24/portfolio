import "./sidenavbar.css";
import { MediaQueryContext } from "../../App";
import { useEffect, useRef, useContext } from "react";
import { IhomeSubtitle } from "../pages/home/Home";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const SideNavBar = (props: { navArray: IhomeSubtitle[] }) => {
  const sideMediaQuery = useContext(MediaQueryContext);
  const sideNavRef = useRef<HTMLElement>(null);
  const sideBurgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let newNavRef = sideNavRef;
    let newBurgerRef = sideBurgerRef;
    if (sideMediaQuery.width <= 860 && newNavRef !== null) {
      newBurgerRef.current?.addEventListener("click", () => {
        newNavRef.current?.classList.toggle("displayBlock");
        return () => newNavRef.current?.classList.toggle("displayBlock");
      });
      return () => {
        newBurgerRef.current?.addEventListener("click", () => {
          newNavRef.current?.classList.toggle("displayBlock");
          return () => newNavRef.current?.classList.toggle("displayBlock");
        });
      };
    }
  }, [sideMediaQuery]);

  return (
    <aside className="sidenav-container">
      <div className="sidenav-burger" ref={sideBurgerRef}>
        <GiHamburgerMenu style={{ width: "2.5em", height: "2.5em" }} />
      </div>
      <nav className="sidenav" ref={sideNavRef}>
        <ul className="sidenav-ul">
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
    </aside>
  );
};

export default SideNavBar;
