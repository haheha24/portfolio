import { NavLink } from "react-router-dom";
import { scrollToElement } from "../../../utilities/helpers";

export interface INavLinkParams {
  liClass: string;
  listName: string;
  endPoint: string;
  navLinkId: string;
  navLinkClass: string;
  navLinkActive: string;
}

const NavList = ({
  liClass,
  listName,
  endPoint,
  navLinkId,
  navLinkClass,
  navLinkActive,
}: INavLinkParams) => {
  return (
    <li className={liClass}>
      <NavLink
        to={endPoint}
        id={navLinkId}
        className={(isActive) =>
          navLinkClass + " " + (!isActive ? "unselected" : navLinkActive)
        }
        exact={true}
        onClick={() => {
          scrollToElement(`${navLinkId}Link`);
        }}
      >
        {listName}
      </NavLink>
    </li>
  );
};

export default NavList;
