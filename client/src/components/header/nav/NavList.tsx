import { NavLink } from "react-router-dom";

interface INavLinkParams {
  liClass: string,
  name: string,
  endPoint: string,
  navLinkId: string,
  navLinkClass: string,
  navLinkActive: string,
}

const NavList = ({liClass, name, endPoint, navLinkId, navLinkClass, navLinkActive}: INavLinkParams) => {
  return (
    <li className={liClass}>
            <NavLink
              to={endPoint}
              id={navLinkId}
              className={navLinkClass}
              activeClassName={navLinkActive}
              exact={true}
            >
              {name}
            </NavLink>
          </li>
  )
}

export default NavList
