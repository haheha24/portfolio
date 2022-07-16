import { ReactChild } from "react";
import { NavLink } from "react-router-dom";
import { scrollToElement } from "../../../utilities/helpers";

export interface INavLinkParams {
  liClass: string;
  listName: string | ReactChild;
  isString: boolean;
  endPoint: string;
  navLinkId: string;
  navLinkClass: string;
  navLinkActive: string;
}

const NavList = ({
  liClass,
  listName,
  isString,
  endPoint,
  navLinkId,
  navLinkClass,
  navLinkActive,
}: INavLinkParams) => {
  return (
    <li className={liClass}>
      {isString ? (
        <>{listName}</>
      ) : (
        <NavLink
          to={endPoint}
          id={navLinkId}
          className={(isActive) =>
            navLinkClass + " " + (!isActive ? "unselected" : navLinkActive)
          }
          onClick={() => {
            scrollToElement(`${navLinkId}Link`);
          }}
        >
          {listName}
        </NavLink>
      )}
    </li>
  );
};

export default NavList;
