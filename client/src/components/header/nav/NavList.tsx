import { NavLink } from "react-router-dom";

export interface INavLinkParams {
  liClass: string,
  listName: string,
  endPoint: string,
  navLinkId: string,
  navLinkClass: string,
  navLinkActive: string,
}

const NavList = ({liClass, listName, endPoint, navLinkId, navLinkClass, navLinkActive}: INavLinkParams) => {
  return (
    <li className={liClass}>
            <NavLink
              to={endPoint}
              id={navLinkId}
              className={navLinkClass}
              activeClassName={navLinkActive}
              exact={true}
            >
              {listName}
            </NavLink>
          </li>
  )
}

export default NavList
